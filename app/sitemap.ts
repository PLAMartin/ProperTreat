import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Public, indexable pages only: login and signup are noindex utility pages.
// lastModified is omitted because there are no real per-page revision dates.
const ROUTES = [
  "/",
  "/how-it-works",
  "/pricing",
  "/templates",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({ url: `${siteConfig.url}${route === "/" ? "" : route}` }));
}
