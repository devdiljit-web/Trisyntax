import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { CTA } from "@/components/sections/home/CTA";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "What clients say about working with TriSyntax — on communication, delivery, performance, and business impact.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: `Testimonials — ${siteConfig.name}`,
    description: "Trusted by teams who take their product seriously.",
    url: `${siteConfig.url}/testimonials`,
  },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Testimonials", path: "/testimonials" },
];

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      <PageHero
        eyebrow="Client Testimonials"
        title="Trusted by teams who take their product seriously."
        description="A selection of feedback from founders, product leads, and marketing directors we've worked with."
        breadcrumbs={crumbs}
      />

      <section className="pb-28 lg:pb-36">
        <Container>
          <RevealGroup className="grid gap-6 sm:grid-cols-2">
            {testimonials.map((t) => (
              <Reveal key={t.name} as="div">
                <figure className="h-full rounded-3xl border border-ink-200 bg-white p-9">
                  <span className="font-display text-5xl text-brand-blue-200" aria-hidden>
                    &ldquo;
                  </span>
                  <blockquote className="-mt-4 text-lg leading-relaxed text-ink-700">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-full bg-linear-to-br from-brand-blue-600 to-brand-green-600 text-sm font-medium text-white">
                      {t.initials}
                    </span>
                    <div>
                      <p className="font-medium text-ink-900">{t.name}</p>
                      <p className="text-sm text-ink-500">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <CTA />
    </>
  );
}
