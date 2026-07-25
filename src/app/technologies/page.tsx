import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { CTA } from "@/components/sections/home/CTA";
import { technologies, type Technology } from "@/data/tech-stack";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "The modern, battle-tested technology stack TriSyntax uses to build fast, scalable websites and software — Next.js, React, TypeScript, Laravel, Tailwind CSS, and more.",
  alternates: { canonical: "/technologies" },
  openGraph: {
    title: `Technologies — ${siteConfig.name}`,
    description: "The technology stack TriSyntax builds with.",
    url: `${siteConfig.url}/technologies`,
  },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
];

const categories: Technology["category"][] = [
  "Language",
  "Framework",
  "Styling",
  "CMS",
  "Database",
  "Cloud & DevOps",
];

export default function TechnologiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      <PageHero
        eyebrow="Technologies"
        title="A modern, battle-tested engineering stack."
        description="We choose technology based on the problem in front of us, not what's trending. This is the stack we reach for most — and trust in production."
        breadcrumbs={crumbs}
      />

      <section className="pb-28 lg:pb-36">
        <Container className="space-y-16">
          {categories.map((category) => {
            const items = technologies.filter((t) => t.category === category);
            if (!items.length) return null;
            return (
              <div key={category}>
                <Reveal>
                  <h2 className="font-display text-xl font-medium text-ink-900">{category}</h2>
                </Reveal>
                <RevealGroup className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {items.map((tech) => (
                    <Reveal key={tech.name} as="div">
                      <div className="flex h-16 items-center gap-3 rounded-2xl border border-ink-200 bg-white px-5 shadow-sm">
                        <span
                          className="size-2 shrink-0 rounded-full"
                          style={{
                            background:
                              "linear-gradient(135deg, var(--color-brand-blue-500), var(--color-brand-green-500))",
                          }}
                          aria-hidden
                        />
                        <span className="truncate font-display text-base font-medium text-ink-800">
                          {tech.name}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </RevealGroup>
              </div>
            );
          })}
        </Container>
      </section>

      <CTA />
    </>
  );
}
