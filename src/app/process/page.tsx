import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/sections/home/CTA";
import { processSteps } from "@/data/process";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How TriSyntax takes a project from discovery to launch: research, planning, wireframing, UI design, development, testing, optimization, and ongoing maintenance.",
  alternates: { canonical: "/process" },
  openGraph: {
    title: `Our Process — ${siteConfig.name}`,
    description: "A disciplined process, from first call to launch day.",
    url: `${siteConfig.url}/process`,
  },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Our Process", path: "/process" },
];

export default function ProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      <PageHero
        eyebrow="Our Process"
        title="A disciplined process, from first call to launch day."
        description="No black-box handoffs. Every engagement follows the same ten-stage process, with a shared project board so you always know exactly where things stand."
        breadcrumbs={crumbs}
      />

      <section className="pb-28 lg:pb-36">
        <Container>
          <div className="mx-auto max-w-3xl">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={Math.min(i * 0.04, 0.3)}>
                <div className="flex gap-6 border-b border-ink-200 py-10 first:pt-0 last:border-0">
                  <span className="font-display text-3xl font-medium text-ink-300">
                    {step.number}
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-medium text-ink-900">
                      {step.title}
                    </h2>
                    <p className="mt-3 text-lg leading-relaxed text-ink-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
