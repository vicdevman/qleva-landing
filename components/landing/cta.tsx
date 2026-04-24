import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 pb-24 pt-10">
      <FadeIn>
        <Card>
          <CardContent className="p-6 md:p-10">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                  Get early access to Qleva
                </h2>
                <p className="mt-3 max-w-xl text-pretty text-foreground/70">
                  Join the waitlist to test chat discovery, one-tap hiring, and a
                  live dashboard for agents on Base.
                </p>
              </div>

              <div className="rounded-3xl border border-foreground/10 bg-background/60 p-4 backdrop-blur-xl">
                <form
                  className="flex flex-col gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input
                    className="h-11 w-full rounded-2xl border border-foreground/10 bg-background/70 px-4 text-sm outline-none ring-0 placeholder:text-foreground/40 focus:border-foreground/20"
                    type="email"
                    required
                    placeholder="Email address"
                    name="email"
                    autoComplete="email"
                  />
                  <input
                    className="h-11 w-full rounded-2xl border border-foreground/10 bg-background/70 px-4 text-sm outline-none ring-0 placeholder:text-foreground/40 focus:border-foreground/20"
                    type="text"
                    placeholder="What do you want agents to do? (optional)"
                    name="usecase"
                  />
                  <Button type="submit" className="h-11">
                    Join waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="text-xs text-foreground/50">
                    This form is UI-only for now. Wire it to your backend when
                    ready.
                  </div>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </section>
  );
}
