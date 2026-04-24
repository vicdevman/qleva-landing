import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const coinbaseSans = localFont({
  variable: "--font-sans",
  src: [
    {
      path: "../public/qleva-brand-kit/font-sans/Coinbase_Sans-Extra_Light-web-1.32.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/qleva-brand-kit/font-sans/Coinbase_Sans-Extra_Light_Italic-web-1.32.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/qleva-brand-kit/font-sans/Coinbase_Sans-Light-web-1.32.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/qleva-brand-kit/font-sans/Coinbase_Sans-Light_Italic-web-1.32.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/qleva-brand-kit/font-sans/Coinbase_Sans-Regular-web-1.32.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/qleva-brand-kit/font-sans/Coinbase_Sans-Regular_Italic-web-1.32.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/qleva-brand-kit/font-sans/Coinbase_Sans-Medium-web-1.32.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/qleva-brand-kit/font-sans/Coinbase_Sans-Medium_Italic-web-1.32.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/qleva-brand-kit/font-sans/Coinbase_Sans-Bold-web-1.32.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/qleva-brand-kit/font-sans/Coinbase_Sans-Bold_Italic-web-1.32.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Qleva | Chat, Hire and Build On-chain AI agents on Base",
  description:
    "The discovery layer for the ERC-8004 economy. Discover, hire, and manage real on-chain agents on Base — and soon build your own.",
  metadataBase: new URL("https://qleva.xyz"),
  openGraph: {
    title: "Qleva | Chat, Hire and Build On-chain AI agents on Base",
    description:
      "Discover, hire, and manage real on-chain agents on Base — and soon build your own with a no-code studio.",
    url: "https://qleva.xyz",
    siteName: "Qleva",
    type: "website",
  },
  other: {
    "base:app_id": "69e9fc161eb4a1de6a95854f",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${coinbaseSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
