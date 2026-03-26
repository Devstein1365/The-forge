import { mockProducts } from "@/lib/mock-data";
import { ProductCard } from "@/components/ProductCard";
import { BuyerDashboardHeader } from "@/components/BuyerDashboardHeader";

export default function BuyerDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10">
      <BuyerDashboardHeader />

      <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
        {["All", "Grains", "Tubers", "Vegetables", "Fruits", "Oils"].map((cat, i) => (
          <button
            key={cat}
            className={`px-5 py-2.5 rounded-2xl text-sm font-bold whitespace-nowrap transition-colors ${
              i === 0 
                ? "bg-nm-green text-nm-white shadow-md" 
                : "bg-nm-white border border-nm-grey-200 text-nm-grey-600 hover:bg-nm-grey-50 hover:border-nm-grey-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {mockProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
