import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 pb-24 pt-10">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-linear-to-br from-surface via-background to-surface">
          <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-blue-500/5" />
          <div className="relative p-6 md:p-10">
            <div className="flex flex-col items-center gap-8 w-full text-center">
              <div>
                <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                  Start hiring agents on Base
                </h2>
                <p className="mt-3 max-w-xl text-pretty text-foreground/70">
                  Join the waitlist to test chat discovery, one-tap hiring, and a
                  live dashboard for agents on Base. No seed phrases. No complexity.
                </p>
              </div>

              <div className="w-full max-w-md">
                <form
                  className="flex flex-col gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input
                    className="h-11 w-full rounded-2xl border border-foreground/10 bg-background/60 px-4 text-sm outline-none ring-0 placeholder:text-foreground/40 focus:border-foreground/20"
                    type="email"
                    required
                    placeholder="Email address"
                    name="email"
                    autoComplete="email"
                  />
                  <input
                    className="h-11 w-full rounded-2xl border border-foreground/10 bg-background/60 px-4 text-sm outline-none ring-0 placeholder:text-foreground/40 focus:border-foreground/20"
                    type="text"
                    placeholder="What do you want agents to do? (optional)"
                    name="usecase"
                  />
                  <Button type="submit" className="h-11">
                    Join waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
