import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career at TriSyntax, a web design and software engineering studio in Chandigarh, Punjab. See our culture, benefits, and the roles we're usually hiring for.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: `Careers — ${siteConfig.name}`,
    description: "Build your career with a craft-first studio.",
    url: `${siteConfig.url}/careers`,
  },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Careers", path: "/careers" },
];

const benefits = [
  {
    title: "Real ownership",
    copy: "You'll work directly with clients, not just tickets handed down from an account manager.",
  },
  {
    title: "Craft over churn",
    copy: "We scope timelines that leave room to do the work properly, not just fast.",
  },
  {
    title: "Learning budget",
    copy: "An annual budget for courses, conferences, and the tools that make you better at your job.",
  },
  {
    title: "Flexible, hybrid-friendly",
    copy: "Our studio is based in Chandigarh, with flexibility for remote and hybrid arrangements.",
  },
  {
    title: "Small, senior team",
    copy: "You'll work alongside people who care about the craft, not a large bench of rotating juniors.",
  },
  {
    title: "Transparent growth path",
    copy: "Clear expectations for what the next level looks like, reviewed twice a year.",
  },
];

const rolesWeHireFor = [
  {
    title: "Senior Frontend Engineer",
    focus: "React, Next.js, and design-system craftsmanship",
  },
  {
    title: "Product / UI-UX Designer",
    focus: "End-to-end design from research through high-fidelity UI",
  },
  {
    title: "Backend / Full-Stack Engineer",
    focus: "Node.js, Laravel, or comparable production experience",
  },
];

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      <PageHero
        eyebrow="Careers"
        title="Build your career with a craft-first studio."
        description="We're a small, senior team based in Chandigarh — and we grow deliberately. Here's what it's like to work here, and the kinds of roles we typically hire for."
        breadcrumbs={crumbs}
      />

      <section className="pb-28 lg:pb-36">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow tone="green">Why work here</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-tight tracking-tight text-ink-900 sm:text-5xl">
                What it&apos;s actually like day to day.
              </h2>
            </Reveal>
          </div>

          <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Reveal key={benefit.title} as="div">
                <GlassCard className="h-full p-7">
                  <h3 className="font-display text-lg font-medium text-ink-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-600">
                    {benefit.copy}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="border-y border-ink-100 bg-ink-50/60 py-28 lg:py-36">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Roles We Typically Hire For</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-tight tracking-tight text-ink-900 sm:text-5xl">
                We don&apos;t have open reqs posted right now.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 text-lg text-ink-600">
                As a small studio, we hire in bursts rather than running a constant pipeline.
                These are the roles we come back to most often — if one matches your experience,
                send us your portfolio or GitHub and we&apos;ll reach out when the timing lines up.
              </p>
            </Reveal>
          </div>

          <RevealGroup className="mt-12 space-y-4">
            {rolesWeHireFor.map((role) => (
              <Reveal key={role.title} as="div">
                <div className="flex flex-col gap-2 rounded-2xl border border-ink-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-medium text-ink-900">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-600">{role.focus}</p>
                  </div>
                  <span className="w-fit rounded-full bg-ink-100 px-3 py-1 text-xs font-medium text-ink-500">
                    Not currently open
                  </span>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="py-28 text-center lg:py-36">
        <Container>
          <Reveal>
            <h2 className="mx-auto max-w-xl text-balance font-display text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
              Don&apos;t see an open role, but think you&apos;d be a great fit anyway?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-4 max-w-md text-ink-600">
              We&apos;d still like to hear from you. Send your portfolio and a short note to{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-medium text-brand-blue-700">
                {siteConfig.email}
              </a>
              .
            </p>
          </Reveal>
          <Reveal delay={0.16} className="mt-8">
            <MagneticButton href={`mailto:${siteConfig.email}`}>Get in touch</MagneticButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
