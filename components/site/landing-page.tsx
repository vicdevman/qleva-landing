"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Boxes,
  ChevronDown,
  ChevronRight,
  FileCheck2,
  GitBranch,
  History,
  LockKeyhole,
  Menu,
  Pause,
  Plus,
  Repeat2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Wallet,
  WalletCards,
  X,
} from "lucide-react";
import { useState } from "react";
import StaggeredMenu from "@/components/ui/starggeredMenu";

import NoiseCard from "@/components/ui/noice-card";
import PixelBlast from "@/components/ui/pixelBlast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { SECTIONS } from "@/lib/site";
import { useThemeColors } from "@/lib/use-theme-colors";
import { ThemeSwitcher } from "@/components/site/theme-switcher";
import { SectionDots } from "@/components/site/section-dots";
import Image from "next/image";
import { LogoLoop } from "../ui/logoLoop";

/**
 * The nav is derived from `SECTIONS` so it cannot drift from the anchors, the
 * scroll indicator, or the SiteNavigationElement structured data. Previously it
 * was three strings with the hrefs decided by a chain of ternaries, which is
 * why "Product" pointed at #product while nothing else was reachable at all.
 *
 * Only a few sections belong in the bar — the rest are reachable from the dots
 * and from search results, and a nine-item nav on a landing page reads as a
 * documentation site.
 */
const PRIMARY_NAV = SECTIONS.filter((s) =>
  ["how-it-works", "product", "security", "faq"].includes(s.id),
);

const trustItems = [
  { icon: Boxes, label: "Base ecosystem" },
  { icon: WalletCards, label: "Smart wallet powered" },
  { icon: FileCheck2, label: "Simulation before execution" },
  { icon: LockKeyhole, label: "Self-custody" },
  { icon: ShieldCheck, label: "Human approval gates" },
];

const howItWorks = [
  {
    title: "Describe",
    copy: "Say the action the way you would say it to a person.",
    prompt: "Buy $20 of ETH every Friday morning.",
  },
  {
    title: "Review",
    copy: "Qleva converts your request into a structured plan with asset, amount, timing, wallet, gas estimate, and limits.",
    prompt:
      "Recurring buy\nPay with: USDC\nBuy: $20 of ETH\nRuns: Every Friday, 09:00",
  },
  {
    title: "Approve",
    copy: "Activate only when the plan looks right. Pause, edit, or cancel whenever needed.",
    prompt: "Approval required\nMax gas: $4.00\nStatus: Ready",
  },
];

const useCases = [
  {
    title: "Recurring ETH buys",
    prompt: "Buy $20 of ETH every Friday.",
    plan: [
      "Action: Recurring buy",
      "Asset: ETH",
      "Amount: $20",
      "Schedule: Every Friday",
    ],
    copy: "Buy a fixed amount on a schedule without opening an exchange every week.",
  },
  {
    title: "Profit taking",
    prompt: "Take profit when ETH rises 20%.",
    plan: [
      "Trigger: ETH price +20%",
      "Action: Sell 10% of ETH",
      "Receive: USDC",
      "Limit: One execution",
    ],
    copy: "Create a rule and review the exact trigger before it runs.",
  },
  {
    title: "Entry and exit, chained",
    prompt: "Buy $100 of ETH if it drops 5%, then take profit at +10%.",
    plan: [
      "Step 1: Buy when ETH drops 5%",
      "Step 2: Sell at +10%",
      "Measured from: the price paid",
      "Exit: take-profit or stop-loss",
    ],
    copy: "The second step measures from what the first actually filled at — not an estimate, the number from the receipt.",
  },
  {
    title: "Recurring payments",
    prompt: "Send 100 USDC to Maya on the first of every month.",
    plan: [
      "Action: Recurring payment",
      "Asset: USDC",
      "Recipient: Maya",
      "Schedule: Monthly",
    ],
    copy: "Send USDC monthly for subscriptions, contributors, or personal routines.",
  },
  {
    title: "Portfolio rebalancing",
    prompt: "Rebalance to 60% ETH and 40% USDC monthly.",
    plan: [
      "Target: 60% ETH / 40% USDC",
      "Cadence: Monthly",
      "Simulation: Required",
      "Control: Pause anytime",
    ],
    copy: "Keep a simple allocation plan without manual swaps every month.",
  },
];

const featureCards = [
  [
    "Natural-language requests",
    "Describe the outcome without learning another DeFi interface.",
    Sparkles,
  ],
  [
    "Structured execution plans",
    "Review action, asset, amount, timing, wallet, gas, and limits.",
    FileCheck2,
  ],
  [
    "Simulation-first flow",
    "See expected behavior before approval.",
    BadgeCheck,
  ],
  [
    "Recurring schedules",
    "Run buys, transfers, and payments on a predictable cadence.",
    Repeat2,
  ],
  [
    "Conditional triggers",
    "Create rules based on price movement or portfolio thresholds.",
    GitBranch,
  ],
  [
    "Spending limits",
    "Control how much an automation can move.",
    SlidersHorizontal,
  ],
  [
    "Smart-wallet execution",
    "Use wallet permissions built for safer automation.",
    WalletCards,
  ],
  [
    "Automation history",
    "Track every scheduled, completed, paused, and failed action.",
    History,
  ],
  [
    "Pause and cancel",
    "Stop an automation at any time — and every permission expires on its own.",
    Pause,
  ],
] as const;

const faqs = [
  [
    "Is Qleva a custodial service? Does it hold my crypto?",
    "No. Qleva is non-custodial — your funds stay in your own smart wallet at all times. What you grant is a scoped, revocable permission called a delegation, which lets Qleva execute one specific kind of action within limits you set. Qleva never takes possession of your assets.",
  ],
  [
    "What stops Qleva spending more than I approved?",
    "The blockchain does. Every automation carries caveats — a maximum spend per run, a maximum number of runs, the exact token pair, the recipient and an expiry. These are checked by the smart contract when the transaction is submitted, so exceeding them fails on-chain. It is not a limit checked in our own code and promised to you.",
  ],
  [
    "What is a smart wallet, and why does automation need one?",
    "A smart wallet is a wallet controlled by a smart contract rather than a single private key, which lets it hold programmable permissions. That is what makes safe automation possible: a normal wallet can only sign one transaction at a time, so automating it would mean handing over your key. A smart wallet can instead grant a narrow, revocable permission with spending limits built in.",
  ],
  [
    "Which blockchain does Qleva run on?",
    "Base, Coinbase's Ethereum layer-2 network. Base was chosen because fees are low enough that a weekly automation is not eaten by gas, and because it has the liquidity depth that price triggers need to execute at a sensible price.",
  ],
  [
    "Can I cancel or pause an automation?",
    "Yes, at any time. Pausing stops execution immediately. Revoking removes the underlying permission entirely and is an on-chain action, so it does not depend on Qleva processing your request.",
  ],
  [
    "What happens before an automation executes?",
    "Qleva compiles your request into a structured plan and shows it as a card: the exact amount, the exact trigger, the number of runs, the expiry and the permission it needs. Nothing exists on-chain until you approve that card, and what executes is exactly what it described.",
  ],
  [
    "Who pays the gas fees for automated runs?",
    "Qleva does. Scheduled and price-triggered executions are submitted by Qleva's operator wallet, so you are only charged the amount the automation is for. Instant swaps you make yourself are paid from your own wallet, with a measured estimate shown before you sign.",
  ],
  [
    "What kinds of crypto automation can I set up?",
    "Recurring buys on a schedule (automated DCA), price-triggered orders, recurring payments to an address, and multi-step strategies where a second action is measured from the price the first actually filled at — including take-profit and stop-loss as a single exit, and trailing stops.",
  ],
  [
    "Do I need to understand smart contracts or DeFi?",
    "No. You describe what you want in ordinary language and read a plain-English card before anything happens. Terms like slippage and gas are explained where they appear rather than assumed. If you can describe the outcome, Qleva handles the mechanics.",
  ],
  [
    "What happens if a transaction fails?",
    "The activity view shows the failed attempt with the automation, the time and the reason. Failures are classified: a temporary problem such as a busy network is retried, while a configuration fault pauses the automation immediately rather than retrying something that cannot succeed.",
  ],
];

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
      initial={{ opacity: 0, y: 14, scale: 0.995 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionShell({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1180px]">{children}</div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  italic,
  copy,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  italic?: string;
  copy: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center"
          ? "mx-auto max-w-3xl items-center text-center"
          : "max-w-2xl items-start text-left",
      )}
    >
      {eyebrow ? (
        <Badge
          variant="outline"
          className="border-foreground/10 bg-foreground/[0.04] px-3 py-1 text-[11px] text-muted-foreground"
        >
          {eyebrow}
        </Badge>
      ) : null}
      <h2 className="max-w-4xl text-balance text-4xl font-medium leading-[1.05] tracking-normal text-foreground sm:text-6xl lg:text-[60px]">
        {title}
        {italic ? (
          <span className="font-serif italic text-muted-foreground">
            {" "}
            {italic}
          </span>
        ) : null}
      </h2>
      <p className="max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
        {copy}
      </p>
    </Reveal>
  );
}

