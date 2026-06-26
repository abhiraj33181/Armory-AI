'use client';
import { useRef } from 'react';
import { ArrowUpRight, Target, ShieldCheck, Cpu, Layers } from 'lucide-react';

const CASES = [
  { 
    id: 'SYS_01 // CIGNA', 
    client: 'Cigna Smart Health Systems', 
    year: '// EXPEDITION_2026', 
    desc: 'Revolutionizing patient care through predictive analytics and seamless AI-driven diagnostic integration tools.',
    imgSrc: '/cigna-bg.jpg', 
    fallbackColor: 'bg-nocturnal-expedition',
    icon: Target,
    metrics: ['LATENCY: -42%', 'ACCURACY: 99.8%', 'NODE_COUNT: 1,420']
  },
  { 
    id: 'SYS_02 // AETNA', 
    client: 'Aetna Health Data Ecosystem', 
    year: '// ARCHITECTURE_2026', 
    desc: "We automated Aetna's member data management using secure AI to provide personalized care and clinical insights.",
    imgSrc: '/aetna-bg.jpg',
    fallbackColor: 'bg-oceanic-noir',
    icon: ShieldCheck,
    metrics: ['THROUGHPUT: +310%', 'COMPLIANCE: 100%', 'VECTOR_STORES: 84']
  }
];

