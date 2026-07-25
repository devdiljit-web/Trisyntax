import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { CTA } from "@/components/sections/home/CTA";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Why Choose TriSyntax",
  description:
    "Engineering-led design, direct access to senior talent, transparent milestone-based delivery, and SEO built into the architecture — what sets TriSyntax apart.",
  alternates: { canonical: "/why-choose-us" },
  openGraph: {
    title: `Why Choose Us — ${siteConfig.name}`,
    description: "What you get with a studio built to engineering standards.",
    url: `${siteConfig.url}/why-choose-us`,
  },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Why Choose Us", path: "/why-choose-us" },
];

const comparison = [
  { criteria: "Who writes your code", typical: "Junior devs you never meet", trisyntax: "The senior team you talk to" },
  { criteria: "Performance budget", typical: "Checked after launch, if at all", trisyntax: "Enforced from the first commit" },
  { criteria: "Project visibility", typical: "Monthly status email", trisyntax: "Live project board, weekly demos" },
  { criteria: "SEO & schema", typical: "Bolted on afterward", trisyntax: "Built into the architecture" },
  { criteria: "Post-launch support", typical: "Best-effort, slow response", trisyntax: "30-day stabilization + retainers" },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      <PageHero
        eyebrow="Why TriSyntax"
        title="What you get with a studio built to engineering standards."
        description="Plenty of agencies can ship a good-looking homepage. Here's what's actually different about working with TriSyntax."
        breadcrumbs={crumbs}
      />

      <section className="pb-16">
        <Container>
          <Reveal>
            <div className="overflow-x-auto rounded-3xl border border-ink-200">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-ink-200 bg-ink-50">
                    <th className="px-6 py-4 text-sm font-medium text-ink-500">Criteria</th>
                    <th className="px-6 py-4 text-sm font-medium text-ink-500">Typical agency</th>
                    <th className="px-6 py-4 text-sm font-medium text-brand-blue-700">TriSyntax</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.criteria} className="border-b border-ink-100 last:border-0">
                      <td className="px-6 py-4 font-medium text-ink-900">{row.criteria}</td>
                      <td className="px-6 py-4 text-ink-500">{row.typical}</td>
                      <td className="px-6 py-4 font-medium text-brand-green-700">{row.trisyntax}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </section>

      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}
