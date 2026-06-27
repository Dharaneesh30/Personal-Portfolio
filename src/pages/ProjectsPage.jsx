import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

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
  return (
    <motion.main
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="px-4 pb-20 pt-28 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="hero-heading gradient-text text-4xl sm:text-5xl">Mission Log</p>
          <p className="mt-4 text-text/70">Every project is a mission completed.</p>
          <div className="mt-5 power-line" />
        </motion.div>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </section>
      </div>
    </motion.main>
  );
}
