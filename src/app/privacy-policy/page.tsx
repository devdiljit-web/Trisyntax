import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your personal information.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

const sections = [
  {
    heading: "Introduction",
    body: [
      `This Privacy Policy explains how ${siteConfig.legalName} ("TriSyntax", "we", "us") collects, uses, and protects information when you visit ${siteConfig.url} or engage us for services. By using our website, you agree to the collection and use of information as described here.`,
    ],
  },
  {
    heading: "Information We Collect",
    body: [
      "We collect information you provide directly, such as your name, email address, phone number, and project details submitted through our contact and newsletter forms.",
      "We also collect limited technical information automatically, including browser type, device type, pages visited, and referring URLs, via standard analytics tools.",
    ],
  },
  {
    heading: "How We Use Information",
    body: [
      "We use the information we collect to respond to inquiries, prepare proposals, deliver contracted services, send newsletter updates you've opted into, and improve our website's performance and content.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    heading: "Cookies & Analytics",
    body: [
      "Our website may use cookies and similar technologies to understand site usage and improve user experience. You can disable cookies through your browser settings; some site functionality may be affected as a result.",
    ],
  },
  {
    heading: "Third-Party Services",
    body: [
      "We may use third-party services for hosting, analytics, and email delivery. These providers process data solely to perform services on our behalf and are contractually bound to protect it.",
    ],
  },
  {
    heading: "Data Security",
    body: [
      "We take reasonable technical and organizational measures to protect personal information against unauthorized access, alteration, disclosure, or destruction. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Your Rights",
    body: [
      `You may request access to, correction of, or deletion of your personal information at any time by contacting us at ${siteConfig.email}. We will respond to verified requests within a reasonable timeframe.`,
    ],
  },
  {
    heading: "Children's Privacy",
    body: [
      "Our services are not directed to individuals under the age of 18, and we do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Material changes will be reflected by an updated revision date at the top of this page.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      `Questions about this Privacy Policy can be directed to ${siteConfig.email} or our studio address: ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}, India.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
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
