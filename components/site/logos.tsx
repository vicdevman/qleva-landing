"use client";

import { motion } from "framer-motion";
import { Circle, Diamond, Hexagon, Triangle, Octagon, Square } from "lucide-react";

const LOGOS = [
  { name: "Base", Icon: Circle },
  { name: "Ethereum", Icon: Diamond },
  { name: "Optimism", Icon: Hexagon },
  { name: "Arbitrum", Icon: Triangle },
  { name: "Polygon", Icon: Octagon },
  { name: "Coinbase", Icon: Square },
];

export function Logos() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-black border-b border-white/5">
      {/* Background Yellow Linear Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-primary/20 to-black pointer-events-none z-0" />

      {/* Left & Right Linear Gradient Overlays (To fade marquee in and out) */}
      <div className="absolute top-0 left-0 w-[20%] md:w-[15%] h-full bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[20%] md:w-[15%] h-full bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

      {/* Marquee Container */}
      <div className="relative z-10 w-[90%] md:w-1/2 mx-auto flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          className="flex whitespace-nowrap items-center gap-12 md:gap-24 px-12 w-max"
        >
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((item, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 text-white/50 hover:text-white transition-colors duration-300 cursor-default"
            >
              <item.Icon className="w-6 h-6 md:w-8 md:h-8 stroke-[1.5]" />
              <span className="text-xl md:text-3xl font-medium tracking-tight">{item.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
