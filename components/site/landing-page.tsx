"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BotOff,
  Boxes,
  Check,
  CircleDollarSign,
  Clock3,
  Coins,
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
import Image from "next/image";
import { LogoLoop } from "../ui/logoLoop";

const navItems = ["Product", "Docs", "Security"];

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
    prompt: "Bridge 200 USDC to Base tomorrow morning.",
  },
  {
    title: "Review",
    copy: "Qleva converts your request into a structured plan with asset, amount, timing, wallet, gas estimate, and limits.",
    prompt: "Action: Scheduled bridge\nAsset: USDC\nAmount: 200\nTime: Tomorrow, 9:00 AM",
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
    plan: ["Action: Recurring buy", "Asset: ETH", "Amount: $20", "Schedule: Every Friday"],
    copy: "Buy a fixed amount on a schedule without opening an exchange every week.",
  },
  {
    title: "Profit taking",
    prompt: "Take profit when ETH rises 20%.",
    plan: ["Trigger: ETH price +20%", "Action: Sell 10% of ETH", "Receive: USDC", "Limit: One execution"],
    copy: "Create a rule and review the exact trigger before it runs.",
  },
  {
    title: "Scheduled bridging",
    prompt: "Bridge 200 USDC to Base tomorrow morning.",
    plan: ["Source: Ethereum", "Destination: Base", "Asset: USDC", "Time: Tomorrow, 9:00 AM"],
    copy: "Move USDC when liquidity needs to be ready.",
  },
  {
    title: "Recurring payments",
    prompt: "Send 100 USDC to Maya on the first of every month.",
    plan: ["Action: Recurring payment", "Asset: USDC", "Recipient: Maya", "Schedule: Monthly"],
    copy: "Send USDC monthly for subscriptions, contributors, or personal routines.",
  },
  {
    title: "Portfolio rebalancing",
    prompt: "Rebalance to 60% ETH and 40% USDC monthly.",
    plan: ["Target: 60% ETH / 40% USDC", "Cadence: Monthly", "Simulation: Required", "Control: Pause anytime"],
    copy: "Keep a simple allocation plan without manual swaps every month.",
  },
];

const showcaseWorkflows = [
  {
    prompt: "Buy $20 of ETH every Friday.",
    type: "Recurring buy",
    fields: ["Asset: ETH", "Amount: $20", "Schedule: Every Friday", "Wallet: Base smart wallet"],
  },
  {
    prompt: "Bridge 200 USDC to Base tomorrow morning.",
    type: "Scheduled bridge",
    fields: ["Source: Ethereum", "Destination: Base", "Asset: USDC", "Time: Tomorrow, 9:00 AM"],
  },
  {
    prompt: "Send 100 USDC to Maya on the first of every month.",
    type: "Recurring payment",
    fields: ["Asset: USDC", "Amount: 100", "Recipient: Maya", "Frequency: Monthly"],
  },
  {
    prompt: "Take profit when ETH rises 20%.",
    type: "Conditional profit taking",
    fields: ["Trigger: ETH +20%", "Action: Sell 10%", "Receive: USDC", "Limit: One execution"],
  },
];

const featureCards = [
  ["Natural-language requests", "Describe the outcome without learning another DeFi interface.", Sparkles],
  ["Structured execution plans", "Review action, asset, amount, timing, wallet, gas, and limits.", FileCheck2],
  ["Simulation-first flow", "See expected behavior before approval.", BadgeCheck],
  ["Recurring schedules", "Run buys, transfers, and payments on a predictable cadence.", Repeat2],
  ["Conditional triggers", "Create rules based on price movement or portfolio thresholds.", GitBranch],
  ["Spending limits", "Control how much an automation can move.", SlidersHorizontal],
  ["Smart-wallet execution", "Use wallet permissions built for safer automation.", WalletCards],
  ["Automation history", "Track every scheduled, completed, paused, and failed action.", History],
  ["Pause and revoke", "Stay in control after setup.", Pause],
] as const;


