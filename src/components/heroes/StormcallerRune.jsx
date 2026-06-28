import { motion, useReducedMotion } from "framer-motion";

/*
 * Character: Stormcaller Rune
 * Theme/Colors: storm bringer | accent blue + accent gold
 * Page: Journey
 * Signature: Storm Charge sends lightning arcs down the timeline whenever a new node scrolls into view.
 */
export default function StormcallerRune({
  chargeKey = 0,
  finalCharge = false,
  className = "",
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -4, 0], rotate: [0, -1, 1, 0] }}
        transition={reduceMotion ? undefined : { duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="relative mx-auto w-[180px]"
      >
        <svg viewBox="0 0 220 260" className="hero-figure h-full w-full">
          <defs>
            <linearGradient id="stormcallerBolt" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-blue)" />
              <stop offset="100%" stopColor="var(--accent-gold)" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#stormcallerBolt)" strokeLinecap="round" strokeLinejoin="round">
            <path d="M90 34 L128 24 L136 52 L122 88 L92 86 L82 56 Z" strokeWidth="5" />
            <path d="M88 94 L134 96 L156 148 L120 210 L72 210 L56 154 Z" strokeWidth="6" />
            <path d="M66 110 L34 154" strokeWidth="4" opacity="0.75" />
            <path d="M152 106 L176 56 L196 92" strokeWidth="6" />
            <path d="M168 40 L152 78 L180 78 L162 116" strokeWidth="5" />
            <path d="M86 210 L72 248" strokeWidth="4" />
            <path d="M122 210 L136 248" strokeWidth="4" />
          </g>
        </svg>

        {!reduceMotion && chargeKey > 0 && (
          <motion.svg
            key={`${chargeKey}-${finalCharge ? "final" : "regular"}`}
            viewBox="0 0 160 560"
            className="absolute left-1/2 top-[72%] h-[420px] w-[180px] -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: finalCharge ? 1.05 : 0.8, ease: "easeOut" }}
          >
            <defs>
              <linearGradient id="stormTrail" x1="50%" x2="50%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-gold)" />
                <stop offset="100%" stopColor="var(--accent-blue)" />
              </linearGradient>
            </defs>
            <motion.path
              d={finalCharge ? "M84 0 L58 68 L102 124 L72 214 L116 290 L78 388 L120 470 L92 556" : "M84 0 L62 62 L92 116 L70 188 L106 258 L82 340 L114 412 L88 508"}
              stroke="url(#stormTrail)"
              strokeWidth={finalCharge ? 6 : 4}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: finalCharge ? 0.95 : 0.68, ease: "easeOut" }}
            />
          </motion.svg>
        )}
      </motion.div>
    </div>
  );
}
