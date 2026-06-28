import { motion, useReducedMotion } from "framer-motion";

const colors = {
  ember: "bg-ember shadow-[0_0_18px_rgba(255,59,48,0.65)]",
  gold: "bg-gold shadow-[0_0_18px_rgba(255,184,0,0.65)]",
  shield: "bg-shield shadow-[0_0_18px_rgba(41,121,255,0.65)]",
  gamma: "bg-gamma shadow-[0_0_18px_rgba(111,209,60,0.65)]",
};

export default function TimelineNode({ entry, index, onEnter }) {
  const reverse = index % 2 === 1;
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative grid gap-6 md:grid-cols-[1fr_90px_1fr] md:items-center">
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        onViewportEnter={() => onEnter?.(entry)}
        className={`${reverse ? "md:col-start-3" : "md:col-start-1"} armor-panel section-shell p-6`}
      >
        <div className="mb-4 flex items-center gap-3">
          <span className={`rounded-full px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] ${
            entry.future ? "bg-gamma/15 text-gamma border border-gamma/40" : "bg-shield/15 text-shield border border-shield/40"
          }`}>
            {entry.year}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
        </div>
        <h3 className="hero-heading text-xl text-gold">{entry.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted">{entry.description}</p>
        {entry.todo && (
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-muted">
            {entry.todo}
          </p>
        )}
      </motion.div>

      <div className="relative hidden h-full items-center justify-center md:flex">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={reduceMotion ? { opacity: 1, scale: 1 } : { scale: [0.7, 1.1, 1], opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45 }}
          className={`relative z-10 h-5 w-5 rounded-full ${colors[entry.color]}`}
        >
          {entry.future && (
            <div className="absolute inset-[-10px] animate-ping rounded-full border border-gamma/40" />
          )}
        </motion.div>
      </div>
    </div>
  );
}
