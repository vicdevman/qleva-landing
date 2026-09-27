import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Without this, Google discovers pages only by crawling links — and for a new
 * domain with few inbound links that can take weeks. A sitemap is the cheapest
 * possible signal that these URLs exist and are meant to be indexed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/docs`, lastModified, changeFrequency: "weekly", priority: 0.8 },
  ];
}
