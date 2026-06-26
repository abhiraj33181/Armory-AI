'use client';
import { useEffect, useRef, useState } from 'react';
import { Play, Clock, X, Shield, Radio, Activity } from 'lucide-react';

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timestampRef = useRef<HTMLSpanElement>(null);

  // 1. Zero-Rerender Custom Follower Engine
  useEffect(() => {
    const section = sectionRef.current;
    const follower = followerRef.current;
    if (!section || !follower || isPlaying) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Perfect offset positioning to align seamlessly near the cursor pointer
      follower.style.transform = `translate3d(${x + 20}px, ${y + 20}px, 0)`;
    };

    const handleMouseEnter = () => {
      follower.style.opacity = '1';
      follower.style.transform = 'scale(1)';
    };

    const handleMouseLeave = () => {
      follower.style.opacity = '0';
      follower.style.transform = 'scale(0.8)';
    };

    section.addEventListener('mousemove', handleMouseMove, { passive: true });
    section.addEventListener('mouseenter', handleMouseEnter);
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseenter', handleMouseEnter);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isPlaying]);

  // 2. High-Frequency Real-Time Video Timestamp Telemetry Listener
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (timestampRef.current) {
        const current = video.currentTime.toFixed(2).padStart(5, '0');
        const duration = (video.duration || 0).toFixed(2).padStart(5, '0');
        timestampRef.current.innerText = `FRAME_TIME // ${current}s : ${duration}s`;
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, [isPlaying]);

  const handlePlayFeed = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play().catch(err => console.log("Playback interrupted:", err));
    }, 50);
  };

  const handleCloseFeed = (e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering replay cycle via parent click
    setIsPlaying(false);
    videoRef.current?.pause();
  };

  return (
    <section 
      ref={sectionRef}
      onClick={!isPlaying ? handlePlayFeed : undefined}
      className={`relative w-full h-[85vh] min-h-[650px] bg-oceanic-noir border-t border-b border-white/5 overflow-hidden flex items-center justify-center transition-all duration-500 select-none ${!isPlaying ? 'cursor-none group' : 'cursor-default'}`}
    >
      
      {/* BACKGROUND GRAPHICAL LAYER (Always Active) */}
      
      {/* Ambient Core Radial Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[45vw] h-[45vw] max-w-[650px] bg-[#114C5A] rounded-full opacity-15 blur-[120px] transition-all duration-700 group-hover:opacity-25 group-hover:scale-105" />
      </div>
      
      {/* Tactical Grid Structure Mesh */}
      <div className="absolute inset-0 z-0 flex justify-between max-w-7xl mx-auto px-12 pointer-events-none opacity-[0.04]">
        <div className="w-px h-full bg-arctic-powder"></div>
        <div className="w-px h-full bg-arctic-powder hidden md:block"></div>
        <div className="w-px h-full bg-arctic-powder"></div>
      </div>

      {/* Blueprint Dot Matrix Textured Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #D9E8E2 1px, transparent 0)',
          backgroundSize: '16px 16px'
        }}
      />

      {/* 2. LIVE HIGH-PERFORMANCE CURSOR FOLLOWER BADGE */}
      {!isPlaying && (
        <div 
          ref={followerRef}
          className="absolute top-0 left-0 z-40 pointer-events-none opacity-0 scale-75 bg-arctic-powder text-oceanic-noir px-4 py-2 font-mono text-[10px] font-bold tracking-widest uppercase transition-opacity transition-transform duration-200 ease-out will-change-transform rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/20 flex items-center gap-2"
        >
          <Radio size={12} className="text-[#FFC801] animate-pulse" />
          <span>INITIALIZE_FEED // NOW</span>
          
          {/* Hardware Blueprint Hatching Angle Details */}
          <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-[#FFC801]"></div>
          <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-[#FFC801]"></div>
        </div>
      )}

      {/* 3. TERMINAL METADATA PERIPHERALS FRAME (TOP DOCK) */}
      <div className="absolute top-10 left-6 right-6 md:left-14 md:right-14 z-30 flex items-center justify-between pointer-events-none border-b border-white/5 pb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mystic-mint/50">
            <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-[#FF9932] animate-ping' : 'bg-[#FFC801] animate-pulse'}`} />
            <span>STREAM_ID: ARMORY_CORE_V4</span>
          </div>
          <div className="hidden sm:inline-block font-mono text-[10px] bg-white/[0.03] text-mystic-mint/30 border border-white/5 px-2 py-0.5 rounded-sm">
            STATUS // {isPlaying ? 'ACTIVE_STREAMING' : 'IDLE_SECURE'}
          </div>
        </div>

        <div className="flex items-center gap-6 text-mystic-mint/50 font-mono text-xs tracking-wider">
          <div className="flex items-center gap-2">
            <Clock size={14} className="opacity-60" />
            <span>EST_DURATION: 02:00</span>
          </div>
          <div className="hidden md:block text-mystic-mint/30">
            [ SEC_AUTH_LEVEL_01 ]
          </div>
        </div>
      </div>

      {/* 4. MAIN CENTRAL CONTENT INTERACTION HUB */}
      {!isPlaying ? (
        <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center max-w-xl">
          {/* Pulsing Cinematic Wave Array Ring */}
          <div className="absolute inset-0 rounded-full border border-arctic-powder/20 scale-150 animate-[ping_3.5s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30 pointer-events-none"></div>
          
          {/* Main Architectural Operational Button Frame */}
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-sm flex items-center justify-center backdrop-blur-md bg-white/[0.02] border border-white/10 transition-all duration-500 ease-out shadow-[0_0_50px_rgba(241,246,244,0.03)] group-hover:border-[#FFC801]/30 group-hover:shadow-[0_0_60px_rgba(255,200,1,0.08)] relative">
            
            {/* Outer Framework Mechanical Alignments */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/20 group-hover:border-[#FFC801] transition-colors duration-300"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/20 group-hover:border-[#FFC801] transition-colors duration-300"></div>

            <div className="w-16 h-16 md:w-20 md:h-20 bg-arctic-powder text-oceanic-noir flex items-center justify-center rounded-sm shadow-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:bg-[#FFC801]">
              <Play size={24} fill="currentColor" className="ml-1 transition-transform group-hover:scale-110" />
            </div>
          </div>

          <p className="mt-8 font-mono text-[11px] tracking-[0.2em] uppercase text-mystic-mint/40 group-hover:text-arctic-powder transition-colors duration-300">
            Click Anywhere To Engage Matrix Stream
          </p>
        </div>
      ) : (
        
        /* 5. LIVE VIDEO CORE OVERLAY TERMINAL VIEWPORT */
        <div className="absolute inset-0 w-full h-full z-20 bg-black animate-fadeIn flex items-center justify-center p-4 md:p-16 pt-24 md:pt-28">
          <div className="relative w-full h-full max-w-6xl aspect-video bg-[#0c161d] border border-white/10 rounded-sm overflow-hidden flex items-center justify-center group/video shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
            
            {/* HTML5 Native High Fidelity Architecture Engine */}
            <video 
              ref={videoRef}
              src="https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-42013-large.mp4"
              className="w-full h-full object-cover relative z-10"
              loop
              playsInline
              controls
            />

            {/* Tactical Stream Data HUD Display Graphics (Overlaid on top of Video Frame) */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none font-mono text-[10px] bg-black/70 text-white/70 px-3 py-1.5 backdrop-blur-md tracking-wider border border-white/10 flex items-center gap-2">
              <Activity size={12} className="text-[#FF9932] animate-pulse" />
              <span ref={timestampRef}>FRAME_TIME // 00.00s : 00.00s</span>
            </div>

            <div className="absolute top-4 right-4 z-20 font-mono text-[10px] bg-black/70 text-white/70 px-3 py-1.5 backdrop-blur-md tracking-wider border border-white/10 hidden sm:block pointer-events-none">
              RESOLUTION // 2160p_RAW_BITSTREAM
            </div>

            {/* Aspect Blueprint Crosshair Brackets Alignment */}
            <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-white/40 z-20 pointer-events-none" />
            <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-white/40 z-20 pointer-events-none" />
            <div className="absolute bottom-16 left-8 w-4 h-4 border-b border-l border-white/40 z-20 pointer-events-none" />
            <div className="absolute bottom-16 right-8 w-4 h-4 border-b border-r border-white/40 z-20 pointer-events-none" />

            {/* Hardware Close Controller Command [X] Button */}
            <button 
              onClick={handleCloseFeed}
              className="absolute bottom-4 right-4 z-30 bg-[#FF9932] text-black hover:bg-[#FFC801] px-4 py-2 font-mono text-[10px] font-bold tracking-widest uppercase transition-all flex items-center gap-2 shadow-lg rounded-sm border border-white/20"
            >
              <X size={12} strokeWidth={2.5} />
              <span>Terminate Feed [ESC]</span>
            </button>
          </div>
        </div>
      )}

      {/* TERMINAL BOUNDARY EDGE LOWER PERIPHERALS (BOTTOM DOCK) */}
      <div className="absolute bottom-6 left-6 right-6 md:left-14 md:right-14 z-10 flex items-center justify-between pointer-events-none text-[10px] font-mono text-mystic-mint/20 uppercase tracking-widest">
        <div>SYS_NODE // MAT_PROT_04</div>
        <div className="hidden sm:block">SCALE [ 16 : 09 ]</div>
        <div>ARMORY.AI // ALL_RIGHTS_RESERVED</div>
      </div>

      {/* Elegant feather bottom gradient array */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-oceanic-noir to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}