export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "TriSyntax rebuilt our entire booking platform in ten weeks and our page load times dropped by more than half. The team communicated like an in-house department, not a vendor.",
    name: "Ananya Rao",
    role: "VP of Product",
    company: "Northbridge Health",
    initials: "AR",
  },
  {
    quote:
      "We came in with a rough idea and a messy spreadsheet of requirements. TriSyntax turned it into a design system and a product roadmap we still use eighteen months later.",
    name: "Marcus Webb",
    role: "Co-Founder",
    company: "Ledgerly",
    initials: "MW",
  },
  {
    quote:
      "Our Shopify conversion rate went up 34% after the redesign. What stood out was how much they cared about the details nobody asks about — checkout latency, image weight, all of it.",
    name: "Priya Menon",
    role: "Head of E-Commerce",
    company: "Solace Home",
    initials: "PM",
  },
  {
    quote:
      "Every sprint ended with something we could actually click through. No black box, no surprises at the end. That transparency is rare in this industry.",
    name: "Daniel Cho",
    role: "CTO",
    company: "Fieldwise",
    initials: "DC",
  },
  {
    quote:
      "They didn't just design a beautiful site — they rebuilt our information architecture so our sales team finally has a site that supports the pitch instead of undermining it.",
    name: "Sara Klein",
    role: "Marketing Director",
    company: "Arcade Legal",
    initials: "SK",
  },
];
