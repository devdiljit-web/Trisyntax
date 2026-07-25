"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, [role="button"], label';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { stiffness: 900, damping: 40, mass: 0.2 });
  const dotY = useSpring(mouseY, { stiffness: 900, damping: 40, mass: 0.2 });

  const ringX = useSpring(mouseX, { stiffness: 260, damping: 26, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 260, damping: 26, mass: 0.5 });

  const trail1X = useSpring(ringX, { stiffness: 140, damping: 20 });
  const trail1Y = useSpring(ringY, { stiffness: 140, damping: 20 });
  const trail2X = useSpring(trail1X, { stiffness: 100, damping: 20 });
  const trail2Y = useSpring(trail1Y, { stiffness: 100, damping: 20 });

  const glowX = useSpring(mouseX, { stiffness: 55, damping: 22 });
  const glowY = useSpring(mouseY, { stiffness: 55, damping: 22 });

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!canHover || prefersReducedMotion) return;

    // Feature-detection mount flag: window/matchMedia only exist client-side,
    // so this must run post-mount to stay SSR-safe rather than during render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    function handleMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }

    function handleOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest(INTERACTIVE_SELECTOR));
    }

    function handleDown() {
      setPressed(true);
    }
    function handleUp() {
      setPressed(false);
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseover", handleOver, { passive: true });
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-100" aria-hidden>
      <motion.div
        className="absolute left-0 top-0 h-152 w-152 rounded-full opacity-25 blur-3xl"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(closest-side, var(--color-brand-blue-400), transparent 70%)",
        }}
      />

      <motion.div
        className="absolute left-0 top-0 size-2 rounded-full bg-brand-green-400/70"
        style={{ x: trail2X, y: trail2Y, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="absolute left-0 top-0 size-2.5 rounded-full bg-brand-blue-400/80"
        style={{ x: trail1X, y: trail1Y, translateX: "-50%", translateY: "-50%" }}
      />

      <motion.div
        className="absolute left-0 top-0 rounded-full border border-ink-900/25 mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          opacity: pressed ? 0.4 : 1,
          scale: pressed ? 0.9 : 1,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />

      <motion.div
        className="absolute left-0 top-0 rounded-full bg-brand-blue-600"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 6 : 8,
          height: hovering ? 6 : 8,
          opacity: hovering ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}
