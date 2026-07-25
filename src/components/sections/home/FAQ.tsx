import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { homeFaqs } from "@/data/faqs";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function FAQ() {
  return (
    <section className="py-28 lg:py-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>FAQs</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-tight tracking-tight text-ink-900 sm:text-5xl">
                Questions we hear before every project.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-ink-600">
                Can&apos;t find what you&apos;re looking for?{" "}
                <a href="/faqs" className="font-medium text-brand-blue-700 underline underline-offset-4">
                  Browse the full FAQ
                </a>{" "}
                or reach out directly.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <FAQAccordion items={homeFaqs} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
