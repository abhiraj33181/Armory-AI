import PricingMatrix from "@/components/PricingMatrix";
import BentoFeatures from "@/components/BentoFeatures";

export default function Home() {
  return (
    <>
      <header className="bg-oceanic-noir text-arctic-powder py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-mono font-bold mb-6 text-forsythia">Next-Gen Automation</h1>
          <p className="text-xl mb-10 text-mystic-mint">Engineered for speed. Built for scale.</p>
          <a href="#pricing" className="inline-block bg-deep-saffron text-oceanic-noir px-8 py-4 rounded-lg font-bold font-mono hover:bg-forsythia transition-micro duration-200">
            Initialize Platform
          </a>
        </div>
      </header>

      <main>
        <BentoFeatures />
        <PricingMatrix />
      </main>

      <footer className="bg-nocturnal-expedition py-12 text-center text-mystic-mint">
        <p className="font-mono text-sm">© 2026 AI Platform Speed Run.</p>
      </footer>
    </>
  );
}