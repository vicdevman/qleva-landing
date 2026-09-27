import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { SecurityModel } from "@/components/site/security-model";

/**
 * The security model, in public.
 *
 * WHY THIS PAGE EXISTS
 *
 * The landing page's "Read the security model" button pointed at `#`. That is
 * worse than having no button: the one claim the whole product rests on was the
 * only one with nothing behind it.
 *
 * This is written for the reader who does not believe us — a developer, an
 * auditor, or anyone who has been burned by a product that said "your keys,
 * your coins" and meant something narrower. It states the mechanism, and it
 * states what we cannot yet claim.
 */
export const metadata: Metadata = {
  title: "Security model",
  description:
    "What Qleva can and cannot do with your funds, and who enforces it. Spending limits are enforced by the smart contract holding your money, not by Qleva's servers — including the gaps we have not closed yet.",
  alternates: { canonical: `${SITE_URL}/security` },
  openGraph: {
    title: "Qleva security model",
    description:
      "Assume our servers are fully compromised. Here is what is still true — and what isn't.",
    url: `${SITE_URL}/security`,
  },
};

export default function SecurityPage() {
  return <SecurityModel />;
}
