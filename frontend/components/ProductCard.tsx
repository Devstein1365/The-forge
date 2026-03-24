import Link from 'next/link';
import { FaHeart, FaShieldAlt } from 'react-icons/fa';
import type { Product } from '@/lib/mock-data';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/buyer/product/${product.id}`} className="block">
      <div className="card overflow-hidden group cursor-pointer hover:border-nm-gold transition-colors flex flex-col h-full bg-nm-white">
        <div className="relative h-48 w-full bg-nm-grey-200">
          <img 
            src={product.image} 
            alt={product.name}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-3 left-3 bg-nm-green text-nm-white text-xs font-bold px-2 py-1 rounded">
            {product.category.toUpperCase()}
          </div>
          {product.isVerified && (
            <div className="absolute bottom-3 right-3 bg-nm-white/90 text-nm-green text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
              <FaShieldAlt size={10} /> Verified Seller
            </div>
          )}
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-base font-bold text-nm-black line-clamp-2">{product.name}</h3>
            <button className="text-nm-grey-400 hover:text-nm-gold pt-1">
              <FaHeart size={18} />
            </button>
          </div>
          
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-xl font-bold text-nm-black">₦{product.price.toLocaleString()}</span>
            {product.tags?.[0] && (
              <span className="text-[10px] text-nm-green bg-nm-green-light px-1.5 py-0.5 rounded font-medium">
                {product.tags[0]}
              </span>
            )}
          </div>

          <div className="mt-auto pt-4 flex justify-between items-center text-xs text-nm-grey-500 font-medium">
            <div className="flex items-center gap-2">
              <span className="bg-nm-gold-light text-nm-gold-dark px-2 py-1 rounded text-[10px]">NEGOTIABLE</span>
              <span>{product.distance}</span>
            </div>
            <span className="bg-nm-green text-nm-white px-4 py-1.5 rounded-full hover:bg-nm-green/90 transition-colors">
              Buy Now
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
