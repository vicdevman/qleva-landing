import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    // Declared explicitly. qleva.com is an unrelated, older, better-linked
    // domain, and search engines resolving "qleva" have to choose between them.
    // This does not win that on its own, but leaving it ambiguous guarantees
    // losing it.
    host: SITE_URL,
  };
}
