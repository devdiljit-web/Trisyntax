/**
 * Curated, verified Unsplash photo IDs, grouped by theme. A value can also be
 * a local asset path (e.g. "/images/banner.webp") to override with a real,
 * on-brand photo — `unsplashUrl()` passes local paths through unchanged.
 */
export const photoIds = {
  heroTeam: "/images/banner.webp",
  teamCollab: "/images/full-stack-development.png",
  teamPlanning: "/images/team-collab.png",
  teamLaughing: "1522202176988-66273c2fd55f",
  wireframeSketch: "/images/ui-ux.png",
  wireframeSketchClose: "1581291518857-4e27b48ff24e",
  laptopCode: "1498050108023-c5249f4df085",
  analyticsLaptop: "/images/analytic.png",
  searchConsole: "/images/seo-performance.png",
  circuitMacro: "/images/ai-integration.png",
  motherboardMacro: "/images/next-js.png",
  networkCables: "/images/api-development.png",
  earthNight: "1451187580459-43490279c0fa",
  ecommercePOS: "/images/e-commerce-pos.png",
  productMockupScreen: "/images/website-design.png",
  premiumOfficeView: "1497215728101-856f4ea42174",
  handshake: "1521791136064-7986c2920216",
  fintechCard: "/images/e-commerce.png",
  healthcareLaptop: "/images/health-care.png",
  realEstateKeys: "1560518883-ce09059eeffa",
  educationLibrary: "1523240795612-9a054b0db644",
  hospitalityResort: "1566073771259-6a8506099945",
  saasOfficeOverhead: "1553028826-f4804a6dba3b",
} as const;

export type PhotoKey = keyof typeof photoIds;
