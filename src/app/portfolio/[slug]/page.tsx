import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { ProjectCardMini } from "@/components/ui/ProjectCard";
import { CTA } from "@/components/sections/home/CTA";
import { projects } from "@/data/projects";
import { photoIds } from "@/data/images";
import { unsplashUrl } from "@/lib/unsplash";
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
    title: `${project.name} — ${project.industry}`,
    description: project.summary,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.name} — ${siteConfig.name} Portfolio`,
      description: project.summary,
      url: `${siteConfig.url}/portfolio/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: project.name, path: `/portfolio/${project.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      <PageHero
        eyebrow={project.industry}
        title={project.tagline}
        description={project.summary}
        breadcrumbs={crumbs}
        tone="green"
      />

      <section className="pb-20">
        <Container>
          <ImageReveal
            src={unsplashUrl(photoIds[project.image], 1800)}
            alt={`${project.name} — ${project.tagline}`}
            className="aspect-21/9"
            priority
          />
        </Container>
      </section>

      <section className="pb-28 lg:pb-36">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_0.7fr] lg:gap-20">
            <div className="space-y-12">
              <Reveal>
                <div>
                  <h2 className="font-display text-2xl font-medium text-ink-900">
                    The Challenge
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink-600">{project.challenge}</p>
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <div>
                  <h2 className="font-display text-2xl font-medium text-ink-900">
                    The Solution
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink-600">{project.solution}</p>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div>
                  <h2 className="font-display text-2xl font-medium text-ink-900">
                    Business Impact
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink-600">
                    {project.businessImpact}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <Link
                  href={`/case-studies/${project.slug}`}
                  className="group inline-flex items-center gap-2 font-medium text-brand-blue-700"
                >
                  Read the full case study with metrics and SEO impact
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  >
                    <path
                      d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </Reveal>
            </div>

            <div className="space-y-8">
              <Reveal>
                <div className="rounded-3xl border border-ink-200 bg-white p-8">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                    Services
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-brand-blue-50 px-3 py-1 text-xs font-medium text-brand-blue-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-8 text-xs font-semibold uppercase tracking-wide text-ink-400">
                    Technology
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-ink-200 px-3 py-1 text-xs text-ink-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-8 text-xs font-semibold uppercase tracking-wide text-ink-400">
                    Results
                  </h3>
                  <div className="mt-4 space-y-3">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="flex items-center justify-between">
                        <span className="text-sm text-ink-600">{metric.label}</span>
                        <span className="font-display text-lg font-semibold text-brand-green-600">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <MagneticButton href="/contact" size="lg" className="w-full">
                  Start a similar project
                </MagneticButton>
              </Reveal>
            </div>
          </div>

          <div className="mt-24 border-t border-ink-200 pt-16">
            <Reveal>
              <h2 className="font-display text-2xl font-medium text-ink-900">More work</h2>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {otherProjects.map((p, i) => (
                <ProjectCardMini key={p.slug} project={p} delayIndex={i} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
