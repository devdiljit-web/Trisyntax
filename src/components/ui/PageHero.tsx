import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  tone = "blue",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbs: Crumb[];
  tone?: "blue" | "green";
}) {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 lg:pt-40">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(90% 60% at 50% -10%, color-mix(in oklab, var(--color-brand-blue-100) 65%, white) 0%, white 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-ink-200) 1px, transparent 1px), linear-gradient(to bottom, var(--color-ink-200) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 10%, black, transparent)",
          }}
        />
      </div>

      <Container className="relative">
        <Reveal>
          <Breadcrumbs items={breadcrumbs} />
        </Reveal>
        <Reveal delay={0.05}>
          <Eyebrow tone={tone} className="mt-6">
            {eyebrow}
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-balance text-lg text-ink-600 sm:text-xl">
              {description}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
