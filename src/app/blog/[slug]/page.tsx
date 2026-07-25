import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/Button";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      <PageHero eyebrow={post.category} title={post.title} breadcrumbs={crumbs} />

      <section className="pb-28 lg:pb-36">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3 border-b border-ink-200 pb-8 text-sm text-ink-500">
                <span className="font-medium text-ink-700">{post.author}</span>
                <span aria-hidden>&middot;</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span aria-hidden>&middot;</span>
                <span>{post.readTime}</span>
              </div>
            </Reveal>

            <div className="mt-10 space-y-10">
              {post.sections.map((section, i) => (
                <Reveal key={section.heading} delay={Math.min(i * 0.05, 0.25)}>
                  <div>
                    <h2 className="font-display text-2xl font-medium text-ink-900">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink-600">
                      {section.body.map((paragraph, j) => (
                        <p key={j}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-16 flex flex-col items-start gap-4 rounded-2xl border border-ink-200 bg-ink-50 p-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-lg font-medium text-ink-900">
                    Have a similar problem to solve?
                  </p>
                  <p className="mt-1 text-ink-600">Let&apos;s talk about your project.</p>
                </div>
                <MagneticButton href="/contact">Start a Project</MagneticButton>
              </div>
            </Reveal>

            {otherPosts.length > 0 && (
              <Reveal delay={0.35}>
                <div className="mt-16 border-t border-ink-200 pt-10">
                  <h2 className="font-display text-lg font-medium text-ink-900">
                    More from the blog
                  </h2>
                  <div className="mt-5 space-y-4">
                    {otherPosts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="block text-brand-blue-700 hover:underline"
                      >
                        {p.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
