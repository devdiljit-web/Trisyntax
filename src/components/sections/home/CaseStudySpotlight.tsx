import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/Button";
import { projects } from "@/data/projects";

const spotlight = projects[0];

export function CaseStudySpotlight() {
  return (
    <section className="py-28 lg:py-36">
      <Container>
        <Reveal>
          <Eyebrow>Case Study</Eyebrow>
        </Reveal>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-ink-200 bg-ink-950 text-white">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 sm:p-14">
              <p className="text-sm font-medium text-brand-green-400">
                {spotlight.industry}
              </p>
              <h3 className="mt-4 text-balance font-display text-3xl font-medium leading-tight sm:text-4xl">
                {spotlight.tagline}
              </h3>

              <div className="mt-10 space-y-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-400">
                    The Challenge
                  </h4>
                  <p className="mt-2 text-ink-200">{spotlight.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-400">
                    The Solution
                  </h4>
                  <p className="mt-2 text-ink-200">{spotlight.solution}</p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {spotlight.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs text-ink-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10">
                <MagneticButton href={`/case-studies/${spotlight.slug}`} variant="secondary" className="bg-white/5 border-white/15 text-white hover:bg-white/10">
                  Read the full case study
                </MagneticButton>
              </div>
            </div>

            <div className="relative flex flex-col justify-center gap-6 border-t border-white/10 bg-white/[0.03] p-10 sm:p-14 lg:border-l lg:border-t-0">
              {spotlight.metrics.map((metric) => (
                <div key={metric.label} className="border-b border-white/10 pb-6 last:border-0">
                  <p className="font-display text-5xl font-semibold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-ink-400">{metric.label}</p>
                </div>
              ))}
              <p className="text-sm text-ink-400">
                <Link href="/case-studies" className="underline decoration-white/30 underline-offset-4 hover:text-white">
                  See how we measure impact across every engagement
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
