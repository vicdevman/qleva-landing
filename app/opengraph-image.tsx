import { ImageResponse } from "next/og";
import { SITE_TAGLINE } from "@/lib/site";

export const alt = "Qleva — crypto automation you can read before you sign";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The card that appears whenever the link is shared.
 *
 * It matters more than it looks: a link with no OG image renders as a bare grey
 * rectangle in Slack, Discord, X and iMessage — which is most of how an early
 * product actually gets seen, and the difference between "someone shared a
 * tool" and "someone pasted a URL".
 *
 * Generated rather than a static PNG so it cannot drift from the tagline, and
 * deliberately plain: inline styles, a system font stack, no external fetches.
 * Every asset an OG image references has to be fetched at render time, and a
 * slow card is often a card that never renders at all.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#090909",
          padding: 72,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#ffce48",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 800,
              color: "#11100c",
            }}
          >
            Q
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, color: "#f7f4ea", letterSpacing: -0.5 }}>
            Qleva
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.05,
              fontWeight: 700,
              color: "#f7f4ea",
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            {SITE_TAGLINE}
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.4, color: "#b8b4aa", maxWidth: 820 }}>
            Describe it in plain English. Approve limits the chain enforces. Non-custodial, on Base.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ height: 4, width: 56, background: "#ffce48", borderRadius: 2 }} />
          <div style={{ fontSize: 24, color: "#77736b", fontWeight: 600 }}>qleva.cloud</div>
        </div>
      </div>
    ),
    size,
  );
}
