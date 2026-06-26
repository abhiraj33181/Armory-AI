'use client';
import { useState, useEffect } from 'react';
import { ShieldCheck, Bot, CloudLightning, Database } from 'lucide-react';

const FEATURES = [
  { 
    id: "SYS.01",
    title: "Secure Guard", 
    desc: "We fortify your AI deployments with robust security protocols. Our team ensures every model adheres to strict data privacy standards.",
    icon: ShieldCheck,
    spanClass: "md:col-span-2 md:row-span-1"
  },
  { 
    id: "SYS.02",
    title: "Agent Build", 
    desc: "Tailored AI agents designed for your specific needs. We develop custom logic and workflows that integrate deeply with your existing tools.",
    icon: Bot,
    spanClass: "md:col-span-1 md:row-span-1"
  },
  { 
    id: "SYS.03",
    title: "Cloud Scale", 
    desc: "Infrastructure optimization for high-traffic AI apps. We ensure your systems remain fast, responsive, and ready for any level of demand.",
    icon: CloudLightning,
    spanClass: "md:col-span-1 md:row-span-1"
  },
  { 
    id: "SYS.04",
    title: "Data Mining", 
    desc: "Transform raw information into actionable intelligence. We build the pipelines and vector stores that power your organization's future.",
    icon: Database,
    spanClass: "md:col-span-2 md:row-span-1"
  },
];

export default function BentoFeatures() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-32 px-6 md:px-12 bg-oceanic-noir text-arctic-powder relative border-t border-white/5 overflow-hidden" id="features">
      
      {/* 1. Ambient Depth Layer */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#114C5A] opacity-20 rounded-full blur-[120px] pointer-events-none z-0" />
      
      {/* 2. Tactical Dot-Matrix Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-arctic-powder) 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header Telemetry */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-forsythia animate-pulse shadow-[0_0_8px_#FFC801]"></span>
              <span className="font-mono text-xs text-forsythia uppercase tracking-widest">
                Infrastructure Overview
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-tight">Enterprise Capabilities</h2>
          </div>
          <div className="font-mono text-[10px] text-mystic-mint/40 uppercase tracking-widest text-left md:text-right">
            GRID_REF: x89.11<br/>
            STATUS: OPTIMAL
          </div>
        </div>

        {/* The Desktop Bento Grid / Mobile Accordion Container */}
        <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-3'}`}>
          {FEATURES.map((feat, idx) => {
            const isActive = activeIndex === idx;
            const Icon = feat.icon;
            
            return (
              <div 
                key={idx}
                onMouseEnter={() => !isMobile && setActiveIndex(idx)}
                onMouseLeave={() => !isMobile && setActiveIndex(null)}
                onClick={() => isMobile && setActiveIndex(isActive ? null : idx)}
                className={`
                  bg-[#11212c] p-8 cursor-pointer relative group transition-all duration-500 ease-out border border-white/5 rounded-sm overflow-hidden
                  ${!isMobile ? feat.spanClass : ''}
                  ${isActive && !isMobile ? 'border-forsythia/30 shadow-[0_0_30px_rgba(255,200,1,0.05)] translate-y-[-2px]' : 'hover:border-white/10'}
                `}
              >
                {/* Background Sweep Animation */}
                <div className={`absolute inset-0 bg-gradient-to-br from-nocturnal-expedition/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                
                {/* Blueprint Corner Elements (Active State) */}
                <div className={`absolute top-0 left-0 w-3 h-3 border-t border-l border-forsythia transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                <div className={`absolute top-0 right-0 w-3 h-3 border-t border-r border-forsythia transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                <div className={`absolute bottom-0 left-0 w-3 h-3 border-b border-l border-forsythia transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                <div className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r border-forsythia transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                <div className="relative z-10 flex flex-col h-full justify-start">
                  
                  {/* Top Bar: Icon & Telemetry ID */}
                  <div className="flex justify-between items-start mb-10">
                    <div className="relative">
                      {/* Icon Glowing Backdrop */}
                      <div className={`absolute inset-0 bg-forsythia/20 blur-xl rounded-full transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                      <div className={`relative w-12 h-12 flex items-center justify-center rounded-sm border transition-all duration-300 ease-out ${isActive ? 'border-forsythia/30 text-forsythia bg-forsythia/5' : 'border-white/5 text-mystic-mint/60 bg-white/[0.02]'}`}>
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    {/* Hardware ID Label */}
                    <div className={`font-mono text-[10px] tracking-widest transition-colors duration-300 ${isActive ? 'text-forsythia' : 'text-mystic-mint/30'}`}>
                      {feat.id}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4 mt-auto">
                    <h3 className="text-xl md:text-2xl font-sans font-medium tracking-wide text-arctic-powder">
                      {feat.title}
                    </h3>
                    
                    {/* Mobile Accordion Indicator */}
                    {isMobile && (
                      <span className={`font-mono text-xl transition-colors ${isActive ? 'text-forsythia' : 'text-mystic-mint/40'}`}>
                        {isActive ? '−' : '+'}
                      </span>
                    )}
                  </div>
                  
                  {/* Zero-Dependency Accordion Logic */}
                  <div 
                    className={`
                      grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                      ${isMobile 
                        ? (isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0') 
                        : 'grid-rows-[1fr] opacity-100'}
                    `}
                  >
                    <div className="overflow-hidden">
                      <p className="font-sans text-mystic-mint/50 leading-relaxed text-sm md:text-base pt-2">
                        {feat.desc}
                      </p>
                    </div>
                  </div>

                  {/* Micro-Progress Telemetry Bar (Hover Reveal) */}
                  {!isMobile && (
                    <div className="mt-8 h-[1px] w-full bg-white/5 overflow-hidden">
                      <div className={`h-full bg-forsythia origin-left transition-transform duration-700 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}