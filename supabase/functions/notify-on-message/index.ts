// Supabase Edge Function: notify-on-message
// Deploy with: supabase functions deploy notify-on-message
// Set secrets with:
// supabase secrets set RESEND_API_KEY=your-key NOTIFY_EMAIL=your-email@example.com
// TODO: Add Resend API key in Supabase Edge Function secrets
// Configure a database webhook on INSERT for public.messages and point it to this function URL.

interface WebhookPayload {
  type: string;
  table: string;
  record: {
    name: string;
    email: string;
    subject: string;
    message: string;
    created_at: string;
  };
}

Deno.serve(async (request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const payload = (await request.json()) as WebhookPayload;
  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  const notifyEmail = Deno.env.get("NOTIFY_EMAIL");

  if (!resendApiKey || !notifyEmail) {
    return new Response("Missing function secrets", { status: 500 });
  }

  const { name, email, subject, message, created_at: createdAt } = payload.record;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio Signal <onboarding@resend.dev>",
      to: [notifyEmail],
      subject: `New portfolio message: ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
          <h2>New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Received:</strong> ${createdAt}</p>
          <hr />
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    }),
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    return new Response(`Failed to send email: ${errorText}`, { status: 500 });
  }

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" },
  });
});
