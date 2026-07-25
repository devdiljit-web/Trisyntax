import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";

const reasons = [
  {
    title: "Engineering-led design",
    copy: "Every layout is designed with its production constraints in mind, so what you approve is what actually ships.",
  },
  {
    title: "Performance as a default",
    copy: "Core Web Vitals and Lighthouse scores are tracked from the first commit, not audited after launch.",
  },
  {
    title: "Direct access to senior talent",
    copy: "You work with the people actually writing the code and making the design decisions — no account-manager relay.",
  },
  {
    title: "SEO built into the architecture",
    copy: "Semantic markup, schema, and content structure are part of development, not a separate line item after launch.",
  },
  {
    title: "Transparent, milestone-based delivery",
    copy: "Fixed-scope proposals, weekly demos, and a shared project board — you always know exactly where things stand.",
  },
  {
    title: "A partner after launch",
    copy: "We stay close post-launch with monitoring, support retainers, and a roadmap for what comes next.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-28 lg:py-36">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow tone="green">Why TriSyntax</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-tight tracking-tight text-ink-900 sm:text-5xl">
              What you get with a studio built to engineering standards.
            </h2>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <Reveal key={reason.title} as="div">
              <GlassCard className="h-full p-7">
                <h3 className="font-display text-lg font-medium text-ink-900">
                  {reason.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-600">
                  {reason.copy}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
