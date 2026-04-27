"use client";

import * as React from "react";

import Image from "next/image";

import { useTheme } from "next-themes";

import { Search, Sparkles } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "../ui/button";

function TypingChat() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? resolvedTheme ?? theme : undefined;
  const isDark = currentTheme === "dark";

  const prompts = React.useMemo(
    () => [
      "Help me keep an eye on my token balance",
      "Alert me weekly about new governance proposals",
      "Hire an agent to automate my tasks with payments",
      "Build a tool to manage customer support quickly",
    ],
    [],
  );

  const [promptIndex, setPromptIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const full = prompts[promptIndex] ?? "";

    const doneTyping = text === full;
    const doneDeleting = text.length === 0;

    const typingDelay = 28;
    const deletingDelay = 16;

    const pauseAfterTypingMs = 1200;
    const pauseAfterDeletingMs = 250;

    const ms = isDeleting ? deletingDelay : typingDelay;
    const pause = doneTyping
      ? pauseAfterTypingMs
      : doneDeleting && isDeleting
        ? pauseAfterDeletingMs
        : 0;

    const id = window.setTimeout(
      () => {
        if (!isDeleting) {
          if (doneTyping) {
            setIsDeleting(true);
            return;
          }
          setText(full.slice(0, text.length + 1));
          return;
        }

        if (doneDeleting) {
          setIsDeleting(false);
          setPromptIndex((i) => (i + 1) % prompts.length);
          return;
        }

        setText(full.slice(0, Math.max(0, text.length - 1)));
      },
      Math.max(ms, pause),
    );

    return () => window.clearTimeout(id);
  }, [isDeleting, promptIndex, prompts, text]);

  return (
    <div className="mx-auto mt-8 w-full max-w-2xl px-4">
      <div className="flex w-full items-center gap-3 rounded-full border border-foreground/10 bg-surface p-2">
        <div className="bg-foreground/10 p-3 rounded-full shrink-0">
        <Image
          src={
            isDark
              ? "/qleva-brand-kit/qleva-logo-white.png"
              : "/qleva-brand-kit/qleva-logo-black.png"
          }
          alt="Qleva"
          width={24}
          height={24}
          priority
        />
        </div>
        <div className="min-w-0 flex-1 text-left text-sm text-foreground/70">
          <span className="block w-52 sm:w-96 md:w-[32rem] whitespace-pre-wrap wrap-break-word text-foreground">
            {text}
            <span className="ml-0.5 inline-block w-2 animate-pulse text-foreground/70">
              |
            </span>
          </span>
        </div>
        <Button className="h-9 whitespace-nowrap px-4 text-xs sm:h-10 sm:px-4 sm:text-sm shrink-0">
          Launch App
        </Button>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-20 pt-28 md:pb-28 md:pt-30">
        <div className="relative z-10 w-full flex items-center flex-col">
          <FadeIn delay={0.05}>
            <h1 className="mt-6 text-balance text-4xl text-center font-medium leading-tighter tracking-tight md:text-6xl">
              Chat. Hire. Build. <br /> on-chain agents on Base.
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-5 max-w-xl text-pretty text-center text-sm md:text-md leading text-foreground/70">
              The easiest way to discover, hire, and monitor real on-chain AI
              agents on Base. Chat in plain English, hire with one tap
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <TypingChat />
          </FadeIn>

      
        </div>
    {/* <FadeIn delay={0.2}>
            <div className="mt-0 grid grid-cols-3 w-full justify-between gap-2 text-sm text-foreground/70">
              <div className="bg-surface p-4 rounded-2xl border border-foreground/10">
                <div className="text-xl font-semibold text-foreground">
                  17k+
                </div>
                Live agents on Base
              </div>
                 <div className="bg-surface p-4 rounded-2xl border border-foreground/10">
                <div className="text-xl font-semibold text-foreground">
                  1-tap
                </div>
                Hiring via Smart Wallet
              </div>
                 <div className="bg-surface p-4 rounded-2xl border border-foreground/10">
                <div className="text-xl font-semibold text-foreground">
                  Real-time
                </div>
                Monitoring & tasks
              </div>
            </div>
          </FadeIn> */}


        {/* <FadeIn className="relative z-10">
          <div className="rounded-3xl border border-foreground/10 bg-background/50 p-4 backdrop-blur-xl">
            <div className="rounded-2xl border border-foreground/10 bg-background/70 p-5">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Agent discovery</div>
                <div className="text-xs text-foreground/60">Live on Base</div>
              </div>

              <div className="mt-4 rounded-2xl border border-foreground/10 bg-background/60 px-4 py-3 text-sm text-foreground/70">
                “Find an agent that monitors mempool for my token and auto-buys
                dips under $0.09”
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3">
                <div className="rounded-2xl border border-foreground/10 bg-background/60 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Liquidity Sentinel</div>
                    <div className="text-xs text-foreground/60">$0.004 / task</div>
                  </div>
                  <div className="mt-2 text-xs text-foreground/60">
                    Tracks pool depth, reports anomalies, triggers actions.
                  </div>
                </div>
                <div className="rounded-2xl border border-foreground/10 bg-background/60 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Governance Brief</div>
                    <div className="text-xs text-foreground/60">$0.002 / brief</div>
                  </div>
                  <div className="mt-2 text-xs text-foreground/60">
                    Summarizes proposals, votes, and on-chain signals.
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-2xl border border-foreground/10 bg-background/60 px-4 py-3">
                <div className="text-xs text-foreground/60">
                  Powered by subgraph data + x402 payments
                </div>
                <Image
                  src="/qleva-brand-kit/qleva-icon-white-bg.png"
                  alt="Qleva icon"
                  width={28}
                  height={28}
                  className="hidden dark:block rounded-lg"
                />
                <Image
                  src="/qleva-brand-kit/qleva-icon-black-bg.png"
                  alt="Qleva icon"
                  width={28}
                  height={28}
                  className="block dark:hidden rounded-lg"
                />
              </div>
            </div>
          </div>
        </FadeIn> */}
      </div>
    </section>
  );
}
