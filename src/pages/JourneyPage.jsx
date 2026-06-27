import { motion } from "framer-motion";
import TimelineNode from "../components/TimelineNode";

const entries = [
  {
    year: "2022",
    title: "The Spark Ignites",
    description:
      "Started Higher Secondary at St. Joseph's Mat. Hr. Sec. School, Ondipudur, and discovered a growing passion for technology and problem-solving.",
    color: "ember",
  },
  {
    year: "2024",
    title: "Entering the Academy",
    description:
      "Began M.Sc. Decision And Computing Science at Coimbatore Institute of Technology, stepping into a deeper journey through systems, data, and modern development.",
    color: "gold",
  },
  {
    year: "Placeholder",
    title: "First Mission",
    description:
      "Built the first major project, Yugam Front End UI, turning design curiosity into a tangible product experience.",
    color: "shield",
    todo: "// TODO: Add specific date/semester",
  },
  {
    year: "Placeholder",
    title: "Joining the League",
    description:
      "Became Joint Secretary and Social Media Manager at FOSS CIT, combining technical interests with community leadership.",
    color: "gamma",
    todo: "// TODO: Add specific date",
  },
  {
    year: "Placeholder",
    title: "Training Arc",
    description:
      "Completed a Data Science Internship at Corizo alongside hackathons and workshops from Techgyan, CIT, and FOSS CIT.",
    color: "ember",
    todo: "// TODO: Add specific dates for each",
  },
  {
    year: "Placeholder",
    title: "Advanced Tech Mastery",
    description:
      "Built advanced AI-driven projects including ValorEdge AI, CloudMatrix, and CredLens, sharpening skills across analytics and full-stack systems.",
    color: "shield",
    todo: "// TODO: Add specific dates",
  },
  {
    year: "2029 Expected",
    title: "Mission Ongoing",
    description:
      "Pursuing continued growth in AI, full-stack development, and data-driven innovation with future missions already in motion.",
    color: "gamma",
    future: true,
  },
];

export default function JourneyPage() {
  return (
    <motion.main
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="px-4 pb-20 pt-28 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="hero-heading gradient-text text-4xl sm:text-5xl">Origin Story</p>
          <p className="mt-4 text-text/70">The journey from spark to power.</p>
          <div className="mt-5 power-line" />
        </motion.div>

        <section className="relative space-y-10">
          <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-[2px] bg-gradient-to-b from-ember via-gold to-shield opacity-70 md:left-1/2 md:block" />
          {entries.map((entry, index) => (
            <TimelineNode key={`${entry.title}-${entry.year}`} entry={entry} index={index} />
          ))}
        </section>
      </div>
    </motion.main>
  );
}
