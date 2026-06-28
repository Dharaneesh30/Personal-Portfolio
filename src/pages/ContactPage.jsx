import { motion } from "framer-motion";
import { useState } from "react";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import ShadowWraith from "../components/heroes/ShadowWraith";

const contactItems = [
  { icon: <HiOutlinePhone size={22} />, label: "Phone", value: "9489240892", accent: "gold" },
  { icon: <HiOutlineMail size={22} />, label: "Email", value: "your-email@example.com", accent: "shield", todo: "// TODO: Add your email address" },
  { icon: <FaLinkedinIn size={20} />, label: "LinkedIn", value: "Dharaneesh N", accent: "gold" },
  { icon: <FaGithub size={20} />, label: "GitHub", value: "dharaneesh30", accent: "shield" },
  { icon: <HiOutlineLocationMarker size={22} />, label: "Location", value: "Coimbatore, Tamil Nadu, India", accent: "gold" },
];

export default function ContactPage() {
  const [throwKey, setThrowKey] = useState(0);
  const [acknowledgeKey, setAcknowledgeKey] = useState(0);

  return (
    <motion.main
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="px-4 pb-20 pt-28 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="hero-heading gradient-text text-4xl sm:text-5xl">Assemble</p>
          <p className="mt-4 text-text/70">Send a signal - let's build something great together.</p>
          <div className="mt-5 power-line" />
        </motion.div>

        <section className="grid gap-6 xl:grid-cols-[0.95fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {contactItems.map((item, index) => (
              <div
                key={item.label}
                className={`armor-panel section-shell p-5 ${index === contactItems.length - 1 ? "" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`mt-1 inline-flex h-12 w-12 items-center justify-center rounded-full ${
                    item.accent === "gold" ? "bg-gold/10 text-gold" : "bg-shield/10 text-shield"
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{item.label}</p>
                    <p className="mt-2 text-sm leading-7 text-text/85">{item.value}</p>
                    {item.todo && (
                      <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                        {item.todo}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="relative min-h-full">
            <ShadowWraith
              throwKey={throwKey}
              acknowledgeKey={acknowledgeKey}
              className="right-[-1.5rem] top-6 z-0 w-[170px] opacity-[0.12] sm:right-2 sm:w-[210px] lg:right-6 lg:top-10"
            />
            <div className="relative z-10">
              <ContactForm
                onSignalStart={() => setThrowKey((value) => value + 1)}
                onSignalSuccess={() => setAcknowledgeKey((value) => value + 1)}
              />
            </div>
          </div>
        </section>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <SocialLink
            href="https://www.linkedin.com/"
            icon={<FaLinkedinIn size={22} />}
            note="// TODO: Add your LinkedIn profile URL"
          />
          <SocialLink href="https://github.com/dharaneesh30" icon={<FaGithub size={22} />} />
          <SocialLink href="tel:9489240892" icon={<HiOutlinePhone size={22} />} />
        </div>
      </div>
    </motion.main>
  );
}

function SocialLink({ href, icon, note }) {
  return (
    <div className="flex flex-col gap-2">
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="armor-panel inline-flex h-14 w-14 items-center justify-center border border-gold/20 bg-panel/80 text-gold transition hover:scale-110 hover:shadow-glow"
      >
        {icon}
      </a>
      {note && <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">{note}</span>}
    </div>
  );
}
