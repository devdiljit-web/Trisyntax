import type { PhotoKey } from "@/data/images";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  icon:
    | "layout"
    | "figma"
    | "code"
    | "server"
    | "layers"
    | "cart"
    | "search"
    | "gauge"
    | "wrench"
    | "cube"
    | "api"
    | "brain"
    | "workflow";
  image: PhotoKey;
  idealFor: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "website-design",
    title: "Website Design",
    shortTitle: "Website Design",
    summary:
      "Editorial-grade visual systems that make a brand feel inevitable, from information architecture to pixel-level polish.",
    icon: "layout",
    image: "productMockupScreen",
    idealFor: "Brands whose current site undersells the quality of their product or service.",
    features: [
      "Information architecture and content strategy before a single pixel is placed",
      "A custom design system — typography, color, spacing, and components",
      "High-fidelity, responsive layouts for every breakpoint",
      "Handoff-ready design files and a component library your team can extend",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX Design",
    summary:
      "Research-led product design — wireframes, prototypes, and design systems that reduce friction and build trust.",
    icon: "figma",
    image: "wireframeSketch",
    idealFor: "Product teams shipping a new app, dashboard, or complex workflow.",
    features: [
      "User research, journey mapping, and usability audits",
      "Low-fidelity wireframes validated before high-fidelity design begins",
      "Interactive prototypes for stakeholder and user testing",
      "A scalable design system with documented components and states",
    ],
  },
  {
    slug: "frontend-development",
    title: "Frontend Development",
    shortTitle: "Frontend",
    summary:
      "Pixel-accurate, accessible interfaces built with modern component architecture and buttery-smooth interactions.",
    icon: "code",
    image: "laptopCode",
    idealFor: "Teams with a design ready to build, or a legacy frontend due for a rebuild.",
    features: [
      "Pixel-accurate implementation from Figma or existing brand guidelines",
      "Component-driven architecture built for reuse and long-term maintenance",
      "WCAG-conscious markup with keyboard and screen-reader support",
      "Performance budgets enforced from the first commit",
    ],
  },
  {
    slug: "backend-development",
    title: "Backend Development",
    shortTitle: "Backend",
    summary:
      "Secure, scalable services and data layers engineered for reliability under real production load.",
    icon: "server",
    image: "networkCables",
    idealFor: "Products that need a data layer, auth, or business logic built to last.",
    features: [
      "Database schema design and data modeling for your actual access patterns",
      "Authentication, authorization, and role-based access control",
      "Queues, background jobs, and third-party service integration",
      "Monitoring, logging, and alerting wired in from day one",
    ],
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    shortTitle: "Full-Stack",
    summary:
      "One team, end to end — from database schema to deployed UI, shipped as a single coherent product.",
    icon: "layers",
    image: "teamCollab",
    idealFor: "Founders and teams who want one accountable partner for the entire build.",
    features: [
      "A single team covering architecture, backend, frontend, and deployment",
      "Weekly demos against a shared project board — no black-box handoffs",
      "CI/CD pipelines and staging environments set up from week one",
      "Documentation your internal team can pick up after launch",
    ],
  },
  {
    slug: "nextjs-development",
    title: "Next.js Development",
    shortTitle: "Next.js",
    summary:
      "Server-first React applications with the App Router, streaming, and edge rendering for sub-second loads.",
    icon: "cube",
    image: "motherboardMacro",
    idealFor: "Teams that want React's ecosystem with production-grade performance by default.",
    features: [
      "App Router architecture with server components and streaming",
      "Edge and ISR rendering strategies matched to your content model",
      "Type-safe data fetching and server actions where they simplify the stack",
      "Core Web Vitals treated as a build requirement, not an afterthought",
    ],
  },
  {
    slug: "react-development",
    title: "React Development",
    shortTitle: "React",
    summary:
      "Composable, type-safe component libraries built to scale across teams and product surfaces.",
    icon: "code",
    image: "wireframeSketchClose",
    idealFor: "Product teams building a design system or a component-heavy application.",
    features: [
      "TypeScript-first component architecture with documented props and states",
      "State management chosen for your actual complexity, not trend-of-the-year",
      "Testing strategy covering unit, integration, and visual regression",
      "Storybook or equivalent living documentation for design and engineering",
    ],
  },
  {
    slug: "laravel-development",
    title: "Laravel Development",
    shortTitle: "Laravel",
    summary:
      "Robust PHP applications with clean architecture, queues, and integrations that hold up at scale.",
    icon: "server",
    image: "teamPlanning",
    idealFor: "Teams already invested in PHP, or needing a mature admin/back-office system.",
    features: [
      "Clean, layered architecture following Laravel best practices",
      "Queue-driven background processing for emails, exports, and integrations",
      "Role-based admin panels built on Filament or a custom stack",
      "Upgrade paths planned for long-term Laravel version support",
    ],
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    shortTitle: "WordPress",
    summary:
      "Custom themes and blocks on a headless-ready WordPress stack — fast, editable, and secure.",
    icon: "layout",
    image: "teamLaughing",
    idealFor: "Marketing teams who need to self-edit content without touching code.",
    features: [
      "Custom Gutenberg blocks matched to your actual content structure",
      "Headless WordPress with a Next.js frontend where performance demands it",
      "Editor-friendly page building without visual builder bloat",
      "Security hardening, backups, and update management",
    ],
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    shortTitle: "Shopify",
    summary:
      "Custom storefronts and app integrations engineered for conversion and checkout speed.",
    icon: "cart",
    image: "ecommercePOS",
    idealFor: "DTC and retail brands who've outgrown a stock Shopify theme.",
    features: [
      "Custom Shopify theme built on the Online Store 2.0 architecture",
      "Merchandising sections built for how your team actually runs campaigns",
      "Checkout, shipping, and app integrations configured and load-tested",
      "Core Web Vitals optimization tuned specifically for Shopify's platform constraints",
    ],
  },
  {
    slug: "headless-cms",
    title: "Headless CMS",
    shortTitle: "Headless CMS",
    summary:
      "Content architecture that lets marketing move fast without ever touching a line of code.",
    icon: "layers",
    image: "premiumOfficeView",
    idealFor: "Teams publishing frequently across multiple channels or locales.",
    features: [
      "Content modeling that matches how your team actually writes and structures content",
      "Editor-friendly preview environments before anything goes live",
      "Multi-locale and multi-channel publishing support",
      "Integration with your existing frontend, whatever it's built on",
    ],
  },
  {
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    shortTitle: "E-Commerce",
    summary:
      "High-converting storefronts with fast checkout, inventory sync, and payments done right.",
    icon: "cart",
    image: "fintechCard",
    idealFor: "Retailers who need a storefront engineered for conversion, not just aesthetics.",
    features: [
      "Conversion-focused product, cart, and checkout flows",
      "Inventory, pricing, and fulfillment sync with your existing systems",
      "Payment gateway integration with fraud and failure handling",
      "Performance budgets enforced on every product and category page",
    ],
  },
  {
    slug: "seo-performance",
    title: "SEO & Performance Optimization",
    shortTitle: "SEO & Performance",
    summary:
      "Technical SEO, Core Web Vitals, and content architecture engineered to rank and convert.",
    icon: "search",
    image: "searchConsole",
    idealFor: "Sites with real traffic potential that technical debt is currently suppressing.",
    features: [
      "Technical SEO audit covering crawlability, indexing, and site architecture",
      "Core Web Vitals remediation with before/after benchmarking",
      "Structured data and schema markup across key page types",
      "Content and internal linking strategy tied to real keyword opportunity",
    ],
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    shortTitle: "Maintenance",
    summary:
      "Proactive monitoring, security patching, and continuous improvement after launch day.",
    icon: "wrench",
    image: "analyticsLaptop",
    idealFor: "Teams who shipped a site and now need it to keep running without surprises.",
    features: [
      "Uptime, error, and performance monitoring with alerting",
      "Regular dependency, framework, and security patching",
      "Monthly performance and Core Web Vitals reporting",
      "A retainer pool of hours for ongoing fixes and small iterations",
    ],
  },
  {
    slug: "custom-web-applications",
    title: "Custom Web Applications",
    shortTitle: "Web Apps",
    summary:
      "Bespoke internal tools and SaaS platforms shaped around how your team actually works.",
    icon: "gauge",
    image: "saasOfficeOverhead",
    idealFor: "Operations teams drowning in spreadsheets and disconnected tools.",
    features: [
      "Workflow mapping before any code is written",
      "Role-based dashboards and permissioning built around your org chart",
      "Integrations with the tools your team already relies on",
      "An architecture designed to be extended as requirements evolve",
    ],
  },
  {
    slug: "api-development",
    title: "API Development",
    shortTitle: "APIs",
    summary:
      "Well-documented REST and GraphQL APIs designed for versioning, security, and third-party integration.",
    icon: "api",
    image: "networkCables",
    idealFor: "Teams exposing data or functionality to partners, mobile apps, or internal services.",
    features: [
      "REST or GraphQL API design with clear versioning strategy",
      "Authentication, rate limiting, and abuse protection built in",
      "Interactive API documentation your partners can actually use",
      "Contract testing so breaking changes get caught before deploy",
    ],
  },
  {
    slug: "ai-integrations",
    title: "AI Integrations",
    shortTitle: "AI Integrations",
    summary:
      "Practical AI features — search, copilots, and automation — grounded in your real data and workflows.",
    icon: "brain",
    image: "circuitMacro",
    idealFor: "Teams who want AI features grounded in their own data, not a generic chatbot bolt-on.",
    features: [
      "Use-case scoping to separate genuine AI opportunities from hype",
      "Retrieval-augmented search and copilots grounded in your own content",
      "Evaluation and guardrails so outputs stay accurate and on-brand",
      "Cost and latency budgets treated as first-class design constraints",
    ],
  },
  {
    slug: "automation-solutions",
    title: "Automation Solutions",
    shortTitle: "Automation",
    summary:
      "Workflow automation that removes manual busywork from operations, sales, and support teams.",
    icon: "workflow",
    image: "motherboardMacro",
    idealFor: "Teams manually copying data between tools or triaging repetitive tickets.",
    features: [
      "Process audit to find the highest-leverage automation opportunities",
      "Integrations across your CRM, support, and internal tooling",
      "Error handling and human-in-the-loop review for anything customer-facing",
      "Documentation so your team can maintain automations after handoff",
    ],
  },
];

export const featuredServices = services.filter((s) =>
  [
    "website-design",
    "ui-ux-design",
    "nextjs-development",
    "full-stack-development",
    "ecommerce-development",
    "seo-performance",
    "api-development",
    "ai-integrations",
  ].includes(s.slug)
);
