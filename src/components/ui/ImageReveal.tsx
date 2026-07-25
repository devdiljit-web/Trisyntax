"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  overlay = true,
  zoom = true,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  overlay?: boolean;
  zoom?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-ink-200/70 bg-ink-100 shadow-premium",
        className
      )}
    >
      <motion.div
        initial={{ scale: shouldReduceMotion ? 1 : 1.15 }}
        animate={{ scale: inView ? 1 : shouldReduceMotion ? 1 : 1.15 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className={cn(
            "object-cover",
            zoom && "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]",
            imgClassName
          )}
        />
      </motion.div>

      {overlay && (
        <div
          className="pointer-events-none absolute inset-0 opacity-25 mix-blend-multiply"
          style={{
            background:
              "linear-gradient(160deg, var(--color-brand-blue-900) 0%, transparent 55%)",
          }}
        />
      )}

      {!shouldReduceMotion && (
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: inView ? 0 : 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ originY: 0 }}
          className="absolute inset-0 z-10 bg-linear-to-br from-brand-blue-600 to-brand-green-600"
        />
      )}
    </div>
  );
}
