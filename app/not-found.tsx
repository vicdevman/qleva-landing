"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PixelBlast from "@/components/ui/pixelBlast";
import Lines from "@/components/ui/Lines";

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

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#090909] text-[#f7f4ea] relative overflow-hidden flex flex-col justify-between">
      <Lines />

      {/* Brand logo at the top */}
      <header className="absolute top-0 left-0 w-full z-20">
        <div className="mx-auto max-w-6xl px-4 h-18 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffce48]/60">
            <Image alt="logo" src="/qleva-brand-kit/qleva-drak.png" width={500} height={500} className="w-6"/>
            <span className="text-xl font-semibold tracking-normal text-[#f7f4ea]">Qleva</span>
          </Link>
        </div>
      </header>

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
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 pt-32 pb-20 sm:px-8 lg:px-10 flex-1 flex flex-col justify-center items-center">
        <div className="max-w-2xl text-center flex flex-col items-center gap-6">
          <Reveal delay={0.05}>
            <Badge variant="outline" className="border-[#ffce48]/25 bg-[#ffce48]/10 text-[#ffce48] px-3 py-1 text-xs">
              Error 404
            </Badge>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h1 className="text-7xl font-bold tracking-tighter text-[#ffce48] sm:text-9xl">
              404
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-3xl font-semibold sm:text-5xl">
              Lost in the{" "}
              <span className="font-serif italic text-[#b8b4aa]">blocks</span>?
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-md text-base leading-7 text-[#b8b4aa]">
              This block or strategy doesn't exist yet. The path you followed might have been simulated incorrectly, or the page has moved.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <Button asChild className="h-11 rounded-lg bg-[#ffce48] px-6 text-sm font-semibold text-[#11100c] hover:bg-[#ffda70]">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" /> Go to Safety
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-lg border-white/10 bg-white/[0.04] px-6 text-sm font-semibold text-[#f7f4ea] hover:bg-white/[0.08] hover:text-[#f7f4ea]">
              <Link href="https://app.qleva.cloud/" target="_blank" rel="noopener noreferrer">
                Launch App <Sparkles className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="relative z-10 py-8 border-t border-white/5 text-center text-xs text-[#77736b]">
        &copy; {new Date().getFullYear()} Qleva. All rights reserved.
      </footer>
    </main>
  );
}
