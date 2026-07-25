import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[85svh] items-center overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 0%, color-mix(in oklab, var(--color-brand-blue-200) 60%, transparent), transparent)",
        }}
        aria-hidden
      />
      <Container className="relative text-center">
        <p className="font-display text-8xl font-semibold text-gradient-brand sm:text-9xl">
          404
        </p>
        <h1 className="mt-6 text-balance font-display text-3xl font-medium text-ink-900 sm:text-4xl">
          This page didn&apos;t make it to production.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink-600">
          The page you&apos;re looking for may have moved or no longer exists.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="/">Back to Home</MagneticButton>
          <MagneticButton href="/contact" variant="secondary">
            Contact Us
          </MagneticButton>
        </div>
      </Container>
    </section>
  );
}
