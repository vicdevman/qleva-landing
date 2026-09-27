import type { Metadata, Viewport } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import {
  APP_URL,
  SECTIONS,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

/**
 * WHY THIS BLOCK IS LONG
 *
 * qleva.cloud was invisible for its own name. The previous metadata was a title
 * and a description — no `metadataBase`, no canonical, no OG image, no
 * structured data, no sitemap. Without `metadataBase` every absolute URL Next
 * tries to emit stays relative, every social card is a grey rectangle, and a
 * crawler has nothing to attach an identity to.
 *
 * That matters more than usual here because qleva.com exists, is older and is
 * better linked. When two domains share a brand name the tie is broken by
 * everything below: a declared identity, a consistent canonical, and copy that
 * visibly answers the query. Meta tags alone will not win it — but without them
 * the fight is not being had at all.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  // The self-referencing canonical is what tells a crawler which URL is real
  // when it arrives via a share link carrying tracking parameters.
  alternates: { canonical: "/" },
  category: "technology",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090909" },
  ],
};

/**
 * Structured data.
 *
 * Four linked entities rather than one blob, because they answer different
 * questions a crawler asks: who publishes this, what is the site, what is the
 * thing, and how is the page organised. The `@id` cross-references turn them
 * into one graph instead of four unrelated claims.
 *
 * `SiteNavigationElement` is the one that earns its keep for a single-page
 * site: it tells Google the anchors are real destinations, which is what makes
 * sitelinks to sections possible at all.
 */
function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/qleva-brand-kit/qleva-square.png`,
        description: SITE_DESCRIPTION,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: SITE_NAME,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web, iOS, Android",
        url: APP_URL,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
        featureList: [
          "Natural-language crypto automation",
          "Recurring buys and scheduled transfers",
          "Price-triggered orders",
          "Multi-step strategies with take-profit and stop-loss",
          "Non-custodial smart wallet with on-chain spending limits",
        ],
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      ...SECTIONS.map((section) => ({
        "@type": "SiteNavigationElement",
        "@id": `${SITE_URL}/#nav-${section.id}`,
        name: section.label,
        url: `${SITE_URL}/#${section.id}`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        // `<` is escaped per Next's JSON-LD guide. Nothing user-supplied
        // reaches this object today, but the escape costs nothing and means a
        // future field sourced from anywhere else cannot close the tag early.
        __html: JSON.stringify(graph).replace(/</g, "\u003c"),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${sourceSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-white/10">
        <StructuredData />
        {/*
          `defaultTheme` stays dark, so nothing changes for anyone who has not
          chosen. `enableSystem` is what gives the footer switcher its third
          option — without it "System" would be a button that does nothing.
        */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
