'use client';
import { useEffect, useRef } from 'react';
import { Network, Sparkles, Cpu, Fingerprint } from 'lucide-react';

const TEXT = "Integrate with the world's most powerful neural engines. Seamlessly connect your custom data to GPT-4, Claude 3, and Perplexity for unmatched precision. Build agents that don't just process, they understand.";

export default function ScrollRevealText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const telemetryRef = useRef<HTMLSpanElement>(null);
  const trackBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startTrigger = windowHeight * 0.8;
      const endTrigger = windowHeight * 0.2;

      let progress = (startTrigger - rect.top) / (startTrigger - endTrigger);
      progress = Math.max(0, Math.min(1, progress));

      const totalWords = wordRefs.current.length;
      const revealedCount = Math.floor(progress * totalWords);

      // 1. Direct DOM Mutation for Word Reveals
      wordRefs.current.forEach((wordSpan, index) => {
        if (!wordSpan) return;
        
        if (index < revealedCount) {
          wordSpan.style.color = 'var(--color-arctic-powder)';
          wordSpan.style.opacity = '1';
          wordSpan.style.textShadow = '0 0 25px rgba(241, 246, 244, 0.35)';
          wordSpan.style.transform = 'translateY(0px)';
        } else {
          wordSpan.style.color = '#334155'; // Clean slate-700 gray blending into background
          wordSpan.style.opacity = '0.25';
          wordSpan.style.textShadow = 'none';
          wordSpan.style.transform = 'translateY(2px)';
        }
      });

      // 2. Direct DOM Mutation for Telemetry & Progress Graphics (Zero React Re-renders)
      const percent = Math.floor(progress * 100);
      if (telemetryRef.current) {
        telemetryRef.current.innerText = `SYS_ENGINE // AUTH_SYS_STABLE_TRK_${percent.toString().padStart(3, '0')}%`;
      }
      if (trackBarRef.current) {
        trackBarRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const words = TEXT.split(" ");

  return (
    <section 
      ref={containerRef} 
      className="py-32 px-6 md:px-16 min-h-[160vh] bg-oceanic-noir relative border-t border-b border-white/5 overflow-hidden"
    >
      {/* BACKGROUND GRAPHICS & TEXTURES */}
      
      {/* 1. Ambient Radial Glow (Depth Layer) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#114C5A] opacity-15 rounded-full blur-[140px] pointer-events-none z-0" />
      
      {/* 2. Tactical Dot-Matrix Pattern Graphic */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(rgba(241, 246, 244, 1) 1px, transparent 0)', backgroundSize: '24px 24px' }}
      />

      {/* 3. Subtle Technical Grid Lines */}
      <div className="absolute inset-0 z-0 flex justify-between max-w-7xl mx-auto px-4 pointer-events-none opacity-[0.04]">
        <div className="w-px h-full bg-arctic-powder"></div>
        <div className="w-px h-full bg-arctic-powder hidden md:block"></div>
        <div className="w-px h-full bg-arctic-powder"></div>
      </div>

      {/* STICKY INTERACTIVE CONTENT VIEWPORT */}
      <div className="sticky top-1/4 max-w-5xl mx-auto z-10 backdrop-blur-[2px] py-10 px-4 md:px-10 rounded-lg border border-white/[0.02]">
        
        {/* Hardware Blueprint Corner Elements */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-mystic-mint/30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-mystic-mint/30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-mystic-mint/30 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-mystic-mint/30 pointer-events-none" />

        {/* Live System Telemetry Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-white/5 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-forsythia animate-pulse shadow-[0_0_8px_#FFC801]"></span>
            <span 
              ref={telemetryRef} 
              className="font-mono text-xs text-mystic-mint/40 uppercase tracking-widest"
            >
              SYS_ENGINE // AUTH_SYS_STABLE_TRK_000%
            </span>
          </div>
          
          <div className="font-mono text-[10px] text-forsythia/60 uppercase tracking-wider hidden sm:block bg-forsythia/5 px-2 py-0.5 rounded border border-forsythia/10">
            MODEL_CORE_v4.1.0_LATEST
          </div>
        </div>

        {/* Interactive Icon Dock */}
        <div className="flex gap-4 mb-10">
          {[Network, Sparkles, Cpu, Fingerprint].map((Icon, i) => (
            <div 
              key={i} 
              className="w-12 h-12 rounded-sm border border-mystic-mint/10 flex items-center justify-center text-mystic-mint/70 transition-all duration-300 hover:border-forsythia hover:text-forsythia hover:shadow-[0_0_15px_rgba(255,200,1,0.2)] hover:-translate-y-0.5 cursor-pointer bg-oceanic-noir/50 backdrop-blur-md relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-forsythia/0 to-forsythia/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Icon size={18} strokeWidth={1.5} />
            </div>
          ))}
        </div>

        {/* Scrubbing Text Engine */}
        <h2 className="text-3xl md:text-5xl lg:text-[3.25rem] font-sans font-medium leading-[1.25] tracking-tight max-w-4xl">
          {words.map((word, i) => (
            <span 
              key={i} 
              ref={(el) => { wordRefs.current[i] = el; }}
              className="inline-block mr-[0.32em] mb-2 transition-all duration-300 ease-out will-change-[color,opacity,transform]"
              style={{
                color: '#334155',
                opacity: 0.25,
                transform: 'translateY(2px)'
              }}
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Lower Meta Elements & Micro-Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-base text-mystic-mint/50 max-w-xl font-sans leading-relaxed">
            Unlock the full potential of LLM-native workflows. Our infrastructure ensures low latency and high-fidelity output for every enterprise-grade request.
          </p>

          {/* Graphical Micro-Progress Indicator */}
          <div className="w-full md:w-44 space-y-2 shrink-0">
            <div className="flex justify-between font-mono text-[10px] text-mystic-mint/30 uppercase tracking-wider">
              <span>Sync Progress</span>
              <span>Matrix_Scale</span>
            </div>
            <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
              <div 
                ref={trackBarRef} 
                className="h-full bg-gradient-to-r from-nocturnal-expedition to-forsythia origin-left transform scale-x-0 transition-transform duration-100 ease-out"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}