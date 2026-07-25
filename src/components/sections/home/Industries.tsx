import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { industries } from "@/data/industries";

export function Industries() {
  return (
    <section className="py-28 lg:py-36">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Industries We Serve</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-tight tracking-tight text-ink-900 sm:text-5xl">
              Domain expertise across the sectors that need it most.
            </h2>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Reveal key={industry.name} as="div">
              <div className="group h-full bg-white p-8 transition-colors duration-300 hover:bg-brand-blue-50/60">
                <h3 className="font-display text-lg font-medium text-ink-900">
                  {industry.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {industry.description}
                </p>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
