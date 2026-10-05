import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Title, description, canonical URL and Open Graph for a public page. Next
 * merges metadata one level deep, so each page sets its own openGraph here
 * rather than inheriting a partial one from the root layout.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: "en_GB",
      url: path,
      title: title ? `${title} — ${siteConfig.name}` : siteConfig.defaultTitle,
      description,
    },
  };
}

/** Utility pages that shouldn't appear in search results. */
export const NO_INDEX: Metadata["robots"] = { index: false, follow: true };
