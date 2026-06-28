import { motion, useReducedMotion } from "framer-motion";

/*
 * Character: Shadow Wraith
 * Theme/Colors: silent striker | charcoal base + accent red outline
 * Page: Contact
 * Signature: Mark Thrown sends a red projectile trail toward the form on submit, followed by a subtle nod on success.
 */
export default function ShadowWraith({
  throwKey = 0,
  acknowledgeKey = 0,
  className = "",
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : acknowledgeKey > 0
              ? { rotate: [0, 2, 0] }
              : { y: [0, -3, 0] }
        }
        transition={
          reduceMotion
            ? undefined
            : acknowledgeKey > 0
              ? { duration: 0.3 }
              : { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
        }
        className="relative"
      >
        <svg viewBox="0 0 240 360" className="hero-figure h-full w-full">
          <g fill="none" stroke="var(--accent-red)" strokeLinecap="round" strokeLinejoin="round">
            <path d="M124 46 C98 52 76 74 70 108 C94 90 148 92 172 112 C170 78 148 54 124 46 Z" strokeWidth="5" />
            <path d="M78 118 C98 144 150 144 170 118 L184 178 L150 312 L98 312 L60 178 Z" strokeWidth="5" />
            <path d="M96 160 L76 244" strokeWidth="3.5" opacity="0.7" />
            <path d="M152 158 L172 244" strokeWidth="3.5" opacity="0.7" />
            <path d="M110 310 L94 346" strokeWidth="3.5" opacity="0.7" />
            <path d="M138 310 L154 346" strokeWidth="3.5" opacity="0.7" />
          </g>
        </svg>

        {!reduceMotion && throwKey > 0 && (
          <motion.svg
            key={`mark-${throwKey}`}
            viewBox="0 0 420 180"
            className="absolute left-[24%] top-[32%] h-[120px] w-[320px]"
          >
            <motion.path
              d="M12 118 C122 58 214 54 408 86"
              stroke="var(--accent-red)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 1 }}
              animate={{ pathLength: 1, opacity: [1, 1, 0] }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <motion.circle
              cx="12"
              cy="118"
              r="4"
              fill="var(--accent-red)"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ offsetPath: 'path("M12 118 C122 58 214 54 408 86")' }}
            />
          </motion.svg>
        )}
      </motion.div>
    </div>
  );
}
