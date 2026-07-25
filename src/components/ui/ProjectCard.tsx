"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Project } from "@/data/projects";
import { photoIds } from "@/data/images";
import { unsplashUrl } from "@/lib/unsplash";
import { cn } from "@/lib/utils";

function Thumbnail({ project, aspect = "aspect-16/10" }: { project: Project; aspect?: string }) {
  return (
    <div className={cn("group/thumb relative overflow-hidden", aspect)}>
      <Image
        src={unsplashUrl(photoIds[project.image], 1200)}
        alt={`${project.name} — ${project.tagline}`}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-premium group-hover/thumb:scale-[1.06]"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply transition-opacity duration-500 group-hover/thumb:opacity-25"
        style={{ background: `linear-gradient(160deg, ${project.gradientFrom}, transparent 65%)` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
      <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
        {project.industry}
      </span>
      <span className="absolute bottom-5 left-5 font-display text-2xl font-medium text-white">
        {project.name}
      </span>
    </div>
  );
}

export function ProjectCard({ project, delayIndex = 0 }: { project: Project; delayIndex?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springX = useSpring(px, { stiffness: 200, damping: 22 });
  const springY = useSpring(py, { stiffness: 200, damping: 22 });
  const rotateX = useTransform(springY, [0, 1], [4, -4]);
  const rotateY = useTransform(springX, [0, 1], [-4, 4]);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function onMouseLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <Link href={`/portfolio/${project.slug}`} className="group block perspective-[1400px]">
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.7, delay: delayIndex * 0.06, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden rounded-3xl border border-ink-200 bg-white transition-shadow duration-500 group-hover:shadow-premium"
      >
        <Thumbnail project={project} />
        <div className="p-8">
          <h3 className="font-display text-2xl font-medium text-ink-900">{project.tagline}</h3>
          <p className="mt-3 text-[0.9375rem] text-ink-600">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-ink-200 px-2.5 py-1 text-xs text-ink-500"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-ink-100 pt-6">
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {project.metrics.slice(0, 2).map((metric) => (
                <div key={metric.label}>
                  <p className="font-display text-xl font-semibold text-brand-green-600">
                    {metric.value}
                  </p>
                  <p className="text-xs text-ink-500">{metric.label}</p>
                </div>
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue-700">
              View case study
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              >
                <path
                  d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export function ProjectCardMini({ project, delayIndex = 0 }: { project: Project; delayIndex?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.6, delay: delayIndex * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/portfolio/${project.slug}`} className="group block">
        <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-premium">
          <Thumbnail project={project} aspect="aspect-16/9" />
          <div className="p-5">
            <p className="mt-0.5 text-sm text-ink-700">{project.tagline}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProjectCardWide({ project, delayIndex = 0 }: { project: Project; delayIndex?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springX = useSpring(px, { stiffness: 200, damping: 22 });
  const springY = useSpring(py, { stiffness: 200, damping: 22 });
  const rotateX = useTransform(springY, [0, 1], [4, -4]);
  const rotateY = useTransform(springX, [0, 1], [-4, 4]);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function onMouseLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <Link href={`/case-studies/${project.slug}`} className="group block perspective-[1400px]">
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.7, delay: delayIndex * 0.06, ease: [0.16, 1, 0.3, 1] }}
        className="grid overflow-hidden rounded-3xl border border-ink-200 bg-white transition-shadow duration-500 group-hover:shadow-premium md:grid-cols-[0.9fr_1.1fr]"
      >
        <Thumbnail project={project} aspect="aspect-16/10 md:aspect-auto md:h-full" />
        <div className="p-8 sm:p-10">
          <h3 className="font-display text-2xl font-medium text-ink-900">{project.tagline}</h3>
          <p className="mt-3 text-ink-600">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-display text-xl font-semibold text-brand-green-600">
                  {metric.value}
                </p>
                <p className="text-xs text-ink-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
