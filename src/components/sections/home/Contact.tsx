import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { AbstractMap } from "@/components/ui/AbstractMap";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-50/60 via-transparent to-brand-green-50/40" />
        <div className="absolute -left-32 top-24 size-[26rem] rounded-full bg-brand-blue-300/30 blur-3xl will-change-transform animate-float" />
        <div className="absolute -right-40 bottom-10 size-[30rem] rounded-full bg-brand-green-300/30 blur-3xl will-change-transform [animation:float_9s_ease-in-out_infinite_1.2s]" />
      </div>

      <Container>
        <div className="grid gap-16 items-center lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Get In Touch</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-tight tracking-tight text-ink-900 sm:text-5xl">
                Tell us about your project.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-ink-600">
                Whether it&apos;s a full product build or a focused redesign,
                we&apos;ll follow up with a scoped proposal — no discovery
                call required to get started.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-10 space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-ink-500">Email</span>
                  <a href={`mailto:${siteConfig.email}`} className="font-medium text-ink-900 hover:text-brand-blue-700">
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-ink-500">Phone</span>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="font-medium text-ink-900 hover:text-brand-blue-700">
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-ink-500">Studio</span>
                  <span className="font-medium text-ink-900">
                    {siteConfig.address.street}, {siteConfig.address.city},{" "}
                    {siteConfig.address.region} {siteConfig.address.postalCode}
                  </span>
                </div>
              </div>
            </Reveal>

            {/* <Reveal delay={0.28} className="mt-10 hidden lg:block">
              <AbstractMap />
            </Reveal> */}
          </div>

          <Reveal delay={0.15} y={40}>
            <div className="relative">
              <div
                className="absolute -inset-px -z-10 rounded-[33px] bg-gradient-to-br from-brand-blue-400/60 via-brand-blue-200/20 to-brand-green-400/60 opacity-70 blur-md animate-glow-pulse"
                aria-hidden
              />
              <div className="glass relative rounded-[32px] p-8 shadow-premium sm:p-10">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:hidden">
            <AbstractMap />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
