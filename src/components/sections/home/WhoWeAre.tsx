import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { photoIds } from "@/data/images";
import { unsplashUrl } from "@/lib/unsplash";

const pillars = [
  {
    title: "Mission",
    copy: "Give ambitious companies the same caliber of digital product that the world's best-funded teams take for granted.",
  },
  {
    title: "Vision",
    copy: "A web where speed, clarity, and craft aren't premium add-ons — they're the baseline every visitor expects.",
  },
  {
    title: "Values",
    copy: "Evidence over opinion, craft over shortcuts, and a bias toward shipping things that hold up under real traffic.",
  },
];

export function WhoWeAre() {
  return (
    <section className="py-28 lg:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <Eyebrow tone="green">Who We Are</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-tight tracking-tight text-ink-900 sm:text-5xl">
                A studio built at the intersection of design and engineering.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-lg text-ink-600">
                TriSyntax is a web design and software engineering studio. We
                pair the visual discipline of a design agency with the
                architectural rigor of a product engineering team — so nothing
                gets lost in the handoff between the two.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-8 sm:grid-cols-3 lg:grid-cols-1">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={0.2 + i * 0.08}>
                  <div className="border-t border-ink-200 pt-5">
                    <h3 className="font-display text-lg font-medium text-ink-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] text-ink-600">
                      {pillar.copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15} y={40}>
            <ImageReveal
              src={unsplashUrl(photoIds.teamPlanning, 1200)}
              alt="TriSyntax designers and engineers planning a project together"
              className="aspect-4/5"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
