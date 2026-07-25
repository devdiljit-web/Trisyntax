import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTA } from "@/components/sections/home/CTA";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";
import type { Faq } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "TriSyntax pricing for website design, product development, and full-stack engineering engagements — transparent ranges, fixed-scope proposals, no hidden fees.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: `Pricing — ${siteConfig.name}`,
    description: "Transparent pricing ranges for every type of engagement.",
    url: `${siteConfig.url}/pricing`,
  },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
];

const tiers = [
  {
    name: "Launch",
    price: "₹3,50,000 – ₹8,00,000",
    description: "A focused marketing site or landing page that needs to feel premium fast.",
    features: [
      "Up to 8 pages, custom designed",
      "Design system built for your brand",
      "CMS setup for self-editing content",
      "Core Web Vitals & basic SEO included",
      "4–8 week timeline",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹8,00,000 – ₹25,00,000",
    description: "A full-stack product, e-commerce storefront, or multi-service platform.",
    features: [
      "Custom frontend + backend architecture",
      "Third-party integrations (payments, CRM, etc.)",
      "Advanced SEO, schema, and analytics setup",
      "Staging environment + CI/CD pipeline",
      "10–16 week timeline",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "₹25,00,000+",
    description: "Complex platforms, multi-team collaboration, or ongoing product development.",
    features: [
      "Dedicated senior team embedded with yours",
      "Custom infrastructure and scaling strategy",
      "Security review and compliance support",
      "Ongoing roadmap and iteration, not just a launch",
      "Timeline scoped to your roadmap",
    ],
    highlighted: false,
  },
];

const pricingFaqs: Faq[] = [
  {
    question: "Is this a fixed price or an estimate?",
    answer:
      "These are ranges based on past engagements of similar scope. After a discovery call, we send a fixed-scope proposal with a firm price — no hourly billing surprises.",
  },
  {
    question: "Do you offer payment milestones?",
    answer:
      "Yes. Most engagements are split into 3–4 milestone payments tied to project phases — kickoff, design approval, development completion, and launch.",
  },
  {
    question: "What's not included in these ranges?",
    answer:
      "Third-party costs like hosting, premium plugin licenses, stock photography, or paid ad spend are billed separately at cost, with no markup.",
  },
  {
    question: "Do you offer retainers after launch?",
    answer:
      "Yes — ongoing maintenance and iteration retainers start at ₹40,000/month, covering monitoring, security patching, and a pool of hours for small changes.",
  },
];

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      <PageHero
        eyebrow="Pricing"
        title="Transparent ranges. Fixed-scope proposals."
        description="Every engagement is scoped individually after a discovery call, but here's what past projects in each tier have typically cost."
        breadcrumbs={crumbs}
      />

      <section className="pb-28 lg:pb-36">
        <Container>
          <RevealGroup className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <Reveal key={tier.name} as="div">
                <GlassCard
                  className={`h-full p-8 ${tier.highlighted ? "border-brand-blue-300 shadow-premium" : ""}`}
                >
                  {tier.highlighted && (
                    <span className="mb-4 inline-block rounded-full bg-brand-blue-600 px-3 py-1 text-xs font-medium text-white">
                      Most common
                    </span>
                  )}
                  <h2 className="font-display text-2xl font-medium text-ink-900">{tier.name}</h2>
                  <p className="mt-2 font-display text-xl font-semibold text-brand-blue-700">
                    {tier.price}
                  </p>
                  <p className="mt-3 text-sm text-ink-600">{tier.description}</p>
                  <ul className="mt-6 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-700">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="mt-0.5 shrink-0 text-brand-green-600"
                          aria-hidden
                        >
                          <path
                            d="M3.5 8.5L6.5 11.5L12.5 4.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <MagneticButton
                      href="/contact"
                      className="w-full"
                      variant={tier.highlighted ? "primary" : "secondary"}
                    >
                      Get a quote
                    </MagneticButton>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="pb-28 lg:pb-36">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="font-display text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
                Pricing questions
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="mt-10">
            <FAQAccordion items={pricingFaqs} />
          </Reveal>
        </Container>
      </section>

      <CTA />
    </>
  );
}
