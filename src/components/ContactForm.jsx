import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineCheckCircle, HiOutlineExclamationCircle } from "react-icons/hi";
import { supabase } from "../lib/supabase";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      if (!supabase) {
        throw new Error("Supabase client is not configured.");
      }

      // The client only stores the message in Supabase.
      // Owner email notifications are triggered server-side via the database webhook and edge function.
      const { error } = await supabase.from("messages").insert([form]);

      if (error) {
        throw error;
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message: "Signal received! I'll respond soon.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Transmission failed. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      onSubmit={onSubmit}
      className="armor-panel section-shell flex flex-col gap-4 p-6 sm:p-8"
    >
      {["name", "email", "subject"].map((field) => (
        <InputField
          key={field}
          label={field}
          name={field}
          value={form[field]}
          onChange={onChange}
          type={field === "email" ? "email" : "text"}
        />
      ))}
      <label className="flex flex-col gap-2">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Message
        </span>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          rows={6}
          placeholder="Tell me about the mission..."
          className="armor-panel border border-white/10 bg-bg/80 px-4 py-3 text-sm text-text outline-none transition focus:border-gold/50 focus:shadow-glow"
          required
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="armor-panel border border-gold/30 bg-gradient-to-r from-ember/15 via-gold/15 to-ember/15 px-5 py-4 font-heading text-sm uppercase tracking-[0.18em] text-text transition hover:scale-[1.02] hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Transmitting..." : "Send Signal"}
      </button>

      {status.message && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-gamma/40 bg-gamma/10 text-gamma"
              : "border-ember/40 bg-ember/10 text-ember"
          }`}
        >
          {status.type === "success" ? (
            <HiOutlineCheckCircle size={20} />
          ) : (
            <HiOutlineExclamationCircle size={20} />
          )}
          {status.message}
        </motion.div>
      )}
    </motion.form>
  );
}

function InputField({ label, ...props }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
      <input
        {...props}
        placeholder={`Enter ${label}`}
        className="armor-panel border border-white/10 bg-bg/80 px-4 py-3 text-sm text-text outline-none transition focus:border-gold/50 focus:shadow-glow"
        required
      />
    </label>
  );
}