function CTAButtons({
  secondary = "See how it works",
}: {
  secondary?: string;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 ">
      <Button
        asChild
        className="h-11 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
      >
        <Link
          href="https://app.qleva.cloud/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Launch App
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        className="h-11 rounded-lg border-foreground/10 bg-foreground/[0.04] px-6 text-sm font-semibold text-foreground hover:bg-foreground/[0.08] hover:text-foreground"
      >
        <Link href="#how-it-works">{secondary}</Link>
      </Button>
    </div>
  );
}

function BrandMark() {
  return (
    <Link
      href="#"
      className="hidden md:flex relative z-200 items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
    >
      <Image
        alt="logo"
        src="/qleva-brand-kit/qleva-drak.png"
        width={500}
        height={500}
        className="w-6"
      />
      <span className="text-xl font-semibold tracking-normal text-foreground">
        Qleva
      </span>
    </Link>
  );
}

function Navbar() {
  const [open, setOpen] = useState(true);
  const themeColors = useThemeColors();

  return (
    <header className="fixed top-0 mx-auto max-w-6xl w-full left-1/2 z-2000 -translate-x-1/2">
      <nav className="mx-auto flex h-18 items-center justify-between max-w-6xl  px-4">
        <BrandMark />
        <div className="hidden items-center gap-8 md:flex  backdrop-blur-xl bg-background/10 p-4 -mr-8 py-3 rounded-lg">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/docs"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </Link>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <Button
            asChild
            className="h-9 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <Link
              href="https://app.qleva.cloud/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch App
            </Link>
          </Button>
        </div>
        <div className="md:hidden">
          <StaggeredMenu
            isFixed={true}
            menuButtonColor={themeColors.menuButton}
            openMenuButtonColor={themeColors.menuButtonOpen}
            logoUrl="/qleva-brand-kit/qleva-drak.png"
            items={[
              ...SECTIONS.map((item) => ({
                label: item.label,
                link: `#${item.id}`,
              })),
              { label: "Docs", link: "/docs" },
            ]}
            socialItems={[
              { label: "Twitter", link: "https://twitter.com" },
              { label: "GitHub", link: "https://github.com" },
            ]}
            displayItemNumbering={false}
            className="sm-scope"
          />
        </div>
      </nav>
      {/* StaggeredMenu handles its own panel for mobile; nothing else needed here */}
    </header>
  );
}

/**
 * A token mark, drawn rather than fetched.
 *
 * The landing page shows two known assets; a CDN round trip per logo would be a
 * render-blocking request for something a few hundred bytes of SVG covers, and
 * it would fail exactly when the page most needs to look finished.
 */
function TokenMark({
  symbol,
  className,
}: {
  symbol: "USDC" | "ETH";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block size-11 shrink-0 overflow-hidden rounded-md border border-border/60",
        className,
      )}
    >
      {symbol === "ETH" ? (
        <svg viewBox="0 0 32 32" className="size-full" aria-hidden>
          <rect width="32" height="32" rx="8" ry="8" fill="#627EEA" />
          <g fill="#fff">
            <path fillOpacity=".6" d="M16.5 4v8.87l7.5 3.35z" />
            <path d="M16.5 4 9 16.22l7.5-3.35z" />
            <path fillOpacity=".6" d="M16.5 21.97V28L24 17.62z" />
            <path d="M16.5 28v-6.03L9 17.62z" />
            <path fillOpacity=".2" d="m16.5 20.57 7.5-4.35-7.5-3.35z" />
            <path fillOpacity=".6" d="m9 16.22 7.5 4.35v-7.7z" />
          </g>
        </svg>
      ) : (
        <svg viewBox="0 0 32 32" className="size-full" aria-hidden>
          <rect width="32" height="32" rx="8" ry="8" fill="#2775CA" />
          <path
            d="M16 26.5A10.5 10.5 0 1 1 26.5 16 10.5 10.5 0 0 1 16 26.5Zm0-19.2a8.7 8.7 0 1 0 8.7 8.7 8.7 8.7 0 0 0-8.7-8.7Z"
            fill="#fff"
          />
          <path
            d="M17.2 15.3c-1.9-.5-2.5-.8-2.5-1.6 0-.7.6-1.2 1.6-1.2.9 0 1.5.3 1.8 1.1a.4.4 0 0 0 .4.3h.9a.4.4 0 0 0 .4-.4v-.1a3 3 0 0 0-2.4-2.3v-1a.4.4 0 0 0-.4-.4h-.9a.4.4 0 0 0-.4.4v1c-1.6.2-2.6 1.3-2.6 2.6 0 1.6 1 2.4 3 2.9 1.8.4 2.4.8 2.4 1.7s-.8 1.4-1.8 1.4c-1.4 0-1.9-.6-2.1-1.4a.4.4 0 0 0-.4-.3h-1a.4.4 0 0 0-.4.4v.1c.3 1.3 1.1 2.2 2.8 2.5v1a.4.4 0 0 0 .4.4h.9a.4.4 0 0 0 .4-.4v-1c1.7-.3 2.7-1.4 2.7-2.9 0-1.7-1-2.4-3-2.8Z"
            fill="#fff"
          />
        </svg>
      )}
    </span>
  );
}

/** A label/value row, in the product's own proportions. */
function PlanField({
  label,
  value,
}: {
  label: string;
  value: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 text-xs">
      <span className="font-medium text-muted-ink">{label}</span>
      <span className="min-w-0 break-words text-right font-semibold text-foreground">
        {value}
      </span>
    </div>
  );
}

/**
 * The approval cards, as the app actually renders them.
 *
 * WHY THERE IS MORE THAN ONE
 *
 * The first version of this page drew every prompt as the same swap card. That
 * is not what happens: the app picks a card whose *subject matches the decision
 * being made*, which is the rule `automation-primitives.tsx` exists to encode.
 *
 *   a swap      → a PAIR        — the thing being checked is which two tokens
 *   a payment   → an AMOUNT     — the thing being checked is how much, to whom
 *   a strategy  → a STEP CHAIN  — the thing being checked is the order
 *   a trigger   → a FIRES WHEN  — the thing being checked is the level
 *
 * Rendering a payment as `USDC → 0xDe16…` pretends an address is a token, and
 * rendering a two-step strategy as a single pair hides the half of it that runs
 * later. Showing one card for everything on the landing page made the same
 * mistake in advance of the user making it.
 *
 * The pieces below are deliberately the same four the app shares — panel,
 * header, subject, permission disclosure — assembled per kind.
 */
