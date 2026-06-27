# Supabase Setup Guide

This portfolio stores contact form submissions in Supabase and sends owner notifications through a Supabase Edge Function plus a Database Webhook.

## 1. Create a Supabase project

1. Create a new project in the Supabase dashboard.
2. Copy the project URL and anon key for the frontend.

## 2. Add frontend environment variables

Create a local `.env` or `.env.local` file using the values from `.env.example`.

```env
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## 3. Run the SQL migration

1. Open the SQL editor in Supabase.
2. Paste the contents of `supabase/migrations/001_create_messages.sql`.
3. Run the script to create the `messages` table and policies.

## 4. Install the Supabase CLI

If you do not already have it:

```bash
npm install -g supabase
```

## 5. Link the project locally

```bash
supabase login
supabase link --project-ref your-project-ref
```

## 6. Configure Edge Function secrets

Set the required secrets before deploying the function:

```bash
supabase secrets set RESEND_API_KEY=your-resend-api-key NOTIFY_EMAIL=your-email@example.com
```

## 7. Deploy the function

```bash
supabase functions deploy notify-on-message
```

## 8. Create the database webhook

1. Go to Database -> Webhooks in Supabase.
2. Create a new webhook for the `messages` table.
3. Trigger on `INSERT`.
4. Set the endpoint to your deployed function URL:

```text
https://<project-ref>.functions.supabase.co/notify-on-message
```

5. Use a service role authorization header if your setup requires it.

## 9. Resend setup

1. Create a Resend account and generate an API key.
2. Add the key through Supabase function secrets.
3. Replace the default sender in `supabase/functions/notify-on-message/index.ts` with a verified sender when moving to production.

## 10. Frontend flow

1. The React contact form inserts a row into `public.messages`.
2. The database webhook fires on `INSERT`.
3. The edge function receives the payload and sends the owner notification email.

## Notes

- `.env` and `.env.local` are ignored by git and should never be committed.
- `.env.example` is safe to commit because it only contains placeholder values.
- The frontend does not send email directly; notifications happen server-side after the insert succeeds.
