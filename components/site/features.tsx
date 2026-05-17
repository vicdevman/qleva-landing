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
    <section className="relative w-full min-h-[300px] flex flex-col items-center justify-center bg-black border-b border-white/5 py-16">
      {/* 1. Background Radial Gradient: Central powerful pool of golden-yellow light blending up into the Hero section */}
      <div 
        className="absolute left-0 right-0 -top-[150px] md:-top-[250px] h-[600px] md:h-[800px] pointer-events-none opacity-[0.2]" 
        style={{
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, var(--color-primary) 0%, transparent 100%)"
        }}
      />

      {/* 2. Logo Marquee Motion & Gradient Mask Integration */}
      <div className="relative z-10 mt-16 w-[90%] md:w-1/2 mx-auto flex overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_50%,transparent_100%)]">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          className="flex shrink-0 items-center gap-16 md:gap-24 pr-16 md:pr-24 w-max"
        >
          {/* Ensure the list is long enough to cover large screens comfortably */}
          {[...LOGO_ELEMENTS, ...LOGO_ELEMENTS, ...LOGO_ELEMENTS].map((el, i) => (
            <div key={i} className="opacity-80">
              {el}
            </div>
          ))}
        </motion.div>
        
        {/* Identical secondary container for seamless looping */}
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          className="flex shrink-0 items-center gap-16 md:gap-24 pr-16 md:pr-24 w-max"
        >
          {[...LOGO_ELEMENTS, ...LOGO_ELEMENTS, ...LOGO_ELEMENTS].map((el, i) => (
            <div key={i} className="opacity-80">
              {el}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
