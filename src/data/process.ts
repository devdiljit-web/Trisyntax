export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with your business, not your brief — goals, users, constraints, and what success actually looks like in six months.",
  },
  {
    number: "02",
    title: "Research",
    description:
      "Competitive audits, user research, and technical scoping so every decision downstream is evidence-based.",
  },
  {
    number: "03",
    title: "Planning",
    description:
      "Information architecture, content strategy, and a project roadmap with clear milestones and ownership.",
  },
  {
    number: "04",
    title: "Wireframing",
    description:
      "Low-fidelity structure first, so we validate flows and layout logic before a single pixel is styled.",
  },
  {
    number: "05",
    title: "UI Design",
    description:
      "High-fidelity design systems — typography, color, components — crafted for your brand and built to scale.",
  },
  {
    number: "06",
    title: "Development",
    description:
      "Clean, tested, component-driven code shipped in reviewable increments, not a single black-box handoff.",
  },
  {
    number: "07",
    title: "Testing",
    description:
      "Cross-browser, cross-device QA, accessibility audits, and performance benchmarking before anything ships.",
  },
  {
    number: "08",
    title: "Optimization",
    description:
      "Core Web Vitals, SEO structure, and analytics instrumentation tuned before launch, not after.",
  },
  {
    number: "09",
    title: "Launch",
    description:
      "A coordinated go-live with rollback plans, monitoring, and a team on standby — no launch-day surprises.",
  },
  {
    number: "10",
    title: "Maintenance",
    description:
      "Ongoing support, security patching, and iteration so the product keeps improving after day one.",
  },
];
