import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { CTA } from "@/components/sections/home/CTA";
import { industries } from "@/data/industries";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "TriSyntax builds websites and software for FinTech, healthcare, e-commerce, real estate, SaaS, education, hospitality, and professional services companies.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: `Industries — ${siteConfig.name}`,
    description: "Domain expertise across the sectors that need it most.",
    url: `${siteConfig.url}/industries`,
  },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
];

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      <PageHero
        eyebrow="Industries We Serve"
        title="Domain expertise across the sectors that need it most."
        description="Every industry has its own compliance requirements, user expectations, and technical constraints. Here's where we've built that expertise firsthand."
        breadcrumbs={crumbs}
      />

      <section className="pb-28 lg:pb-36">
        <Container>
          <RevealGroup className="grid gap-px overflow-hidden rounded-3xl border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => {
              const example = projects.find((p) => p.industry === industry.name);
              return (
                <Reveal key={industry.name} as="div">
                  <div className="group flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-brand-blue-50/60">
                    <h2 className="font-display text-lg font-medium text-ink-900">
                      {industry.name}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
                      {industry.description}
                    </p>
                    {example && (
                      <Link
                        href={`/portfolio/${example.slug}`}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue-700"
                      >
                        See {example.name}
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                          <path
                            d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      <CTA />
    </>
  );
}
