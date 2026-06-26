'use client';
import { useState, useEffect } from 'react';

const FEATURES = [
  { title: "Neural Routing", desc: "Automate endpoints seamlessly." },
  { title: "Data Pipelines", desc: "Process TBs in milliseconds." },
  { title: "Security Layers", desc: "Military-grade encryption." },
];

export default function BentoFeatures() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      // Context Lock Constraint: Automatically read screen width and maintain activeIndex
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-20 px-4 bg-mystic-mint" id="features">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-mono text-4xl text-oceanic-noir font-bold mb-12 text-center">Core Architecture</h2>
        
        <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-3'}`}>
          {FEATURES.map((feat, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => !isMobile && setActiveIndex(idx)}
              onMouseLeave={() => !isMobile && setActiveIndex(null)}
              onClick={() => isMobile && setActiveIndex(activeIndex === idx ? null : idx)}
              className={`
                bg-white rounded-xl overflow-hidden cursor-pointer
                transition-all duration-400 ease-in-out border border-oceanic-noir/10
                ${!isMobile && activeIndex === idx ? 'scale-[1.02] shadow-xl border-deep-saffron' : 'scale-100 shadow-md'}
                ${!isMobile && idx === 0 ? 'col-span-2' : '' /* Bento Layout simulation */}
              `}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold font-mono text-nocturnal-expedition mb-2">{feat.title}</h3>
                
                {/* Accordion logic controlled natively via max-height CSS transition */}
                <div 
                  className={`
                    transition-all duration-400 ease-in-out overflow-hidden
                    ${isMobile ? (activeIndex === idx ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0') : 'max-h-40 opacity-100 mt-4'}
                  `}
                >
                  <p className="text-oceanic-noir/80">{feat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}