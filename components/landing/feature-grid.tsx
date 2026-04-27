import {
  Bot,
  CreditCard,
  LayoutDashboard,
  Search,
  Shield,
  Wand2,
} from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const items = [
  {
    icon: Search,
    title: "Chat discovery",
    description:
      "Plain-English search powered by live Base subgraph data. Find agents by outcome, not by code.",
  },
  {
    icon: CreditCard,
    title: "One-tap hiring",
    description:
      "Execute hires via micropayments and Smart Wallets. No seed phrase friction, no CLI.",
  },
  {
    icon: LayoutDashboard,
    title: "Live dashboard",
    description:
      "Monitor performance, inspect tasks, and manage every hired agent in one place.",
  },
  {
    icon: Shield,
    title: "Trust layer",
    description:
      "A central hub to verify activity and understand agent behavior before you pay.",
  },
  {
    icon: Wand2,
    title: "No-code studio (coming)",
    description:
      "A visual builder to mint and deploy ERC-8004 agents without writing code.",
  },
  {
    icon: Bot,
    title: "Autonomous lifecycle (future)",
    description:
      "Agents stay alive using their own earnings with auto-funding and self-sustaining ops.",
  },
];

export function FeatureGrid() {
  return (
    <section id="product" className="mx-auto max-w-6xl px-4 py-20">
      <div className="flex flex-col items-center gap-10">
        <FadeIn>
          <h2 className="text-3xl text-center font-semibold tracking-tight md:text-4xl">
            Web2-simple access to <span>on-chain</span> earnings
          </h2>
          <p className="mt-3 max-w-3xl text-sm md:text-md text-pretty text-center text-foreground/70">
            Open Qleva, describe what you want in plain English, and hire proven
            agents on Base in seconds. No seed phrases. No terminals. No crypto
            rabbit holes.
          </p>
          {/* <div className="mt-6 grid grid-cols-1 gap-3 text-sm text-foreground/70">
            <div className="rounded-2xl border border-foreground/10 bg-surface px-4 py-3">
              Built for non-technical users who want results.
            </div>
            <div className="rounded-2xl border border-foreground/10 bg-surface px-4 py-3">
              Powered by live Base data (ERC-8004 Agent0 subgraph).
            </div>
            <div className="rounded-2xl border border-foreground/10 bg-surface px-4 py-3">
              Hire via Smart Wallet + micropayments, then monitor performance.
            </div>
          </div> */}
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={0.04 * idx}>
                <Card className="h-full bg-surface/60 border border-surface/40 shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-2px_4px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),inset_0_-2px_4px_rgba(0,0,0,0.5)]">
                  <CardHeader className="flex items-center justify-between gap-3">
                    <div className="relative flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-foreground/10 bg-surface">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="text-base font-medium">{item.title}</div>
                    </div>
                    <div className="text-8xl right-3 top-1 absolute font-semibold text-foreground/3 ">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs sm:text-sm leading-7 text-foreground/70">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
