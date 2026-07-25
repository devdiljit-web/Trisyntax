"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { photoIds } from "@/data/images";
import { unsplashUrl } from "@/lib/unsplash";

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const springX = useSpring(px, { stiffness: 120, damping: 18 });
  const springY = useSpring(py, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(springY, [0, 1], [7, -7]);
  const rotateY = useTransform(springX, [0, 1], [-7, 7]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto w-full max-w-md perspective-[1600px] lg:max-w-none"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative transform-3d"
      >
        <div className="relative aspect-5/4 overflow-hidden rounded-3xl border border-ink-200/80 shadow-premium">
          <Image
            src={unsplashUrl(photoIds.heroTeam, 1400)}
            alt="TriSyntax engineers collaborating on a client project"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply"
            style={{
              background:
                "linear-gradient(200deg, var(--color-brand-blue-900) 0%, transparent 60%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          />
        </div>

        <motion.div
          style={{ translateZ: 50 }}
          className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl border border-ink-200/70 bg-white/95 px-5 py-4 shadow-premium backdrop-blur-xl sm:flex"
        >
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green-500 opacity-60" />
            <span className="relative inline-flex size-2.5 rounded-full bg-brand-green-600" />
          </span>
          <p className="text-sm font-medium text-ink-700">Available for new projects</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
