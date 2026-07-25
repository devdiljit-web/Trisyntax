import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { technologies } from "@/data/tech-stack";

function TechCard({ name }: { name: string }) {
  return (
    <div className="flex h-16 items-center gap-3 rounded-2xl border border-ink-200 bg-white px-6 shadow-sm">
      <span
        className="size-2 rounded-full"
        style={{
          background:
            "linear-gradient(135deg, var(--color-brand-blue-500), var(--color-brand-green-500))",
        }}
        aria-hidden
      />
      <span className="whitespace-nowrap font-display text-base font-medium text-ink-800">
        {name}
      </span>
    </div>
  );
}

export function TechStack() {
  const half = Math.ceil(technologies.length / 2);
  const rowOne = technologies.slice(0, half);
  const rowTwo = technologies.slice(half);

  return (
    <section className="border-y border-ink-100 bg-ink-50/60 py-24 lg:py-32">
      <Container className="!px-0">
        <div className="container-outer">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Technologies</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-tight tracking-tight text-ink-900 sm:text-5xl">
                A modern, battle-tested engineering stack.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5">
          <Marquee speedClassName="[animation-duration:38s]">
            {rowOne.map((tech) => (
              <TechCard key={tech.name} name={tech.name} />
            ))}
          </Marquee>
          <Marquee reverse speedClassName="[animation-duration:42s]">
            {rowTwo.map((tech) => (
              <TechCard key={tech.name} name={tech.name} />
            ))}
          </Marquee>
        </div>
      </Container>
    </section>
  );
}
