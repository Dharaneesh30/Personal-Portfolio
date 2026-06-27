import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 240, damping: 28 });
  const smoothY = useSpring(y, { stiffness: 240, damping: 28 });
  const trailOneX = useSpring(x, { stiffness: 180, damping: 24 });
  const trailOneY = useSpring(y, { stiffness: 180, damping: 24 });
  const trailTwoX = useSpring(x, { stiffness: 130, damping: 22 });
  const trailTwoY = useSpring(y, { stiffness: 130, damping: 22 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const update = () => setEnabled(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);

    const onMove = (event) => {
      x.set(event.clientX - 8);
      y.set(event.clientY - 8);
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      mediaQuery.removeEventListener("change", update);
      window.removeEventListener("mousemove", onMove);
    };
  }, [x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[60] h-4 w-4 rounded-full bg-gradient-to-br from-ember via-gold to-shield mix-blend-screen"
        style={{ x: smoothX, y: smoothY }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[59] h-10 w-10 rounded-full border border-gold/30"
        style={{ x: smoothX, y: smoothY, translateX: -12, translateY: -12 }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[58] h-3 w-3 rounded-full bg-gold/60 blur-[1px]"
        style={{ x: trailOneX, y: trailOneY, translateX: -18, translateY: -2 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[57] h-2 w-2 rounded-full bg-ember/60 blur-[2px]"
        style={{ x: trailTwoX, y: trailTwoY, translateX: -28, translateY: 6 }}
      />
    </>
  );
}
