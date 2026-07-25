import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTA } from "@/components/sections/home/CTA";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, UI/UX, Next.js and full-stack development, e-commerce, SEO, and AI integrations — full-spectrum web design and software engineering from TriSyntax.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Services — ${siteConfig.name}`,
    description:
      "Full-spectrum web design and software engineering services from TriSyntax.",
    url: `${siteConfig.url}/services`,
  },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      <PageHero
        eyebrow="Services"
        title="Full-spectrum web design and software engineering."
        description="From first sketch to production infrastructure — design, frontend, backend, and everything that keeps a product fast, secure, and easy to extend."
        breadcrumbs={crumbs}
      />

      <section className="pb-28 lg:pb-36">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} delayIndex={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
