import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectCardWide } from "@/components/ui/ProjectCard";
import { CTA } from "@/components/sections/home/CTA";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "The strategy, engineering decisions, and measurable results behind TriSyntax engagements — booking platforms, fintech dashboards, e-commerce storefronts, and more.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: `Case Studies — ${siteConfig.name}`,
    description: "The strategy and metrics behind TriSyntax's work.",
    url: `${siteConfig.url}/case-studies`,
  },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Case Studies", path: "/case-studies" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      <PageHero
        eyebrow="Case Studies"
        title="The strategy and metrics behind every engagement."
        description="Every project starts with a real business constraint. Here's how we approached it, what we built, and what changed afterward."
        breadcrumbs={crumbs}
      />

      <section className="pb-28 lg:pb-36">
        <Container className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCardWide key={project.slug} project={project} delayIndex={i} />
          ))}
        </Container>
      </section>

      <CTA />
    </>
  );
}
