import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { MagneticButton } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { ProjectCardMini } from "@/components/ui/ProjectCard";
import { CTA } from "@/components/sections/home/CTA";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { photoIds } from "@/data/images";
import { unsplashUrl } from "@/lib/unsplash";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} — ${siteConfig.name}`,
      description: service.summary,
      url: `${siteConfig.url}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedProjects = projects
    .filter((p) => p.services.some((s) => s.toLowerCase().includes(service.shortTitle.toLowerCase())))
    .slice(0, 2);
  const fallbackProjects = relatedProjects.length ? relatedProjects : projects.slice(0, 2);

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      <PageHero
        eyebrow="Services"
        title={service.title}
        description={service.summary}
        breadcrumbs={crumbs}
      />

      <section className="pb-28 lg:pb-36">
        <Container>
          <Reveal>
            <ImageReveal
              src={unsplashUrl(photoIds[service.image], 1800)}
              alt={service.title}
              className="aspect-21/9"
              priority
            />
          </Reveal>

          <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
            <div>
              <Reveal>
                <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-blue-50 text-brand-blue-700">
                  <Icon name={service.icon} className="size-7" />
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-8 font-display text-2xl font-medium text-ink-900">
                  What&apos;s included
                </h2>
              </Reveal>
              <RevealGroup className="mt-6 space-y-4">
                {service.features.map((feature) => (
                  <Reveal key={feature} as="div">
                    <div className="flex items-start gap-3 rounded-2xl border border-ink-200 bg-white p-5">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-green-50 text-brand-green-600">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                          <path
                            d="M3.5 8.5L6.5 11.5L12.5 4.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <p className="text-[0.9375rem] text-ink-700">{feature}</p>
                    </div>
                  </Reveal>
                ))}
              </RevealGroup>

              <Reveal delay={0.1} className="mt-10">
                <div className="rounded-2xl border border-brand-blue-200 bg-brand-blue-50/60 p-6">
                  <h3 className="font-display text-lg font-medium text-ink-900">Ideal for</h3>
                  <p className="mt-2 text-ink-700">{service.idealFor}</p>
                </div>
              </Reveal>

              <Reveal delay={0.14} className="mt-10">
                <MagneticButton href="/contact" size="lg">
                  Discuss your project
                </MagneticButton>
              </Reveal>
            </div>

            <div className="space-y-6 lg:pt-16">
              <Reveal>
                <h2 className="font-display text-lg font-medium text-ink-900">
                  Related work
                </h2>
              </Reveal>
              {fallbackProjects.map((project, i) => (
                <ProjectCardMini key={project.slug} project={project} delayIndex={i} />
              ))}
            </div>
          </div>

          <div className="mt-24 border-t border-ink-200 pt-16">
            <Reveal>
              <h2 className="font-display text-2xl font-medium text-ink-900">
                Explore other services
              </h2>
            </Reveal>
            <RevealGroup className="mt-8 grid gap-5 sm:grid-cols-3">
              {otherServices.map((s) => (
                <Reveal key={s.slug} as="div">
                  <Link href={`/services/${s.slug}`} className="block h-full">
                    <GlassCard className="h-full p-6">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-brand-blue-50 text-brand-blue-700">
                        <Icon name={s.icon} className="size-5" />
                      </div>
                      <h3 className="mt-4 font-display text-base font-medium text-ink-900">
                        {s.title}
                      </h3>
                    </GlassCard>
                  </Link>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
