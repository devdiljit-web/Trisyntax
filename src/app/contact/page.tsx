import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { AbstractMap } from "@/components/ui/AbstractMap";
import { CTA } from "@/components/sections/home/CTA";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with TriSyntax, a web design and software engineering studio based in Chandigarh, Punjab. Tell us about your project and we'll respond within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact ${siteConfig.name}`,
    description:
      "Get in touch with TriSyntax to discuss your website or software project.",
    url: `${siteConfig.url}/contact`,
  },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

const contactMethods = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    label: "Studio",
    value: `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}, India`,
  },
];

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "Twitter / X", href: siteConfig.social.twitter },
  { label: "GitHub", href: siteConfig.social.github },
  { label: "Dribbble", href: siteConfig.social.dribbble },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#localbusiness`,
  name: siteConfig.name,
  url: `${siteConfig.url}/contact`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  openingHoursSpecification: siteConfig.businessHours.map((entry) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: entry.days,
    description: entry.hours,
  })),
  areaServed: "Worldwide",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      <PageHero
        eyebrow="Get In Touch"
        title="Let's talk about what you're building."
        description="Tell us about your project — timeline, budget, and goals — and we'll follow up within one business day with a scoped proposal. No discovery call required to get started."
        breadcrumbs={crumbs}
      />

      <section className="pb-28 lg:pb-36">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div className="space-y-10">
              <Reveal>
                <div className="rounded-3xl border border-ink-200 bg-white p-8">
                  <h2 className="font-display text-xl font-medium text-ink-900">
                    Contact details
                  </h2>
                  <div className="mt-6 space-y-5">
                    {contactMethods.map((method) => (
                      <div key={method.label}>
                        <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                          {method.label}
                        </p>
                        {method.href ? (
                          <a
                            href={method.href}
                            className="mt-1 block font-medium text-ink-900 hover:text-brand-blue-700"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="mt-1 font-medium text-ink-900">{method.value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="rounded-3xl border border-ink-200 bg-white p-8">
                  <h2 className="font-display text-xl font-medium text-ink-900">
                    Business hours
                  </h2>
                  <div className="mt-6 space-y-3">
                    {siteConfig.businessHours.map((entry) => (
                      <div
                        key={entry.days}
                        className="flex items-center justify-between border-b border-ink-100 pb-3 text-sm last:border-0 last:pb-0"
                      >
                        <span className="text-ink-600">{entry.days}</span>
                        <span className="font-medium text-ink-900">{entry.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div>
                  <h2 className="font-display text-lg font-medium text-ink-900">
                    Follow along
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-ink-200 px-4 py-2 text-sm text-ink-600 transition-colors hover:border-brand-blue-300 hover:text-brand-blue-700"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.22}>
                <AbstractMap />
              </Reveal>
            </div>

            <Reveal delay={0.12} y={40}>
              <div className="rounded-3xl border border-ink-200 bg-white p-8 shadow-premium sm:p-10">
                <h2 className="font-display text-2xl font-medium text-ink-900">
                  Tell us about your project
                </h2>
                <p className="mt-2 text-ink-600">
                  Fill out the form below and a member of our team will respond
                  within one business day.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
