"use client";

import { motion } from "framer-motion";
import { ToggleLeft, Sparkles } from "lucide-react";

export function FeaturesTrustedBy() {
  const LOGO_ELEMENTS = [
    <div key="milano" className="flex items-center gap-2 text-white font-medium text-xl md:text-2xl tracking-widest whitespace-nowrap">
      <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 flex items-center justify-center rounded-sm text-sm font-bold">M</div>
      MILANO
    </div>,
    <div key="savannah" className="text-white font-bold text-2xl md:text-3xl tracking-tighter whitespace-nowrap">
      SAVANNAH
    </div>,
    <div key="amsterdam" className="flex items-center gap-2 text-white font-medium text-xl md:text-2xl tracking-tight whitespace-nowrap">
      <ToggleLeft className="w-6 h-6 md:w-8 md:h-8" />
      Amsterdam
    </div>,
    <div key="theo" className="text-white text-3xl md:text-4xl font-serif italic tracking-tighter whitespace-nowrap" style={{ fontFamily: "cursive" }}>
      theo
    </div>,
    <div key="lumin" className="flex items-center gap-2 text-white font-semibold text-xl md:text-2xl tracking-tight whitespace-nowrap">
      <Sparkles className="w-5 h-5 md:w-6 md:h-6 fill-white" />
      lumin
    </div>
  ];

  return (
    <section className="relative w-full min-h-[400px] flex flex-col items-center justify-center overflow-hidden bg-[#030303] border-y border-white/5 py-16">
      {/* 1. Background Radial Gradient: Central powerful pool of golden-yellow light fading to dark void */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15]" 
        style={{
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, var(--color-primary) 0%, transparent 100%)"
        }}
      />

      {/* 2. Logo Marquee Motion & Gradient Mask Integration */}
      <div className="relative z-10 mt-16 w-full flex justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_50%,transparent_100%)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          className="flex items-center gap-16 md:gap-24 px-8 w-max"
        >
          {/* Duplicated for seamless infinite looping */}
          {[...LOGO_ELEMENTS, ...LOGO_ELEMENTS, ...LOGO_ELEMENTS, ...LOGO_ELEMENTS].map((el, i) => (
            <div key={i} className="opacity-80">
              {el}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
