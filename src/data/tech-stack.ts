export type Technology = {
  name: string;
  category: "Language" | "Framework" | "Styling" | "CMS" | "Database" | "Cloud & DevOps";
};

export const technologies: Technology[] = [
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "HTML5", category: "Language" },
  { name: "CSS3", category: "Language" },
  { name: "PHP", category: "Language" },
  { name: "React", category: "Framework" },
  { name: "Next.js", category: "Framework" },
  { name: "Node.js", category: "Framework" },
  { name: "Laravel", category: "Framework" },
  { name: "Astro", category: "Framework" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "WordPress", category: "CMS" },
  { name: "Shopify", category: "CMS" },
  { name: "MongoDB", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Firebase", category: "Database" },
  { name: "Git", category: "Cloud & DevOps" },
  { name: "GitHub", category: "Cloud & DevOps" },
  { name: "Docker", category: "Cloud & DevOps" },
  { name: "Vercel", category: "Cloud & DevOps" },
  { name: "Cloudflare", category: "Cloud & DevOps" },
];
