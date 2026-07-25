import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { CTA } from "@/components/sections/home/CTA";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected product and web engineering work from TriSyntax — booking platforms, fintech dashboards, e-commerce storefronts, and internal tools shipped for ambitious teams.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: `Portfolio — ${siteConfig.name}`,
    description: "Selected product and web engineering work from TriSyntax.",
    url: `${siteConfig.url}/portfolio`,
  },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
];

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      <PageHero
        eyebrow="Portfolio"
        title="Products and platforms shipped for ambitious teams."
        description="A selection of engagements across healthcare, fintech, e-commerce, and SaaS — each one engineered with the same standard we'd hold for our own product."
        breadcrumbs={crumbs}
      />

      <section className="pb-28 lg:pb-36">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} delayIndex={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
