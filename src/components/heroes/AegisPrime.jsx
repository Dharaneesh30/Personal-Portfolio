import { motion, useReducedMotion } from "framer-motion";

/*
 * Character: Aegis Prime
 * Theme/Colors: shield guardian | accent blue + white-gray accents
 * Page: Home
 * Signature: Shield Bash triggers a brief forward thrust and expanding blue shockwave once on scroll-in.
 */
export default function AegisPrime({ active = false, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <motion.div
        initial={false}
        animate={
          reduceMotion
            ? { opacity: 1 }
            : active
              ? { x: [0, 18, 0], scale: [1, 1.04, 1.01, 1] }
              : { scale: [1, 1.02, 1] }
        }
        transition={
          reduceMotion
            ? undefined
            : active
              ? { duration: 0.6, times: [0, 0.45, 0.8, 1] }
              : { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
        }
        className="relative"
      >
        <svg viewBox="0 0 280 280" className="h-full w-full hero-figure">
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M138 46 L160 58 L168 84 L158 110 L122 110 L112 84 L120 58 Z" stroke="rgba(255,255,255,0.5)" strokeWidth="5" />
            <path d="M123 118 L158 118 L178 158 L166 214 L140 228 L114 214 L102 158 Z" stroke="var(--accent-blue)" strokeWidth="6" />
            <path d="M103 136 L72 164 L78 194" stroke="rgba(255,255,255,0.45)" strokeWidth="5" />
            <path d="M178 134 L218 144 L236 168 L228 196 L196 208 L176 176" stroke="var(--accent-blue)" strokeWidth="6" />
            <path d="M118 224 L108 260" stroke="rgba(255,255,255,0.38)" strokeWidth="5" />
            <path d="M158 224 L168 260" stroke="rgba(255,255,255,0.38)" strokeWidth="5" />
            <circle cx="220" cy="176" r="34" stroke="var(--accent-blue)" strokeWidth="8" />
            <circle cx="220" cy="176" r="20" stroke="rgba(224,233,244,0.7)" strokeWidth="4" />
          </g>
        </svg>

        {!reduceMotion && active && (
          <motion.span
            className="absolute left-[62%] top-[40%] h-14 w-14 rounded-full border-2"
            style={{ borderColor: "var(--accent-blue)" }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}
      </motion.div>
      <p className="mt-2 max-w-[220px] font-mono text-[0.62rem] uppercase tracking-[0.22em] text-shield/45">
        Aegis Prime - Guardian Protocol Active
      </p>
    </div>
  );
}
