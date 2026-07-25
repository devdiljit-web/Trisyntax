"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { primaryNav } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { pauseSmoothScroll, resumeSmoothScroll } from "@/components/providers/SmoothScrollProvider";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimeout = useRef<number | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const scrollY = window.scrollY;
    const { body } = document;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };

    // position:fixed (not just overflow:hidden) prevents iOS Safari from
    // rubber-band scrolling the page behind the fixed drawer.
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    pauseSmoothScroll();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.left = previous.left;
      body.style.right = previous.right;
      body.style.width = previous.width;
      window.scrollTo(0, scrollY);
      resumeSmoothScroll();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  function handleEnter(label: string) {
    if (closeTimeout.current) window.clearTimeout(closeTimeout.current);
    setOpenMenu(label);
  }

  function handleLeave() {
    closeTimeout.current = window.setTimeout(() => setOpenMenu(null), 150);
  }

  const activeItem = primaryNav.find((item) => item.label === openMenu);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-500",
        mobileOpen
          ? "bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : scrolled || openMenu
            ? "bg-white/80 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] backdrop-blur-xl"
            : "bg-transparent"
      )}
      onMouseLeave={handleLeave}
    >
      <Container className="relative z-20 flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 focus-visible:outline-none"
          aria-label="TriSyntax home"
        >
          <Logo className="h-20 w-auto text-ink-900" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <div
              key={item.label}
              onMouseEnter={() => item.children && handleEnter(item.label)}
            >
              <Link
                href={item.href}
                className={cn(
                  "relative flex items-center gap-1 rounded-full px-4 py-2.5 text-[0.9375rem] font-medium text-ink-800 transition-colors hover:text-brand-blue-700",
                  openMenu === item.label && "text-brand-blue-700"
                )}
              >
                {item.label}
                {item.children && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className={cn(
                      "mt-px transition-transform duration-300",
                      openMenu === item.label && "rotate-180"
                    )}
                    aria-hidden
                  >
                    <path
                      d="M2 3.5L5 6.5L8 3.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <MagneticButton href="/contact" size="md">
            Start a Project
          </MagneticButton>
        </div>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink-900 transition-colors hover:bg-ink-100 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span className="relative block h-3.5 w-4.5">
            <motion.span
              className="absolute left-0 top-0 block h-[1.6px] w-full rounded-full bg-current"
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              className="absolute left-0 bottom-0 block h-[1.6px] w-full rounded-full bg-current"
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            />
          </span>
        </button>
      </Container>

      <AnimatePresence>
        {activeItem?.children && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-ink-200/70 bg-white/95 backdrop-blur-xl"
            onMouseEnter={() => handleEnter(activeItem.label)}
          >
            <Container className="grid grid-cols-3 gap-2 py-8">
              {activeItem.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="group rounded-2xl p-4 transition-colors hover:bg-brand-blue-50/70"
                  onClick={() => setOpenMenu(null)}
                >
                  <p className="font-display text-[1.05rem] font-medium text-ink-900 transition-colors group-hover:text-brand-blue-700">
                    {child.label}
                  </p>
                  <p className="mt-1 text-sm text-ink-500">{child.description}</p>
                </Link>
              ))}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="isolate fixed inset-0 z-10 flex h-dvh flex-col overflow-y-auto overscroll-contain bg-white lg:hidden [-webkit-overflow-scrolling:touch] [touch-action:pan-y]"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
              <div className="absolute -right-24 -top-24 size-72 rounded-full bg-brand-blue-100/70 blur-3xl" />
              <div className="absolute -left-24 bottom-0 size-72 rounded-full bg-brand-green-100/60 blur-3xl" />
            </div>

            <Container className="flex flex-1 flex-col gap-1.5 pt-[calc(7rem+env(safe-area-inset-top))] pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
              {primaryNav.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-ink-100 py-5"
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl font-display text-2xl font-medium text-ink-900 transition-colors active:text-brand-blue-700"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mt-4 flex flex-col gap-2 border-l border-ink-200 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="rounded-lg py-2 text-[0.9375rem] text-ink-500 transition-colors active:text-brand-blue-700"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <div className="mt-8 pb-6">
                <MagneticButton href="/contact" variant="gradient" size="lg" className="w-full">
                  Start a Project
                </MagneticButton>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
