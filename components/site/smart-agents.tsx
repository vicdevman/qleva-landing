"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, DollarSign, Calculator, Target, PenLine, Zap, 
  Search, ChevronDown, Circle, BarChart2, Activity,
  List, CheckCheck, Kanban, HelpCircle, Package
} from "lucide-react";

export function SmartAgents() {
  return (
    <section className="relative w-full py-24 bg-black overflow-hidden border-b border-white/5">
      {/* Massive Central Radial Light Pool */}
      <div className="absolute top-[60px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/15 blur-[120px] pointer-events-none z-0" />

      {/* Top curved line SVG and Icon */}
      <div className="absolute top-0 left-0 w-full h-[150px] flex justify-center pointer-events-none z-10">
        <svg
          width="1440"
          height="150"
          viewBox="0 0 1440 150"
          className="flex-shrink-0 text-primary"
        >
          <defs>
            <linearGradient id="grad-left" x1="0" y1="0" x2="696" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="grad-right" x1="1440" y1="0" x2="744" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Left Converging Line */}
          <path
            d="M -2000 140 L 300 140 Q 320 140 334 126 L 466 74 Q 480 60 500 60 L 696 60"
            fill="none"
            stroke="url(#grad-left)"
            strokeWidth="1.5"
          />

          {/* Right Converging Line */}
          <path
            d="M 744 60 L 940 60 Q 960 60 974 74 L 1106 126 Q 1120 140 1140 140 L 3440 140"
            fill="none"
            stroke="url(#grad-right)"
            strokeWidth="1.5"
          />
        </svg>

        {/* Central Glowing Logo Hub */}
        <div className="absolute top-[60px] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/40 shadow-[0_0_40px_rgba(var(--primary),0.6)] backdrop-blur-md">
            <Sparkles className="w-5 h-5 text-primary drop-shadow-[0_0_10px_rgba(var(--primary),1)]" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32">
        {/* Header section */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-gray-300 mb-6 backdrop-blur-sm">
            Smart Ai Agent Services
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-tight">
            Smart AI Agents <br className="hidden md:block" />
            That Drive Real Results
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl font-light">
            We build intelligent AI agents that streamline operations and drive real business outcomes.
          </p>
        </div>

        {/* Content Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Mockup UI */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
            <div className="relative rounded-3xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl overflow-hidden p-5 md:p-6 shadow-2xl mx-auto w-[95%] lg:w-full">
              
              {/* Fade out mask at the top of the container to match the image crop */}
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

              <div className="space-y-4">
                {/* Top partial card (from screenshot) */}
                <div className="rounded-2xl border border-white/5 bg-white/5 p-4 md:p-5 relative opacity-50">
                  <div className="grid grid-cols-3 gap-4 mb-5">
                    <div>
                      <div className="text-white text-lg md:text-xl font-semibold mb-1">$620</div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Spent
                      </div>
                    </div>
                    <div>
                      <div className="text-white text-lg md:text-xl font-semibold mb-1">$600</div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" /> Goal
                      </div>
                    </div>
                    <div>
                      <div className="text-white text-lg md:text-xl font-semibold mb-1">$620</div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Total
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium">
                      Modify
                    </button>
                    <button className="flex-1 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium border border-primary/20">
                      Approve
                    </button>
                  </div>
                </div>

                {/* Emily Carter Card */}
                <div className="rounded-2xl border border-white/5 bg-white/5 p-4 md:p-5 relative">
                  <div className="flex justify-between items-start mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 overflow-hidden border border-white/10">
                        <img src="https://i.pravatar.cc/150?u=emily" alt="Emily Carter" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">Emily Carter</div>
                        <div className="text-gray-400 text-xs">Account Executive</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white/20 text-gray-400 text-xs">
                      02
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-5">
                    <div>
                      <div className="text-white text-lg md:text-xl font-semibold mb-1">$642</div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Spent
                      </div>
                    </div>
                    <div>
                      <div className="text-white text-lg md:text-xl font-semibold mb-1">$637</div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" /> Goal
                      </div>
                    </div>
                    <div>
                      <div className="text-white text-lg md:text-xl font-semibold mb-1">$633</div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Total
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition">
                      Modify
                    </button>
                    <button className="flex-1 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:brightness-110 transition border border-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                      Approve
                    </button>
                  </div>
                </div>

                {/* Sophia Ramirez Card */}
                <div className="rounded-2xl border border-white/5 bg-white/5 p-4 md:p-5 relative opacity-50 mask-gradient-bottom">
                  <div className="flex justify-between items-start mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 overflow-hidden border border-white/10">
                        <img src="https://i.pravatar.cc/150?u=sophia" alt="Sophia Ramirez" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">Sophia Ramirez</div>
                        <div className="text-gray-400 text-xs">Business Development</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white/20 text-gray-400 text-xs">
                      19
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-white text-lg md:text-xl font-semibold mb-1">$8</div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Spent
                      </div>
                    </div>
                    <div>
                      <div className="text-white text-lg md:text-xl font-semibold mb-1">$8</div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" /> Goal
                      </div>
                    </div>
                    <div>
                      <div className="text-white text-lg md:text-xl font-semibold mb-1">$7</div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Total
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Side: Text & Features */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
            <div className="self-start px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 mb-6 flex items-center gap-2">
              <DollarSign className="w-3.5 h-3.5" /> Finance
            </div>
            
            <h3 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
              Employee Revenue Tracking
            </h3>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 font-light">
              Review each employee's financial performance, including total income generated, goals achieved, and revenue gaps — all in a clear, comparable view.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium flex items-center gap-2 hover:text-white hover:bg-white/10 transition-colors">
                <Calculator className="w-4 h-4" /> Calculate
              </button>
              <button className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium flex items-center gap-2 hover:text-white hover:bg-white/10 transition-colors">
                <Target className="w-4 h-4" /> Goal Tracking
              </button>
            </div>
          </div>
        </div>

        {/* Second Split Section: AI-Powered Assistant */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mt-32">
          
          {/* Left Side: Text & Features */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <div className="self-start px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 mb-6 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Tracking Insights
            </div>
            
            <h3 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
              AI-Powered Assistant
            </h3>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 font-light">
              If You Want Instant Help With Writing, Analysis, Ideas, or Decision-Making Powered by AI, You're in the Right Place
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium flex items-center gap-2 hover:text-white hover:bg-white/10 transition-colors">
                <PenLine className="w-4 h-4" /> Smart Writing
              </button>
              <button className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium flex items-center gap-2 hover:text-white hover:bg-white/10 transition-colors">
                <Zap className="w-4 h-4" /> Instant Insights
              </button>
            </div>
          </div>

          {/* Right Side: Mockup UI */}
          <div className="lg:col-span-5 lg:col-start-8 relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
            <div className="relative rounded-3xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl overflow-hidden p-5 md:p-8 shadow-2xl mx-auto w-[95%] lg:w-full">
              
              <div className="rounded-2xl border border-white/5 bg-[#0f0f0f] flex flex-col overflow-hidden shadow-inner">
                {/* Input Header */}
                <div className="flex items-center gap-3 p-4 md:p-5 border-b border-white/5 bg-white/[0.02]">
                  <div className="w-4 h-4 rounded-full border-[2.5px] border-primary" />
                  <div className="text-gray-300 text-sm md:text-base font-medium flex items-center">
                    Ask An <span className="w-[1px] h-4 bg-primary ml-1 animate-pulse" />
                  </div>
                </div>

                {/* Options List */}
                <div className="flex flex-col">
                  {[
                    "Continue Writing",
                    "Fix Spelling & Grammar",
                    "Summarize",
                    "Explain",
                    "Explore new idea",
                    "Elaborate explore"
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className="px-4 md:px-5 py-3 md:py-4 text-sm text-gray-400 border-b border-white/5 last:border-0 hover:bg-white/5 hover:text-gray-200 transition-colors cursor-pointer flex items-center"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Split Section: AI Income Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mt-32">
          {/* Left Side: Mockup UI */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
            <div className="relative rounded-3xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl overflow-hidden p-5 md:p-6 shadow-2xl mx-auto w-[95%] lg:w-full">
              <div className="space-y-4">
                {/* Search Bar Row */}
                <div className="flex gap-2 mb-6">
                  <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-gray-400 text-sm">
                    <Search className="w-4 h-4" /> Search
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-gray-300 text-sm">
                    Filter <ChevronDown className="w-3 h-3 text-gray-500" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-gray-300 text-sm">
                    🇺🇸 Us, en <ChevronDown className="w-3 h-3 text-gray-500" />
                  </div>
                </div>

                {/* List of Users */}
                <div className="space-y-1">
                  {[
                    { name: "Eva Green", val: "$45.0", diff: "-50", color: "text-red-500", num: "27", img: "1" },
                    { name: "Frank Miller", val: "$75.25", diff: "+5", color: "text-emerald-500", num: "80", img: "2", bg: "bg-white/5 rounded-xl" },
                    { name: "Grace Lee", val: "$60.80", diff: "-60", color: "text-red-500", num: "30", img: "3" },
                    { name: "Bob Johnson", val: "$45.0", diff: "+45", color: "text-emerald-500", num: "22", img: "4" },
                    { name: "Cathy Brown", val: "$89.0", diff: "-10", color: "text-red-500", num: "14", img: "5" },
                    { name: "David Wilson", val: "$32.0", diff: "-23", color: "text-red-500", num: "19", img: "6", opacity: "opacity-30 mask-gradient-bottom" },
                  ].map((user, i) => (
                    <div key={i} className={`flex items-center justify-between p-3 ${user.bg || ''} ${user.opacity || ''}`}>
                      <div className="flex items-center gap-3 w-[40%]">
                        <div className="w-7 h-7 rounded-full bg-gray-800 overflow-hidden border border-white/10 flex-shrink-0">
                           <img src={`https://i.pravatar.cc/150?img=${user.img}`} alt={user.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-sm text-gray-200 truncate">{user.name}</div>
                      </div>
                      <div className="flex items-center gap-2 w-[30%]">
                        <div className="text-sm font-medium text-gray-200">{user.val}</div>
                        <div className={`text-xs ${user.color}`}>{user.diff}</div>
                      </div>
                      <div className="flex items-center gap-1.5 w-[15%]">
                        <Circle className="w-3.5 h-3.5 text-gray-500" />
                        <span className="text-sm text-gray-400">{user.num}</span>
                      </div>
                      <div className="flex gap-1 items-end h-4 w-[15%] justify-end">
                        {[4, 8, 5, 10, 6].map((h, idx) => (
                          <div key={idx} className="w-1 bg-white/10 rounded-sm" style={{ height: `${h * 10}%` }} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Text */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
            <div className="self-start px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 mb-6 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Tracking Insights
            </div>
            
            <h3 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
              AI Income Insights
            </h3>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 font-light">
              If you want to instantly identify which employees generate the highest and lowest income, and compare performance across roles, you're in the right place.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium flex items-center gap-2 hover:text-white hover:bg-white/10 transition-colors">
                <BarChart2 className="w-4 h-4" /> Comparison
              </button>
              <button className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium flex items-center gap-2 hover:text-white hover:bg-white/10 transition-colors">
                <Activity className="w-4 h-4" /> Tracking
              </button>
            </div>
          </div>
        </div>

        {/* Fourth Split Section: Smart Task Assistant */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mt-32 pb-24">
          {/* Left Side: Text */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <div className="self-start px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 mb-6 flex items-center gap-2">
              <List className="w-3.5 h-3.5" /> Tracking Insights
            </div>
            
            <h3 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
              Smart Task Assistant
            </h3>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 font-light">
              This assistant reviews incoming tasks, identifies the best next task to focus on, and helps you create new tasks based on priority and context.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium flex items-center gap-2 hover:text-white hover:bg-white/10 transition-colors">
                <CheckCheck className="w-4 h-4" /> Task Review
              </button>
              <button className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium flex items-center gap-2 hover:text-white hover:bg-white/10 transition-colors">
                <Kanban className="w-4 h-4" /> Smart Task
              </button>
            </div>
          </div>

          {/* Right Side: Mockup UI */}
          <div className="lg:col-span-5 lg:col-start-8 relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
            <div className="relative rounded-3xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl overflow-hidden p-8 md:p-12 shadow-2xl mx-auto w-[95%] lg:w-full flex flex-col items-center justify-center min-h-[300px]">
              
              {/* Node Graph */}
              <div className="flex flex-col items-center w-full max-w-[280px] relative">
                
                {/* Node 1 */}
                <div className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium flex items-center gap-3 relative z-10 shadow-lg shadow-black/50">
                  <HelpCircle className="w-4 h-4 text-gray-400" /> Receive support ticket
                </div>

                {/* Line */}
                <div className="w-[1.5px] h-6 bg-primary/50" />

                {/* Node 2 */}
                <div className="py-2.5 px-6 rounded-full bg-primary border border-primary/40 text-primary-foreground text-sm font-medium shadow-[0_0_15px_rgba(255,206,72,0.4)] relative z-10">
                  Process Complete
                </div>

                {/* Line */}
                <div className="w-[1.5px] h-6 bg-primary/50" />

                {/* Node 3 */}
                <div className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium flex items-center gap-3 relative z-10 shadow-lg shadow-black/50">
                  <HelpCircle className="w-4 h-4 text-gray-400" /> Receive support ticket
                </div>

                {/* Line */}
                <div className="w-[1.5px] h-6 bg-primary/50" />

                {/* Node 4 (Button) */}
                <button className="w-full py-3.5 rounded-2xl bg-primary hover:brightness-110 transition border border-primary/40 text-primary-foreground text-sm font-medium shadow-[0_0_20px_rgba(255,206,72,0.3)] relative z-10">
                  Create a New Task
                </button>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
