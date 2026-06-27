import { motion } from "framer-motion";

export default function SkillTag({ label, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="armor-panel border border-gamma/30 bg-gamma/10 px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] text-gamma shadow-gamma"
    >
      {label}
    </motion.div>
  );
}
