/**
 * site.ts
 * ───────
 * One place for the facts search engines and social cards read.
 *
 * Centralised because these values appear in the metadata, the sitemap, the
 * robots file, the OG image and three JSON-LD blocks — and a canonical URL that
 * disagrees with the sitemap is worse than having neither. Google treats the
 * contradiction as a reason to trust neither signal.
 */

export const SITE_URL = "https://qleva.cloud";
export const APP_URL = "https://app.qleva.cloud";
export const SITE_NAME = "Qleva";

export const SITE_TAGLINE = "Crypto automation you can read before you sign";

/**
 * Written to answer the query rather than to praise the product.
 *
 * Someone searching "non-custodial crypto automation" is asking a question, and
 * a page that visibly contains the answer outranks one that says "the future of
 * finance". The phrases here are the ones people actually type.
 */
export const SITE_DESCRIPTION =
  "Qleva turns plain English into on-chain automation on Base. Schedule recurring buys, set price triggers and chain multi-step strategies from a non-custodial smart wallet — with spending limits enforced on-chain, not promised.";

/**
 * Keywords are not a ranking signal any more, but this list has a second job:
 * it is the checklist for whether the page COPY covers the queries we want.
 * Every phrase here should appear somewhere a human can read it. If it only
 * exists in a meta tag, it is doing nothing.
 */
export const SITE_KEYWORDS = [
  "crypto automation",
  "non-custodial automation",
  "smart wallet automation",
  "onchain automation",
  "Base network automation",
  "delegated permissions crypto",
  "automated DCA crypto",
  "crypto price triggers",
  "self-custody automation",
  "recurring crypto buys",
  "AI crypto assistant",
  "account abstraction wallet",
];

/**
 * The page's own sections, in document order.
 *
 * Shared by the navigation, the scroll indicator and the `SiteNavigationElement`
 * structured data, so all three describe the same page. A nav that disagrees
 * with the anchors is the usual reason a scroll-spy highlights the wrong item.
 */
export const SECTIONS = [
  { id: "how-it-works", label: "How it works" },
  { id: "product", label: "Use cases" },
  { id: "showcase", label: "In practice" },
  { id: "security", label: "Security" },
  { id: "portfolio", label: "Portfolio" },
  { id: "features", label: "Features" },
  { id: "demo", label: "Demo" },
  { id: "comparison", label: "Compare" },
  { id: "faq", label: "FAQ" },
] as const;
