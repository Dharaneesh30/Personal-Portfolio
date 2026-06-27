import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiChevronDoubleDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import HexPattern from "../components/HexPattern";
import HudRings from "../components/HudRings";
import ThreeScene from "../components/ThreeScene";

const line = "ASSEMBLING TALENT. BUILDING THE FUTURE.";

function useTypewriter(text, speed = 70) {
  const [value, setValue] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      index += 1;
      setValue(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return value;
}

export default function StartPage() {
  const typed = useTypewriter(line, 70);

  return (
    <motion.main
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative flex min-h-screen items-center justify-center px-5 pt-28 text-center sm:px-8"
    >
      <HexPattern className="animate-pulse" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center">
        <p className="hero-heading gradient-text min-h-[4rem] text-3xl sm:text-4xl lg:text-6xl">
          {typed}
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: typed.length === line.length ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-base text-text/80 sm:text-lg"
        >
          Dharaneesh N - Tech Enthusiast | Developer | Innovator
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: typed.length === line.length ? 1 : 0, y: typed.length === line.length ? 0 : 20 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-5 armor-panel border border-shield/20 bg-shield/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.22em] text-shield"
        >
          3D Command Core Online
        </motion.div>

        <div className="relative mt-12 grid place-items-center">
          <HudRings size={460} className="hidden sm:grid" />
          <HudRings size={320} className="grid sm:hidden" />
          <ThreeScene />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10"
        >
          <Link
            to="/home"
            className="armor-panel inline-flex items-center gap-3 border border-gold/35 bg-gradient-to-r from-ember/15 to-gold/15 px-8 py-4 font-heading text-sm uppercase tracking-[0.2em] text-text transition hover:scale-105 hover:border-gold hover:text-gold"
          >
            Enter The Arena
          </Link>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
          className="mt-14 text-gold"
        >
          <HiChevronDoubleDown size={28} />
        </motion.div>
      </div>
    </motion.main>
  );
}
