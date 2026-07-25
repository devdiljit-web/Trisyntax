import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerLinks, siteConfig } from "@/lib/site-config";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

const socialLinks = [
 { label: "Instagram", href: siteConfig.social.instagram },
 { label: "GitHub", href: siteConfig.social.github },
  
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-display text-sm font-medium text-ink-400">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[0.9375rem] text-ink-200 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-100">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-brand-blue-500), transparent)",
        }}
        aria-hidden
      />

      <Container className="relative py-20 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.7fr] lg:gap-12">
          <div>
            <Logo className="h-18 w-auto text-white" />
            <p className="mt-4 max-w-sm text-balance text-lg text-ink-300">
              {siteConfig.tagline}
            </p>
            <div className="mt-8 max-w-sm">
              <p className="text-sm font-medium text-ink-200">
                Get engineering &amp; design insights, monthly.
              </p>
              <NewsletterForm />
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="text-sm text-ink-400 transition-colors hover:text-brand-green-400"
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <FooterColumn title="Services" links={footerLinks.services} />
            <FooterColumn title="Company" links={footerLinks.company} />
            <FooterColumn title="Resources" links={footerLinks.resources} />
            <div>
              <h3 className="font-display text-sm font-medium text-ink-400">Contact</h3>
              <div className="mt-5 flex flex-col gap-3 text-[0.9375rem] text-ink-200">
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.phone}
                </a>
                <p className="text-ink-300">
                  {siteConfig.address.street}, {siteConfig.address.city},<br />
                  {siteConfig.address.region} {siteConfig.address.postalCode}, India
                </p>
                <p className="mt-1 text-xs text-ink-500">
                  {siteConfig.businessHours[0].days}: {siteConfig.businessHours[0].hours}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-ink-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
