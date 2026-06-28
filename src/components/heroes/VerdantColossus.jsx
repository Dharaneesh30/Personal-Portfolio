import { motion, useReducedMotion } from "framer-motion";

/*
 * Character: Verdant Colossus
 * Theme/Colors: gamma titan | accent green + deep purple undertones
 * Page: Projects
 * Signature: Ground Slam drives the heading impact and launches the project grid entrance once on scroll-in.
 */
export default function VerdantColossus({ active = false, watching = false, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <motion.div
        initial={false}
        animate={
          reduceMotion
            ? { y: 0, opacity: watching ? 0.15 : 0.1 }
            : active
              ? { y: [-20, 5, 0], opacity: watching ? 0.16 : 0.12 }
              : { opacity: watching ? 0.15 : 0.1 }
        }
        transition={active && !reduceMotion ? { duration: 0.3, times: [0, 0.75, 1] } : { duration: 0.25 }}
      >
        <svg viewBox="0 0 540 420" className="h-full w-full hero-figure">
          <defs>
            <linearGradient id="colossusGlow" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-green)" />
              <stop offset="100%" stopColor="var(--hero-purple)" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#colossusGlow)" strokeLinecap="round" strokeLinejoin="round">
            <path d="M230 42 L312 42 L342 92 L332 156 L210 156 L200 92 Z" strokeWidth="8" />
            <path d="M184 168 L356 168 L410 286 L350 384 L188 384 L128 286 Z" strokeWidth="9" />
            <path d="M152 194 L80 246 L112 336" strokeWidth="8" />
            <path d="M388 194 L462 246 L430 336" strokeWidth="8" />
            <path d="M224 384 L206 418" strokeWidth="8" />
            <path d="M316 384 L334 418" strokeWidth="8" />
            <path d="M232 92 L254 122 L214 144" strokeWidth="4" opacity="0.7" />
            <path d="M310 92 L286 124 L326 144" strokeWidth="4" opacity="0.7" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
