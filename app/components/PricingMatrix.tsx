'use client';
import { useRef, useEffect } from 'react';

// Multi-dimensional configuration matrix
const PRICING_MATRIX = {
  tiers: [
    { id: 'starter', baseRate: 49 },
    { id: 'pro', baseRate: 99 },
    { id: 'enterprise', baseRate: 249 }
  ],
  currencies: {
    USD: { symbol: '$', rate: 1 },
    EUR: { symbol: '€', rate: 0.92 },
    INR: { symbol: '₹', rate: 83.5 }
  },
  annualMultiplier: 0.8 // 20% discount
};

export default function PricingMatrix() {
  const priceRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const currencyRef = useRef<keyof typeof PRICING_MATRIX.currencies>('USD');
  const isAnnualRef = useRef<boolean>(false);

  // Pure DOM mutation - ZERO global re-renders
  const calculateAndInjectPrices = () => {
    const currencyData = PRICING_MATRIX.currencies[currencyRef.current];
    
    PRICING_MATRIX.tiers.forEach((tier, index) => {
      if (priceRefs.current[index]) {
        let finalPrice = tier.baseRate * currencyData.rate;
        if (isAnnualRef.current) finalPrice *= PRICING_MATRIX.annualMultiplier;
        
        // Direct text node manipulation
        priceRefs.current[index]!.textContent = `${currencyData.symbol}${finalPrice.toFixed(2)}`;
      }
    });
  };

  useEffect(() => {
    calculateAndInjectPrices();
  }, []);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="pricing">
      <header className="text-center mb-12">
        <h2 className="font-mono text-4xl text-nocturnal-expedition font-bold mb-4">Pricing Logic</h2>
        
        {/* Controls - Using standard DOM events to avoid React state triggers */}
        <div className="flex justify-center gap-4 mb-8">
          <select 
            className="p-2 rounded border border-oceanic-noir/20 bg-white"
            onChange={(e) => {
              currencyRef.current = e.target.value as keyof typeof PRICING_MATRIX.currencies;
              calculateAndInjectPrices();
            }}
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="INR">INR (₹)</option>
          </select>

          <label className="flex items-center gap-2 cursor-pointer transition-micro duration-200">
            <input 
              type="checkbox" 
              className="w-5 h-5 accent-deep-saffron"
              onChange={(e) => {
                isAnnualRef.current = e.target.checked;
                calculateAndInjectPrices();
              }}
            />
            <span className="font-medium">Annual Billing (20% Off)</span>
          </label>
        </div>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        {PRICING_MATRIX.tiers.map((tier, idx) => (
          <div key={tier.id} className="p-8 rounded-2xl bg-white shadow-lg border-t-4 border-forsythia transition-layout duration-300 hover:-translate-y-2">
            <h3 className="text-2xl capitalize mb-4 font-bold text-nocturnal-expedition">{tier.id}</h3>
            {/* The strictly isolated text node */}
            <div className="text-4xl font-mono font-bold text-deep-saffron mb-6">
              <span ref={(el) => { priceRefs.current[idx] = el; }}>$0.00</span>
              <span className="text-sm text-oceanic-noir/60 font-sans">/mo</span>
            </div>
            <button className="w-full py-3 bg-nocturnal-expedition text-white rounded-lg font-medium hover:bg-oceanic-noir transition-micro duration-150 ease-out">
              Deploy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}