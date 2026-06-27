import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="energy-border armor-panel section-shell relative flex h-full flex-col gap-4 p-6"
    >
      <div className="power-line" />
      <h3 className="hero-heading text-xl text-gold">{project.title}</h3>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((item, stackIndex) => (
          <span
            key={item}
            className={`rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] ${
              stackIndex % 2 === 0
                ? "border-shield/40 bg-shield/10 text-shield"
                : "border-gamma/40 bg-gamma/10 text-gamma"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
      <p className="text-sm leading-7 text-muted">{project.description}</p>
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-flex items-center gap-2 armor-panel border border-gold/30 bg-gradient-to-r from-ember/10 to-gold/10 px-4 py-3 font-heading text-sm uppercase tracking-[0.16em] text-text transition hover:border-gold hover:text-gold"
      >
        View on GitHub
        <HiOutlineExternalLink />
      </a>
    </motion.article>
  );
}
