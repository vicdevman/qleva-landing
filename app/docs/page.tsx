"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Sparkles, Terminal, LockKeyhole, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StaggeredMenu from "@/components/ui/starggeredMenu";
import PixelBlast from "@/components/ui/pixelBlast";
import Lines from "@/components/ui/Lines";

const navItems = ["Product", "Docs", "Security"];

function BrandMark() {
  return (
    <Link href="/" className="hidden md:flex relative z-200 items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffce48]/60">
      <Image alt="logo" src="/qleva-brand-kit/qleva-drak.png" width={500} height={500} className="w-6"/>
      <span className="text-xl font-semibold tracking-normal text-[#f7f4ea]">Qleva</span>
    </Link>
  );
}

function Navbar() {
  return (
    <header className="fixed top-0 mx-auto max-w-6xl w-full left-1/2 z-2000 -translate-x-1/2">
      <nav className="mx-auto flex h-18 items-center justify-between max-w-6xl px-4">
        <BrandMark />
        <div className="hidden items-center gap-8 md:flex backdrop-blur-xl bg-[#090909]/10 p-4 -mr-8 py-3 rounded-lg">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === 'Security' ? '/#security' : item === 'Docs' ? '/docs' : '/#product'}
              className={`text-sm transition-colors hover:text-[#f7f4ea] ${item === 'Docs' ? 'text-[#ffce48] font-medium' : 'text-[#b8b4aa]'}`}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild className="h-9 rounded-xl bg-[#ffce48] px-4 text-sm font-semibold text-[#11100c] hover:bg-[#ffda70]">
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
              link: item === 'Security' ? '/#security' : item === 'Product' ? '/#product' : item === 'Docs' ? '/docs' : '/'
            }))}
            socialItems={[{ label: 'Twitter', link: 'https://twitter.com' }, { label: 'GitHub', link: 'https://github.com' }]}
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
      initial={{ opacity: 0, y: 14, scale: 0.995 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

const upcomingDocs = [
  {
    icon: Terminal,
    title: "Developer Guides",
    desc: "Integrate Qleva's natural language execution engine and smart contract utilities into your own applications.",
  },
  {
    icon: LockKeyhole,
    title: "Security Model & Autonomy",
    desc: "Deep-dive into smart-wallet session keys, human-in-the-loop validation, and simulation verification rules.",
  },
  {
    icon: Sparkles,
    title: "Action Parser Schema",
    desc: "Understand the structured plans generated from plain English prompts, including gas estimations and validation rules.",
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-[#f7f4ea] relative overflow-hidden flex flex-col justify-between">
      <Lines />
      <Navbar />

      {/* Interactive Background */}
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

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 pt-32 pb-20 sm:px-8 sm:pt-40 lg:px-10 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <Reveal delay={0.05}>
            <Badge variant="outline" className="border-[#ffce48]/25 bg-[#ffce48]/10 text-[#ffce48] px-3 py-1 text-xs">
              Documentation Portal
            </Badge>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-[70px]">
              Documentation is coming{" "}
              <span className="font-serif italic text-[#b8b4aa]">soon</span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="max-w-2xl text-base leading-7 text-[#b8b4aa] sm:text-lg">
              We are finalizing the guides, schemas, and security reports. Soon, you will find comprehensive documentation for building, extending, and integrating with Qleva.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Button asChild className="h-11 rounded-lg bg-[#ffce48] px-6 text-sm font-semibold text-[#11100c] hover:bg-[#ffda70]">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-lg border-white/10 bg-white/[0.04] px-6 text-sm font-semibold text-[#f7f4ea] hover:bg-white/[0.08] hover:text-[#f7f4ea]">
              <Link href="https://app.qleva.cloud/" target="_blank" rel="noopener noreferrer">
                Launch App <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        {/* Categories Showcase */}
        <div className="mt-20 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto w-full">
          {upcomingDocs.map((doc, idx) => {
            const Icon = doc.icon;
            return (
              <Reveal key={doc.title} delay={0.25 + idx * 0.05} className="rounded-[24px] bg-[#141414]/80 border border-white/8 p-6 flex flex-col justify-between hover:border-white/14 transition-colors">
                <div>
                  <span className="grid size-12 place-items-center rounded-lg bg-[#ffce48]/10 text-[#ffce48] mb-5">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-semibold text-[#f7f4ea]">{doc.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#b8b4aa]">{doc.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="relative z-10 py-8 border-t border-white/5 text-center text-xs text-[#77736b]">
        &copy; {new Date().getFullYear()} Qleva. All rights reserved.
      </footer>
    </main>
  );
}
