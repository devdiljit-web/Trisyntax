import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white lg:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-brand-green-500), transparent)",
        }}
        aria-hidden
      />
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="text-center">
                <p className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">
                  <Counter value={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-3 text-ink-400">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
