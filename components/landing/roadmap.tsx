import * as React from "react";

import { FadeIn } from "@/components/motion/fade-in";

const phases = [
  {
    title: "Phase 1 — Discovery & hire",
    description:
      "Chat in plain English to find top-rated Base agents. Inspect live performance, then hire with one tap via Smart Wallet.",
  },
  {
    title: "Phase 2 — Monitor & manage",
    description:
      "Live dashboards for every hired agent: earnings, tasks, costs, and reputation. Pause, resume, or withdraw anytime.",
  },
  {
    title: "Phase 3 — No-code builder",
    description:
      "Drag-and-drop templates to mint ERC-8004 agents with on-chain identity, smart wallets, and programmable policies.",
  },
  {
    title: "Phase 4 — Autonomous economy",
    description:
      "Agents pay other agents for subtasks. Self-funding lifecycle with auto-LLM funding and optional token launch.",
  },
];

export function Roadmap() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      // Calculate progress (0 to 1) based on how much of the section has been scrolled
      const progress = Math.max(
        0,
        Math.min(
          1,
          (windowHeight - sectionTop) / (windowHeight + sectionHeight)
        )
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <FadeIn>
        <h2 className="text-balance text-center text-3xl font-semibold tracking-tight md:text-4xl">
          Built for today. Scaling for the agent economy.
        </h2>
        <p className="mt-3 mx-auto max-w-2xl text-center text-pretty text-foreground/70">
          We're shipping the interface people need now, then opening the door
          for anyone to build, mint, and earn from agents.
        </p>
      </FadeIn>

      <div className="mt-12 relative max-w-3xl mx-auto">
        {/* Base timeline line */}
        <div className="absolute left-[1.15rem] top-2 bottom-2 w-px bg-linear-to-b from-foreground/20 via-foreground/40 to-foreground/20 md:left-1/2 md:-translate-x-1/2" />
        
        {/* Blue light effect that follows scroll */}
        <div
          className="absolute left-[1.15rem] w-1 bg-linear-to-b from-blue-500/0 via-blue-500 to-blue-500/0 transition-all duration-300 ease-out md:left-1/2 md:-translate-x-1/2"
          style={{
            top: `${Math.max(0, scrollProgress * 100 - 15)}%`,
            height: "25%",
            opacity: 1,
          }}
        />
        
        {/* Blue glow at current scroll position */}
        <div
          className="absolute left-[1.15rem] w-4 -translate-x-1/2 rounded-full bg-blue-500 blur-xl transition-all duration-300 ease-out md:left-1/2"
          style={{
            top: `${scrollProgress * 100}%`,
            opacity: 1,
          }}
        />

        <div className="space-y-8">
          {phases.map((phase, idx) => (
            <FadeIn key={phase.title} delay={0.08 * idx}>
              <div className="relative flex items-center gap-6">
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-surface text-xs font-medium text-foreground/70 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-500 md:hidden">
                  {String(idx + 1)}
                </div>
                <div className="flex-1 rounded-2xl border border-foreground/10 bg-surface p-5 transition-all duration-300">
                  <div className="text-sm font-semibold tracking-tight">
                    {phase.title}
                  </div>
                  <div className="mt-2 text-sm leading-7 text-foreground/70">
                    {phase.description}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
