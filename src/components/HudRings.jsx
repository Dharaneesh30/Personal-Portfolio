import { motion } from "framer-motion";

export default function HudRings({ size = 320, accent = "gold", className = "" }) {
  const outerColor = accent === "blue" ? "#2979ff" : "#ffb800";
  const innerColor = accent === "green" ? "#6fd13c" : "#ff3b30";

  return (
    <div className={`pointer-events-none absolute inset-0 grid place-items-center ${className}`}>
      <motion.svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 16}
          fill="none"
          stroke={outerColor}
          strokeOpacity="0.45"
          strokeWidth="2"
          strokeDasharray="10 12"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 40}
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.12"
          strokeWidth="1.5"
          strokeDasharray="2 8"
        />
      </motion.svg>
      <motion.svg
        width={size - 60}
        height={size - 60}
        viewBox={`0 0 ${size - 60} ${size - 60}`}
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute"
      >
        <circle
          cx={(size - 60) / 2}
          cy={(size - 60) / 2}
          r={(size - 60) / 2 - 14}
          fill="none"
          stroke={innerColor}
          strokeOpacity="0.42"
          strokeWidth="2"
          strokeDasharray="18 8 5 10"
        />
      </motion.svg>
    </div>
  );
}
