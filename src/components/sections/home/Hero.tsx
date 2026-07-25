"use client";

import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroVisual } from "@/components/sections/home/HeroVisual";

const trustTags = ["FinTech", "Healthcare", "E-Commerce", "SaaS", "Real Estate"];

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  const blobX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const blobY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 40);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 40);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-svh items-center overflow-hidden pt-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(120% 65% at 50% -10%, color-mix(in oklab, var(--color-brand-blue-100) 70%, white) 0%, white 55%)",
          }}
        />
        <motion.div
          style={{ x: blobX, y: blobY }}
          className="absolute -top-24 left-[8%] h-104 w-104 rounded-full opacity-50 blur-3xl"
        >
          <div
            className="h-full w-full rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, var(--color-brand-blue-300), transparent)",
            }}
          />
        </motion.div>
        <motion.div
          style={{ x: useTransform(blobX, (v) => -v * 0.6), y: useTransform(blobY, (v) => -v * 0.6) }}
          className="absolute right-[6%] top-[14%] h-88 w-88 rounded-full opacity-45 blur-3xl"
        >
          <div
            className="h-full w-full rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, var(--color-brand-green-300), transparent)",
            }}
          />
        </motion.div>
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-ink-200) 1px, transparent 1px), linear-gradient(to bottom, var(--color-ink-200) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 20%, black, transparent)",
          }}
        />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <motion.div style={{ y, opacity, scale }} className="w-full">
        <Container className="relative grid items-center gap-16 pb-24 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Eyebrow>Web Design &amp; Software Engineering Studio</Eyebrow>
            </motion.div>

            <div className="mt-8 max-w-2xl">
              <TextReveal
                as="h1"
                text="Websites and software, engineered like a product."
                className="font-display text-[2.5rem] font-medium leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-[4.25rem]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-xl text-balance text-lg text-ink-600 sm:text-xl"
            >
              TriSyntax designs and builds premium websites, products, and platforms
              for brands who treat their digital presence as core infrastructure —
              not an afterthought.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-11 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="/contact" size="lg">
                Start a Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </MagneticButton>
              <MagneticButton href="/portfolio" variant="secondary" size="lg">
                View Our Work
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-16 flex flex-wrap items-center gap-2 sm:mt-20"
            >
              <span className="mr-2 text-sm font-medium text-ink-700">Trusted across:</span>
              {trustTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-ink-200 bg-white/60 px-3 py-1 text-xs text-ink-500"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <HeroVisual />
          </motion.div>
        </Container>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-ink-400">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-px bg-linear-to-b from-ink-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
