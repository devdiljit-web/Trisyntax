"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TextReveal({
  text,
  className,
  as: Comp = "h2",
  delay = 0,
  wordDelay = 0.045,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
  wordDelay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    const Static = Comp;
    return <Static className={className}>{text}</Static>;
  }

  const MotionComp = motion[Comp];

  return (
    <MotionComp
      className={cn("flex flex-wrap", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
    >
      {words.map((word, i) => (
        <span key={i} className="mr-[0.28em] overflow-hidden">
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "110%" },
              visible: {
                y: "0%",
                transition: {
                  duration: 0.9,
                  delay: delay + i * wordDelay,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionComp>
  );
}
