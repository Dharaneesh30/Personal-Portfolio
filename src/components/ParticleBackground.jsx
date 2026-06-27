import { motion } from "framer-motion";

const particles = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 13) % 100}%`,
  size: 4 + (index % 5),
  duration: 10 + (index % 7),
  delay: index * 0.35,
  color: ["rgba(255,59,48,0.7)", "rgba(255,184,0,0.75)", "rgba(41,121,255,0.7)"][index % 3],
}));

export default function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute bottom-[-10%] rounded-full blur-[1px]"
          style={{
            left: particle.left,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 12px ${particle.color}`,
          }}
          animate={{
            y: ["0vh", "-120vh"],
            x: [0, particle.id % 2 === 0 ? 24 : -24, 0],
            opacity: [0, 0.9, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
