import Link from "next/link";
import { FaHeart, FaShieldAlt } from "react-icons/fa";
import type { Product } from "@/lib/mock-data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="block h-full group">
      <div className="card overflow-hidden cursor-pointer hover:border-nm-green hover:shadow-lg transition-all duration-300 flex flex-col h-full bg-nm-white border border-nm-grey-200/60 rounded-2xl relative translate-y-0 hover:-translate-y-1">
        
        {/* Image Section */}
        <div className="relative h-40 sm:h-48 xl:h-52 w-full bg-nm-grey-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute top-3 left-3 bg-nm-green text-nm-white text-[10px] md:text-xs font-bold px-2 py-1 rounded shadow-sm">
            {product.category.toUpperCase()}
          </div>
          {product.isVerified && (
            <div className="absolute top-3 right-3 bg-nm-white/95 backdrop-blur-sm text-nm-green text-[10px] md:text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
              <FaShieldAlt size={12} />
              <span className="hidden sm:inline">Verified</span>
            </div>
          )}
          
          {/* Desktop Hover Action - Optional but nice */}
          <div className="absolute inset-0 bg-nm-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
        </div>

        {/* Content Section */}
        <div className="p-3 md:p-4 flex flex-col flex-grow">
          <div className="flex justify-between items-start gap-2 mb-2">
            <h3 className="text-sm md:text-base font-bold text-nm-black line-clamp-2 md:line-clamp-2 group-hover:text-nm-green transition-colors leading-tight">
              {product.name}
            </h3>
            <button className="text-nm-grey-300 hover:text-red-500 transition-colors pt-0.5 flex-shrink-0">
              <FaHeart size={16} />
            </button>
          </div>

          <div className="flex flex-col gap-1 mb-3">
            <span className="text-lg md:text-xl font-black text-nm-black">
              ₦{product.price.toLocaleString()}
            </span>
            {product.tags?.[0] && (
              <span className="text-[10px] md:text-xs text-nm-green-dark bg-nm-green-light/30 px-2 py-0.5 rounded font-bold w-fit border border-nm-green-light">
                {product.tags[0]}
              </span>
            )}
          </div>

          <div className="mt-auto pt-3 border-t border-nm-grey-100 flex justify-between items-center text-[11px] md:text-xs text-nm-grey-500 font-medium">
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 sm:items-center">
              <span className="bg-orange-50 text-orange-600 px-1.5 py-0.5 md:px-2 md:py-1 rounded text-[9px] md:text-[10px] font-bold w-fit uppercase tracking-wide border border-orange-100">
                Negotiable
              </span>
              <span className="flex items-center gap-1 text-nm-grey-400 capitalize">
                {product.distance}
              </span>
            </div>
            
            {/* Desktop Add to Cart button */}
            <div className="hidden sm:flex bg-nm-green text-nm-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-opacity-90 shadow-sm ml-2 shrink-0">
              Add +
            </div>
            {/* Mobile Buy button */}
            <div className="sm:hidden bg-nm-green text-nm-white px-3 py-1.5 rounded-full text-[10px] font-bold shadow-sm ml-2 shrink-0">
              Buy
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
