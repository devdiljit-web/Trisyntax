import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms governing use of ${siteConfig.name}'s website and services.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Terms of Service", path: "/terms" },
];

const sections = [
  {
    heading: "Acceptance of Terms",
    body: [
      `By accessing ${siteConfig.url} or engaging ${siteConfig.legalName} ("TriSyntax", "we", "us") for services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.`,
    ],
  },
  {
    heading: "Services Described",
    body: [
      "TriSyntax provides website design, UI/UX design, software development, and related digital services. The specific scope, deliverables, timeline, and pricing for any engagement are defined in a separate written proposal or service agreement signed by both parties, which takes precedence over general statements on this website.",
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      "Upon full payment for a project, ownership of the final deliverables — code, design files, and content created specifically for that project — transfers to the client, except for pre-existing tools, frameworks, or components TriSyntax retains rights to reuse across projects.",
      "TriSyntax retains the right to showcase completed work in its portfolio and marketing materials unless otherwise agreed in writing.",
    ],
  },
  {
    heading: "Client Responsibilities",
    body: [
      "Clients are responsible for providing timely feedback, content, and access to systems required to complete a project. Delays in providing required materials may affect project timelines.",
    ],
  },
  {
    heading: "Payment Terms",
    body: [
      "Payment schedules are defined per project in the applicable proposal, typically structured as milestone-based payments. Late payments may result in a pause of work until accounts are brought current.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, TriSyntax's total liability for any claim arising from our services is limited to the amount paid by the client for the specific engagement giving rise to the claim. We are not liable for indirect, incidental, or consequential damages.",
    ],
  },
  {
    heading: "Third-Party Services",
    body: [
      "Projects may rely on third-party platforms, hosting providers, or paid services. TriSyntax is not responsible for outages, policy changes, or pricing changes made by third-party providers outside our control.",
    ],
  },
  {
    heading: "Termination",
    body: [
      "Either party may terminate an active engagement with written notice as specified in the applicable service agreement. Work completed up to the termination date will be invoiced and payable.",
    ],
  },
  {
    heading: "Governing Law",
    body: [
      "These Terms are governed by the laws of India, and any disputes will be subject to the exclusive jurisdiction of the courts of Chandigarh, Punjab.",
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      "We may update these Terms from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      `Questions about these Terms can be directed to ${siteConfig.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated: March 1, 2026"
        breadcrumbs={crumbs}
      />

      <section className="pb-28 lg:pb-36">
        <Container className="mx-auto max-w-3xl space-y-10">
          {sections.map((section) => (
            <Reveal key={section.heading}>
              <div>
                <h2 className="font-display text-xl font-medium text-ink-900">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3 text-ink-600">
                  {section.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
