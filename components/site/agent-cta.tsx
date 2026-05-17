"use client";

import { 
  MessageSquare, ChevronLeft, Video, BookOpen, 
  RefreshCcw, Clock, DollarSign, Calculator, CheckCircle2, Loader2
} from "lucide-react";

export function AgentCTA() {
  return (
    <section className="relative w-full pt-32 pb-32 bg-black overflow-hidden flex flex-col items-center border-b border-white/5">
      
      {/* Massive Radial Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[800px] bg-primary/10 blur-[120px] rounded-[100%] pointer-events-none z-0" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl lg:text-[56px] font-medium text-white mb-10 tracking-tight leading-[1.2]">
          We build your AI agents, train them on your workflows, and deploy intelligent autonomy that scales effortlessly. The best part? You launch in minutes — no code, no devs, just results.
        </h2>

        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-16">
          <img src="https://i.pravatar.cc/150?u=founder" alt="Founder" className="w-6 h-6 rounded-full object-cover" />
          <span className="text-sm text-gray-300 font-medium">Founder of Qleva</span>
        </div>
      </div>

      {/* Convergence Line */}
      <div className="relative w-full h-[150px] flex justify-center pointer-events-none z-10 mb-6">
        <svg
          width="1440"
          height="150"
          viewBox="0 0 1440 150"
          className="flex-shrink-0 text-primary"
        >
          <defs>
            <linearGradient id="grad-cta-left" x1="0" y1="0" x2="696" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="grad-cta-right" x1="1440" y1="0" x2="744" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Left Converging Line */}
          <path
            d="M -2000 140 L 300 140 Q 320 140 334 126 L 466 74 Q 480 60 500 60 L 696 60"
            fill="none"
            stroke="url(#grad-cta-left)"
            strokeWidth="1.5"
          />

          {/* Right Converging Line */}
          <path
            d="M 744 60 L 940 60 Q 960 60 974 74 L 1106 126 Q 1120 140 1140 140 L 3440 140"
            fill="none"
            stroke="url(#grad-cta-right)"
            strokeWidth="1.5"
          />
        </svg>

        {/* Central Hub Button */}
        <div className="absolute top-[60px] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto">
          <button className="w-14 h-14 rounded-full bg-primary flex items-center justify-center border-4 border-[#0a0a0a] shadow-lg shadow-primary/30 hover:scale-105 transition-transform hover:shadow-xl hover:shadow-primary/40 cursor-pointer">
            <MessageSquare className="w-6 h-6 text-primary-foreground" />
          </button>
        </div>
      </div>

      {/* Handles Complexity Pill */}
      <div className="relative z-20 px-5 py-2 rounded-full bg-[#0a0a0a] border border-primary/30 text-xs font-medium text-gray-300 shadow-xl mb-32">
        Handles Complexity
      </div>

      {/* Complex Queries Section */}
      <div className="relative z-20 max-w-5xl mx-auto w-full px-4 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight text-center max-w-2xl">
          Qleva resolves your most complex queries
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-16 text-center max-w-xl font-light">
          Qleva turns your hardest queries into simple, accurate answers through advanced automation
        </p>

        {/* Mockups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          
          {/* Card 1: Resolve Billing Disputes */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent overflow-hidden flex flex-col shadow-2xl relative">
              <div className="absolute inset-0 bg-primary/5 blur-3xl opacity-50 pointer-events-none" />
              
              {/* Chat Header */}
              <div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0a0a0a]/50">
                <ChevronLeft className="w-5 h-5 text-gray-400" />
                <div className="flex flex-col items-center">
                  <img src="https://i.pravatar.cc/150?img=11" alt="Liam Harrison" className="w-6 h-6 rounded-full border border-white/10" />
                  <span className="text-xs font-medium text-gray-200 mt-1">Liam Harrison</span>
                </div>
                <Video className="w-5 h-5 text-gray-400" />
              </div>

              {/* Chat Body */}
              <div className="relative z-10 p-6 flex flex-col gap-4 bg-[#050505]/80 min-h-[480px]">
                <div className="text-xs text-gray-500 text-center w-full mb-2">Today</div>
                
                {/* User Bubble */}
                <div className="self-end max-w-[85%] bg-primary rounded-2xl rounded-tr-sm px-5 py-3.5 shadow-lg shadow-primary/20">
                  <p className="text-primary-foreground text-sm font-medium">Why was I charged $847 this month? I thought we were on the $99 plan.</p>
                </div>
                <div className="self-end text-[10px] text-gray-500">15:32</div>

                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center self-start mb-2 mt-4 shadow-inner">
                  <Loader2 className="w-4 h-4 text-primary animate-spin" />
                </div>

                {/* Procedure Box */}
                <div className="self-start w-[85%] bg-white/5 rounded-2xl rounded-tl-sm p-5 border border-white/5 flex flex-col gap-4 shadow-lg shadow-black/50">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-200">
                    <BookOpen className="w-4 h-4 text-gray-400" /> Procedure : Billing inquiry
                  </div>
                  <div className="flex flex-col gap-3 pl-1">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="w-12">1. Use :</span>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-md border border-white/5">
                        <RefreshCcw className="w-3.5 h-3.5 text-gray-300" /> Verify Customer
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="w-12">2. Read :</span>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-md border border-white/5">
                        <Clock className="w-3.5 h-3.5 text-gray-300" /> Billing History
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="w-12">3. Read :</span>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-md border border-white/5">
                        <DollarSign className="w-3.5 h-3.5 text-gray-300" /> Pricing Plan
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="w-12">4. Use :</span>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-md border border-white/5">
                        <Calculator className="w-3.5 h-3.5 text-gray-300" /> Calculate Breakdown
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 pt-4 border-t border-white/5 text-xs font-medium text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Process Completed
                  </div>
                </div>
              </div>
            </div>

            {/* Title / Description */}
            <div className="px-2">
              <h4 className="text-xl font-medium text-white mb-2 tracking-tight">Resolve Billing Disputes</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Explain complex charges with transparent billing breakdowns</p>
            </div>
          </div>

          {/* Card 2: Fix Account Access */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent overflow-hidden flex flex-col shadow-2xl relative">
              <div className="absolute inset-0 bg-primary/5 blur-3xl opacity-50 pointer-events-none" />
              
              {/* Chat Header */}
              <div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0a0a0a]/50">
                <ChevronLeft className="w-5 h-5 text-gray-400" />
                <div className="flex flex-col items-center">
                  <img src="https://i.pravatar.cc/150?img=5" alt="Sophia Grace" className="w-6 h-6 rounded-full border border-white/10" />
                  <span className="text-xs font-medium text-gray-200 mt-1">Sophia Grace</span>
                </div>
                <Video className="w-5 h-5 text-gray-400" />
              </div>

              {/* Chat Body */}
              <div className="relative z-10 p-6 flex flex-col gap-4 bg-[#050505]/80 min-h-[480px]">
                <div className="text-xs text-gray-500 text-center w-full mb-2">Today</div>
                
                {/* User Bubble */}
                <div className="self-end max-w-[85%] bg-primary rounded-2xl rounded-tr-sm px-5 py-3.5 shadow-lg shadow-primary/20">
                  <p className="text-primary-foreground text-sm font-medium">I can't log in to my account. i have a client demo in 30 minutes.</p>
                </div>
                <div className="self-end text-[10px] text-gray-500 mb-8">23:49</div>

                {/* AI Bubble */}
                <div className="self-start w-[85%] bg-white/5 rounded-2xl rounded-tl-sm p-5 border border-white/5 flex flex-col gap-4 shadow-lg shadow-black/50">
                  <p className="text-gray-300 text-sm leading-[1.6]">
                    I found the issue. <br/>
                    Your account Sarah Chen at XOP Crop was locked after failed login attempts.
                    <br/><br/>
                    I've sent a 6-digit verification code to sarah@yourwebsite.com. Reply with the code and I'll unlock your account.
                  </p>
                </div>
                <div className="self-start text-[10px] text-gray-500 font-medium">Qleva . Just Now</div>
              </div>
            </div>

            {/* Title / Description */}
            <div className="px-2">
              <h4 className="text-xl font-medium text-white mb-2 tracking-tight">Fix Account Access</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Quickly restore access for locked accounts with secure verification</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
