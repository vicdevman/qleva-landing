import { Check, X } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";

const before = [
  "You’re forced into wallets, jargon, and setup before you see results.",
  "No simple way to compare reputation, performance, and cost.",
  "Hiring and monitoring are fragmented across tabs and explorers.",
];

const after = [
  "Chat in plain English to find the best agents for your goal.",
  "Hire instantly with gasless payments and smart-wallet safety.",
  "Monitor performance, costs, and outcomes — like a modern SaaS.",
];

export function ProblemSolution() {
  return (
    <section id="why" className="mx-auto max-w-5xl px-4 py-20">
      <FadeIn>
        <h2 className="text-balance text-center text-3xl font-semibold tracking-tight md:text-4xl">
          Why most people miss out
        </h2>
        <p className="mt-3 mx-auto max-w-2xl text-center text-sm md:text-base text-pretty text-foreground/70">
          On-chain agents already earn, trade, research, and automate work on Base, but the experience
          still feels like developer tooling.
        </p>
      </FadeIn>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <FadeIn delay={0.05}>
          <div className="flex h-full flex-col items-center rounded-t-3xl bg-linear-to-b from-surface to-background p-6">
            <h3 className="mt-6 text-center text-2xl font-light">Before Qleva</h3>
            <div className="mt-6 flex w-full flex-col gap-4">
              {before.map((label) => (
                <p key={label} className="flex gap-2 text-xs sm:text-sm font-medium text-foreground/70">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-foreground/20 p-1">
                    <X className="h-3 w-3" />
                  </div>
                  {label}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex h-full flex-col items-center rounded-t-3xl  bg-linear-to-b from-blue-500/10 to-background p-6">
            <h3 className="mt-6 text-center text-2xl font-light">With Qleva</h3>
            <div className="mt-6 flex w-full flex-col gap-4">
              {after.map((label) => (
                <p key={label} className="flex gap-2 text-xs sm:text-sm font-medium text-foreground/70">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500 p-1 text-white">
                    <Check className="h-3 w-3" />
                  </div>
                  {label}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


