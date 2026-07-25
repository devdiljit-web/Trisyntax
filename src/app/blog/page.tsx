import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on design, engineering, and growth from the TriSyntax team — performance, UX, Next.js, e-commerce, and AI integration.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog — ${siteConfig.name}`,
    description: "Notes on design, engineering, and growth.",
    url: `${siteConfig.url}/blog`,
  },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      <PageHero
        eyebrow="Blog"
        title="Notes on design, engineering, and growth."
        description="What we're learning from the projects we ship — written by the people who actually build them."
        breadcrumbs={crumbs}
      />

      <section className="pb-28 lg:pb-36">
        <Container>
          <RevealGroup className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Reveal key={post.slug} as="div">
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="flex h-full flex-col rounded-3xl border border-ink-200 bg-white p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-premium">
                    <span className="inline-flex w-fit rounded-full bg-brand-blue-50 px-3 py-1 text-xs font-medium text-brand-blue-700">
                      {post.category}
                    </span>
                    <h2 className="mt-5 font-display text-xl font-medium leading-snug text-ink-900">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-[0.9375rem] text-ink-600">{post.excerpt}</p>
                    <div className="mt-6 flex items-center justify-between text-sm text-ink-400">
                      <span>
                        {new Date(post.date).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