export default function CaseStudies() {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const indicatorRefs = useRef<(HTMLDivElement | null)[]>([]);

  // High-performance multi-target DOM injection (zero React re-renders)
  const handleHover = (index: number) => {
    CASES.forEach((_, i) => {
      const imgRef = imageRefs.current[i];
      const indRef = indicatorRefs.current[i];
      
      if (imgRef) {
        if (i === index) {
          imgRef.style.opacity = '1';
          imgRef.style.transform = 'scale(1) rotate(0deg)';
        } else {
          imgRef.style.opacity = '0';
          imgRef.style.transform = 'scale(1.08) rotate(1deg)'; // Architectural zoom-out twist
        }
      }
      
      if (indRef) {
        if (i === index) {
          indRef.style.transform = 'scaleY(1)';
        } else {
          indRef.style.transform = 'scaleY(0)';
        }
      }
    });
  };

  return (
    <section className="bg-arctic-powder text-oceanic-noir relative border-t border-oceanic-noir/10 overflow-hidden" id="case-studies">
      
      {/* 1. ARCHITECTURAL GRAPHICS & BLUEPRINT PATTERNS */}
      {/* Micro-Plotting Grid Array */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-oceanic-noir) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-oceanic-noir) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Crosshair Peripheral Coordinates */}
      <div className="absolute top-12 right-12 font-mono text-[10px] text-oceanic-noir/30 pointer-events-none uppercase tracking-widest hidden lg:block">
        SYS_REF // ENG_BOARD_v2.8 <br/>
        LOC_COORD: [45.109 // -73.231]
      </div>

      {/* Main Structural Frame Wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16 relative z-10">
        
        {/* Header telemetry block */}
        <div className="mb-20 max-w-3xl relative">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-oceanic-noir/50 mb-6">
            <span className="w-1.5 h-1.5 bg-deep-saffron rounded-full animate-pulse shadow-[0_0_6px_#FF9932]"></span>
            <span className="text-oceanic-noir font-bold">\\\\</span> CASE WORK DIRECTORY
          </div>
          
          <h2 className="text-4xl md:text-7xl font-sans font-medium tracking-tight mb-8 leading-[1.05]">
            Proven neural <br /> operational frames.
          </h2>
          
          <p className="font-sans text-base md:text-lg text-oceanic-noir/60 max-w-2xl leading-relaxed">
            We partner with industry infrastructure leaders to deploy bespoke hardware-aligned AI systems that solve complex computational friction and automate secure scaling.
          </p>
        </div>
      </div>

      {/* Split Interactive Deck Layout */}
      <div className="flex flex-col md:flex-row border-t border-oceanic-noir/10 relative z-10 bg-white/50 backdrop-blur-md">
        
        {/* LEFT COMPARTMENT: The Optical System Viewport Tracker */}
        <div className="w-full md:w-5/12 relative min-h-[350px] md:min-h-auto border-b md:border-b-0 md:border-r border-oceanic-noir/10 overflow-hidden bg-oceanic-noir">
          <div className="sticky top-0 w-full h-[350px] md:h-screen max-h-[700px] flex items-center justify-center p-6 lg:p-12">
            
            {/* Viewport Frame Accents */}
            <div className="absolute top-4 left-4 font-mono text-[9px] text-arctic-powder/30 tracking-widest">[ CAPTURE_FEED_STABLE ]</div>
            <div className="absolute bottom-4 right-4 font-mono text-[9px] text-arctic-powder/30 tracking-widest">ZOOM_FACTOR // 1.0X</div>
            
            {/* Structural Alignment Hatch-marks */}
            <div className="absolute top-6 right-6 w-2 h-2 border-t border-r border-white/20" />
            <div className="absolute bottom-6 left-6 w-2 h-2 border-b border-l border-white/20" />

            <div className="relative w-full h-full border border-white/10 rounded-sm overflow-hidden bg-[#0c161d]">
              {CASES.map((study, idx) => (
                <div 
                  key={study.id}
                  ref={(el) => { imageRefs.current[idx] = el; }}
                  className={`
                    absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col items-center justify-center p-8
                    ${idx === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-108'}
                    ${study.fallbackColor}
                  `}
                >
                  {/* Subtle Grid overlay localized on image frame */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 mix-blend-overlay pointer-events-none" />

                  {/* Core Content Layout Inside Monitor Frame */}
                  <div className="relative z-10 text-center flex flex-col items-center max-w-xs">
                    <div className="w-12 h-12 border border-white/20 bg-white/5 flex items-center justify-center rounded-sm text-forsythia mb-6 shadow-xl">
                      <study.icon size={22} strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-white uppercase mb-2">
                      {study.id}
                    </span>
                    <div className="w-8 h-[1px] bg-deep-saffron my-3" />
                    
                    {/* Live Telemetry Meters inside the asset box */}
                    <div className="mt-4 space-y-1 w-full bg-black/20 p-4 border border-white/5 rounded-sm">
                      {study.metrics.map((m, i) => (
                        <div key={i} className="font-mono text-[10px] text-mystic-mint/60 flex justify-between">
                          <span>{m.split(': ')[0]}</span>
                          <span className="text-white font-bold">{m.split(': ')[1]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* IMAGE DEPLOYMENT LAYER (Uncomment once paths are linked):
                    <img src={study.imgSrc} alt={study.client} className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 transition-transform duration-700 hover:scale-105" /> 
                  */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COMPARTMENT: The Interactive Architecture Row Registry */}
        <div className="w-full md:w-7/12 flex flex-col">
          {CASES.map((study, idx) => (
            <article 
              key={study.id}
              onMouseEnter={() => handleHover(idx)}
              className="group flex flex-col lg:flex-row gap-4 lg:gap-12 p-8 lg:p-14 border-b border-oceanic-noir/10 hover:bg-oceanic-noir/[0.02] transition-colors duration-400 cursor-pointer relative overflow-hidden"
            >
              {/* Active Technical Hardware Line (Mutated directly for maximum frame performance) */}
              <div 
                ref={(el) => { indicatorRefs.current[idx] = el; }}
                className="absolute left-0 top-0 bottom-0 w-[4px] bg-deep-saffron origin-top scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
              />

              {/* Time Block Tracking Coordinates */}
              <div className="font-mono text-xs text-oceanic-noir/40 lg:w-40 shrink-0 pt-1 flex items-center gap-2">
                <Layers size={12} className="opacity-40 group-hover:text-deep-saffron group-hover:opacity-100 transition-colors" />
                <span>{study.year}</span>
              </div>
              
              {/* Content Space Frame */}
              <div className="flex-1 relative z-10">
                <div className="font-mono text-[9px] tracking-widest text-deep-saffron mb-2 block opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  ENGAGE_COMPARTMENT // DETECTED
                </div>
                
                <h3 className="text-2xl md:text-3xl font-sans font-medium mb-4 text-oceanic-noir transition-colors duration-300 group-hover:text-deep-saffron">
                  {study.client}
                </h3>
                
                <p className="font-sans text-sm md:text-base text-oceanic-noir/60 leading-relaxed max-w-xl transition-colors duration-300 group-hover:text-oceanic-noir/80">
                  {study.desc}
                </p>
              </div>

              {/* Vector Action Connector Icon Arrow */}
              <div className="hidden lg:flex items-center justify-center p-2 border border-transparent rounded-sm group-hover:border-oceanic-noir/10 group-hover:bg-white shadow-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <ArrowUpRight className="w-5 h-5 text-oceanic-noir group-hover:text-deep-saffron transition-colors duration-300" strokeWidth={1.5} />
              </div>
              
            </article>
          ))}

          {/* Directory Bottom Guardcap Telemetry */}
          <div className="p-6 font-mono text-[10px] text-oceanic-noir/30 uppercase tracking-[0.2em] mt-auto flex items-center gap-4 bg-oceanic-noir/[0.01]">
            <span>[ SYSTEM_INDEX_END ]</span>
            <div className="h-px bg-oceanic-noir/5 flex-1" />
            <span>SECURE_DATA_TRANSMISSION_VERIFIED</span>
          </div>
        </div>

      </div>
    </section>
  );
}