import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Start" },
  { to: "/home", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/journey", label: "Journey" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-surface/70 px-4 py-3 backdrop-blur-xl">
        <NavLink
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="relative grid h-12 w-12 place-items-center rounded-full border border-gold/30">
            <div className="absolute inset-1 rounded-full border border-ember/30 animate-pulse" />
            <div className="absolute inset-2 rounded-full border border-shield/30" />
            <span className="hero-heading text-sm text-gold">DN</span>
          </div>
          <div>
            <p className="hero-heading text-sm text-text">Dharaneesh N</p>
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-muted">
              Multi-Hero Interface
            </p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <NavItem key={link.to} {...link} onClick={() => setOpen(false)} />
          ))}
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center armor-panel border border-shield/30 bg-panel text-shield md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <HiX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.32 }}
            className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/10 bg-surface/95 p-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <NavItem {...link} onClick={() => setOpen(false)} mobile />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ to, label, onClick, mobile = false }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "group relative font-heading uppercase tracking-[0.18em] transition",
          mobile
            ? "rounded-2xl border border-white/6 bg-panel/80 px-4 py-3 text-sm"
            : "py-2 text-sm",
          isActive ? "text-gold" : "text-text hover:text-gold",
        ].join(" ")
      }
    >
      {label}
      <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-power-gradient transition-all duration-300 group-hover:w-full" />
    </NavLink>
  );
}
