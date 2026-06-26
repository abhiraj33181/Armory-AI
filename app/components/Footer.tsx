'use client';
import { Terminal, ArrowRight, Shield, Cpu, Activity, Database } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#070d11] text-arctic-powder overflow-hidden pt-32 border-t border-white/5 flex flex-col justify-between min-h-screen md:min-h-0">

      {/* BACKGROUND GRAPHICS & MAINBOARD TEXTURES */}
      
      {/* 1. Nocturnal Ambient Backglow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#114C5A] opacity-10 rounded-full blur-[130px] pointer-events-none z-0" />
      
      {/* 2. Tactical Dot Matrix Schema Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-mystic-mint) 1px, transparent 0)',
          backgroundSize: '16px 16px'
        }}
      />

      {/* 3. Structural Vector Grid Lines */}
      <div className="absolute inset-0 z-0 flex justify-between max-w-7xl mx-auto px-6 md:px-12 pointer-events-none opacity-[0.03]">
        <div className="w-px h-full bg-arctic-powder"></div>
        <div className="w-px h-full bg-arctic-powder hidden md:block"></div>
        <div className="w-px h-full bg-arctic-powder hidden md:block"></div>
        <div className="w-px h-full bg-arctic-powder"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex-1">
        
        {/* Top Operational Status Ribbon */}
        <div className="mb-16 pb-8 border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] font-mono tracking-widest text-mystic-mint/40 uppercase">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-deep-saffron animate-pulse shadow-[0_0_8px_#FF9932]" />
            <span>SYS_NODE: DISPATCH_ACTIVE</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5"><Database size={10} /><span>DB_CLUSTER // SYNCED</span></div>
            <div className="hidden md:flex items-center gap-1.5"><Shield size={10} /><span>SSL_SECURE_256</span></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Column 1: Core System Telemetry / Brand Badge */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-6">
            <div>
              {/* Tactical Technical Brand Logo Assembly */}
              <div className="relative inline-flex items-center justify-center p-3 border border-white/10 bg-white/[0.02] rounded-sm group mb-6">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-forsythia" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-forsythia" />
                <svg className="w-8 h-8 text-arctic-powder group-hover:text-forsythia transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <p className="font-mono text-xs text-mystic-mint/40 leading-relaxed max-w-[200px]">
                Operational intelligence infrastructure for deep-scale neural operations arrays.
              </p>
            </div>
            
            {/* Live Terminal Frame Readout Box */}
            <div className="hidden lg:block bg-black/20 border border-white/5 p-4 rounded-sm font-mono text-[9px] text-mystic-mint/30 space-y-1">
              <div className="flex justify-between text-mystic-mint/50"><span>[ TERMINAL_DOCK ]</span><span>v4.12</span></div>
              <div>PING_REPLY // 12ms // STABLE</div>
              <div className="flex items-center gap-1 text-forsythia/70"><Activity size={8} /> TOTAL_REQUESTS: 8,412,903</div>
            </div>
          </div>

          {/* Column 2: Navigation Category 01 */}
          <nav className="md:col-span-3 space-y-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-mystic-mint/50 flex items-center gap-2">
              <span className="text-forsythia">//</span> SEC_01 // NAVIGATION
            </div>
            <ul className="space-y-3.5 font-sans text-sm text-arctic-powder/70">
              {[
                { label: 'Core Interface', href: '#' },
                { label: 'Telemetry Pricing', href: '#pricing' },
                { label: 'Operational Case Studies', href: '#case-studies' },
                { label: 'System Changetree', href: '#' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="group flex items-center gap-2 hover:text-forsythia transition-colors duration-150">
                    <span className="font-mono text-xs text-forsythia opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Navigation Category 02 */}
          <nav className="md:col-span-3 space-y-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-mystic-mint/50 flex items-center gap-2">
              <span className="text-forsythia">//</span> SEC_02 // COMPANY_REG
            </div>
            <ul className="space-y-3.5 font-sans text-sm text-arctic-powder/70">
              {[
                { label: 'Infrastructure Scope', href: '#' },
                { label: 'Establish Connection', href: '#' },
                { label: 'Book Mainframe Demo', href: '#' },
                { label: 'Production Templates', href: '#' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="group flex items-center gap-2 hover:text-forsythia transition-colors duration-150">
                    <span className="font-mono text-xs text-forsythia opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Governance & Secure Handshakes */}
          <div className="md:col-span-3 space-y-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-mystic-mint/50 flex items-center gap-2">
              <span className="text-forsythia">//</span> SEC_03 // DISCLOSURES
            </div>
            <ul className="space-y-3.5 font-sans text-sm text-arctic-powder/70 mb-8">
              <li><a href="#" className="hover:text-forsythia transition-colors">Terms of Operations</a></li>
              <li><a href="#" className="hover:text-forsythia transition-colors">Privacy Encryption Protocols</a></li>
            </ul>

            {/* Tactical Grid-Border Block Social Links */}
            <div className="flex gap-2">
              {[
                { name: 'X', path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' },
                { name: 'LN', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12h-4z M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4' },
                { name: 'YT', path: 'M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17 m7.5-2 l5-3-5-3' }
              ].map((soc, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-sm bg-white/[0.02] border border-white/10 text-mystic-mint/60 hover:bg-forsythia hover:text-black hover:border-forsythia hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={soc.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* THE MASSIVE BOTTOM TYPOGRAPHY CORE FRAME */}
      <div className="relative w-full mt-24 md:mt-16 flex flex-col items-center justify-end overflow-hidden pt-12 border-t border-white/5 bg-black/10">
        
        {/* Vector Target Crosshair behind text */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
        
        <div className="w-full text-center select-none pointer-events-none relative">
          {/* Subtle horizontal tracking bar split through the center of typography */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/[0.03] z-0" />
          
          <h1
            className="font-sans font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-arctic-powder to-white/[0.03] opacity-80"
            style={{
              fontSize: 'min(26vw, 360px)',
              lineHeight: '0.72',
              marginBottom: '-2vw'
            }}
          >
            armory
          </h1>
        </div>

        {/* Secure Closing Lower Cap Guard */}
        <div className="w-full bg-[#05090c] border-t border-white/5 py-5 px-6 relative z-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-mystic-mint/30 uppercase">
            <div>©2026 ARMORY AUTOMATED SYSTEMS CO.</div>
            <div className="flex gap-2 text-deep-saffron font-bold">
              <span>[ AUTH_ESTABLISHED ]</span>
            </div>
            <div>ALL RIGHTS COMPLIANT REGISTERED</div>
          </div>
        </div>
      </div>

    </footer>
  );
}