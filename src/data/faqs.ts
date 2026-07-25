export type Faq = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  category: string;
  faqs: Faq[];
};

export const homeFaqs: Faq[] = [
  {
    question: "What does a typical TriSyntax project cost?",
    answer:
      "Most engagements range from ₹3,50,000 for a focused marketing site to ₹40,00,000+ for a full-stack product build. After a discovery call, we send a fixed-scope proposal so there are no surprises — see our Pricing page for detailed ranges.",
  },
  {
    question: "How long does a website or product build take?",
    answer:
      "A marketing website typically takes 4–8 weeks. Full-stack applications range from 10–20 weeks depending on scope. We share a milestone-based timeline before kickoff and update it live as work progresses.",
  },
  {
    question: "Do you only build with Next.js and React?",
    answer:
      "Next.js and React are our default for new product builds because of their performance and hiring advantages, but we also work extensively in Laravel, WordPress, and Shopify depending on your team's existing stack and goals.",
  },
  {
    question: "Can you work with our existing in-house team?",
    answer:
      "Yes — many engagements are collaborative, embedding with an existing engineering or marketing team rather than replacing it. We adapt to your tools, ticketing system, and code review process.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project includes a 30-day post-launch stabilization window. Beyond that, we offer ongoing maintenance retainers covering monitoring, security patches, performance tuning, and feature iteration.",
  },
  {
    question: "Do you provide SEO and content strategy, or only design and code?",
    answer:
      "Both. Every site we ship includes technical SEO — semantic markup, schema, sitemaps, and Core Web Vitals optimization — and we offer ongoing content and keyword strategy as an add-on service.",
  },
];

export const faqCategories: FaqCategory[] = [
  {
    category: "General",
    faqs: [
      {
        question: "What kind of companies does TriSyntax work with?",
        answer:
          "Mostly founders, product teams, and marketing leaders at companies who treat their website or platform as core infrastructure — across fintech, healthcare, e-commerce, real estate, and SaaS.",
      },
      {
        question: "Where is TriSyntax based?",
        answer:
          "We're based in Chandigarh, Punjab, and work with clients across India as well as internationally — most collaboration happens over video calls and a shared project board regardless of timezone.",
      },
      {
        question: "Do you work with startups, or only established companies?",
        answer:
          "Both. Early-stage teams often start with our Launch tier for a focused MVP or marketing site, while established companies typically engage us for full product builds or ongoing platform work.",
      },
      {
        question: "Can I see examples of your past work?",
        answer:
          "Yes — visit our Portfolio and Case Studies pages for a detailed look at past engagements, including the challenge, solution, and measurable results for each.",
      },
    ],
  },
  {
    category: "Process & Timeline",
    faqs: [
      {
        question: "What does the first step look like if I want to start a project?",
        answer:
          "Fill out the contact form with a short project brief. We'll respond within one business day, and if it's a good fit, schedule a discovery call to scope the work in detail.",
      },
      {
        question: "How involved do I need to be during the project?",
        answer:
          "We run weekly demos and keep a live project board, so you can be as involved as you'd like. Most clients spend 1–2 hours a week reviewing progress and giving feedback.",
      },
      {
        question: "What if my requirements change mid-project?",
        answer:
          "Scope changes are normal. We handle them through a simple change-order process that shows the impact on timeline and cost before anything is approved.",
      },
      {
        question: "Do you provide a project manager, or do I work directly with engineers?",
        answer:
          "Both — a senior team member manages the day-to-day, but you'll have direct access to the engineers and designers actually building your project, not just a relay.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    faqs: [
      {
        question: "Do you charge hourly or fixed price?",
        answer:
          "Fixed price, based on a scoped proposal after discovery. We believe hourly billing creates the wrong incentives for both sides.",
      },
      {
        question: "What payment milestones do you use?",
        answer:
          "Most projects are split into 3–4 milestone payments — typically kickoff, design approval, development completion, and launch. Larger engagements may use monthly milestones instead.",
      },
      {
        question: "Are there any hidden costs?",
        answer:
          "No. Third-party costs like hosting, premium licenses, or paid tools are itemized separately at cost, with no markup, and called out during scoping — not discovered later.",
      },
      {
        question: "Do you offer a payment plan for smaller businesses?",
        answer:
          "For Launch-tier engagements, we can discuss a modified payment schedule during the proposal stage. Reach out and we'll work out what's realistic.",
      },
    ],
  },
  {
    category: "Technical",
    faqs: [
      {
        question: "Who owns the code and design files after the project ends?",
        answer:
          "You do. All source code, design files, and documentation are handed over in full, with no vendor lock-in.",
      },
      {
        question: "Can you migrate an existing site instead of rebuilding from scratch?",
        answer:
          "Often, yes — particularly for Next.js App Router migrations or CMS platform changes. We audit the existing codebase first to give an honest estimate of migrate-vs-rebuild.",
      },
      {
        question: "Do you handle hosting and deployment?",
        answer:
          "We set up hosting (typically Vercel, Cloudflare, or a client's preferred provider) and CI/CD pipelines as part of every build, and can continue managing it post-launch through a maintenance retainer.",
      },
      {
        question: "What testing do you do before launch?",
        answer:
          "Cross-browser and cross-device QA, accessibility review, and performance benchmarking against Core Web Vitals — all before launch day, documented in a pre-launch checklist you can review.",
      },
    ],
  },
  {
    category: "Support & Maintenance",
    faqs: [
      {
        question: "What's included in the post-launch stabilization window?",
        answer:
          "Thirty days of bug fixes and small adjustments at no additional cost, to catch anything that only surfaces under real production traffic.",
      },
      {
        question: "What does an ongoing maintenance retainer include?",
        answer:
          "Uptime and performance monitoring, security and dependency patching, monthly reporting, and a pool of hours for small feature iterations — starting at ₹40,000/month.",
      },
      {
        question: "What if something breaks outside business hours?",
        answer:
          "Maintenance retainer clients get a direct escalation contact for critical issues. Response times are outlined in the retainer agreement based on severity.",
      },
      {
        question: "Can I cancel a maintenance retainer at any time?",
        answer:
          "Yes — retainers run month-to-month with 30 days' notice to cancel, so you're never locked into a long-term contract you don't need.",
      },
    ],
  },
];
