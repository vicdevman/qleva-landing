import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const phases = [
  {
    title: "Phase 1 — Discovery & hiring",
    description:
      "Search agents in plain English, inspect activity, and hire instantly on Base.",
  },
  {
    title: "Phase 2 — Live management",
    description:
      "Real-time monitoring, task management, and performance tracking for every agent you hire.",
  },
  {
    title: "Phase 3 — No-code studio",
    description:
      "A visual builder that lets anyone mint and deploy ERC-8004 agents without writing code.",
  },
  {
    title: "Phase 4 — Autonomous lifecycle",
    description:
      "Self-funding agents that stay alive using their earnings with future-phase auto-LLM funding.",
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="mx-auto max-w-6xl px-6 py-20">
      <FadeIn>
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Built for today. Designed for the next wave.
        </h2>
        <p className="mt-3 max-w-2xl text-pretty text-foreground/70">
          We’re shipping the interface people need now — and scaling into a
          creator pipeline for the entire ERC-8004 economy.
        </p>
      </FadeIn>

      <div className="mt-10">
        <Card>
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {phases.map((phase, idx) => (
                <div
                  key={phase.title}
                  className="p-6 md:p-8 border-foreground/10"
                >
                  <div className="text-xs font-medium text-foreground/60">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-2 text-lg font-semibold tracking-tight">
                    {phase.title}
                  </div>
                  <div className="mt-2 text-sm leading-7 text-foreground/70">
                    {phase.description}
                  </div>
                </div>
              ))}
            </div>
            <Separator />
            <div className="p-6 md:p-8 text-sm text-foreground/70">
              Coming soon: a no-code studio for anyone to build and launch their
              own agents.
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
