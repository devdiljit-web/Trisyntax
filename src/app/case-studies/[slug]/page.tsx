import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/Button";
import { CTA } from "@/components/sections/home/CTA";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} Case Study — ${project.industry}`,
    description: project.summary,
    alternates: { canonical: `/case-studies/${project.slug}` },
    openGraph: {
      title: `${project.name} Case Study — ${siteConfig.name}`,
      description: project.summary,
      url: `${siteConfig.url}/case-studies/${project.slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
    { name: project.name, path: `/case-studies/${project.slug}` },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${project.name}: ${project.tagline}`,
    description: project.summary,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: `${siteConfig.url}/case-studies/${project.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      <PageHero
        eyebrow={`Case Study — ${project.industry}`}
        title={project.tagline}
        description={project.summary}
        breadcrumbs={crumbs}
        tone="green"
      />

      <section className="pb-16">
        <Container>
          <Reveal>
            <div className="grid gap-4 rounded-3xl border border-ink-200 bg-white p-8 sm:grid-cols-3  sm:p-10">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="text-center sm:text-left">
                  <p className="font-display text-4xl font-semibold text-brand-green-600">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm text-ink-500">{metric.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-28 lg:pb-36">
        <Container>
          <div className="mx-auto max-w-3xl space-y-14">
            <Reveal>
              <div>
                <h2 className="font-display text-2xl font-medium text-ink-900">Overview</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-600">{project.summary}</p>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div>
                <h2 className="font-display text-2xl font-medium text-ink-900">The Challenge</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-600">{project.challenge}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <h2 className="font-display text-2xl font-medium text-ink-900">The Solution</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-600">{project.solution}</p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div>
                <h2 className="font-display text-2xl font-medium text-ink-900">
                  Process &amp; Technology
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-600">
                  The engagement followed our standard discovery-to-launch process, with weekly
                  demos against a shared roadmap. The technical foundation was chosen specifically
                  for this problem, not by default:
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-ink-200 px-3 py-1.5 text-sm text-ink-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <h2 className="font-display text-2xl font-medium text-ink-900">SEO Impact</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-600">{project.seoImpact}</p>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div>
                <h2 className="font-display text-2xl font-medium text-ink-900">
                  Business Impact
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-600">
                  {project.businessImpact}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="rounded-2xl border border-ink-200 bg-ink-50 p-8">
                <p className="text-sm font-medium text-ink-500">Services provided</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-white px-3 py-1.5 text-sm text-ink-700 shadow-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="flex flex-col items-start gap-4 border-t border-ink-200 pt-10 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-xl font-medium text-ink-900">
                    Have a similar challenge?
                  </p>
                  <p className="mt-1 text-ink-600">Let&apos;s talk about what you&apos;re building.</p>
                </div>
                <MagneticButton href="/contact" size="lg">
                  Start a Project
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue-700"
              >
                &larr; Back to {project.name} in the Portfolio
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
