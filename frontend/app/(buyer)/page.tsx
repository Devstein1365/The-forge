
import { mockProducts } from '@/lib/mock-data';
import { ProductCard } from '@/components/ProductCard';
import { FaStore } from 'react-icons/fa';

export default function BuyerDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="bg-nm-green rounded-3xl p-6 md:p-8 text-nm-white relative overflow-hidden">
        <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Today's Market</h2>
            <p className="text-sm text-nm-green-light mb-6">Curated daily essentials from local producers.</p>
            <div className="bg-nm-green-light/20 rounded-2xl p-4 inline-block backdrop-blur-sm border border-nm-white/10">
              <p className="text-xs text-nm-green-light uppercase font-bold tracking-wider">Market Average</p>
              <p className="text-3xl font-bold mt-1">₦12,400</p>
              <p className="text-xs text-nm-green-light mt-1">Grains Category Index</p>
            </div>
        </div>
      </div>
      
      <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
        {['All', 'Grains', 'Tubers', 'Vegetables', 'Oils'].map((cat, i) => (
            <button key={cat} className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap ${i === 0 ? 'bg-nm-green text-nm-white' : 'bg-nm-grey-200 text-nm-grey-600 hover:bg-nm-grey-300'}`}>
              {cat}
            </button>
        ))}
      </div>

      <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