type PlanCard =
  | {
      kind: "schedule";
      title: string;
      badge: string;
      from: TokenSymbol;
      to: TokenSymbol;
      amountLabel: string;
      permission: string;
      permissionLines: string[];
      fields: string[];
    }
  | {
      kind: "transfer";
      title: string;
      badge: string;
      amount: string;
      token: TokenSymbol;
      recipient: string;
      permission: string;
      permissionLines: string[];
      fields: string[];
    }
  | {
      kind: "strategy";
      title: string;
      badge: string;
      steps: { action: string; trigger: string }[];
      permission: string;
      permissionLines: string[];
      fields: string[];
    }
  | {
      kind: "trigger";
      title: string;
      badge: string;
      headline: string;
      detail: string;
      from: TokenSymbol;
      to: TokenSymbol;
      amountLabel: string;
      permission: string;
      permissionLines: string[];
      fields: string[];
    };

type TokenSymbol = "USDC" | "ETH";

/** The header strip every panel in the product opens with. */
function PanelHeader({ title, badge }: { title: string; badge: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border/40 pb-3">
      <span className="text-sm font-bold text-muted-ink">{title}</span>
      <span className="shrink-0 rounded-sm bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary">
        {badge}
      </span>
    </div>
  );
}

/** A swap's subject: the pair, because the decision is which pair. */
function PairSubject({
  from,
  to,
  amountLabel,
  verb = "BUY",
}: {
  from: TokenSymbol;
  to: TokenSymbol;
  amountLabel: string;
  verb?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 py-4">
      <div className="flex min-w-0 items-center gap-3">
        <TokenMark symbol={from} />
        <div className="flex min-w-0 flex-col gap-0.5 leading-tight">
          <span className="truncate text-[10px] font-bold tracking-wider text-muted-ink">
            {verb === "BUY" ? "PAY WITH" : `PAY ${amountLabel}`}
          </span>
          <span className="truncate text-base font-extrabold text-foreground">
            {from}
          </span>
        </div>
      </div>

      <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-foreground/[0.04]">
        <ArrowRight className="size-4 text-accent-ink" />
      </div>

      <div className="flex min-w-0 items-center gap-3">
        <div className="flex min-w-0 flex-col items-end gap-0.5 text-right leading-tight">
          <span className="truncate text-[10px] font-bold tracking-wider text-muted-ink">
            {verb === "BUY" ? `BUY ${amountLabel}` : "RECEIVE"}
          </span>
          <span className="truncate text-base font-extrabold text-foreground">
            {to}
          </span>
        </div>
        <TokenMark symbol={to} />
      </div>
    </div>
  );
}

/**
 * A payment's subject: the amount, big, and the address it goes to.
 *
 * The address gets its own bordered row rather than sitting in a stat line
 * because it is the one field on the card where a mistake is unrecoverable.
 */
function AmountSubject({
  amount,
  token,
  recipient,
  label,
}: {
  amount: string;
  token: TokenSymbol;
  recipient: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-2.5 py-4">
      <span className="text-[10px] font-bold tracking-wider text-muted-ink">
        {label}
      </span>

      <div className="flex items-center justify-between gap-3">
        <span className="truncate text-3xl font-extrabold tracking-tight text-foreground">
          {amount}
        </span>
        <span className="flex shrink-0 items-center gap-2 rounded-xl border border-border bg-foreground/[0.04] py-1.5 pr-3 pl-2 font-bold">
          <TokenMark symbol={token} className="size-5 rounded-full" />
          <span className="text-xs tracking-tight text-foreground">
            {token}
          </span>
        </span>
      </div>

      <div className="flex items-center justify-between gap-2 rounded-lg border border-border/60 bg-foreground/[0.03] px-3 py-2">
        <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-muted-ink">
          <Wallet className="size-3.5" /> TO
        </span>
        <span className="truncate font-mono text-xs font-bold text-foreground">
          {recipient}
        </span>
      </div>
    </div>
  );
}

/**
 * A strategy's subject: the chain, top to bottom.
 *
 * The connector is spelled out rather than implied by layout. "then, after step
 * 1" is the difference between two things that happen and two things that
 * happen *in order* — and the second step's trigger is measured from the price
 * the first one actually paid, which only makes sense if the order is visible.
 */
