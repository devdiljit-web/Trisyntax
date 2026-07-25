export const siteConfig = {
  name: "TriSyntax",
  legalName: "TriSyntax Technologies",
  tagline: "Engineering software that performs like it looks.",
  description:
    "TriSyntax is a web design and software engineering studio building high-performance websites, products, and platforms for ambitious brands — from Next.js frontends to scalable backend systems.",
  url: "https://trisyntax.vercel.app",
  ogImage: "/og/trisyntax-og.jpg",
  email: "hello@trisyntax.com",
  phone: "+91 172 400 0000",
  address: {
    street: "IT Park",
    city: "Chandigarh",
    region: "Punjab",
    postalCode: "160101",
    country: "IN",
  },
  businessHours: [
    { days: "Monday – Friday", hours: "9:30 AM – 6:30 PM IST" },
    { days: "Saturday", hours: "10:00 AM – 2:00 PM IST" },
    { days: "Sunday", hours: "Closed" },
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/trisyntax",
    twitter: "https://twitter.com/trisyntax",
    github: "https://github.com/Jaiwant-thomas/",
    instagram: "https://www.instagram.com/trisyntax",
    dribbble: "https://dribbble.com/trisyntax",
  },
  founded: "2024",
} as const;

export type NavChild = {
  label: string;
  href: string;
  description: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Website Design",
        href: "/services/website-design",
        description: "Editorial-grade design systems built for conversion.",
      },
      {
        label: "UI/UX Design",
        href: "/services/ui-ux-design",
        description: "Research-led interfaces people trust instantly.",
      },
      {
        label: "Next.js & React Development",
        href: "/services/nextjs-development",
        description: "Fast, resilient frontends engineered for scale.",
      },
      {
        label: "Full-Stack & API Development",
        href: "/services/full-stack-development",
        description: "End-to-end product engineering, cloud to client.",
      },
      {
        label: "E-Commerce & Shopify",
        href: "/services/ecommerce-development",
        description: "Storefronts engineered to convert and scale.",
      },
      {
        label: "SEO & Performance",
        href: "/services/seo-performance",
        description: "Sub-second load times and top-tier rankings.",
      },
    ],
  },
  {
    label: "Work",
    href: "/portfolio",
    children: [
      {
        label: "Portfolio",
        href: "/portfolio",
        description: "Selected product and web engineering work.",
      },
      {
        label: "Case Studies",
        href: "/case-studies",
        description: "The strategy and metrics behind the work.",
      },
      {
        label: "Industries",
        href: "/industries",
        description: "Sectors we build category-defining software for.",
      },
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      {
        label: "About TriSyntax",
        href: "/about",
        description: "Our mission, values, and engineering philosophy.",
      },
      {
        label: "Our Process",
        href: "/process",
        description: "How we take ideas from brief to production.",
      },
      {
        label: "Careers",
        href: "/careers",
        description: "Build your career with a craft-first studio.",
      },
      {
        label: "Blog",
        href: "/blog",
        description: "Insights on design, engineering, and growth.",
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
];

export const footerLinks = {
  services: [
    { label: "Website Design", href: "/services/website-design" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "Next.js Development", href: "/services/nextjs-development" },
    { label: "Full-Stack Development", href: "/services/full-stack-development" },
    { label: "E-Commerce", href: "/services/ecommerce-development" },
    { label: "SEO & Performance", href: "/services/seo-performance" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "Careers", href: "/careers" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faqs" },
    { label: "Pricing", href: "/pricing" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
