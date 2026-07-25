"use client";

import Link from "next/link";
import { useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Ripple = { id: number; x: number; y: number };

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "gradient";
  size?: "md" | "lg";
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit";
};

type MagneticButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary:
    "bg-ink-900 text-white hover:bg-brand-blue-700 shadow-premium",
  secondary:
    "bg-white text-ink-900 border border-ink-200 hover:border-brand-blue-300 hover:bg-brand-blue-50/60",
  ghost: "bg-transparent text-ink-900 hover:bg-ink-100",
  gradient:
    "bg-gradient-to-r from-brand-blue-600 to-brand-green-600 text-white shadow-premium transition-all duration-300 hover:opacity-90 hover:shadow-lg",
};

const sizeStyles: Record<NonNullable<BaseProps["size"]>, string> = {
  md: "h-12 px-6 text-[0.9375rem]",
  lg: "h-14 px-8 text-base",
};

export function MagneticButton({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.35, y: relY * 0.45 });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  function handleClick(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const id = Date.now();
      setRipples((prev) => [
        ...prev,
        { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
      ]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 650);
    }
  }

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.4 }}
      className="inline-flex"
    >
      <span
        className={cn(
          "group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-colors duration-300",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
      >
        {ripples.map((r) => (
          <span
            key={r.id}
            className="pointer-events-none absolute rounded-full bg-white/30"
            style={{
              left: r.x,
              top: r.y,
              width: 10,
              height: 10,
              transform: "translate(-50%, -50%)",
              animation: "ripple 650ms ease-out forwards",
            }}
          />
        ))}
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </span>
      <style jsx>{`
        @keyframes ripple {
          to {
            width: 480px;
            height: 480px;
            opacity: 0;
          }
        }
      `}</style>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex" aria-label={typeof children === "string" ? children : undefined}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-flex">
      {content}
    </button>
  );
}