function StepChainSubject({
  steps,
}: {
  steps: { action: string; trigger: string }[];
}) {
  return (
    <div className="flex flex-col gap-2 py-4">
      {steps.map((step, index) => (
        <div key={step.action} className="flex flex-col gap-2">
          {index > 0 && (
            <div className="flex items-center gap-1.5 pl-4 text-[10px] font-semibold text-muted-ink">
              <span className="h-3 w-px bg-border" />
              then, after step {index}
            </div>
          )}

          <div className="rounded-xl border border-border/60 bg-foreground/[0.03] p-3">
            <div className="flex items-start gap-2.5">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                {index + 1}
              </span>
              <div className="min-w-0 flex-1 leading-tight">
                <p className="text-xs font-bold text-foreground">
                  {step.action}
                </p>
                <p className="mt-1 text-[11px] text-muted-ink">
                  {step.trigger}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * A trigger's subject: the level, as the largest thing on the card.
 *
 * It used to be a sentence inside a stat row, where the number that decides
 * whether real money moves carried the same weight as the words around it.
 */
function TriggerBlock({
  headline,
  detail,
}: {
  headline: string;
  detail: string;
}) {
  return (
    <div className="my-4 rounded-xl border border-primary/25 bg-primary/5 px-3 py-2.5">
      <p className="mb-1 text-[10px] font-bold tracking-wider text-muted-ink">
        FIRES WHEN
      </p>
      <p className="text-sm leading-snug font-bold text-foreground">
        {headline}
      </p>
      <p className="mt-1 text-[11px] font-medium text-muted-ink">{detail}</p>
    </div>
  );
}

/**
 * The on-chain permission: one line, expandable to the rest.
 *
 * The product's strongest claim is also its longest paragraph. Collapsing keeps
 * it on every card at the cost of four lines; the detail is one tap away.
 */
function PermissionDisclosure({
  summary,
  lines,
}: {
  summary: string;
  lines: string[];
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="mt-4 rounded-xl border border-border/60 bg-foreground/[0.03]">
      <button
        type="button"
        // onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-2 px-3 py-2.5 text-left"
      >
        <span className="flex min-w-0 items-center gap-2">
          <BadgeCheck className="size-4 shrink-0 text-accent-ink" />
          <span className="truncate text-xs font-bold text-foreground">
            {summary}
          </span>
        </span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-muted-ink transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <div className="space-y-2 border-t border-border/50 px-3 py-2.5">
          <p className="text-[11px] leading-snug font-semibold italic text-muted-ink">
            Enforced on-chain. Qleva cannot exceed these, even by mistake.
          </p>
          {lines.map((line) => (
            <div
              key={line}
              className="flex items-start gap-2 text-[11px] font-semibold text-foreground"
            >
              <BadgeCheck className="mt-0.5 size-3.5 shrink-0 text-accent-ink" />
              <span>{line}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/** The whole card, assembled from the subject its kind calls for. */
function ExecutionPlanCard({ card = DEFAULT_PLAN_CARD }: { card?: PlanCard }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-5">
      <PanelHeader title={card.title} badge={card.badge} />

      {card.kind === "schedule" && (
        <PairSubject
          from={card.from}
          to={card.to}
          amountLabel={card.amountLabel}
        />
      )}

      {card.kind === "transfer" && (
        <AmountSubject
          amount={card.amount}
          token={card.token}
          recipient={card.recipient}
          label="AMOUNT PER RUN (USD)"
        />
      )}

      {card.kind === "strategy" && <StepChainSubject steps={card.steps} />}

      {card.kind === "trigger" && (
        <>
          <PairSubject
            from={card.from}
            to={card.to}
            amountLabel={card.amountLabel}
            verb="SELL"
          />
          {/* <TriggerBlock headline={card.headline} detail={card.detail} /> */}
        </>
      )}

      <div className="space-y-2.5">
        {card.fields.map((field) => {
          const [label, ...rest] = field.split(":");
          return (
            <PlanField
              key={field}
              label={label.trim()}
              value={rest.join(":").trim()}
            />
          );
        })}
      </div>

      {card.kind === "trigger" && (
        <TriggerBlock headline={card.headline} detail={card.detail} />
      )}

      <PermissionDisclosure
        summary={card.permission}
        lines={card.permissionLines}
      />

      <Button
        type="button"
        size="lg"
        className="mt-3 h-12 w-full gap-1.5 rounded-lg px-2.5 text-[14px] font-bold"
      >
        Approve &amp; Sign
      </Button>
    </div>
  );
}

function HeroConversation() {
  return (
    <Reveal className="sm:mx-auto px-4 mt-14 max-w-[1080px]">
      <NoiseCard
        width="w-full"
        height="min-h-[360px] sm:min-h-[460px]"
        animated={false}
        noiseOpacity={0.055}
        grainSize={2}
        bgColor="bg-[#000]"
        className="qleva-surface rounded-4xl p-3 sm:p-5 lg:p-5 flex items-center justify-center"
      >
        <div className="grid h-full min-w-0 gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <div className="flex min-w-0 flex-col gap-6 sm:justify-between sm:gap-8 rounded-[24px] border border-foreground/8 bg-surface-alt p-4 sm:p-6">
            <div className="flex flex-col gap-4">
              <Badge
                variant="outline"
                className="w-fit border-foreground/10 bg-foreground/[0.04] text-muted-foreground"
              >
                User request
              </Badge>
              <div className="rounded-[22px] bg-foreground/[0.06] p-5 text-xl font-medium leading-8 text-foreground sm:text-2xl">
                Buy $20 of ETH every Friday.
              </div>
            </div>
            <div className="rounded-[22px] border border-primary/20 bg-primary/10 p-5">
              <p className="text-sm font-semibold text-accent-ink">
                No bots. No hidden trades.
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Qleva turns your intent into a clear execution plan before
                anything can run.
              </p>
            </div>
          </div>
          <div className="min-w-0">
            <ExecutionPlanCard />
          </div>
        </div>
      </NoiseCard>
    </Reveal>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-0 pb-12 pt-30 sm:px-8 sm:pb-24 sm:pt-32 lg:px-10 lg:pb-32">
      {/* <div className="absolute left-1/2 top-24 size-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" aria-hidden="true" /> */}
      {/* <div className="absolute inset-x-0 top-0 h-[700px] opacity-30 qleva-grid" aria-hidden="true" /> */}
      <div className="relative mx-auto max-w-[1180px]">
        <Reveal className="mx-auto flex max-w-[880px] flex-col items-center gap-4 text-center">
          <h1 className="max-w-full text-balance text-[38px] font-semibold leading-[1.06] tracking-normal text-foreground min-[420px]:text-[42px] sm:text-6xl lg:text-[72px]">
            Automate crypto actions with{" "}
            <span className="block font-serif italic text-muted-foreground sm:inline">
              conversation
            </span>
          </h1>
          <p className="max-w-[660px] text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Tell Qleva what you want to do. Review the plan in plain English.
            Approve it once, then let your smart wallet handle the timing.
          </p>
          <CTAButtons />
        </Reveal>
        <HeroConversation />
      </div>
    </section>
  );
}

function TrustBar() {
  const themeColors = useThemeColors();
  const techLogos = [
    {
      src: "/images/Base_lockup_white.png",
      title: "Base",
      href: "https://base.org",
      alt: "Base logo",
    },
    {
      src: "/images/Privy_Brandmark_White.png",
      title: "Privy",
      href: "https://privy.io",
      alt: "Privy logo",
    },
    // { src: '/images/dummy.avif', title: 'Groq', href: 'https://groq.com', alt: 'Groq logo' },
    {
      src: "/images/alchemy-logo-white.png",
      title: "Alchemy",
      href: "https://alchemy.com",
      alt: "Alchemy logo",
    },
  ];

  return (
    <section className="py-2 sm:py-2 -mt-6">
      {/* <SectionHeader
        eyebrow=""
        title=""
        copy="Powered By"
      /> */}
      <div
        style={{ height: "140px", position: "relative", overflow: "hidden" }}
        className="mt-2"
      >
        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover={true}
          fadeOut
          fadeOutColor={themeColors.pageBg}
          ariaLabel="Technology partners"
          renderItem={(item: any, key: string) => (
            <a
              href={item.href}
              key={key}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-3 rounded px-3 py-2 hover:opacity-90"
            >
              <img
                src={item.src}
                alt={item.alt ?? item.title}
                className="w-30 sm:w-40 opacity-40 invert dark:invert-0"
              />
              {/* <span className="font-bold font-serif italic text-xl text-muted-foreground">{item.title}</span> */}
            </a>
          )}
        />
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <SectionShell id="how-it-works">
      <SectionHeader
        eyebrow="How it works"
        title="From request to execution in three clear steps"
        copy="Qleva keeps the process simple enough to trust and detailed enough to verify."
      />
      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {howItWorks.map((step, index) => (
          <Reveal
            key={step.title}
            delay={index * 0.08}
            className="qleva-surface rounded-[28px] p-6"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="grid size-11 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-accent-ink">
                0{index + 1}
              </span>
              {index < 2 ? (
                <ArrowRight
                  className="hidden text-muted-ink lg:block"
                  aria-hidden="true"
                />
              ) : null}
            </div>
            <h3 className="text-2xl font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-3 min-h-20 text-sm leading-6 text-muted-foreground">
              {step.copy}
            </p>
            <div className="mt-7 min-h-36 whitespace-pre-line rounded-[20px] border border-foreground/8 bg-surface-alt p-4 text-sm leading-7 text-foreground">
              {step.prompt}
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 flex justify-center">
        <Button
          asChild
          className="h-12 rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
        >
          <Link
            href="https://app.qleva.cloud/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start with a request
          </Link>
        </Button>
      </Reveal>
    </SectionShell>
  );
}

function UseCasesSection() {
  const [active, setActive] = useState(0);
  const selected = useCases[active];

  return (
    <SectionShell id="product" className="bg-surface-alt relative ">
      <div className=" grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="lg:sticky lg:top-38">
          <SectionHeader
            align="left"
            title="Automations for the crypto actions you already"
            italic="repeat"
            copy="Recurring buys, scheduled payments, price triggers, and multi-step strategies where the exit measures from what the entry actually paid."
          />
          <Reveal className="mt-8 flex justify-start">
            <Button
              asChild
              className="h-12 rounded-lg bg-primary px-6 text-primary-foreground hover:bg-primary/90"
            >
              <Link
                href="https://app.qleva.cloud/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch App
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4">
          {useCases.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <button
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "w-full rounded-[24px] border p-5 text-left transition-all duration-200",
                  active === index
                    ? "border-primary/35 bg-primary/10"
                    : "border-foreground/8 bg-card hover:border-foreground/14 hover:bg-secondary",
                )}
              >
                <div className="flex flex-col gap-6 items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.copy}
                    </p>
                  </div>
                  <span className="rounded-md border border-foreground/10 bg-tranparent px-4 py-2 text-sm text-foreground">
                    {item.prompt}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/**
 * Four prompts, and the card each one actually produces.
 *
 * Each is a different *kind* of card, because the app picks the card by the
 * decision being made — see the note above `ExecutionPlanCard`. A visitor who
 * clicks through all four has seen every subject the product has, which is the
 * honest version of "it understands what you mean".
 *
 * The prompts are real ones the agent handles today. Nothing here is a mockup
 * of a feature that does not exist.
 */
const SHOWCASE_CARDS: { prompt: string; card: PlanCard }[] = [
  {
    prompt: "Buy $20 of ETH every Friday.",
    card: {
      kind: "schedule",
      title: "Scheduled Buy",
      badge: "26 runs",
      from: "USDC",
      to: "ETH",
      amountLabel: "$20",
      permission: "Up to $20 of USDC per run, 26 runs",
      permissionLines: [
        "Can only swap the tokens shown above",
        "Proceeds return to your wallet only",
        "Expires automatically when the schedule ends",
      ],
      fields: [
        "Runs: Every Friday, 09:00",
        "First run: Fri 28 Aug",
        "Runs until: 26 Feb 2027",
      ],
    },
  },
  {
    prompt: "Buy $100 of ETH if it drops 5%, then take profit at +10%.",
    card: {
      kind: "strategy",
      title: "Multi-step Strategy",
      badge: "2 steps",
      steps: [
        {
          action: "Buy $100 of ETH with USDC",
          trigger: "When ETH drops 5% from $2,410",
        },
        {
          action: "Sell the ETH back to USDC",
          trigger: "When ETH is 10% above the price step 1 paid",
        },
      ],
      permission: "Up to $100 per step, max 2 runs",
      permissionLines: [
        "Only the tokens shown above, proceeds to your wallet only",
        "Step 2 cannot run before step 1 has filled",
        "Expires 26 Feb 2027",
      ],
      fields: [""],
    },
  },
  {
    prompt: "Send 100 USDC to Maya on the first of every month.",
    card: {
      kind: "transfer",
      title: "Scheduled Transfer",
      badge: "12 runs",
      amount: "100",
      token: "USDC",
      recipient: "0xDe16…6700",
      permission: "Up to 100 USDC per run, 12 runs",
      permissionLines: [
        "Can only send to the address shown above",
        "Can only move USDC, and only this amount",
        "Expires after the twelfth payment",
      ],
      fields: [
        "Runs: Monthly, on the 1st",
        "Next payment: 1 Sep, 09:00",
        "Runs until: 1 Aug 2027",
      ],
    },
  },
  {
    prompt: "Take profit when ETH rises 20%.",
    card: {
      kind: "trigger",
      title: "Price Trigger",
      badge: "1 run",
      headline: "ETH rises 20%, to $2,892.22",
      detail: "Measured from $2,410.18, the price when you sign",
      from: "ETH",
      to: "USDC",
      amountLabel: "0.5 ETH",
      permission: "Up to 0.5 ETH, one run",
      permissionLines: [
        "Runs once, then the permission is spent",
        "Can only sell ETH for USDC",
        "Proceeds return to your wallet only",
      ],
      fields: ["Checked: Every 15 seconds", "Expires: 26 Feb 2027"],
    },
  },
];

/** What the hero shows, and the fallback for a card rendered without props. */
const DEFAULT_PLAN_CARD = SHOWCASE_CARDS[0].card;

function ConversationalShowcaseSection() {
  const [active, setActive] = useState(0);
  const { prompt, card } = SHOWCASE_CARDS[active];

  return (
    <SectionShell id="showcase">
      {/* <SectionHeader
        title="One sentence in. One card to check."
        copy="Pick any of these. The wording changes, the amounts change, and so does the card — a payment is checked differently from a two-step strategy. What never changes is that you read the exact limits before anything is signed."
      /> */}

      <Reveal className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* Left: the prompts, as things you can actually click. */}
        <div className="flex flex-col gap-2.5">
          {/* <p className="mb-1 text-[11px] font-bold tracking-[0.14em] text-muted-ink uppercase">
            Try one
          </p> */}

          <h2 className="max-w-4xl mb-6 text-balance text-4xl font-medium leading-[1.05] tracking-normal text-foreground sm:text-6xl lg:text-[60px]">
            One sentence in. One card to check.
          </h2>

          {SHOWCASE_CARDS.map((item, index) => (
            <button
              key={item.prompt}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={active === index}
              className={cn(
                "group relative overflow-hidden rounded-xl border p-4 text-left text-sm leading-6 transition-all",
                active === index
                  ? "border-primary/40 bg-primary/8 text-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-border hover:bg-foreground/[0.03] hover:text-foreground",
              )}
            >
              {/* The active marker is a rail rather than a fill, so the
                  selected prompt stays as readable as the others. */}
              {/* <span
                aria-hidden
                className={cn(
                  "absolute inset-y-0 left-0 w-0.5 transition-colors",
                  active === index ? "bg-primary" : "bg-transparent",
                )}
              /> */}
              <span className="block pl-2">{item.prompt}</span>
            </button>
          ))}

          {/* <p className="mt-1 pl-2 text-[11px] leading-5 text-muted-ink">
            Four prompts, four different cards — because the app picks the one that matches the
            decision you are actually making.
          </p> */}
        </div>

        {/* Right: the card that sentence compiles into. */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={prompt}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <ExecutionPlanCard card={card} />
            </motion.div>
          </AnimatePresence>

          {/* <p className="mt-3 text-center text-[11px] text-muted-ink">
            Tap the permission line to see every limit the chain will enforce.
          </p> */}
        </div>
      </Reveal>
    </SectionShell>
  );
}

/**
 * The security claim, argued rather than asserted.
 *
 * WHAT THIS REPLACES
 *
 * Five numbered boxes reading Intent → Simulation → Approval → Smart wallet →
 * Execution receipt, beside copy promising "simulations and human approval
 * gates". Two of those stages do not exist in the product — it is the same
 * invented pipeline that used to sit in the showcase section — and the button
 * underneath pointed at `#`.
 *
 * The replacement is the argument the product can actually make, which is
 * stronger than the fiction anyway: state the worst case, then show what is
 * still true inside it. "Even if our servers are entirely compromised" is a
 * claim almost nobody in this category can make, and it converts better than a
 * flowchart because it is the question a sceptical reader already has.
 *
 * The last row is the one that does the work. Admitting the residual risk is
 * what makes the four above it believable.
 */
const COMPROMISE_GUARANTEES = [
  {
    claim: "Cannot move your funds to another address",
    why: "The recipient is written into the permission and checked on every run.",
  },
  {
    claim: "Cannot swap for a token you did not choose",
    why: "Both sides of the pair are fixed at signing. Neither can be substituted.",
  },
  {
    claim: "Cannot spend more than you approved",
    why: "Capped per run, and again by the number of runs. Approvals do not stack.",
  },
  {
    claim: "Cannot keep going indefinitely",
    why: "Every permission carries an expiry. It stops on its own with nobody watching.",
  },
];

function SecuritySection() {
  return (
    <SectionShell id="security" className="bg-surface-alt">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Security"
            title="Assume we get hacked"
            copy="Most products ask you to trust that they will not misuse access. Qleva is built so the question does not arise: the limits you approve are enforced by the contract holding your funds, not by our servers. So the useful test is the hostile one."
          />

          {/* The two facts the panel rests on, stated plainly rather than
              hidden in the panel's small print. */}
          <Reveal className="mt-8 flex flex-col gap-3">
            {[
              ["Enforced by", "the smart contract holding your funds"],
              ["Not enforced by", "Qleva's servers, or a promise from us"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-baseline gap-2 text-sm">
                <span className="shrink-0 font-semibold text-muted-ink">
                  {label}:
                </span>
                <span className="font-semibold text-foreground">{value}</span>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-8 flex justify-start">
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-foreground/10 bg-foreground/[0.04] px-6 text-foreground hover:bg-foreground/[0.08] hover:text-foreground"
            >
              <Link href="/security">
                Read the security model
                <ArrowRight className="ml-1.5 size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Reveal className="qleva-surface rounded-[32px] p-3 sm:p-4">
          <div className="flex items-center justify-between gap-3 px-2 pt-2 pb-4">
            <p className="text-[11px] font-bold tracking-[0.14em] text-muted-ink uppercase">
              If our servers were fully compromised
            </p>
            <ShieldCheck
              className="size-4 shrink-0 text-accent-ink"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col gap-2">
            {COMPROMISE_GUARANTEES.map((row, index) => (
              <Reveal
                key={row.claim}
                delay={index * 0.06}
                className="flex items-start gap-3 rounded-2xl border border-foreground/8 bg-card px-4 py-3.5"
              >
                {/* <BadgeCheck className="mt-0.5 size-4 shrink-0 text-accent-ink" aria-hidden="true" /> */}
                <div className="min-w-0 leading-tight">
                  <p className="text-sm font-semibold text-foreground">
                    {row.claim}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-ink">
                    {row.why}
                  </p>
                </div>
              </Reveal>
            ))}

            {/* The admission. It belongs on the same panel as the guarantees,
                in a different colour, because a list of only good news is the
                thing a sceptical reader discounts entirely. */}
            <Reveal
              delay={COMPROMISE_GUARANTEES.length * 0.06}
              className="flex items-start gap-3 rounded-2xl border border-amber-500/25 bg-amber-500/[0.07] px-4 py-3.5"
            >
              <AlertTriangle
                className="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400"
                aria-hidden="true"
              />
              <div className="min-w-0 leading-tight">
                <p className="text-sm font-semibold text-foreground">
                  Could run your automation at a worse moment
                </p>
                <p className="mt-1 text-xs leading-5 text-muted-ink">
                  Within the cap you already approved. This is the risk that
                  remains, and we would rather write it down than let you find
                  it.
                </p>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

/**
 * What the page looks like once a few automations are running.
 *
 * WHAT THIS REPLACES
 *
 * Three cards containing pre-formatted text — "Action: Recurring payment\nAsset:
 * USDC\n…" — rendered with `whitespace-pre-line`. It was a screenshot of a
 * config file, and it repeated the section above it: both said "your sentence
 * becomes a readable plan".
 *
 * The showcase already makes that point, and makes it with the real card. So
 * this section answers the question that comes *after* signing, which nothing
 * on the page answered: what do I actually have running, and can I stop it?
 *
 * The rows are the app's own list view — same order of information (subject,
 * plain-English summary, when next, spend, status, pause), same overlapping
 * logos for a pair. Nothing here is invented; it is the automations page with
 * four plausible rows in it.
 */
const LIVE_ROWS = [
  {
    from: "USDC" as const,
    to: "ETH" as const,
    summary: "Buy $20 of ETH every Friday",
    when: "Next Fri 28 Aug · 5 of 26 done",
    amount: "$20",
    status: "Active" as const,
  },
  {
    from: "USDC" as const,
    to: "ETH" as const,
    summary: "Buy ETH on a 5% dip, take profit at +10%",
    when: "Waiting on ETH −5% from $2,410 · step 1 of 2",
    amount: "$100",
    status: "Active" as const,
  },
  {
    from: "USDC" as const,
    to: "USDC" as const,
    summary: "Send 100 USDC to Maya on the 1st",
    when: "Next 1 Sep · 3 of 12 done",
    amount: "100 USDC",
    status: "Paused" as const,
  },
  {
    from: "ETH" as const,
    to: "USDC" as const,
    summary: "Take profit when ETH rises 20%",
    when: "Filled 12 Aug at $2,892",
    amount: "0.5 ETH",
    status: "Done" as const,
  },
];

/** Status, in the three colours the app uses: live, waiting on you, finished. */
const STATUS_STYLES: Record<(typeof LIVE_ROWS)[number]["status"], string> = {
  Active: "bg-primary/10 text-accent-ink",
  Paused: "bg-amber-500/12 text-amber-600 dark:text-amber-400",
  Done: "bg-foreground/[0.06] text-muted-ink",
};

function HumanReadableSection() {
  return (
    <SectionShell>
      <SectionHeader
        title="And a week later, you can still see every one"
        copy="Signing is not the end of it. Each automation stays on one page in plain English — what it does, when it next runs, how many runs are left, and a pause that takes effect before the next one."
      />

      <Reveal className="qleva-surface mx-auto mt-14 max-w-4xl rounded-[28px] p-3 sm:p-4">
        {/* The page header, as the app draws it: a count, and the view toggle. */}
        <div className="flex items-center justify-between px-1 pt-1 pb-3">
          <p className="text-sm font-semibold text-foreground">
            4 automations
            <span className="ml-2 font-normal text-muted-ink">2 active</span>
          </p>
          <div className="flex items-center gap-1 rounded-xl border border-foreground/8 bg-foreground/[0.04] p-1">
            <span className="rounded-lg bg-card px-2.5 py-1.5 text-[11px] font-semibold text-foreground shadow-sm">
              List
            </span>
            <span className="px-2.5 py-1.5 text-[11px] font-medium text-muted-ink">
              Grid
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {LIVE_ROWS.map((row, index) => (
            <Reveal
              key={row.summary}
              delay={index * 0.06}
              className="group flex items-center gap-3 rounded-2xl border border-foreground/8 bg-card px-3 py-3 transition-colors hover:bg-foreground/[0.03] sm:gap-4 sm:px-4"
            >
              {/* A pair reads as a trade faster than any label — so the two
                  logos overlap, exactly as they do in the product. */}
              <div className="flex shrink-0 items-center">
                <TokenMark symbol={row.from} className="size-8 rounded-full" />
                {row.to !== row.from && (
                  <TokenMark
                    symbol={row.to}
                    className="-ml-2.5 size-8 rounded-full ring-2 ring-card"
                  />
                )}
              </div>

              <div className="min-w-0 flex-1 leading-tight">
                <p className="truncate text-sm font-semibold text-foreground">
                  {row.summary}
                </p>
                <p className="mt-0.5 truncate text-[11px] text-muted-ink">
                  {row.when}
                </p>
              </div>

              <span className="hidden shrink-0 text-xs font-semibold text-foreground md:block">
                {row.amount}
              </span>

              <span
                className={cn(
                  "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold",
                  STATUS_STYLES[row.status],
                )}
              >
                {row.status}
              </span>

              <span className="hidden shrink-0 items-center gap-1 text-[11px] font-semibold text-muted-ink sm:flex">
                {row.status === "Done" ? null : (
                  <>
                    <Pause className="size-3.5" aria-hidden="true" />
                    Pause
                  </>
                )}
              </span>

              <ChevronRight
                className="size-4 shrink-0 text-muted-ink transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal className="mx-auto mt-8 max-w-2xl text-center text-sm leading-7 text-muted-foreground">
        Pausing stops the next run immediately. And nothing can outlive what you
        signed: every permission carries a run count and an expiry the contract
        enforces, so it ends on its own even if nobody is watching it.
      </Reveal>
    </SectionShell>
  );
}

/**
 * The balances underneath the automations.
 *
 * WHY THIS CHANGED
 *
 * This section used to list three upcoming automations — which is now exactly
 * what the section above it does, in the product's own row layout. Two lists of
 * the same thing, one of them cruder, is worse than one.
 *
 * So it does the job its id always claimed: the portfolio. That is a real
 * surface — the app reads wallet balances and prices them — and it is the piece
 * that makes the conditions above believable, because "when ETH drops 5%" has
 * to be measured against something.
 */
const HOLDINGS = [
  {
    symbol: "ETH" as const,
    name: "Ethereum",
    amount: "1.4210",
    usd: "$4,102.30",
    share: 59,
  },
  {
    symbol: "USDC" as const,
    name: "USD Coin",
    amount: "2,840.00",
    usd: "$2,840.00",
    share: 41,
  },
];

function PortfolioSection() {
  return (
    <SectionShell id="portfolio" className="bg-surface-alt">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <SectionHeader
          align="left"
          title="Priced against the wallet you actually hold"
          copy="Qleva reads your balances straight from Base and prices them from the same oracle the engine trades on. So the figure on this screen and the figure a condition is checked against are the same number — not two opinions that happen to agree."
        />

        <Reveal className="qleva-surface rounded-[32px] p-4 sm:p-5">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] text-muted-ink uppercase">
                Wallet value
              </p>
              <p className="mt-1.5 text-3xl font-extrabold tracking-tight text-foreground">
                $6,942.30
              </p>
            </div>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-accent-ink">
              Base
            </span>
          </div>

          {/* Allocation as one bar, because the split is the thing a rebalance
              rule acts on and a number per row hides it. */}
          <div className="mt-5 flex h-2 overflow-hidden rounded-full bg-foreground/[0.06]">
            {HOLDINGS.map((holding, index) => (
              <span
                key={holding.symbol}
                style={{ width: `${holding.share}%` }}
                className={index === 0 ? "bg-primary" : "bg-primary/35"}
                aria-hidden="true"
              />
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-2">
            {HOLDINGS.map((holding) => (
              <div
                key={holding.symbol}
                className="flex items-center gap-3 rounded-2xl border border-foreground/8 bg-card px-3 py-3 sm:px-4"
              >
                <TokenMark
                  symbol={holding.symbol}
                  className="size-9 rounded-full"
                />

                <div className="min-w-0 flex-1 leading-tight">
                  <p className="truncate text-sm font-semibold text-foreground">
                    {holding.symbol}
                  </p>
                  <p className="mt-0.5 truncate text-[11px] text-muted-ink">
                    {holding.name}
                  </p>
                </div>

                <div className="shrink-0 text-right leading-tight">
                  <p className="text-sm font-semibold text-foreground">
                    {holding.usd}
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted-ink">
                    {holding.amount} · {holding.share}%
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-center text-[11px] text-muted-ink">
            A token with no market shows its balance and no price, rather than a
            guess.
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function FeatureGridSection() {
  return (
    <SectionShell id="features">
      <SectionHeader
        title="Everything needed to automate safely"
        copy="Qleva keeps powerful actions understandable, reviewable, and easy to manage."
      />
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featureCards.map(([title, copy, Icon], index) => (
          <Reveal
            key={title}
            delay={index * 0.035}
            className={`rounded-[24px]  bg-card p-5 transition-colors hover:border-foreground/14 hover:bg-secondary ${(index + 1) % 3 == 0 ? "rotate-1" : index + 1 == 1 || index + 1 == 4 || index + 1 == 7 ? "-rotate-1" : "rotate-0"} `}
          >
            <span className="mb-5 grid size-12 place-items-center rounded-lg bg-primary/10 text-accent-ink">
              <Icon aria-hidden="true" />
            </span>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {copy}
            </p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 flex justify-center">
        <Button
          asChild
          className="h-12 rounded-lg bg-primary px-6 text-primary-foreground hover:bg-primary/90"
        >
          <Link
            href="https://app.qleva.cloud/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch App
          </Link>
        </Button>
      </Reveal>
    </SectionShell>
  );
}

function DemoSection() {
  return (
    <SectionShell id="demo" className="bg-surface-alt">
      <SectionHeader
        title="Watch one request become a running automation"
        copy="A short product-native demo showing the full flow from intent to approved smart-wallet action."
      />
      <Reveal className="mt-14 qleva-surface overflow-hidden rounded-[32px] p-5 sm:p-7">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge
              variant="outline"
              className="border-primary/25 bg-primary/10 text-accent-ink"
            >
              Product-native demo
            </Badge>
            <h3 className="mt-5 text-3xl font-semibold leading-tight text-foreground">
              Buy $100 of ETH if it drops 5%, then take profit at +10%.
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              No stock footage. No pretend trading dashboard. Just the actual
              Qleva mental model: say the action, review the plan, approve the
              automation, track the result.
            </p>
          </div>
          <div className="rounded-[28px] border border-foreground/8 bg-surface-alt p-5">
            <div className="mb-5 flex items-center gap-3">
              <span className="size-3 rounded-full bg-primary" />
              <span className="h-px flex-1 bg-foreground/10" />
              <span className="size-3 rounded-full bg-foreground/20" />
              <span className="h-px flex-1 bg-foreground/10" />
              <span className="size-3 rounded-full bg-foreground/20" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Source: Ethereum",
                "Destination: Base",
                "Asset: USDC",
                "Amount: 200",
                "Time: Tomorrow, 9:00 AM",
                "Max gas: User-defined limit",
              ].map((field, index) => {
                const [label, value] = field.split(":");
                return (
                  <PlanField
                    key={field}
                    label={label}
                    value={value.trim()}
                    active={index === 1}
                  />
                );
              })}
            </div>
            <div className="mt-5 rounded-2xl border border-primary/25 bg-primary/10 p-4">
              <p className="text-sm font-semibold text-accent-ink">
                Simulation complete
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Automation is ready to move into Scheduled after approval.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-8 flex justify-center">
        <Button
          asChild
          className="h-12 rounded-lg bg-primary px-6 text-primary-foreground hover:bg-primary/90"
        >
          <Link
            href="https://app.qleva.cloud/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch App
          </Link>
        </Button>
      </Reveal>
    </SectionShell>
  );
}

const comparisonCards = [
  // {
  //   title: "Manual DeFi",
  //   gradient: "from-foreground/[0.02] to-transparent",
  //   border: "border-foreground/5",
  //   badge: null,
  //   textColor: "text-foreground",
  //   isQleva: false,
  //   features: [
  //     { label: "Setup style", value: "Rebuild every action" },
  //     { label: "Transparency", value: "Scattered across apps" },
  //     { label: "Approval control", value: "Every transaction" },
  //     { label: "Recurring actions", value: "Manual repetition" },
  //     { label: "User effort", value: "High" },
  //   ],
  // },
  {
    title: "Dashboards",
    gradient: "from-foreground/[0.02] to-transparent",
    border: "border-foreground/5",
    badge: null,
    textColor: "text-foreground",
    isQleva: false,
    features: [
      { label: "Setup style", value: "Tune controls" },
      { label: "Transparency", value: "Visible but complex" },
      { label: "Approval control", value: "Manual controls" },
      { label: "Recurring actions", value: "Configuration-heavy" },
      { label: "User effort", value: "High setup cost" },
    ],
  },
  {
    title: "Trading bots",
    gradient: "from-foreground/[0.02] to-transparent",
    border: "border-foreground/5",
    badge: null,
    textColor: "text-foreground",
    isQleva: false,
    features: [
      { label: "Setup style", value: "Configure strategies" },
      { label: "Transparency", value: "Often opaque" },
      { label: "Approval control", value: "Varies by bot" },
      { label: "Recurring actions", value: "Strategy-focused" },
      { label: "User effort", value: "Hard to audit" },
    ],
  },

  {
    title: "Qleva",
    gradient: "from-primary/12 via-primary/2 to-transparent",
    border: "border-primary/30",
    badge: "Recommended",
    textColor: "text-accent-ink",
    isQleva: true,
    features: [
      { label: "Setup style", value: "Describe the outcome" },
      { label: "Transparency", value: "Readable plan first" },
      { label: "Approval control", value: "Human approval gates" },
      { label: "Recurring actions", value: "Built for routines" },
      { label: "User effort", value: "Low, with clear limits" },
    ],
  },
];

function ComparisonSection() {
  return (
    <SectionShell id="comparison">
      <SectionHeader
        title="Not a bot. Not another dashboard."
        copy="Qleva gives you automation without hiding the details or forcing you through manual DeFi steps every time."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {comparisonCards.map((card) => (
          <Reveal
            key={card.title}
            className={cn(
              "relative rounded-[28px] border bg-card p-6 flex flex-col justify-between overflow-hidden transition-all duration-300",
              card.border,
              // card.isQleva ? "shadow-[0_20px_50px_rgba(255,206,72,0.06)]" : ""
            )}
          >
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-b -z-10 pointer-events-none",
                card.gradient,
              )}
            />

            <div>
              <div className="flex items-center justify-between mb-8">
                <h3
                  className={cn(
                    "text-xl font-bold tracking-tight",
                    card.textColor,
                  )}
                >
                  {card.title}
                </h3>
                {card.badge && (
                  <Badge
                    className="border-primary/25 bg-primary/10 text-accent-ink hover:bg-primary/15 transition-colors"
                    variant="outline"
                  >
                    {card.badge}
                  </Badge>
                )}
              </div>

              <div className="flex flex-col gap-5">
                {card.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-1.5 border-t border-foreground/5 pt-4 first:border-0 first:pt-0"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-ink">
                      {feature.label}
                    </span>
                    <span
                      className={cn(
                        "text-[14px] leading-relaxed font-medium",
                        card.isQleva
                          ? "text-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      {feature.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-foreground/8 py-1.5">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between py-5 text-left text-foreground hover:text-accent-ink transition-colors focus:outline-none"
      >
        <span className="text-base sm:text-lg font-medium pr-8 leading-snug">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-muted-foreground shrink-0"
        >
          <Plus className="h-5 w-5" />
        </motion.span>
      </button>
      {/*
        Always mounted, collapsed to zero height — not unmounted.

        With `{isOpen && …}` the answer text was absent from the DOM until a
        human clicked, so it never appeared in the served HTML. That is a
        problem twice over: the FAQ answers are the part of this page most
        likely to rank, and the FAQPage structured data above describes text a
        crawler could not find, which reads as a mismatch rather than an
        oversight.

        Animating height on a mounted element gives the identical open/close
        motion while keeping the text present. Google indexes content collapsed
        behind an accordion; it cannot index content that was never rendered.
      */}
      <motion.div
        id={`faq-answer-${question.slice(0, 24).replace(/\W+/g, "-").toLowerCase()}`}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        className="overflow-hidden"
      >
        <div className="pb-5 text-sm sm:text-base leading-relaxed text-muted-foreground pr-6">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}

function FAQSection() {
  /**
   * FAQPage structured data.
   *
   * This is what makes the answers eligible for the expandable Q&A blocks
   * Google shows directly in results — the highest-leverage SEO available to a
   * new domain, because it wins space on the page for a query without needing
   * to outrank anyone for the main link.
   *
   * Generated from the same array the section renders, so the markup and the
   * visible text can never disagree. Google treats a mismatch between them as
   * cloaking, which is a penalty rather than a missed opportunity.
   */
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <SectionShell id="faq" className="bg-surface-alt">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\u003c"),
        }}
      />
      <SectionHeader
        title="Questions worth asking before automating crypto"
        copy="Qleva is built for users who want convenience without losing control."
      />
      <Reveal className="mx-auto mt-12 max-w-[800px] w-full">
        <div className="flex flex-col">
          {faqs.map(([question, answer]) => (
            <FAQItem key={question} question={question} answer={answer} />
          ))}
        </div>
      </Reveal>
      <Reveal className="mt-12 flex justify-center">
        <Button
          asChild
          variant="outline"
          className="h-12 rounded-full border-foreground/10 bg-foreground/[0.04] px-6 text-foreground hover:bg-foreground/[0.08] hover:text-foreground"
        >
          <Link href="#">Read docs</Link>
        </Button>
      </Reveal>
    </SectionShell>
  );
}

function FinalCTASection() {
  return (
    <section id="final-cta" className="border-t">
      <Reveal className="relative overflow-hidden p-8 text-center sm:p-12 lg:p-16">
        <div
          className="absolute left-1/2 top-0 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[110px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] text-foreground sm:text-6xl">
            Crypto automation that feels{" "}
            <span className="font-serif italic text-muted-foreground">
              human
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground">
            Describe what you want. Review what will happen. Approve only when
            it makes sense.
          </p>
          <div className="mx-auto mt-8 max-w-md rounded-[24px] border border-foreground/8 bg-surface-alt p-4 text-left">
            <p className="rounded-2xl bg-foreground/[0.06] p-4 text-sm text-foreground">
              Send USDC every month.
            </p>
            <p className="mt-3 rounded-2xl border border-primary/25 bg-primary/10 p-4 text-sm font-semibold text-accent-ink">
              Recurring payment ready for review. Approval required.
            </p>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="qleva-soft-glow h-12 rounded-lg bg-primary px-6 text-primary-foreground hover:bg-primary/90"
            >
              <Link href="#">Launch App</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-lg border-foreground/10 bg-foreground/[0.04] px-6 text-foreground hover:bg-foreground/[0.08] hover:text-foreground"
            >
              <Link href="#">View Docs</Link>
            </Button>
          </div>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-muted-ink">
            Qleva gives you a simpler way to handle recurring crypto actions
            without surrendering control to a black box.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  const groups = {
    Product: ["How it works", "Use cases", "Security", "Pricing"],
    Resources: ["Docs", "Guides", "Status", "Support"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Legal: ["Privacy", "Terms", "Risk notice"],
  };
  const themeColors = useThemeColors();

  return (
    <footer className="relative z-10 rounded-t-3xl px-5 pt-14 sm:px-8 lg:px-10 mx-auto max-w-6xl bg-card border-0 outline-0 ring-0">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <PixelBlast
            variant="square"
            pixelSize={4}
            color={themeColors.effect}
            patternScale={2}
            patternDensity={1}
            pixelSizeJitter={0}
            enableRipples={true}
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.5}
            edgeFade={0.25}
            transparent
            className="absolute inset-0"
          />
        </div>
      </div>
      <div className="mx-auto max-w-[1180px] relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <BrandMark />
            <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">
              The easiest way to automate crypto actions using natural language.
            </p>
            <p className="mt-3 text-sm text-muted-ink">Pronounced "Cleva."</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {Object.entries(groups).map(([group, links]) => (
              <div key={group}>
                <h3 className="text-sm font-semibold text-foreground">
                  {group}
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  {links.map((link) => (
                    <Link
                      key={link}
                      href="#"
                      className="text-sm text-muted-ink transition-colors hover:text-accent-ink"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*
          Theme control lives here rather than in the nav: it is a preference,
          not a destination, and the footer is where people already look for
          one. Wraps on a phone so it never collides with the copyright.
        */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border/40 pt-6">
          <p className="text-xs text-muted-ink">
            © {new Date().getFullYear()} Qleva. Non-custodial crypto automation
            on Base.
          </p>
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-medium text-muted-ink">Theme</span>
            <ThemeSwitcher />
          </div>
        </div>

        <Reveal className="mt-16 overflow-hidden flex gap-6  items-center justify-center">
          <Image
            alt="logo"
            src="/qleva-brand-kit/qleva-drak.png"
            width={500}
            height={500}
            className="lg:w-30 w-20 md:w-25 h-auto "
          />
          <div className="font-serif text-[20vw] italic text-muted-foreground font-medium leading-none tracking-normal  opacity-95 sm:text-[16vw] lg:text-[180px]">
            Qleva
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  const themeColors = useThemeColors();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <SectionDots />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <PixelBlast
            variant="square"
            pixelSize={4}
            color={themeColors.effect}
            patternScale={2}
            patternDensity={1}
            pixelSizeJitter={0}
            enableRipples={true}
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.5}
            edgeFade={0.25}
            transparent
            className="absolute inset-0"
          />
        </div>
      </div>
      <HeroSection />
      <TrustBar />
      <HowItWorksSection />
      <UseCasesSection />
      <ConversationalShowcaseSection />
      <SecuritySection />
      <HumanReadableSection />
      <PortfolioSection />
      <FeatureGridSection />
      {/* <DemoSection /> */}
      <ComparisonSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
