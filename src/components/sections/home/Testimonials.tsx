"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollBy(dir: 1 | -1) {
    scrollerRef.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  }

  return (
    <section className="py-28 lg:py-36">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <Eyebrow>Client Testimonials</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-medium leading-tight tracking-tight text-ink-900 sm:text-5xl">
                Trusted by teams who take their product seriously.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                aria-label="Previous testimonial"
                className="flex size-11 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-colors hover:border-brand-blue-300 hover:text-brand-blue-700"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M9.5 3.5 4 9l5.5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                aria-label="Next testimonial"
                className="flex size-11 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-colors hover:border-brand-blue-300 hover:text-brand-blue-700"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M6.5 3.5 12 9l-5.5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </Reveal>
        </div>

        <div
          ref={scrollerRef}
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="w-[85%] shrink-0 snap-start rounded-3xl border border-ink-200 bg-white p-9 sm:w-[420px]"
            >
              <span className="font-display text-5xl text-brand-blue-200" aria-hidden>
                &ldquo;
              </span>
              <blockquote className="-mt-4 text-lg leading-relaxed text-ink-700">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-linear-to-br from-brand-blue-600 to-brand-green-600 text-sm font-medium text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="font-medium text-ink-900">{t.name}</p>
                  <p className="text-sm text-ink-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
