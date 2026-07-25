"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Service } from "@/data/services";
import { photoIds } from "@/data/images";
import { unsplashUrl } from "@/lib/unsplash";
import { Icon } from "@/components/ui/Icon";

export function ServiceCard({ service, delayIndex = 0 }: { service: Service; delayIndex?: number }) {
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
    <Link href={`/services/${service.slug}`} className="group block h-full perspective-[1400px]">
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.7, delay: delayIndex * 0.06, ease: [0.16, 1, 0.3, 1] }}
        className="flex h-full flex-col overflow-hidden rounded-3xl border border-ink-200/70 bg-white transition-shadow duration-500 group-hover:shadow-premium"
      >
        <div className="group/thumb relative aspect-4/3 overflow-hidden">
          <Image
            src={unsplashUrl(photoIds[service.image], 800)}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.08]"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-black/5 to-transparent" />
          <div className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-xl bg-white/90 text-brand-blue-700 shadow-sm backdrop-blur-sm">
            <Icon name={service.icon} className="size-5" />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-7">
          <h3 className="font-display text-xl font-medium text-ink-900">{service.title}</h3>
          <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-600">
            {service.summary}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue-700">
            Learn more
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
      </motion.div>
    </Link>
  );
}
