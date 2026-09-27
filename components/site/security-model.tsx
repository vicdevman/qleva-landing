"use client";

/**
 * security-model.tsx
 * ──────────────────
 * The public version of `docs/SECURITY-MODEL.md`.
 *
 * Deliberately not a copy of it. The repo document cites file paths and line
 * numbers because its reader has the code open; this one has to convince
 * someone who does not, so it keeps the same argument and the same admissions
 * while dropping everything that only means something inside the repository.
 *
 * The structure is the argument:
 *
 *   1. the hostile question           — assume we are compromised
 *   2. the answer, as a table         — what is still true, and what is not
 *   3. why it is true                 — where funds sit, what a permission is
 *   4. the four bounds                — the actual mechanism
 *   5. what we enforce ourselves      — and what a compromise removes
 *   6. what we do not claim yet       — the part most pages leave out
 *
 * Section 6 is not a lapse in judgement. A security page containing only good
 * news is read as marketing and discounted; the gaps are what make sections 2
 * through 5 credible. It costs nothing an attacker could not learn by trying.
 */

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Clock3,
  Crosshair,
  KeyRound,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import StaggeredMenu from "@/components/ui/starggeredMenu";
import Lines from "@/components/ui/Lines";
import { ThemeSwitcher } from "@/components/site/theme-switcher";
import { APP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const navItems = ["Product", "Docs", "Security"];

const navLink = (item: string) =>
  item === "Security" ? "/security" : item === "Docs" ? "/docs" : "/#product";

function Navbar() {
  return (
    <header className="fixed top-0 left-1/2 z-[2000] mx-auto w-full max-w-6xl -translate-x-1/2">
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="relative z-[200] hidden items-center gap-2 rounded-full focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:outline-none md:flex"
        >
          <Image
            alt="Qleva"
            src="/qleva-brand-kit/qleva-drak.png"
            width={500}
            height={500}
            className="w-6"
          />
          <span className="text-xl font-semibold tracking-normal text-foreground">Qleva</span>
        </Link>

        <div className="-mr-8 hidden items-center gap-8 rounded-lg bg-background/10 p-4 py-3 backdrop-blur-xl md:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              href={navLink(item)}
              className={cn(
                "text-sm transition-colors hover:text-foreground",
                item === "Security" ? "font-medium text-accent-ink" : "text-muted-foreground",
              )}
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeSwitcher />
          <Button
            asChild
            className="h-9 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <Link href={APP_URL} target="_blank" rel="noopener noreferrer">
              Launch App
            </Link>
          </Button>
        </div>

        <div className="md:hidden">
          <StaggeredMenu
            isFixed
            menuButtonColor="#f7f4ea"
            openMenuButtonColor="#ffce48"
            logoUrl="/qleva-brand-kit/qleva-drak.png"
            items={navItems.map((item) => ({ label: item, link: navLink(item) }))}
            socialItems={[
              { label: "Twitter", link: "https://twitter.com" },
              { label: "GitHub", link: "https://github.com" },
            ]}
            displayItemNumbering={false}
            className="sm-scope"
          />
        </div>
      </nav>
    </header>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** A numbered section, so the page can be referred to by part. */
function Part({
  index,
  title,
  copy,
  children,
}: {
  index: string;
  title: string;
  copy?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-t border-foreground/8 pt-12">
      <Reveal className="flex flex-col gap-4">
        <span className="text-[11px] font-bold tracking-[0.18em] text-muted-ink uppercase">
          {index}
        </span>
        <h2 className="max-w-3xl text-balance text-3xl leading-[1.1] font-medium tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {copy && (
          <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground">{copy}</p>
        )}
      </Reveal>
      {children}
    </section>
  );
}

// ── Part 1 — the compromise table ───────────────────────────────────────────

const CANNOT = [
  {
    claim: "Move your funds to another address",
    why: "The recipient is written into the permission. A different one fails the check, so there is no address for stolen funds to arrive at.",
  },
  {
    claim: "Swap for a token you did not choose",
    why: "Both sides of the pair are fixed when you sign. Neither can be substituted for something worthless later.",
  },
  {
    claim: "Spend more than you approved",
    why: "Capped per run, and again by the number of runs. Each approval replaces the last rather than adding to it, so they cannot accumulate.",
  },
  {
    claim: "Keep going indefinitely",
    why: "Every permission carries an expiry. It stops on its own, with nobody watching and nothing to switch off.",
  },
];

const CAN = [
  {
    claim: "Run your automation at a worse moment",
    why: "Up to the cap you already approved. Timing is not something the contract can check, so this is the risk that remains.",
  },
  {
    claim: "Run it sooner than you intended",
    why: "Again bounded by the number of runs you authorised — a month of buys could happen in an hour, but not a month and a day of them.",
  },
];

// ── Part 3 — the four bounds ────────────────────────────────────────────────

const BOUNDS = [
  {
    icon: Crosshair,
    label: "What can be called",
    value: "One contract, one function. Nothing else is reachable.",
  },
  {
    icon: Wallet,
    label: "With which arguments",
    value: "The token pair and the destination are pinned byte for byte.",
  },
  {
    icon: BadgeCheck,
    label: "How much",
    value: "A hard ceiling per run, set by you before you sign.",
  },
  {
    icon: Clock3,
    label: "How long, how often",
    value: "A run count and an expiry, both enforced by the contract.",
  },
];

// ── Part 4 — our own controls ───────────────────────────────────────────────

const OUR_CONTROLS = [
  ["Emergency pause", "One switch stops every automation on your account."],
  ["Daily spend and run ceilings", "Checked before each run, on top of the on-chain caps."],
  ["Fails closed", "If those limits cannot be verified, the run is refused rather than allowed."],
  ["One run at a time", "A lock makes double execution impossible, even across restarts."],
  ["Refuses to price blindly", "No trustworthy price means no trade — never a fallback number."],
];

// ── Part 5 — the gaps ───────────────────────────────────────────────────────

const GAPS = [
  {
    title: "Cancelling is enforced by us, not yet by the chain",
    body: "Cancelling stops our executor immediately, and that is what happens in practice. But it does not yet tear the permission up on-chain, so against the compromised-server case above, the backstop is the expiry and the run count rather than the cancellation. Closing this is on the roadmap; until it is closed, neither of those two limits is ever optional on a permission we create.",
  },
  {
    title: "One signing key runs every account",
    body: "What that key may do is bounded per user by everything above. But it is one key rather than one per account, which is a larger blast radius than it needs to be. Splitting it is planned work, not finished work.",
  },
  {
    title: "We are not audited yet",
    body: "The permission contracts are MetaMask's and are audited. Our own executor and API are not. We would rather say so than let the word 'audited' do work it has not earned.",
  },
];

export function SecurityModel() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Lines />
      <Navbar />

      <div className="relative z-10 mx-auto w-full max-w-[1000px] px-5 pt-32 pb-24 sm:px-8 sm:pt-40 lg:px-10">
        {/* ── Hero ── */}
        <Reveal className="flex flex-col items-start gap-6">
          <Badge
            variant="outline"
            className="border-primary/25 bg-primary/10 px-3 py-1 text-xs text-accent-ink"
          >
            Security model
          </Badge>

          <h1 className="max-w-3xl text-balance text-4xl leading-[1.05] font-medium tracking-tight sm:text-6xl">
            Assume we get hacked.{" "}
            <span className="font-serif text-muted-foreground italic">
              Then read the rest of this page.
            </span>
          </h1>

          <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Every automation product asks for access to your money. Most answer the obvious
            question with a promise about their own conduct. That promise is worth exactly as much
            as their security, so the useful version of the question is the hostile one:{" "}
            <span className="font-semibold text-foreground">
              if Qleva were entirely compromised — servers, database, signing key — what could
              someone do with your wallet?
            </span>
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-16">
          {/* ── Part 1 ── */}
          <Part
            index="Part 1"
            title="The answer, in full"
            copy="Nothing here depends on us behaving well, because none of it is checked by our servers. It is checked by the contract that holds your funds, every time an automation runs."
          >
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <Reveal className="qleva-surface rounded-[28px] p-3 sm:p-4">
                <div className="flex items-center gap-2 px-2 pt-2 pb-4">
                  <ShieldCheck className="size-4 shrink-0 text-accent-ink" aria-hidden="true" />
                  <p className="text-[11px] font-bold tracking-[0.14em] text-muted-ink uppercase">
                    An attacker could not
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  {CANNOT.map((row) => (
                    <div
                      key={row.claim}
                      className="flex items-start gap-3 rounded-2xl border border-foreground/8 bg-card px-4 py-3.5"
                    >
                      <BadgeCheck
                        className="mt-0.5 size-4 shrink-0 text-accent-ink"
                        aria-hidden="true"
                      />
                      <div className="min-w-0 leading-tight">
                        <p className="text-sm font-semibold text-foreground">{row.claim}</p>
                        <p className="mt-1.5 text-xs leading-5 text-muted-ink">{row.why}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.08} className="qleva-surface rounded-[28px] p-3 sm:p-4">
                <div className="flex items-center gap-2 px-2 pt-2 pb-4">
                  <AlertTriangle
                    className="size-4 shrink-0 text-amber-600 dark:text-amber-400"
                    aria-hidden="true"
                  />
                  <p className="text-[11px] font-bold tracking-[0.14em] text-muted-ink uppercase">
                    An attacker could
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  {CAN.map((row) => (
                    <div
                      key={row.claim}
                      className="flex items-start gap-3 rounded-2xl border border-amber-500/25 bg-amber-500/[0.07] px-4 py-3.5"
                    >
                      <AlertTriangle
                        className="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400"
                        aria-hidden="true"
                      />
                      <div className="min-w-0 leading-tight">
                        <p className="text-sm font-semibold text-foreground">{row.claim}</p>
                        <p className="mt-1.5 text-xs leading-5 text-muted-ink">{row.why}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-4 rounded-2xl border border-foreground/8 bg-card px-4 py-3.5 text-xs leading-5 text-muted-foreground">
                  So the worst case is{" "}
                  <span className="font-semibold text-foreground">
                    the money you already agreed to spend, spent badly
                  </span>{" "}
                  — not your wallet. Bounding the damage to that is the entire point of the design.
                </p>
              </Reveal>
            </div>
          </Part>

          {/* ── Part 2 ── */}
          <Part
            index="Part 2"
            title="Why that is true"
            copy="Your funds never leave your own wallet. There is no Qleva account they pass through, no balance we hold on your behalf, and no withdrawal path we could use if we wanted to."
          >
            <Reveal className="mt-10 qleva-surface rounded-[28px] p-5 sm:p-7">
              <p className="text-base leading-7 text-muted-foreground">
                What you sign instead is a{" "}
                <span className="font-semibold text-foreground">permission</span>: a statement that
                one specific action may be taken from your wallet, within limits you set. The
                limits travel with it and are re-checked by the contract on every single run.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch">
                {[
                  { icon: Wallet, label: "Your smart wallet", note: "holds the funds, always" },
                  { icon: BadgeCheck, label: "The permission", note: "limits, checked on-chain" },
                  { icon: KeyRound, label: "Qleva's executor", note: "can only act inside them" },
                ].map((node, index) => (
                  <div key={node.label} className="flex flex-1 items-center gap-3">
                    <div className="flex-1 rounded-2xl border border-foreground/8 bg-card px-4 py-4">
                      <node.icon className="size-4 text-accent-ink" aria-hidden="true" />
                      <p className="mt-3 text-sm font-semibold text-foreground">{node.label}</p>
                      <p className="mt-1 text-xs text-muted-ink">{node.note}</p>
                    </div>
                    {index < 2 && (
                      <ArrowRight
                        className="hidden size-4 shrink-0 text-muted-ink sm:block"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm leading-6 text-muted-foreground">
                The order matters. The permission sits{" "}
                <span className="font-semibold text-foreground">between</span> us and your wallet,
                which is why compromising us does not reach past it.
              </p>
            </Reveal>
          </Part>

          {/* ── Part 3 ── */}
          <Part
            index="Part 3"
            title="Four things every permission bounds"
            copy="A permission that named only the action would not be a limit at all — 'may call approve' still permits approving an attacker for everything you own. So each one fixes four things, and anything left unfixed is something we would be trusting ourselves not to do."
          >
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {BOUNDS.map((bound, index) => (
                <Reveal
                  key={bound.label}
                  delay={index * 0.05}
                  className="rounded-[24px] border border-foreground/8 bg-card p-5"
                >
                  <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-accent-ink">
                    <bound.icon className="size-4" aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-sm font-semibold text-foreground">{bound.label}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{bound.value}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-4 rounded-[24px] border border-primary/20 bg-primary/[0.06] p-5">
              <p className="text-sm leading-6 text-muted-foreground">
                <span className="font-semibold text-foreground">
                  You see all four before you sign.
                </span>{" "}
                The approval card states them in plain language, generated from the same values
                that go into the permission itself — so the sentence you read cannot drift from the
                limit that gets enforced.
              </p>
            </Reveal>
          </Part>

          {/* ── Part 4 ── */}
          <Part
            index="Part 4"
            title="What we enforce ourselves"
            copy="These are real, and they are ours — which means a compromise removes them. They exist to catch mistakes and abuse, not to be the last line of defence. Part 1 is the last line."
          >
            <Reveal className="mt-10 qleva-surface rounded-[28px] p-3 sm:p-4">
              <div className="flex flex-col gap-2">
                {OUR_CONTROLS.map(([label, note]) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 rounded-2xl border border-foreground/8 bg-card px-4 py-3.5 sm:flex-row sm:items-baseline sm:gap-4"
                  >
                    <p className="shrink-0 text-sm font-semibold text-foreground sm:w-56">
                      {label}
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">{note}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </Part>

          {/* ── Part 5 ── */}
          <Part
            index="Part 5"
            title="What we do not claim yet"
            copy="A security page containing only good news is marketing. These are the things that are not finished, written here because you would otherwise have to discover them."
          >
            <div className="mt-10 flex flex-col gap-4">
              {GAPS.map((gap, index) => (
                <Reveal
                  key={gap.title}
                  delay={index * 0.05}
                  className="rounded-[24px] border border-foreground/8 bg-card p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle
                      className="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400"
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">{gap.title}</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{gap.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Part>

          {/* ── Close ── */}
          <Reveal className="qleva-surface rounded-[32px] p-7 text-center sm:p-10">
            <h2 className="text-balance text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              Found something wrong with this?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-6 text-muted-foreground sm:text-base">
              Tell us. A security page is a set of claims, and claims should be checkable — if one
              of these does not hold, we would rather hear it from you than read about it later.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                className="h-11 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                <Link href={APP_URL} target="_blank" rel="noopener noreferrer">
                  Launch App
                  <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-lg border-foreground/10 bg-foreground/[0.04] px-6 text-sm font-semibold text-foreground hover:bg-foreground/[0.08] hover:text-foreground"
              >
                <Link href="/">
                  <ArrowLeft className="mr-1.5 size-4" />
                  Back to home
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      <footer className="relative z-10 border-t border-foreground/5 py-8 text-center text-xs text-muted-ink">
        &copy; {new Date().getFullYear()} Qleva. All rights reserved.
      </footer>
    </main>
  );
}
