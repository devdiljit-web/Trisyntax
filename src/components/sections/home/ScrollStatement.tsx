"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";

const STATEMENT =
  "We believe great software is invisible — it loads instantly, reads clearly, and earns trust before a single word is read. That is the only standard we build to.";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-[0.28em] inline-block">
      <span className="absolute inset-0 text-ink-200">{children}</span>
      <motion.span style={{ opacity }} className="relative text-ink-900">
        {children}
      </motion.span>
    </span>
  );
}

export function ScrollStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.15"],
  });

  const words = STATEMENT.split(" ");

  return (
    <section ref={ref} className="py-28 lg:py-40">
      <Container>
        <p className="max-w-5xl font-display text-3xl font-medium leading-[1.3] tracking-tight sm:text-4xl lg:text-5xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </Container>
    </section>
  );
}
