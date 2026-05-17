"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Send, Paperclip, Bot, AtSign } from "lucide-react";
import TextType from "@/components/ui/text-type";

export function Hero() {
  return (
    <section className="relative pt-24 pb-12 md:pt-38 md:pb-12 px-6 flex flex-col items-center justify-center min-h-[100dvh] text-center bg-black overflow-hidden">
      {/* Background angled faddy shades (V-shape, 3 layers) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Side Fades (skew-x to angle \) */}
        <div className="absolute top-0 -left-[10%] w-[40%] h-full origin-top transform skew-x-[30deg] bg-gradient-to-r from-white/[0.05] to-transparent" />
        <div className="absolute top-0 left-[0%] w-[30%] h-full origin-top transform skew-x-[30deg] bg-gradient-to-r from-white/[0.03] to-transparent" />
        <div className="absolute top-0 left-[10%] w-[20%] h-full origin-top transform skew-x-[30deg] bg-gradient-to-r from-white/[0.015] to-transparent" />
        
        {/* Right Side Fades (-skew-x to angle /) */}
        <div className="absolute top-0 -right-[10%] w-[40%] h-full origin-top transform -skew-x-[30deg] bg-gradient-to-l from-white/[0.05] to-transparent" />
        <div className="absolute top-0 right-[0%] w-[30%] h-full origin-top transform -skew-x-[30deg] bg-gradient-to-l from-white/[0.03] to-transparent" />
        <div className="absolute top-0 right-[10%] w-[20%] h-full origin-top transform -skew-x-[30deg] bg-gradient-to-l from-white/[0.015] to-transparent" />
      </div>

      {/* Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/10 text-sm font-medium text-gray-300 mb-6 backdrop-blur-md relative z-10"
      >
        <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">New</span>
        <span>Base testnet-first build</span>
      </motion.div>

      {/* Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl text-4xl md:text-[4.5rem] font-medium tracking-tighter text-white mb-4 leading-[1.05] relative z-10"
      >
        The easiest way to automate <br className="hidden md:block" />
        crypto actions.
      </motion.h1>

      {/* Subtitle */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl text-base md:text-lg text-gray-300 mb-8 font-light leading-relaxed relative z-10"
      >
        Qleva interprets intent and safely executes actions on Base. No complex DeFi dashboards needed.
      </motion.p>

      {/* Actions */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row items-center gap-4 mb-12 relative z-10"
      >
        <button className="px-6 py-2.5 rounded-full bg-primary hover:brightness-110 text-primary-foreground text-sm font-semibold transition-all flex items-center gap-2 border border-primary/20">
          Get Early Access
        </button>
        <button className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-colors backdrop-blur-sm">
          View Documentation
        </button>
      </motion.div>

      {/* Prompt Builder Area */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-3xl relative z-10"
      >
        <div className="p-4 md:p-5 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-2xl relative text-left group">
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none" />
          
          <div className="mb-8 md:mb-10 min-h-[32px] flex items-center">
            <TextType
              text={[
                "Buy $20 of ETH every Friday at 10:00 AM UTC...",
                "Swap 100 USDC for BASE when gas is below 15 gwei...",
                "Alert me when ETH crosses $4,000 and stake 1 ETH...",
                "Claim pending airdrops across all L2 networks..."
              ]}
              typingSpeed={40}
              deletingSpeed={20}
              pauseDuration={2500}
              className="text-gray-300 text-lg font-light tracking-tight"
              cursorClassName="w-0.5 h-5 bg-primary ml-1 align-middle inline-block"
              cursorCharacter=""
            />
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <div className="flex items-center gap-3 text-gray-500">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-xs font-medium border border-white/5 hover:text-gray-300 cursor-pointer transition-colors">
                <Sparkles className="w-3.5 h-3.5" />
                Prompt Builder
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-xs font-medium border border-white/5 hover:text-gray-300 cursor-pointer transition-colors">
                <Bot className="w-3.5 h-3.5" />
                Qleva Engine
              </div>
              <button className="p-1.5 hover:text-gray-300 transition-colors">
                <AtSign className="w-4 h-4" />
              </button>
              <button className="p-1.5 hover:text-gray-300 transition-colors">
                <Paperclip className="w-4 h-4" />
              </button>
            </div>
            <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:brightness-110 transition-all shadow-lg">
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </div>
        </div>

        {/* Feature Tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["Recurring Swaps", "Bridge Assets", "Dollar Cost Averaging", "Profit Taking", "Yield Automation", "Smart Triggers"].map((tag, i) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + (i * 0.05), ease: [0.16, 1, 0.3, 1] }}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-2 backdrop-blur-sm"
            >
              <Sparkles className="w-3 h-3 text-primary/60" />
              {tag}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
