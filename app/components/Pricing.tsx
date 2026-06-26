'use client';
import { useRef, useEffect } from 'react';

// The Data Logic: Multi-dimensional configuration object
const PRICING_MATRIX = {
  tiers: [
    { id: 'Starter', baseRate: 49 },
    { id: 'Professional', baseRate: 99 },
    { id: 'Enterprise', baseRate: 249 }
  ],
  currencies: {
    USD: { symbol: '$', rate: 1 },
    EUR: { symbol: '€', rate: 0.92 },
    INR: { symbol: '₹', rate: 83.5 }
  },
  annualMultiplier: 0.8 // Flat 20% annual discount multiplier
};

type CurrencyKey = keyof typeof PRICING_MATRIX.currencies;

export default function Pricing() {
  // Bypassing global state reflows using refs
  const priceRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const currencyRef = useRef<CurrencyKey>('USD');
  const isAnnualRef = useRef<boolean>(false);

  const updatePrices = () => {
    const currencyData = PRICING_MATRIX.currencies[currencyRef.current];
    
    PRICING_MATRIX.tiers.forEach((tier, index) => {
      if (priceRefs.current[index]) {
        let finalPrice = tier.baseRate * currencyData.rate;
        if (isAnnualRef.current) {
          finalPrice *= PRICING_MATRIX.annualMultiplier;
        }
        
        // Updates localized DOM text nodes strictly
        priceRefs.current[index]!.textContent = `${currencyData.symbol}${finalPrice.toFixed(2)}`;
      }
    });
  };

  // Set initial prices on mount
  useEffect(() => {
    updatePrices();
  }, []);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="pricing">
      <header className="text-center mb-16">
        <h2 className="font-mono text-4xl font-bold text-nocturnal-expedition mb-6">Transparent Pricing</h2>
        
        {/* Performance-Isolated Currency Switcher */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <select 
            className="px-4 py-2 rounded-lg border-2 border-mystic-mint bg-white font-sans text-oceanic-noir focus:border-deep-saffron outline-none transition-all duration-200 ease-micro"
            onChange={(e) => {
              currencyRef.current = e.target.value as CurrencyKey;
              updatePrices(); // Triggers localized text update, NO re-render
            }}
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="INR">INR (₹)</option>
          </select>

          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input 
                type="checkbox" 
                className="peer sr-only"
                onChange={(e) => {
                  isAnnualRef.current = e.target.checked;
                  updatePrices(); // Triggers localized text update, NO re-render
                }}
              />
              <div className="w-12 h-6 bg-mystic-mint rounded-full peer-checked:bg-deep-saffron transition-all duration-200 ease-micro"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 ease-micro peer-checked:translate-x-6"></div>
            </div>
            <span className="font-sans font-medium text-oceanic-noir group-hover:text-nocturnal-expedition transition-colors duration-200 ease-micro">
              Annual Billing <span className="text-deep-saffron text-sm ml-1">(20% Off)</span>
            </span>
          </label>
        </div>
      </header>

      {/* Pricing Matrix Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {PRICING_MATRIX.tiers.map((tier, idx) => (
          <div 
            key={tier.id} 
            className="p-8 rounded-2xl bg-white shadow-sm border border-mystic-mint hover:border-forsythia hover:shadow-xl transition-all duration-300 ease-layout flex flex-col"
          >
            <h3 className="text-2xl font-sans font-bold text-nocturnal-expedition mb-4">{tier.id}</h3>
            <div className="text-5xl font-mono font-bold text-deep-saffron mb-2">
              {/* Reference attached for isolated updates */}
              <span ref={(el) => { priceRefs.current[idx] = el; }}>--</span>
            </div>
            <span className="text-sm font-sans text-oceanic-noir/70 mb-8 block">per month, billed according to cycle</span>
            
            <button className="mt-auto w-full py-4 bg-nocturnal-expedition text-arctic-powder rounded-lg font-mono font-bold hover:bg-oceanic-noir transition-all duration-200 ease-micro">
              Select Tier
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}