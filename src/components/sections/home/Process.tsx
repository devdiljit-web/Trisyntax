"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.5"],
  });

  return (
    <section className="py-28 lg:py-36">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow tone="green">Our Process</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-tight tracking-tight text-ink-900 sm:text-5xl">
              A disciplined process, from first call to launch day.
            </h2>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-20 grid gap-x-12 lg:grid-cols-[auto_1fr]">
          <div className="relative hidden w-px shrink-0 bg-ink-200 lg:block">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-0 top-0 h-full w-px origin-top bg-linear-to-b from-brand-blue-600 to-brand-green-600"
            />
          </div>

          <div className="grid gap-12 sm:grid-cols-2">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={(i % 2) * 0.05}>
                <div className="flex gap-5">
                  <span className="font-display text-2xl font-medium text-ink-300">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-ink-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
