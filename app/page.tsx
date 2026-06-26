import BentoFeatures from "./components/BentoFeatures";
import HeroTerrain from "./components/HeroTerrain";
import ScrollRevealText from "./components/ScrollRevealText";
import Statistics from "./components/Statistics";
import VideoShowcase from "./components/VideoShowcase";
import CaseStudies from "./components/CaseStudies";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-oceanic-noir text-arctic-powder flex flex-col selection:bg-forsythia selection:text-oceanic-noir font-sans">

      {/* 3D Enhanced Dark Hero Section with Vertical Grid Lines */}
      <header className="relative min-h-screen flex flex-col overflow-hidden bg-oceanic-noir">

        {/* The 3D Terrain */}
        <HeroTerrain />

        {/* Vertical Grid Lines (Matching Screenshot Aesthetic) */}
        <div className="absolute inset-0 z-0 flex justify-evenly pointer-events-none opacity-10">
          <div className="w-px h-full bg-arctic-powder"></div>
          <div className="w-px h-full bg-arctic-powder"></div>
          <div className="w-px h-full bg-arctic-powder"></div>
          <div className="w-px h-full bg-arctic-powder"></div>
        </div>

        {/* Navbar */}
        <nav className="flex justify-between items-center py-6 px-8 md:px-16 z-20 border-b border-white/10 glass-nav absolute top-0 w-full">
          <div className="font-mono text-3xl font-bold tracking-tighter text-arctic-powder flex items-center gap-2">
            {/* Logo SVG */}
            <svg className="w-8 h-8 text-forsythia" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z" />
            </svg>
            armory<span className="text-forsythia">.ai</span>
          </div>

          <div className="w-10 h-10 flex flex-col justify-center gap-2.5 cursor-pointer group">
            <div className="h-[2px] w-full bg-arctic-powder group-hover:bg-forsythia transition-colors duration-200"></div>
            <div className="h-[2px] w-8 ml-auto bg-arctic-powder group-hover:bg-forsythia group-hover:w-full transition-all duration-300"></div>
          </div>
        </nav>

        {/* Main Hero Content */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 pt-32 pb-12 px-8 md:px-16 relative h-full">

          {/* Left: Big Typography */}
          <div className="space-y-8 mt-20">
            <h1 className="text-6xl md:text-7xl lg:text-[6rem] font-sans font-medium leading-[1.05] tracking-tight">
              <div className="text-reveal">Power your</div>
              <div className="text-reveal delay-100">future with <span className="text-forsythia font-bold">AI</span></div>
            </h1>

            <p className="text-reveal delay-200 text-lg md:text-xl text-mystic-mint/80 max-w-lg leading-relaxed font-sans pt-4 border-l-2 border-forsythia pl-4">
              Deploy custom enterprise agents and automate complex workflows.
              Scale your intelligence with Armory today.
            </p>

            <div className="pt-8 text-reveal delay-300">
              <a href="#pricing" className="group relative inline-flex items-center gap-4 bg-arctic-powder text-oceanic-noir px-2 py-2 pr-8 rounded-sm font-sans font-bold overflow-hidden transition-all duration-400 hover:shadow-[0_0_20px_rgba(255,200,1,0.4)]">
                {/* Button Hover Animation Layer */}
                <div className="absolute inset-0 bg-forsythia transform scale-x-0 origin-left transition-transform duration-300 ease-layout group-hover:scale-x-100"></div>

                <span className="relative z-10 w-12 h-12 bg-oceanic-noir text-arctic-powder flex items-center justify-center rounded-sm text-xl group-hover:bg-nocturnal-expedition transition-colors duration-300">
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
                <span className="relative z-10 group-hover:text-oceanic-noir transition-colors duration-300">
                  Build A Workflow
                </span>
              </a>
            </div>
          </div>

          {/* Right: Floating Services Menu */}
          <div className="flex flex-col gap-6 lg:items-end mt-20 lg:mt-0">
            <div className="space-y-6 font-sans text-3xl md:text-5xl font-normal text-arctic-powder/70 lg:text-right w-full lg:w-auto">
              {['AI Strategy', 'Custom Agents', 'Process Automation', 'Data Intelligence'].map((item, i) => (
                <div key={item} className={`text-reveal delay-[${(i + 3) * 100}ms]`}>
                  <div className="group flex items-center lg:justify-end gap-4 cursor-pointer">
                    <span className="text-forsythia opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-layout text-2xl">
                      ✦
                    </span>
                    <span className="group-hover:text-arctic-powder group-hover:translate-x-2 lg:group-hover:-translate-x-2 transition-all duration-300 ease-layout">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mock Client Logos (from screenshot) with icons */}
            <div className="flex gap-8 mt-16 opacity-50 font-sans font-bold text-xl items-center text-reveal delay-[700ms]">
              <span className="tracking-tighter hover:text-forsythia transition-colors duration-200 cursor-pointer">aetna®</span>
              <span className="flex items-center gap-1 hover:text-forsythia transition-colors duration-200 cursor-pointer">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z" /></svg>
                cigna
              </span>
              <span className="flex items-center gap-1 hover:text-forsythia transition-colors duration-200 cursor-pointer">
                Anthem
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main & Footer Components */}
      <main className="relative z-10 bg-oceanic-noir text-arctic-powder">
        <ScrollRevealText />
        <BentoFeatures />
        <Statistics />
        <VideoShowcase />
        <CaseStudies />
      </main>

      <Footer/>
    </div>
  );
}