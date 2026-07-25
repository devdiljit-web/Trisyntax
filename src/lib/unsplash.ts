const BASE = "https://images.unsplash.com/photo-";

/**
 * Builds an optimized Unsplash URL from a photo id. If `id` is already a
 * local asset path (e.g. "/images/banner.webp"), it's returned as-is so
 * local overrides work as a drop-in replacement for any Unsplash photo key.
 */
export function unsplashUrl(id: string, width = 1600, quality = 80) {
  if (id.startsWith("/") || id.startsWith("http")) return id;
  return `${BASE}${id}?q=${quality}&w=${width}&auto=format&fit=crop`;
}
