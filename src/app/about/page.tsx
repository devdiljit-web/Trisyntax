import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Achievements } from "@/components/sections/home/Achievements";
import { CTA } from "@/components/sections/home/CTA";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";
import { photoIds } from "@/data/images";
import { unsplashUrl } from "@/lib/unsplash";

export const metadata: Metadata = {
  title: "About TriSyntax",
  description:
    "TriSyntax is a web design and software engineering studio based in Chandigarh, Punjab. Learn about our mission, engineering philosophy, and the standards we build to.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About — ${siteConfig.name}`,
    description: "Our mission, values, and engineering philosophy.",
    url: `${siteConfig.url}/about`,
  },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const pillars = [
  {
    title: "Mission",
    copy: "Give ambitious companies the same caliber of digital product that the world's best-funded teams take for granted — regardless of their size or budget.",
  },
  {
    title: "Vision",
    copy: "A web where speed, clarity, and craft aren't premium add-ons — they're the baseline every visitor expects, and every business can afford to deliver.",
  },
  {
    title: "Values",
    copy: "Evidence over opinion, craft over shortcuts, and a bias toward shipping things that hold up under real traffic and real deadlines.",
  },
];

const principles = [
  {
    title: "Performance is a requirement, not a nice-to-have",
    copy: "Every build carries a performance budget from day one. Core Web Vitals are tracked in every pull request, not audited after the fact.",
  },
  {
    title: "Accessible by default",
    copy: "Semantic HTML, keyboard navigation, and screen-reader support are part of the definition of done — not a separate pass at the end.",
  },
  {
    title: "Tested before it ships",
    copy: "Cross-browser QA, edge-case review, and stakeholder demos happen before launch day, not during a panicked hotfix after.",
  },
  {
    title: "Documented for the next person",
    copy: "Every handoff includes documentation your internal team — or the next agency — can actually use.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      <PageHero
        eyebrow="About TriSyntax"
        title="Software engineering, treated like a craft."
        description="We're a web design and software engineering studio based in Chandigarh, Punjab, building for clients across India and beyond. Here's what shapes how we work."
        breadcrumbs={crumbs}
      />

      <section className="pb-28 lg:pb-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <Reveal>
                <Eyebrow tone="green">Our Story</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-ink-900 sm:text-4xl">
                  Founded on a simple frustration: most agency websites look better than they perform.
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="mt-6 space-y-4 text-lg text-ink-600">
                  <p>
                    TriSyntax was founded in Chandigarh with a specific complaint in mind: too
                    many client websites shipped beautiful and slow, or fast and forgettable.
                    Rarely both fast and beautiful — and almost never engineered to actually
                    convert.
                  </p>
                  <p>
                    We built the studio around a small, senior team that handles both design and
                    engineering under one roof, so nothing gets lost in translation between a
                    Figma file and a production deploy.
                  </p>
                  <p>
                    Today we work with founders, product teams, and marketing leaders who need a
                    partner that treats their site or platform as core infrastructure — not a
                    line item to check off before the &ldquo;real&rdquo; work starts.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15} y={40}>
              <ImageReveal
                src={unsplashUrl(photoIds.premiumOfficeView, 1200)}
                alt="The TriSyntax studio workspace"
                className="aspect-4/5"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-ink-100 bg-ink-50/60 py-28 lg:py-36">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Mission, Vision &amp; Values</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-tight tracking-tight text-ink-900 sm:text-5xl">
                What we&apos;re building toward.
              </h2>
            </Reveal>
          </div>

          <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <Reveal key={pillar.title} as="div">
                <GlassCard className="h-full p-8">
                  <h3 className="font-display text-xl font-medium text-ink-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-600">
                    {pillar.copy}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="py-28 lg:py-36">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow tone="green">Engineering Philosophy</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-tight tracking-tight text-ink-900 sm:text-5xl">
                The quality standards behind every build.
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} delay={(i % 2) * 0.06}>
                <div className="border-t border-ink-200 pt-6">
                  <h3 className="font-display text-lg font-medium text-ink-900">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">
                    {principle.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Achievements />

      <CTA />
    </>
  );
}
