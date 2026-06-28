import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiOutlinePhone, HiOutlineAcademicCap, HiOutlineSparkles } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import HexPattern from "../components/HexPattern";
import HudRings from "../components/HudRings";
import SkillTag from "../components/SkillTag";
import placeholderPhoto from "../assets/placeholder-photo.svg";
import AegisPrime from "../components/heroes/AegisPrime";

const education = [
  {
    title: "Coimbatore Institute of Technology, Coimbatore",
    subtitle: "M.Sc. Decision And Computing Science",
    period: "2024-2029",
  },
  {
    title: "St. Joseph's Mat. Hr. Sec. School, Ondipudur, Coimbatore",
    subtitle: "Higher Secondary",
    period: "2022-2024",
  },
];

const skills = [
  "Front End Page Developer",
  "Basic Data Analysis",
  "Python",
  "React",
  "FastAPI",
  "Flask",
  "Java",
  "C",
  "Digital Marketing",
  "AI Tools",
  "WordPress",
];

const extraCurricular = [
  "Digital Marketing Workshop at Techgyan",
  "AI Integrated Digital Marketing Workshop at CIT",
  "Linux Workshop by FOSS CIT",
  "Host Yourself 101 Workshop by FOSS CIT",
  "Hands On Flask Workshop by FOSS CIT",
  "Data science at Corizo Internship and Training",
  "Melinia Hackathon at CIT 1st round",
  "Principles of Management",
  "Data science in Python NPTEL",
  "Digital Marketing Hackathon at Techgyan",
  "Website Building Hands-on At Coursera Project Network",
  "Search Engine Optimisation Hands-on at Coursera Project Network",
  "Joint Secretary and Social Media Manager at FOSS CIT",
];

export default function HomePage() {
  const profileRef = useRef(null);
  const profileInView = useInView(profileRef, { once: true, amount: 0.45 });

  return (
    <motion.main
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="px-4 pb-20 pt-28 sm:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <section
          ref={profileRef}
          className="armor-panel section-shell relative overflow-hidden px-6 py-10 sm:px-10"
        >
          <HexPattern />
          <AegisPrime
            active={profileInView}
            className="right-[-1.25rem] top-2 z-0 w-[150px] opacity-20 sm:right-4 sm:top-6 sm:w-[220px] lg:right-10 lg:top-8"
          />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[280px_1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative mx-auto grid h-[240px] w-[240px] place-items-center"
            >
              <HudRings size={250} accent="gold" />
              {/* TODO: Replace with your photo */}
              <img
                src={placeholderPhoto}
                alt="Profile placeholder"
                className="relative z-10 h-[200px] w-[200px] rounded-full object-cover"
              />
            </motion.div>

            <div>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="hero-heading gradient-text text-4xl sm:text-5xl"
              >
                Dharaneesh N
              </motion.p>
              <p className="mt-4 text-lg font-medium text-shield">
                M.Sc. Decision And Computing Science
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-text/80">
                A visionary tech enthusiast from Coimbatore Institute of Technology, blending
                innovation with leadership. A soft-spoken strategist who thrives on collaboration,
                creativity, and out-of-the-box thinking to drive impactful solutions.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-gold">
                  Collaboration First
                </span>
                <span className="rounded-full border border-shield/30 bg-shield/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-shield">
                  Creative Strategist
                </span>
                <span className="rounded-full border border-gamma/30 bg-gamma/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-gamma">
                  Innovation Driven
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-text/80">
                <ContactChip icon={<HiOutlinePhone />} label="9489240892" />
                <ContactChip icon={<FaLinkedinIn />} label="Dharaneesh N" />
                <ContactChip icon={<FaGithub />} label="dharaneesh30" />
              </div>
            </div>
          </div>
        </section>

        <SectionTitle eyebrow="Academics" title="Education Archive" accent="tech" />
        <section className="grid gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="armor-panel section-shell border border-shield/20 p-6"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-shield/10 text-shield">
                <HiOutlineAcademicCap size={24} />
              </div>
              <h3 className="hero-heading text-xl text-text">{item.title}</h3>
              <p className="mt-2 text-shield">{item.subtitle}</p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                {item.period}
              </p>
            </motion.article>
          ))}
        </section>

        <SectionTitle eyebrow="Power Grid" title="Skills Matrix" />
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <SkillTag key={skill} label={skill} index={index} />
          ))}
        </section>

        <SectionTitle eyebrow="Beyond Code" title="Extra Curricular Intel" />
        <section className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {extraCurricular.map((item, index) => (
            <motion.article
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="armor-panel section-shell border-l-4 border-gold p-5"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                <HiOutlineSparkles size={20} />
              </div>
              <p className="text-sm leading-7 text-text/80">{item}</p>
            </motion.article>
          ))}
        </section>
      </div>
    </motion.main>
  );
}

function SectionTitle({ eyebrow, title, accent = "power" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-3"
    >
      <p className={`font-mono text-xs uppercase tracking-[0.3em] ${
        accent === "tech" ? "text-shield" : "text-gold"
      }`}>
        {eyebrow}
      </p>
      <h2 className={`hero-heading text-3xl sm:text-4xl ${
        accent === "tech" ? "tech-gradient-text" : "gradient-text"
      }`}>
        {title}
      </h2>
      <div className="power-line" />
    </motion.div>
  );
}

function ContactChip({ icon, label }) {
  return (
    <div className="armor-panel flex items-center gap-3 border border-gold/20 bg-panel/80 px-4 py-3 text-gold transition hover:shadow-glow">
      {icon}
      <span className="text-text">{label}</span>
    </div>
  );
}
