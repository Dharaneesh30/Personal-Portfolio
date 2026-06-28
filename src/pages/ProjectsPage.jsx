import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import VerdantColossus from "../components/heroes/VerdantColossus";

const projects = [
  // TODO: Add your GitHub repo URLs
  {
    title: "Yugam",
    stack: ["HTML", "CSS", "Basic JavaScript"],
    description: "A front-end web page for the Yugam event platform with a polished interface and event-first UX.",
    href: "#",
  },
  {
    title: "FIR Management System And Crime Analysis",
    stack: ["Python", "GUI"],
    description: "Desktop application for managing FIR records while analyzing crime data patterns for faster insight.",
    href: "#",
  },
  {
    title: "Restaurant Order Management System",
    stack: ["C", "Linked List", "Queue"],
    description: "CLI-based restaurant ordering workflow built around core data structures and queue-driven operations.",
    href: "#",
  },
  {
    title: "Secure Doctor Patient Prescription and Pharmacy Management System",
    stack: ["Java", "GUI"],
    description: "Secure prescription workflow connecting doctors and pharmacies with structured record handling.",
    href: "#",
  },
  {
    title: "LifeEcho - A LifePath AI",
    stack: ["WordPress", "Canva", "AI Tools"],
    description: "AI-assisted life path guidance platform paired with digital marketing tooling and creative content workflows.",
    href: "#",
  },
  {
    title: "Meeting Notes Summarizer",
    stack: ["Python", "GUI", "AI Tools"],
    description: "Summarizes meeting notes automatically to turn raw discussion into concise action-focused takeaways.",
    href: "#",
  },
  {
    title: "YAAL - Intern On Full Stack",
    stack: ["React.js", "Tailwind CSS", "JavaScript ES6+", "Custom CSS Animations"],
    description: "Full-stack internship work featuring a polished UI system with thoughtful motion and responsive behavior.",
    href: "#",
  },
  {
    title: "ValorEdge AI",
    stack: ["Python", "React", "FastAPI"],
    description: "AI-driven reputation analytics platform that monitors, analyzes, and forecasts corporate brand perception.",
    href: "#",
  },
  {
    title: "CloudMatrix",
    stack: ["Python", "Flask", "React", "Advanced Algorithms"],
    description: "Intelligent cloud resource allocation and load balancing system powered by AI-informed decision logic.",
    href: "#",
  },
  {
    title: "CredLens",
    stack: ["Python", "React", "FastAPI", "Financial Algorithms"],
    description: "Machine learning credit risk scoring engine designed for digital lending platforms and data-backed approvals.",
    href: "#",
  },
];

export default function ProjectsPage() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.45 });
  const reduceMotion = useReducedMotion();
  const [slamTriggered, setSlamTriggered] = useState(false);
  const [watching, setWatching] = useState(false);

  useEffect(() => {
    if (headingInView) {
      setSlamTriggered(true);
    }
  }, [headingInView]);

  return (
    <motion.main
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="px-4 pb-20 pt-28 sm:px-8"
    >
      <motion.div
        className="mx-auto max-w-7xl"
        animate={!reduceMotion && slamTriggered ? { x: [0, -3, 3, -2, 2, 0] } : undefined}
        transition={!reduceMotion && slamTriggered ? { duration: 0.15 } : undefined}
      >
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-10 overflow-hidden"
        >
          <VerdantColossus
            active={slamTriggered}
            watching={watching}
            className="left-1/2 top-[-2.5rem] z-0 h-[250px] w-[360px] -translate-x-1/2 sm:h-[310px] sm:w-[460px]"
          />
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="hero-heading gradient-text relative z-10 text-4xl sm:text-5xl">Mission Log</p>
            <span className="relative z-10 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-gold">
              10 missions archived
            </span>
          </div>
          <p className="relative z-10 mt-4 text-text/70">Every project is a mission completed.</p>
          <div className="relative z-10 mt-5 power-line" />
          {!reduceMotion && slamTriggered && (
            <motion.div
              className="pointer-events-none absolute left-1/2 top-[82%] h-12 w-12 -translate-x-1/2 rounded-full border-2 border-gamma"
              initial={{ scale: 0, opacity: 0.9 }}
              animate={{ scale: 8, opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            />
          )}
        </motion.div>

        <motion.section
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={slamTriggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.3 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onHoverChange={setWatching}
            />
          ))}
        </motion.section>
      </motion.div>
    </motion.main>
  );
}