const faqs = [
  [
    "Is Qleva an AI trading bot?",
    "No. Qleva is not designed to run speculative strategies on your behalf. It turns your instructions into readable crypto automation plans that require approval.",
  ],
  [
    "Can Qleva move funds without me?",
    "Automations must be approved before activation. You can also set limits, pause automations, and revoke permissions.",
  ],
  [
    "What is a smart wallet?",
    "A smart wallet can support programmable permissions and safer execution controls, making it better suited for automation than a basic wallet alone.",
  ],
  [
    "Can I cancel an automation?",
    "Yes. Active automations should remain visible and controllable, with options to pause, edit, or revoke.",
  ],
  [
    "What happens before execution?",
    "Qleva creates a structured plan and simulation so you can review what is expected to happen before approving.",
  ],
  [
    "Is my crypto self-custodied?",
    "Qleva is positioned around self-custody and smart-wallet control. Users remain in control of approvals and permissions.",
  ],
  [
    "What if a transaction fails?",
    "The activity view shows failed attempts clearly, including the automation, time, and reason when available.",
  ],
  [
    "Do I need to understand smart contracts?",
    "No. Qleva explains actions in plain language while still exposing the important details.",
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
    <section id={id} className={cn("relative px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32", className)}>
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
        align === "center" ? "mx-auto max-w-3xl items-center text-center" : "max-w-2xl items-start text-left"
      )}
    >
      {eyebrow ? (
        <Badge variant="outline" className="border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-[#b8b4aa]">
          {eyebrow}
        </Badge>
      ) : null}
      <h2 className="max-w-4xl text-balance text-4xl font-medium leading-[1.05] tracking-normal text-[#f7f4ea] sm:text-6xl lg:text-[62px]">
        {title}
        {italic ? <span className="font-serif italic text-[#b8b4aa]"> {italic}</span> : null}
      </h2>
      <p className="max-w-2xl text-pretty text-base leading-7 text-[#b8b4aa] sm:text-lg">{copy}</p>
    </Reveal>
  );
}

function CTAButtons({ secondary = "See how it works" }: { secondary?: string }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 ">
      <Button
        asChild
        className="h-11 rounded-lg bg-[#ffce48] px-6 text-sm font-semibold text-[#11100c] hover:bg-[#ffda70]"
      >
        <Link href="https://app.qleva.cloud/" target="_blank" rel="noopener noreferrer">
          Launch App
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        className="h-11 rounded-lg border-white/10 bg-white/[0.04] px-6 text-sm font-semibold text-[#f7f4ea] hover:bg-white/[0.08] hover:text-[#f7f4ea]"
      >
        <Link href="#how-it-works">{secondary}</Link>
      </Button>
    </div>
  );
}

function BrandMark() {
  return (
    <Link href="#" className="hidden md:flex relative z-200 items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffce48]/60">
      <Image alt="logo" src="/qleva-brand-kit/qleva-drak.png" width={500} height={500} className="w-6"/>
      <span className="text-xl font-semibold tracking-normal text-[#f7f4ea]">Qleva</span>
    </Link>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 mx-auto max-w-6xl w-full left-1/2 z-2000 -translate-x-1/2">
      <nav className="mx-auto flex h-18 items-center justify-between max-w-6xl  px-4">
        <BrandMark />
        <div className="hidden items-center gap-8 md:flex  backdrop-blur-xl bg-[#090909]/10 p-4 -mr-8 py-3 rounded-lg">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === 'Security' ? '#security' : item === 'Docs' ? '/docs' : '#product'}
              className="text-sm text-[#b8b4aa] transition-colors hover:text-[#f7f4ea]"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild className="h-9 rounded-lg bg-[#ffce48] px-4 text-sm font-semibold text-[#11100c] hover:bg-[#ffda70]">
            <Link href="https://app.qleva.cloud/" target="_blank" rel="noopener noreferrer">Launch App</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <StaggeredMenu
            isFixed={true}
            menuButtonColor="#f7f4ea"
            openMenuButtonColor="#ffce48"
            logoUrl="/qleva-brand-kit/qleva-drak.png"
            items={navItems.map((item) => ({
              label: item,
              link: item === 'Security' ? '#security' : item === 'Product' ? '#product' : item === 'Docs' ? '/docs' : '#'
            }))}
            socialItems={[{ label: 'Twitter', link: 'https://twitter.com' }, { label: 'GitHub', link: 'https://github.com' }]}
            displayItemNumbering={false}
            className="sm-scope"
          />
        </div>
      </nav>
      {/* StaggeredMenu handles its own panel for mobile; nothing else needed here */}
    </header>
  );
}

