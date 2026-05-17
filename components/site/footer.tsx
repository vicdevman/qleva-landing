import Link from "next/link";
import { Sparkles, Twitter, Instagram, Youtube, Github, Figma } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full bg-[#030303] pt-24 pb-12 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Top Section: Logo & Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-20">
          {/* Brand Col */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:bg-primary/30 transition-colors">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-lg tracking-tight text-white">Qleva</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
              Qleva – Automate Smarter, Optimize Faster, and Grow Stronger.
            </p>
            <div className="flex items-center gap-5 text-gray-400">
              <Link href="#" className="hover:text-white transition-colors"><Twitter className="w-[18px] h-[18px]" /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Instagram className="w-[18px] h-[18px]" /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Youtube className="w-[18px] h-[18px]" /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Figma className="w-[18px] h-[18px]" /></Link>
              <Link href="#" className="hover:text-white transition-colors"><Github className="w-[18px] h-[18px]" /></Link>
            </div>
          </div>

          {/* Links Cols */}
          <div className="grid grid-cols-3 gap-12 sm:gap-20 lg:gap-28 lg:mr-16">
            <div className="flex flex-col gap-5">
              <h4 className="text-white text-sm font-medium mb-3">Pages</h4>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Home</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Blog</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">404</Link>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="text-white text-sm font-medium mb-3">Links</h4>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Services</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Pricing</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Benefits</Link>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="text-white text-sm font-medium mb-3">Information</h4>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Contact</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Privacy</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">Terms</Link>
            </div>
          </div>
        </div>

        {/* Middle Section: Newsletter */}
        <div className="border-t border-white/5 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-medium text-white mb-3 tracking-tight">
              Get Free Smart Note Workflows
            </h3>
            <p className="text-gray-400 text-sm font-light">
              Powered by Qleva — Weekly Newsletter.
            </p>
          </div>
          
          <div className="flex items-center w-full md:w-auto p-1.5 rounded-full bg-[#0a0a0a] border border-white/10 shadow-inner">
            <input 
              type="email" 
              placeholder="Enter your Email" 
              className="bg-transparent text-sm text-white px-5 py-2 w-full md:w-[260px] outline-none placeholder:text-gray-600"
            />
            <button className="px-6 py-2.5 rounded-full bg-primary hover:brightness-110 transition-all text-primary-foreground text-sm font-medium shadow-[0_0_20px_rgba(255,206,72,0.3)]">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm font-light">
            Created by : <Link href="#" className="text-white hover:text-primary transition-colors underline decoration-white/30 underline-offset-4 hover:decoration-primary/50">Qleva Team</Link>
          </p>
          <p className="text-gray-400 text-sm font-light">
            © 2026 Qleva Templates.
          </p>
        </div>

      </div>
    </footer>
  );
}
