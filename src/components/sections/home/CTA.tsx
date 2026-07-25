import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-6 lg:py-10">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink-950 px-8 py-20 text-center sm:px-16 lg:py-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(60% 80% at 50% 0%, color-mix(in oklab, var(--color-brand-blue-600) 45%, transparent), transparent), radial-gradient(50% 60% at 100% 100%, color-mix(in oklab, var(--color-brand-green-600) 35%, transparent), transparent)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <Reveal>
              <h2 className="text-balance font-display text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl">
                Let&apos;s build something that outperforms your competitors.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-ink-300">
                Tell us about your project and we&apos;ll respond within one
                business day with next steps.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <MagneticButton href="/contact" size="lg" className="bg-white text-ink-900 hover:bg-brand-green-50">
                  Start a Project
                </MagneticButton>
                <MagneticButton href="/pricing" variant="secondary" size="lg" className="border-white/20 bg-transparent text-white hover:bg-white/10">
                  View Pricing
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