function PlanField({ label, value, active }: { label: string; value: string; active?: boolean }) {
  return (
    <div className={cn("flex min-w-0 flex-col gap-1 rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4", active && "border-[#ffce48]/30 bg-[#ffce48]/10")}>
      <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#77736b]">{label}</span>
      <span className="min-w-0 break-words text-sm font-semibold text-[#f7f4ea] sm:text-right">{value}</span>
    </div>
  );
}

function ExecutionPlanCard({ fields, title = "Action: Recurring buy" }: { fields?: string[]; title?: string }) {
  const planFields =
    fields?.map((field) => {
      const [label, ...rest] = field.split(":");
      return { label, value: rest.join(":").trim() };
    }) ?? [
      { label: "Asset", value: "ETH" },
      { label: "Amount", value: "$20" },
      { label: "Schedule", value: "Every Friday" },
      // { label: "Wallet", value: "Base smart wallet" },
      { label: "Max gas", value: "$0.25" },
    ];

  return (
    <div className="qleva-surface rounded-[28px] p-4 sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <h3 className="mt-1 text-xl font-semibold text-[#f7f4ea]">{title}</h3>
        </div>
        <Badge className="border-[#ffce48]/25 bg-[#ffce48]/10 text-[#ffce48]" variant="outline">
          Approval required
        </Badge>
      </div>
      <div className="flex flex-col gap-3">
        {planFields.map((field, index) => (
          <motion.div
            key={`${field.label}-${field.value}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + index * 0.07, duration: 0.35 }}
          >
            <PlanField label={field.label} value={field.value} active={index === 2} />
          </motion.div>
        ))}
      </div>
      <Button className="qleva-soft-glow mt-5 h-12 w-full rounded-full bg-[#ffce48] font-semibold text-[#11100c] hover:bg-[#ffda70]">
        Confirm Automation
      </Button>
      <p className="mt-4 text-center text-xs text-[#77736b]">Simulation ready. Approval required.</p>
    </div>
  );
}

function HeroConversation() {
  return (
    <Reveal className="sm:mx-auto px-4 mt-14 max-w-[1080px]">
      <NoiseCard
        width="w-full"
        height="min-h-[360px] sm:min-h-[500px]"
        animated={false}
        noiseOpacity={0.055}
        grainSize={2}
        bgColor="bg-[#000]"
        className="qleva-surface rounded-4xl p-3 sm:p-6 lg:p-6 flex items-center justify-center"
      >
      <div className="grid h-full min-w-0 gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <div className="flex min-w-0 flex-col gap-6 sm:justify-between sm:gap-8 rounded-[24px] border border-white/8 bg-[#0c0c0c] p-5 sm:p-7">
            <div className="flex flex-col gap-4">
              <Badge variant="outline" className="w-fit border-white/10 bg-white/[0.04] text-[#b8b4aa]">
                User request
              </Badge>
              <div className="rounded-[22px] bg-white/[0.06] p-5 text-xl font-medium leading-8 text-[#f7f4ea] sm:text-2xl">
                Buy $20 of ETH every Friday.
              </div>
            </div>
            <div className="rounded-[22px] border border-[#ffce48]/20 bg-[#ffce48]/10 p-5">
              <p className="text-sm font-semibold text-[#ffce48]">No bots. No hidden trades.</p>
              <p className="mt-2 text-sm leading-6 text-[#b8b4aa]">
                Qleva turns your intent into a clear execution plan before anything can run.
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
      {/* <div className="absolute left-1/2 top-24 size-[520px] -translate-x-1/2 rounded-full bg-[#ffce48]/10 blur-[120px]" aria-hidden="true" /> */}
      {/* <div className="absolute inset-x-0 top-0 h-[700px] opacity-30 qleva-grid" aria-hidden="true" /> */}
      <div className="relative mx-auto max-w-[1180px]">
        <Reveal className="mx-auto flex max-w-[880px] flex-col items-center gap-4 text-center">
          <h1 className="max-w-full text-balance text-[38px] font-semibold leading-[1.06] tracking-normal text-[#f7f4ea] min-[420px]:text-[42px] sm:text-6xl lg:text-[72px]">
            Automate crypto actions with{" "}
            <span className="block font-serif italic text-[#b8b4aa] sm:inline">conversation</span>
          </h1>
          <p className="max-w-[660px] text-pretty text-base leading-7 text-[#b8b4aa] sm:text-lg">
            Tell Qleva what you want to do. Review the plan in plain English. Approve it once, then let your smart wallet handle the timing.
          </p>
          <CTAButtons />
        
        </Reveal>
        <HeroConversation />
      </div>
    </section>
  );
}

function TrustBar() {
  const techLogos = [
    { src: '/images/Base_lockup_white.png', title: 'Base', href: 'https://base.org', alt: 'Base logo' },
    { src: '/images/Privy_Brandmark_White.png', title: 'Privy', href: 'https://privy.io', alt: 'Privy logo' },
    // { src: '/images/dummy.avif', title: 'Groq', href: 'https://groq.com', alt: 'Groq logo' },
    { src: '/images/alchemy-logo-white.png', title: 'Alchemy', href: 'https://alchemy.com', alt: 'Alchemy logo' }
  ];

  return (
    <section className="py-2 sm:py-2 -mt-6">
           {/* <SectionHeader
        eyebrow=""
        title=""
        copy="Powered By"
      /> */}
      <div style={{ height: '140px', position: 'relative', overflow: 'hidden' }} className="mt-2">
        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover={true}
          fadeOut
          fadeOutColor="#0b0b0b"
          ariaLabel="Technology partners"
          renderItem={(item: any, key: string) => (
            <a href={item.href} key={key} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-3 rounded px-3 py-2 hover:opacity-90">
              <img src={item.src} alt={item.alt ?? item.title} className="w-30 sm:w-40 opacity-40" />
              {/* <span className="font-bold font-serif italic text-xl text-[#b8b4aa]">{item.title}</span> */}
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
          <Reveal key={step.title} delay={index * 0.08} className="qleva-surface rounded-[28px] p-6">
            <div className="mb-8 flex items-center justify-between">
              <span className="grid size-11 place-items-center rounded-full bg-[#ffce48]/10 text-sm font-semibold text-[#ffce48]">0{index + 1}</span>
              {index < 2 ? <ArrowRight className="hidden text-[#77736b] lg:block" aria-hidden="true" /> : null}
            </div>
            <h3 className="text-2xl font-semibold text-[#f7f4ea]">{step.title}</h3>
            <p className="mt-3 min-h-20 text-sm leading-6 text-[#b8b4aa]">{step.copy}</p>
            <div className="mt-7 min-h-36 whitespace-pre-line rounded-[20px] border border-white/8 bg-[#0c0c0c] p-4 text-sm leading-7 text-[#f7f4ea]">
              {step.prompt}
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 flex justify-center">
        <Button asChild className="h-12 rounded-full bg-[#ffce48] px-6 text-[#11100c] hover:bg-[#ffda70]">
          <Link href="https://app.qleva.cloud/" target="_blank" rel="noopener noreferrer">Start with a request</Link>
        </Button>
      </Reveal>
    </SectionShell>
  );
}

function UseCasesSection() {
  const [active, setActive] = useState(0);
  const selected = useCases[active];

  return (
    <SectionShell id="product" className="bg-[#0c0c0c] relative ">
      <div className=" grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="lg:sticky lg:top-38">
          <SectionHeader
            align="left"
            title="Automations for the crypto actions you already"
            italic='repeat'
            copy="Set up recurring buys, scheduled transfers, bridges, and portfolio rules without rebuilding the same transaction every time."
          />
          <Reveal className="mt-8 flex justify-start">
            <Button asChild className="h-12 rounded-lg bg-[#ffce48] px-6 text-[#11100c] hover:bg-[#ffda70]">
              <Link href="https://app.qleva.cloud/" target="_blank" rel="noopener noreferrer">Launch App</Link>
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
                    ? "border-[#ffce48]/35 bg-[#ffce48]/10"
                    : "border-white/8 bg-[#141414] hover:border-white/14 hover:bg-[#171717]"
                )}
              >
                <div className="flex flex-col gap-6 items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-[#f7f4ea]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#b8b4aa]">{item.copy}</p>
                  </div>
                  <span className="rounded-md border border-white/10 bg-black/20 px-4 py-2 text-sm text-[#f7f4ea]">{item.prompt}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function ConversationalShowcaseSection() {
  const [active, setActive] = useState(0);
  const workflow = showcaseWorkflows[active];

  return (
    <SectionShell>
      <SectionHeader
        title="Say the outcome. Qleva builds the plan."
        copy="The conversation is only the beginning. The important part is the plan you can inspect, approve, and control."
      />
      <Reveal className="mt-14 qleva-surface rounded-[32px] p-4 sm:p-6 lg:p-8">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[26px] border border-white/8 bg-[#0c0c0c] p-5">
            <p className="mb-5 text-sm font-semibold text-[#b8b4aa]">Conversation</p>
            <div className="flex flex-col gap-4">
              {showcaseWorkflows.map((item, index) => (
                <button
                  key={item.prompt}
                  type="button"
                  onClick={() => setActive(index)}
                  className={cn(
                    "rounded-[20px] border p-4 text-left text-sm leading-6 transition-all",
                    active === index ? "border-[#ffce48]/35 bg-[#ffce48]/10 text-[#f7f4ea]" : "border-white/8 bg-white/[0.035] text-[#b8b4aa] hover:text-[#f7f4ea]"
                  )}
                >
                  {item.prompt}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-[26px] border border-white/8 bg-[#141414] p-5">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-[#ffce48]">{workflow.type}</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#f7f4ea]">Structured execution plan</h3>
              </div>
              <Badge variant="outline" className="border-[#ffce48]/25 bg-[#ffce48]/10 text-[#ffce48]">
                Awaiting approval
              </Badge>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {workflow.fields.map((field) => {
                const [label, value] = field.split(":");
                return <PlanField key={field} label={label} value={value.trim()} />;
              })}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-4">
              {["Parsed", "Simulated", "Awaiting approval", "Scheduled"].map((stage, index) => (
                <div key={stage} className="rounded-2xl border border-white/8 bg-[#0c0c0c] p-3">
                  <div className={cn("mb-3 h-1 rounded-full", index < 3 ? "bg-[#ffce48]" : "bg-white/10")} />
                  <p className="text-xs font-medium text-[#b8b4aa]">{stage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

function SecuritySection() {
  const permissions = ["Asset: USDC", "Amount limit: 100 USDC", "Destination: Maya", "Frequency: Monthly", "Status: Awaiting approval"];

  return (
    <SectionShell id="security" className="bg-[#0c0c0c]">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionHeader
            align="left"
            title="Automation without giving up control"
            copy="Qleva is designed around smart-wallet permissions, spending limits, simulations, and human approval gates."
          />
          <Reveal className="mt-8 flex justify-start">
            <Button asChild variant="outline" className="h-12 rounded-full border-white/10 bg-white/[0.04] px-6 text-[#f7f4ea] hover:bg-white/[0.08] hover:text-[#f7f4ea]">
              <Link href="#">Read the security model</Link>
            </Button>
          </Reveal>
        </div>
        <Reveal className="qleva-surface rounded-[32px] p-3 sm:p-4">
          <div className="grid gap-3 sm:grid-cols-3">
            {["Intent", "Simulation", "Approval", "Smart wallet", "Execution receipt"].map((node, index) => (
              <div key={node} className={cn("rounded-xl border p-4", index === 2 ? "border-[#ffce48]/30 bg-[#ffce48]/10" : "border-white/8 bg-[#0c0c0c]")}>
                <span className="text-xs font-semibold text-[#77736b]">0{index + 1}</span>
                <p className="mt-3 text-sm font-semibold text-[#f7f4ea]">{node}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

function HumanReadableSection() {
  return (
    <SectionShell>
      <SectionHeader
        title="Know exactly what Qleva will do"
        copy="Every request becomes a readable plan before it becomes an automation."
      />
      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {[
          ["Natural language", "Send 100 USDC to Maya on the first of every month."],
          ["Structured plan", "Action: Recurring payment\nAsset: USDC\nAmount: 100\nRecipient: Maya\nSchedule: Monthly, first day"],
          ["Execution state", "Next run: June 1, 9:00 AM\nStatus: Scheduled\nControls: Pause / Edit / Revoke"],
        ].map(([title, copy], index) => (
          <Reveal key={title} delay={index * 0.08} className="qleva-surface rounded-[28px] p-6">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[#f7f4ea]">{title}</h3>
              {index < 2 ? <ArrowRight className="text-[#ffce48]" aria-hidden="true" /> : <Check className="text-[#ffce48]" aria-hidden="true" />}
            </div>
            <p className="whitespace-pre-line text-sm leading-7 text-[#b8b4aa]">{copy}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mx-auto mt-8 max-w-3xl text-center text-base leading-7 text-[#b8b4aa]">
        Crypto automation only works when users can understand it. Qleva avoids vague instructions and hidden behavior by showing the action, trigger, limits, destination, wallet, and expected cost.
      </Reveal>
    </SectionShell>
  );
}

function PortfolioSection() {
  const rows = [
    ["Buy $20 ETH", "Friday", "Scheduled"],
    ["Send 100 USDC", "June 1", "Ready"],
    ["Bridge 200 USDC", "Tomorrow", "Simulated"],
  ];

  return (
    <SectionShell className="bg-[#0c0c0c]">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <SectionHeader
          align="left"
          title="See what is scheduled, running, and completed"
          copy="Qleva keeps automation visible after approval, so you can track activity without digging through multiple apps."
        />
        <Reveal className="qleva-surface rounded-[32px] p-3 sm:p-4">
          <div className="grid gap-3 sm:grid-cols-2">
            {["ETH 1.42", "USDC 2,840"].map((balance) => (
              <div key={balance} className="rounded-2xl border border-white/8 bg-[#0c0c0c] p-4">
                <p className="text-xs text-[#77736b]">Balance</p>
                <p className="mt-2 text-xl font-semibold text-[#f7f4ea]">{balance}</p>
              </div>
            ))}
          </div>
          {/* <div className="mt-5 rounded-[24px] border border-white/8 bg-[#0c0c0c] p-3"> */}
            {/* <div className="mb-4 flex items-center justify-between">
              <p className="font-semibold text-[#f7f4ea]">Upcoming automations</p>
              <Badge variant="outline" className="border-white/10 bg-white/[0.04] text-[#b8b4aa]">
                History visible
              </Badge>
            </div> */}
            <div className="flex flex-col gap-3 mt-4">
              {rows.map(([action, date, status]) => (
                <div key={action} className="grid gap-3 rounded-xl border border-white/8 bg-white/[0.035] p-4 sm:grid-cols-[1fr_auto_auto] sm:items-center">
                  <span className="font-medium text-[#f7f4ea]">{action}</span>
                  <span className="text-sm text-[#b8b4aa]">{date}</span>
                  <span className="rounded-full bg-[#ffce48]/10 px-3 py-1 text-xs font-semibold text-[#ffce48]">{status}</span>
                </div>
              ))}
            </div>
          {/* </div> */}
          {/* <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {["Pause automation", "Edit limit", "Revoke permission"].map((control) => (
              <button key={control} type="button" className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-[#f7f4ea] transition-colors hover:bg-white/[0.08]">
                {control}
              </button>
            ))}
          </div> */}
        </Reveal>
      </div>
    </SectionShell>
  );
}

function FeatureGridSection() {
  return (
    <SectionShell>
      <SectionHeader title="Everything needed to automate safely" copy="Qleva keeps powerful actions understandable, reviewable, and easy to manage." />
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featureCards.map(([title, copy, Icon], index) => (
          <Reveal key={title} delay={index * 0.035} className={`rounded-[24px]  bg-[#141414] p-5 transition-colors hover:border-white/14 hover:bg-[#171717] ${(index + 1) % 3 == 0 ? 'rotate-1' : (index + 1) == 1 || (index + 1) == 4 || (index + 1) == 7 ? '-rotate-1' : 'rotate-0' } `}>
            <span className="mb-5 grid size-12 place-items-center rounded-lg bg-[#ffce48]/10 text-[#ffce48]">
              <Icon aria-hidden="true" />
            </span>
            <h3 className="text-lg font-semibold text-[#f7f4ea]">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#b8b4aa]">{copy}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 flex justify-center">
        <Button asChild className="h-12 rounded-lg bg-[#ffce48] px-6 text-[#11100c] hover:bg-[#ffda70]">
          <Link href="https://app.qleva.cloud/" target="_blank" rel="noopener noreferrer">Launch App</Link>
        </Button>
      </Reveal>
    </SectionShell>
  );
}

function DemoSection() {
  return (
    <SectionShell className="bg-[#0c0c0c]">
      <SectionHeader
        title="Watch one request become a running automation"
        copy="A short product-native demo showing the full flow from intent to approved smart-wallet action."
      />
      <Reveal className="mt-14 qleva-surface overflow-hidden rounded-[32px] p-5 sm:p-7">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge variant="outline" className="border-[#ffce48]/25 bg-[#ffce48]/10 text-[#ffce48]">
              Product-native demo
            </Badge>
            <h3 className="mt-5 text-3xl font-semibold leading-tight text-[#f7f4ea]">Bridge 200 USDC to Base tomorrow morning.</h3>
            <p className="mt-4 text-sm leading-7 text-[#b8b4aa]">
              No stock footage. No pretend trading dashboard. Just the actual Qleva mental model: say the action, review the plan, approve the automation, track the result.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/8 bg-[#0c0c0c] p-5">
            <div className="mb-5 flex items-center gap-3">
              <span className="size-3 rounded-full bg-[#ffce48]" />
              <span className="h-px flex-1 bg-white/10" />
              <span className="size-3 rounded-full bg-white/20" />
              <span className="h-px flex-1 bg-white/10" />
              <span className="size-3 rounded-full bg-white/20" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Source: Ethereum", "Destination: Base", "Asset: USDC", "Amount: 200", "Time: Tomorrow, 9:00 AM", "Max gas: User-defined limit"].map((field, index) => {
                const [label, value] = field.split(":");
                return <PlanField key={field} label={label} value={value.trim()} active={index === 1} />;
              })}
            </div>
            <div className="mt-5 rounded-2xl border border-[#ffce48]/25 bg-[#ffce48]/10 p-4">
              <p className="text-sm font-semibold text-[#ffce48]">Simulation complete</p>
              <p className="mt-2 text-sm text-[#b8b4aa]">Automation is ready to move into Scheduled after approval.</p>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-8 flex justify-center">
        <Button asChild className="h-12 rounded-lg bg-[#ffce48] px-6 text-[#11100c] hover:bg-[#ffda70]">
          <Link href="https://app.qleva.cloud/" target="_blank" rel="noopener noreferrer">Launch App</Link>
        </Button>
      </Reveal>
    </SectionShell>
  );
}

const comparisonCards = [
  // {
  //   title: "Manual DeFi",
  //   gradient: "from-white/[0.02] to-transparent",
  //   border: "border-white/5",
  //   badge: null,
  //   textColor: "text-[#f7f4ea]",
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
    gradient: "from-white/[0.02] to-transparent",
    border: "border-white/5",
    badge: null,
    textColor: "text-[#f7f4ea]",
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
    gradient: "from-white/[0.02] to-transparent",
    border: "border-white/5",
    badge: null,
    textColor: "text-[#f7f4ea]",
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
    gradient: "from-[#ffce48]/12 via-[#ffce48]/2 to-transparent",
    border: "border-[#ffce48]/30",
    badge: "Recommended",
    textColor: "text-[#ffce48]",
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
    <SectionShell>
      <SectionHeader
        title="Not a bot. Not another dashboard."
        copy="Qleva gives you automation without hiding the details or forcing you through manual DeFi steps every time."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {comparisonCards.map((card) => (
          <Reveal
            key={card.title}
            className={cn(
              "relative rounded-[28px] border bg-[#141414] p-6 flex flex-col justify-between overflow-hidden transition-all duration-300",
              card.border,
              // card.isQleva ? "shadow-[0_20px_50px_rgba(255,206,72,0.06)]" : ""
            )}
          >
            <div className={cn("absolute inset-0 bg-gradient-to-b -z-10 pointer-events-none", card.gradient)} />

            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className={cn("text-xl font-bold tracking-tight", card.textColor)}>
                  {card.title}
                </h3>
                {card.badge && (
                  <Badge className="border-[#ffce48]/25 bg-[#ffce48]/10 text-[#ffce48] hover:bg-[#ffce48]/15 transition-colors" variant="outline">
                    {card.badge}
                  </Badge>
                )}
              </div>

              <div className="flex flex-col gap-5">
                {card.features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5 border-t border-white/5 pt-4 first:border-0 first:pt-0">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#77736b]">
                      {feature.label}
                    </span>
                    <span className={cn("text-[14px] leading-relaxed font-medium", card.isQleva ? "text-[#f7f4ea]" : "text-[#b8b4aa]")}>
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
    <div className="border-b border-white/8 py-1.5">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left text-[#f7f4ea] hover:text-[#ffce48] transition-colors focus:outline-none"
      >
        <span className="text-base sm:text-lg font-medium pr-8 leading-snug">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-[#b8b4aa] shrink-0"
        >
          <Plus className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-sm sm:text-base leading-relaxed text-[#b8b4aa] pr-6">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQSection() {
  return (
    <SectionShell className="bg-[#0c0c0c]">
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
        <Button asChild variant="outline" className="h-12 rounded-full border-white/10 bg-white/[0.04] px-6 text-[#f7f4ea] hover:bg-white/[0.08] hover:text-[#f7f4ea]">
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
        <div className="absolute left-1/2 top-0 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffce48]/15 blur-[110px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] text-[#f7f4ea] sm:text-6xl">
            Crypto automation that feels <span className="font-serif italic text-[#b8b4aa]">human</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#b8b4aa]">
            Describe what you want. Review what will happen. Approve only when it makes sense.
          </p>
          <div className="mx-auto mt-8 max-w-md rounded-[24px] border border-white/8 bg-[#0c0c0c] p-4 text-left">
            <p className="rounded-2xl bg-white/[0.06] p-4 text-sm text-[#f7f4ea]">Send USDC every month.</p>
            <p className="mt-3 rounded-2xl border border-[#ffce48]/25 bg-[#ffce48]/10 p-4 text-sm font-semibold text-[#ffce48]">
              Recurring payment ready for review. Approval required.
            </p>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild className="qleva-soft-glow h-12 rounded-lg bg-[#ffce48] px-6 text-[#11100c] hover:bg-[#ffda70]">
              <Link href="#">Launch App</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-lg border-white/10 bg-white/[0.04] px-6 text-[#f7f4ea] hover:bg-white/[0.08] hover:text-[#f7f4ea]">
              <Link href="#">View Docs</Link>
            </Button>
          </div>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-[#77736b]">
            Qleva gives you a simpler way to handle recurring crypto actions without surrendering control to a black box.
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

  return (
    <footer className="relative z-10 bg-[#050505] rounded-t-3xl px-5 py-14 sm:px-8 lg:px-10 mx-auto max-w-6xl bg-[#141414] border-0 outline-0 ring-0">
     
       <div className="absolute inset-0 z-0 pointer-events-none">
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <PixelBlast
                variant="square"
                pixelSize={4}
                color="#3a2e0e"
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
            <p className="mt-5 max-w-md text-sm leading-6 text-[#b8b4aa]">The easiest way to automate crypto actions using natural language.</p>
            <p className="mt-3 text-sm text-[#77736b]">Pronounced "Cleva."</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4"> 
            {Object.entries(groups).map(([group, links]) => (
              <div key={group}>
                <h3 className="text-sm font-semibold text-[#f7f4ea]">{group}</h3>
                <div className="mt-4 flex flex-col gap-3">
                  {links.map((link) => (
                    <Link key={link} href="#" className="text-sm text-[#77736b] transition-colors hover:text-[#ffce48]">
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Reveal className="mt-16 overflow-hidden flex gap-6  items-center justify-center">
          <Image alt="logo" src="/qleva-brand-kit/qleva-drak.png" width={500} height={500} className="lg:w-30 w-20 md:w-25 h-auto " />
          <div className="font-serif text-[22vw] italic text-[#b8b4aa] font-medium leading-none tracking-normal  opacity-95 sm:text-[18vw] lg:text-[180px]">
            Qleva
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-[#3a2e0e] text-[#f7f4ea]">
      <Navbar />
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <PixelBlast
                variant="square"
                pixelSize={4}
                color="#3a2e0e"
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
