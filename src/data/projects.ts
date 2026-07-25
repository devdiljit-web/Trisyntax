import type { PhotoKey } from "@/data/images";

export type Metric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  name: string;
  industry: string;
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  services: string[];
  stack: string[];
  metrics: Metric[];
  seoImpact: string;
  businessImpact: string;
  image: PhotoKey;
  gradientFrom: string;
  gradientTo: string;
};

export const projects: Project[] = [
  {
    slug: "northbridge-health",
    name: "Northbridge Health",
    industry: "Healthcare & Wellness",
    tagline: "A patient portal that turned a five-step booking flow into one screen.",
    summary:
      "A complete rebuild of a multi-clinic booking platform, reducing appointment drop-off and giving clinicians a real-time scheduling dashboard.",
    challenge:
      "Northbridge's legacy booking system took an average of 5 form steps and 90 seconds to complete, and mobile users were abandoning at nearly 60%. Clinic staff had no visibility into no-show risk.",
    solution:
      "We designed a single-screen booking flow with progressive disclosure, built on Next.js with server-rendered availability data, and shipped a real-time staff dashboard using a Postgres-backed scheduling engine.",
    services: ["UI/UX Design", "Next.js Development", "Full-Stack Development"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Vercel"],
    metrics: [
      { label: "Booking completion", value: "+58%" },
      { label: "Page load (LCP)", value: "1.1s" },
      { label: "Mobile drop-off", value: "-41%" },
    ],
    seoImpact: "Organic clinic-page traffic grew 3.2x within four months of launch, driven by location-based landing pages and schema-marked service listings.",
    businessImpact:
      "Northbridge added two new clinic locations to the platform within the first year, citing booking capacity as the primary constraint previously.",
    image: "healthcareLaptop",
    gradientFrom: "var(--color-brand-blue-500)",
    gradientTo: "var(--color-brand-green-500)",
  },
  {
    slug: "ledgerly",
    name: "Ledgerly",
    industry: "FinTech & Banking",
    tagline: "A marketing site and dashboard rebuilt to earn enterprise trust.",
    summary:
      "Ledgerly needed a product marketing site and customer dashboard that felt as trustworthy as the compliance software it sells to finance teams.",
    challenge:
      "As a Series A fintech, Ledgerly's site looked like a template and undermined sales conversations with enterprise prospects who expected bank-grade polish.",
    solution:
      "We built a design system grounded in restrained typography and data-dense dashboard patterns, then implemented it across a Next.js marketing site and a React application shell with role-based access.",
    services: ["Website Design", "UI/UX Design", "Full-Stack Development"],
    stack: ["Next.js", "React", "Node.js", "MongoDB", "Docker"],
    metrics: [
      { label: "Demo requests", value: "+72%" },
      { label: "Time to first byte", value: "180ms" },
      { label: "Lighthouse score", value: "99" },
    ],
    seoImpact: "Restructured content around buyer-intent keywords lifted first-page rankings for 14 target terms within six months.",
    businessImpact:
      "Ledgerly closed its first three enterprise contracts within two quarters of relaunch, each citing the new site during procurement review.",
    image: "fintechCard",
    gradientFrom: "var(--color-brand-green-600)",
    gradientTo: "var(--color-brand-blue-700)",
  },
  {
    slug: "solace-home",
    name: "Solace Home",
    industry: "E-Commerce & Retail",
    tagline: "A Shopify storefront engineered for conversion, not just aesthetics.",
    summary:
      "A full storefront rebuild for a home goods brand, focused on checkout speed, merchandising flexibility, and mobile conversion.",
    challenge:
      "Solace Home's existing Shopify theme was slow on mobile, had no merchandising flexibility for seasonal campaigns, and checkout abandonment sat above industry average.",
    solution:
      "We built a custom Shopify theme with modular sections for merchandising, optimized image delivery, and a streamlined one-page checkout experience with saved-cart recovery.",
    services: ["Shopify Development", "UI/UX Design", "SEO & Performance"],
    stack: ["Shopify", "JavaScript", "Tailwind CSS", "Cloudflare"],
    metrics: [
      { label: "Conversion rate", value: "+34%" },
      { label: "Mobile page speed", value: "+47pts" },
      { label: "Cart abandonment", value: "-19%" },
    ],
    seoImpact: "Category page restructuring and image optimization contributed to a 2.1x increase in organic search revenue year over year.",
    businessImpact:
      "Solace Home scaled from 2 to 6 product categories on the same platform without a single performance regression.",
    image: "ecommercePOS",
    gradientFrom: "var(--color-brand-blue-600)",
    gradientTo: "var(--color-brand-green-400)",
  },
  {
    slug: "fieldwise",
    name: "Fieldwise",
    industry: "SaaS & Technology",
    tagline: "A field-operations platform rebuilt for offline-first reliability.",
    summary:
      "Fieldwise needed a technician-facing web app that worked reliably in low-connectivity job sites while syncing seamlessly with the office dashboard.",
    challenge:
      "Field technicians were losing work when connectivity dropped mid-job, and the existing app had no conflict resolution when syncing offline changes.",
    solution:
      "We architected an offline-first PWA with local-first data storage and background sync, paired with a real-time dispatch dashboard for office staff.",
    services: ["Full-Stack Development", "API Development", "Custom Web Applications"],
    stack: ["React", "Node.js", "PostgreSQL", "Docker", "Vercel"],
    metrics: [
      { label: "Sync failures", value: "-93%" },
      { label: "Technician adoption", value: "97%" },
      { label: "Dispatch time", value: "-28%" },
    ],
    seoImpact: "Not applicable — internal operations platform, not indexed for public search.",
    businessImpact:
      "Fieldwise reduced technician onboarding time from two weeks to three days thanks to the redesigned in-app workflow.",
    image: "analyticsLaptop",
    gradientFrom: "var(--color-brand-green-500)",
    gradientTo: "var(--color-brand-blue-500)",
  },
  {
    slug: "arcade-legal",
    name: "Arcade Legal",
    industry: "Professional Services",
    tagline: "An authority-building site for a boutique litigation firm.",
    summary:
      "A content-rich website designed to demonstrate case expertise and convert high-value consultation requests.",
    challenge:
      "Arcade Legal relied entirely on referrals — their existing site had no case study structure, weak search visibility, and no clear consultation path.",
    solution:
      "We built an editorial-style case results section, attorney profile pages with structured data, and a friction-light consultation request flow.",
    services: ["Website Design", "SEO & Performance"],
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    metrics: [
      { label: "Consultation requests", value: "+61%" },
      { label: "Organic sessions", value: "+145%" },
      { label: "Avg. session duration", value: "+2:12" },
    ],
    seoImpact: "Local business schema and practice-area landing pages moved the firm into the top 3 results for 9 of 12 target local search terms.",
    businessImpact:
      "Arcade Legal now attributes roughly a third of new client inquiries directly to organic search, up from near zero before relaunch.",
    image: "handshake",
    gradientFrom: "var(--color-brand-blue-700)",
    gradientTo: "var(--color-brand-green-600)",
  },
];

export const featuredProjects = projects.slice(0, 4);
