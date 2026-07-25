import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { blogPosts } from "@/data/blog";

const insights = blogPosts.slice(0, 3);

export function Insights() {
  return (
    <section className="py-28 lg:py-36">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <Eyebrow tone="green">Latest Insights</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-medium leading-tight tracking-tight text-ink-900 sm:text-5xl">
                Notes on design, engineering, and growth.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 font-medium text-brand-blue-700"
            >
              Visit the blog
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid gap-6 lg:grid-cols-3">
          {insights.map((post) => (
            <Reveal key={post.slug} as="div">
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="flex h-full flex-col rounded-3xl border border-ink-200 bg-white p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-premium">
                  <span className="inline-flex w-fit rounded-full bg-brand-blue-50 px-3 py-1 text-xs font-medium text-brand-blue-700">
                    {post.category}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-medium leading-snug text-ink-900">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] text-ink-600">
                    {post.excerpt}
                  </p>
                  <p className="mt-6 text-sm text-ink-400">{post.readTime}</p>
                </article>
              </Link>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
