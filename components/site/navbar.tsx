"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md border-b border-white/5"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:bg-primary/30 transition-colors">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <span className="font-semibold text-lg tracking-tight text-white">Qleva</span>
      </Link>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-8">
        {["Home", "Features", "About", "Docs"].map((item) => (
          <Link 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <div className="flex items-center gap-4">
        <button className="px-5 py-2 text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:brightness-110 transition-all border border-primary/20">
          Launch App
        </button>
      </div>
    </motion.header>
  );
}
