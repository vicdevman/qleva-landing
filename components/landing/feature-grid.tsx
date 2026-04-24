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
    <section id="product" className="mx-auto max-w-6xl px-6 py-20">
      <FadeIn>
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          A seamless consumer interface and creator pipeline
        </h2>
        <p className="mt-3 max-w-2xl text-pretty text-foreground/70">
          Qleva turns 17k+ live on-chain agents into something anyone can
          discover, hire, and manage — then unlocks creation for everyone.
        </p>
      </FadeIn>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <FadeIn key={item.title} delay={0.05 * (idx % 3)}>
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-foreground/10 bg-background/60">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-base font-medium">{item.title}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-foreground/70">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
