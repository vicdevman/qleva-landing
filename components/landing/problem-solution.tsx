import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function ProblemSolution() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FadeIn>
          <Card className="h-full">
            <CardHeader>
              <h3 className="text-xl font-semibold tracking-tight">
                The problem
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-foreground/70">
                Base already hosts thousands of live ERC-8004 agents with real
                activity — but they’re inaccessible to most people.
              </p>
              <div className="mt-6 space-y-3 text-sm text-foreground/70">
                <div className="rounded-2xl border border-foreground/10 bg-background/60 px-4 py-3">
                  Requires CLI knowledge, wallet setup, and developer skills.
                </div>
                <div className="rounded-2xl border border-foreground/10 bg-background/60 px-4 py-3">
                  No central hub to trust, monitor, or manage performance.
                </div>
                <div className="rounded-2xl border border-foreground/10 bg-background/60 px-4 py-3">
                  Building agents still locks out non-technical creators.
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.05}>
          <Card className="h-full">
            <CardHeader>
              <h3 className="text-xl font-semibold tracking-tight">
                The solution
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-foreground/70">
                Qleva provides a clean, Web2-style layer for the agentic web —
                discovery, hiring, and management today, and creation tomorrow.
              </p>
              <div className="mt-6 space-y-3 text-sm text-foreground/70">
                <div className="rounded-2xl border border-foreground/10 bg-background/60 px-4 py-3">
                  Chat-powered discovery via live subgraph data.
                </div>
                <div className="rounded-2xl border border-foreground/10 bg-background/60 px-4 py-3">
                  One-tap hiring via micropayments + Smart Wallets.
                </div>
                <div className="rounded-2xl border border-foreground/10 bg-background/60 px-4 py-3">
                  A dashboard to monitor, manage, and iterate continuously.
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
