'use client';
import { useEffect, useRef, useState } from 'react';

const STATS = [
  { id: "SYS.LATENCY", value: 12, suffix: 'ms', label: "Average latency for real-time inference." },
  { id: "SYS.SCALING", value: 10, suffix: 'x', label: "Increase in manual task processing speed." },
  { id: "SYS.UPTIME", value: 99, suffix: '%', label: "Uptime for critical agent infrastructure." }
];

export default function Statistics() {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          STATS.forEach((stat, index) => {
            const textNode = numberRefs.current[index];
            const barNode = barRefs.current[index];
            if (!textNode) return;

            let startTimestamp: number | null = null;
            const duration = 2000 + (index * 400); // Staggered, slightly longer duration for dramatic effect

            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              
              // Custom easeOutQuart for a highly premium snap-then-crawl feel
              const easeProgress = 1 - Math.pow(1 - progress, 4);
              const currentVal = Math.floor(easeProgress * stat.value);
              
              // Direct DOM mutation for text
              textNode.textContent = currentVal.toString();

              // Direct DOM mutation for micro-progress bar width
              if (barNode) {
                barNode.style.transform = `scaleX(${easeProgress})`;
              }

              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                textNode.textContent = stat.value.toString();
                if (barNode) barNode.style.transform = `scaleX(1)`;
              }
            };
            window.requestAnimationFrame(step);
          });
        }
      },
      { threshold: 0.4 } // Trigger slightly earlier so it's animating while scrolling into center
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      className="py-32 px-6 md:px-12 bg-oceanic-noir text-arctic-powder relative border-t border-white/5 overflow-hidden"
    >
      {/* BACKGROUND GRAPHICS & TEXTURES */}
      
      {/* 1. Ambient Depth Layer */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#114C5A] opacity-15 rounded-full blur-[140px] pointer-events-none z-0" />
      
      {/* 2. Tactical Dot-Matrix Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-arctic-powder) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-mystic-mint/60 mb-6">
              <span className="w-2 h-2 rounded-sm bg-forsythia animate-pulse shadow-[0_0_8px_#FFC801]"></span>
              <span className="text-forsythia font-bold mr-2">\\\\</span> LIVE TELEMETRY
            </div>
            
            <h2 className="text-3xl md:text-[2.75rem] font-sans font-medium leading-[1.2] text-arctic-powder mb-10 tracking-tight">
              Quantifiable impact across every deployment. We measure success by the speed and scale of your neural ops.
            </h2>
            
            <button className="group relative inline-flex items-center gap-4 bg-arctic-powder text-oceanic-noir px-2 py-2 pr-8 rounded-sm font-sans font-bold overflow-hidden transition-all duration-400 hover:shadow-[0_0_20px_rgba(255,200,1,0.3)]">
              <div className="absolute inset-0 bg-forsythia transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
              <span className="relative z-10 w-10 h-10 bg-oceanic-noir text-arctic-powder flex items-center justify-center rounded-sm text-lg group-hover:bg-[#11212c] transition-colors duration-300">
                <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
              <span className="relative z-10 group-hover:text-oceanic-noir transition-colors duration-300 uppercase tracking-wider text-sm">
                View Report
              </span>
            </button>
          </div>

          {/* Side Telemetry Graphic */}
          <div className="hidden lg:flex flex-col items-end text-right font-mono text-[10px] text-mystic-mint/30 uppercase tracking-widest space-y-2">
            <div>NET_PROTOCOL: ESTABLISHED</div>
            <div>PACKET_LOSS: 0.0001%</div>
            <div className="flex gap-1 mt-2">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`w-1 h-3 ${i < 6 ? 'bg-forsythia/50' : 'bg-white/10'}`}></div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden">
          {STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-[#0c161d] p-10 md:p-14 relative group hover:bg-[#11212c] transition-colors duration-500 overflow-hidden"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-nocturnal-expedition/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Blueprint Corner Crosshairs */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/10 group-hover:border-forsythia/60 transition-colors duration-300"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10 group-hover:border-forsythia/60 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/10 group-hover:border-forsythia/60 transition-colors duration-300"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/10 group-hover:border-forsythia/60 transition-colors duration-300"></div>

              <div className="relative z-10">
                {/* ID Tag */}
                <div className="font-mono text-[10px] text-mystic-mint/40 tracking-widest mb-8 flex justify-between items-center">
                  <span>{stat.id}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-forsythia transition-colors duration-300"></span>
                </div>

                {/* Animated Data Readout - Using tabular-nums to prevent horizontal jitter */}
                <div className="text-7xl md:text-[5.5rem] font-sans font-medium text-arctic-powder mb-6 tracking-tighter flex items-baseline tabular-nums">
                  <span 
                    ref={(el) => { numberRefs.current[idx] = el; }}
                    className="drop-shadow-[0_0_15px_rgba(241,246,244,0.1)] group-hover:drop-shadow-[0_0_25px_rgba(241,246,244,0.3)] transition-all duration-500"
                  >
                    0
                  </span>
                  <span className="text-forsythia text-4xl md:text-5xl ml-1 font-bold">{stat.suffix}</span>
                </div>
                
                <p className="font-mono text-xs md:text-sm text-mystic-mint/60 leading-relaxed max-w-[220px]">
                  {stat.label}
                </p>

                {/* Micro-Progress Bar tied to the animation loop */}
                <div className="mt-10 h-[2px] w-full bg-white/5 overflow-hidden">
                  <div 
                    ref={(el) => { barRefs.current[idx] = el; }}
                    className="h-full bg-forsythia origin-left transform scale-x-0 will-change-transform"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}