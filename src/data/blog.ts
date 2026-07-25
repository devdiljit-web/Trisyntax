export type BlogSection = {
  heading: string;
  body: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: "Performance" | "UX Design" | "Engineering" | "E-Commerce" | "Architecture" | "AI";
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-core-web-vitals-still-decide-conversion",
    title: "Why Core Web Vitals Still Decide Conversion Rates in 2026",
    category: "Performance",
    excerpt:
      "A 100ms delay in load time can cost you real revenue. Here's how we approach performance budgets on every build.",
    readTime: "6 min read",
    date: "2026-03-11",
    author: "TriSyntax Engineering",
    sections: [
      {
        heading: "The gap between 'fast enough' and fast",
        body: [
          "Most teams find out their site is slow when a client complains, not when a metric crosses a threshold. By then, the cost is already baked in — every additional second before Largest Contentful Paint correlates with measurably higher bounce rates, and that pattern hasn't changed in years of Core Web Vitals data.",
          "The teams that avoid this aren't smarter about performance. They just treat it as a budget, not an audit item.",
        ],
      },
      {
        heading: "What a performance budget actually looks like",
        body: [
          "On every project, we set a hard ceiling before development starts: LCP under 2 seconds, JavaScript under a set weight per route, and zero unstyled content flashes. Pull requests that break the budget fail CI the same way a broken test would.",
          "This sounds strict, but it removes the debate later. Nobody has to argue about whether a hero video is worth the hit — the budget already answered that question.",
        ],
      },
      {
        heading: "Where the real cost hides",
        body: [
          "It's rarely the framework. It's usually third-party scripts — analytics, chat widgets, marketing pixels — loaded synchronously without anyone measuring the cumulative weight. We audit every third-party script before it ships and load almost everything through a facade pattern that defers until user interaction.",
          "Images are the second biggest lever, and the easiest to fix: correct formats, real responsive sizes, and lazy loading below the fold gets most sites most of the way there.",
        ],
      },
      {
        heading: "The business case, not just the technical one",
        body: [
          "We've measured mobile drop-off fall by over 40% after a booking flow went from a 4-second load to just over 1 second on a recent healthcare client project. That's not a vanity metric — it's appointments booked instead of abandoned.",
          "Performance work rarely gets budgeted on its own. It gets budgeted when someone can show what slow is actually costing.",
        ],
      },
    ],
  },
  {
    slug: "designing-trust-into-fintech-interfaces",
    title: "Designing Trust Into FinTech Interfaces",
    category: "UX Design",
    excerpt:
      "The visual language patterns that make financial products feel secure — and the ones that quietly erode confidence.",
    readTime: "8 min read",
    date: "2026-02-24",
    author: "TriSyntax Design",
    sections: [
      {
        heading: "Trust is a design decision, not a tagline",
        body: [
          "Users decide whether to trust a financial product within seconds, often before reading a word of copy. Typography weight, whitespace discipline, and how numbers are formatted all carry more signal than a security badge in the footer.",
        ],
      },
      {
        heading: "Patterns that build confidence",
        body: [
          "Restrained color palettes read as more trustworthy than vibrant ones in financial contexts — this isn't an aesthetic opinion, it shows up consistently in usability testing across our fintech engagements.",
          "Showing your work matters too: transaction states, fee breakdowns, and confirmation steps that show exactly what's about to happen reduce support tickets and increase completion rates simultaneously.",
        ],
      },
      {
        heading: "Where products quietly lose trust",
        body: [
          "Ambiguous loading states during money movement are the single biggest trust-killer we see. If a user can't tell whether a transfer is processing or stuck, they'll refresh, resubmit, or call support — all worse outcomes than a slower but clearer progress indicator.",
          "Inconsistent number formatting (currency symbols that shift position, inconsistent decimal precision) is a smaller issue that compounds the same way.",
        ],
      },
      {
        heading: "What we changed for Ledgerly",
        body: [
          "For a recent fintech dashboard rebuild, we replaced ambiguous spinner states with explicit step indicators ('Verifying → Processing → Complete') and rebuilt the number formatting system to be consistent across every surface. Demo-to-close rate on enterprise deals improved measurably in the following two quarters.",
        ],
      },
    ],
  },
  {
    slug: "nextjs-app-router-migration-playbook",
    title: "Our Next.js App Router Migration Playbook",
    category: "Engineering",
    excerpt:
      "Lessons from migrating six production applications to the App Router without a single regression.",
    readTime: "10 min read",
    date: "2026-01-30",
    author: "TriSyntax Engineering",
    sections: [
      {
        heading: "Why we migrate incrementally, not all at once",
        body: [
          "The App Router and Pages Router can coexist in the same Next.js app, which means a migration doesn't have to be a big-bang rewrite. We move route-by-route, starting with the lowest-risk, lowest-traffic pages to validate the pattern before touching anything customer-critical.",
        ],
      },
      {
        heading: "The data-fetching mental shift",
        body: [
          "The biggest adjustment isn't syntax, it's where data fetching lives. Server Components change the default from 'fetch in a hook, render a spinner' to 'fetch on the server, stream the result.' Teams that fight this and keep client-side fetching patterns everywhere miss most of the performance benefit.",
        ],
      },
      {
        heading: "Where migrations actually break",
        body: [
          "Context providers that assume they're always client-side, third-party libraries with hard dependencies on the Pages Router lifecycle, and CSS-in-JS libraries without React Server Component support are the three places we've hit real friction across six migrations.",
          "We now audit the dependency tree for RSC compatibility before committing to a timeline — it changes the estimate more than anything else.",
        ],
      },
      {
        heading: "What to test before calling it done",
        body: [
          "Beyond the obvious functional testing, we specifically verify hydration behavior on slow connections, confirm metadata and Open Graph tags render correctly per-route, and load-test streaming responses under concurrent traffic. Regressions here are quiet — they don't throw errors, they just degrade.",
        ],
      },
    ],
  },
  {
    slug: "real-cost-of-a-slow-checkout-flow",
    title: "The Real Cost of a Slow Checkout Flow",
    category: "E-Commerce",
    excerpt:
      "Checkout abandonment isn't a marketing problem first — in most audits we run, it's an engineering one.",
    readTime: "7 min read",
    date: "2026-01-14",
    author: "TriSyntax Engineering",
    sections: [
      {
        heading: "The audit usually starts in the wrong place",
        body: [
          "When a store's abandonment rate is high, the instinct is to test new copy or a different discount strategy. In most audits we run, the actual issue is technical: a checkout step that takes an extra 2-3 seconds to validate, or a payment form that re-renders and loses input on mobile.",
        ],
      },
      {
        heading: "What we measure first",
        body: [
          "Time-to-interactive on the checkout page specifically, not the homepage. Field-level form abandonment (which input field users stall on). And whether the checkout works identically on a mid-range Android device on a throttled connection — most QA never leaves a fast laptop on office wifi.",
        ],
      },
      {
        heading: "The fixes that consistently move the number",
        body: [
          "Reducing checkout to a single scrollable page instead of a multi-step wizard, saving cart state so a dropped connection doesn't lose progress, and showing shipping costs before the final step rather than as a surprise — these three changes alone accounted for most of the 19% abandonment reduction we measured on a recent Shopify rebuild.",
        ],
      },
    ],
  },
  {
    slug: "what-we-look-for-before-recommending-headless-cms",
    title: "What We Look For Before Recommending a Headless CMS",
    category: "Architecture",
    excerpt:
      "Headless isn't automatically better. Here's the actual checklist we use before recommending the switch.",
    readTime: "6 min read",
    date: "2025-12-18",
    author: "TriSyntax Engineering",
    sections: [
      {
        heading: "Headless solves a specific problem",
        body: [
          "It solves publishing across multiple channels — web, app, in-store displays — from one content source, and it solves editor workflows that a traditional CMS's templating system can't support. It does not automatically make a site faster or more secure; that depends entirely on the frontend built on top of it.",
        ],
      },
      {
        heading: "Questions we ask before recommending it",
        body: [
          "Does your content actually need to reach more than one channel? Does your editorial team need preview environments before publishing? Is your current CMS's templating the actual bottleneck, or is it something else entirely?",
          "If the honest answer to all three is no, a well-built traditional CMS setup is usually faster to ship and cheaper to maintain.",
        ],
      },
      {
        heading: "When we do recommend it",
        body: [
          "A recent client publishing the same product content to a website, a partner portal, and a mobile app was maintaining three separate copies by hand. Headless CMS with a shared content model cut their publishing time from days to hours and eliminated an entire class of content-drift bugs.",
        ],
      },
    ],
  },
  {
    slug: "practical-framework-for-scoping-ai-features",
    title: "A Practical Framework for Scoping AI Features",
    category: "AI",
    excerpt:
      "Most 'add AI' requests aren't actually AI problems. Here's how we separate genuine opportunities from hype.",
    readTime: "7 min read",
    date: "2025-11-27",
    author: "TriSyntax Engineering",
    sections: [
      {
        heading: "The first question we ask",
        body: [
          "Is this a search problem, an automation problem, or a generation problem? Most requests that arrive as 'we need AI' are actually a search problem in disguise — users can't find something that already exists in the system.",
        ],
      },
      {
        heading: "Where AI earns its cost",
        body: [
          "Retrieval-augmented search grounded in a company's own documentation or product catalog consistently delivers value because it's answering questions the data can actually support. Copilots that draft a first pass of a repetitive task — support replies, product descriptions — save real time when a human still reviews the output.",
        ],
      },
      {
        heading: "Where it doesn't",
        body: [
          "Generative features with no grounding in real data, or anything customer-facing with no human review step, are where we push back hardest. The failure mode isn't dramatic — it's a slow erosion of trust when outputs are subtly wrong often enough.",
        ],
      },
      {
        heading: "How we scope the actual build",
        body: [
          "Before writing any integration code, we define what 'good' output looks like with concrete examples, build an evaluation set to test against, and agree on a fallback behavior for when the model is uncertain. That scoping conversation usually takes longer than people expect — and it's the reason the feature doesn't embarrass anyone six weeks after launch.",
        ],
      },
    ],
  },
];
