"use client";

import { useRef, useState, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setGlow((g) => ({ ...g, active: false }))}
      className={cn(
        "group relative overflow-hidden rounded-3xl border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        tone === "light"
          ? "border-ink-200/70 bg-white/70 hover:-translate-y-1.5 hover:border-brand-blue-200 hover:shadow-premium"
          : "border-white/10 bg-ink-900/60 hover:-translate-y-1.5 hover:border-white/20",
        className
      )}
      style={{
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(320px circle at ${glow.x}% ${glow.y}%, color-mix(in oklab, var(--color-brand-blue-400) 18%, transparent), transparent 70%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
