import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTA } from "@/components/sections/home/CTA";
import { faqCategories } from "@/data/faqs";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about TriSyntax's pricing, process, timeline, technology choices, and post-launch support.",
  alternates: { canonical: "/faqs" },
  openGraph: {
    title: `FAQs — ${siteConfig.name}`,
    description: "Answers to common questions about working with TriSyntax.",
    url: `${siteConfig.url}/faqs`,
  },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQs", path: "/faqs" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((cat) =>
    cat.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    }))
  ),
};

export default function FaqsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      <PageHero
        eyebrow="FAQs"
        title="Questions we hear before every project."
        description="If you don't see your question here, reach out directly — we respond within one business day."
        breadcrumbs={crumbs}
      />

      <section className="pb-28 lg:pb-36">
        <Container className="mx-auto max-w-3xl space-y-16">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <Reveal>
                <h2 className="font-display text-2xl font-medium text-ink-900">
                  {cat.category}
                </h2>
              </Reveal>
              <Reveal delay={0.06} className="mt-6">
                <FAQAccordion items={cat.faqs} />
              </Reveal>
            </div>
          ))}
        </Container>
      </section>

      <CTA />
    </>
  );
}
