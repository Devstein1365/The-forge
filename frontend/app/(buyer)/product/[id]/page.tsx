import { mockProducts } from '@/lib/mock-data';
import { FaHeart, FaChevronLeft, FaMinus, FaPlus, FaStar, FaStore, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = mockProducts.find(p => p.id === resolvedParams.id) || mockProducts[0];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="p-3 bg-nm-white rounded-full shadow-sm text-nm-black hover:bg-nm-grey-100 transition-colors">
          <FaChevronLeft />
        </Link>
        <h1 className="font-bold text-xl tracking-tight text-nm-black">Marketplace</h1>
        <button className="p-3 bg-nm-white rounded-full shadow-sm text-nm-grey-400 hover:text-red-500 transition-colors">
          <FaHeart size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        
        {/* Left Column: Image Gallery */}
        <div className="space-y-4">
          <div className="bg-nm-grey-100 rounded-3xl overflow-hidden relative shadow-sm aspect-square">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover" 
            />
            {product.isVerified && (
              <div className="absolute top-4 right-4 bg-nm-white/95 backdrop-blur-sm shadow-md text-nm-green text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-nm-green/20">
                <FaShieldAlt size={12} />
                <span>Verified Fresh</span>
              </div>
            )}
            <div className="absolute bottom-4 left-4 bg-nm-black/70 backdrop-blur-md text-nm-white text-xs font-bold px-3 py-1.5 rounded-xl border border-nm-white/20 uppercase tracking-widest text-[10px]">
              {product.category}
            </div>
          </div>
          
          {/* Mock thumbnail previews */}
          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`aspect-square rounded-2xl overflow-hidden cursor-pointer ${i === 1 ? 'border-2 border-nm-green shadow-md' : 'opacity-60 hover:opacity-100 border border-nm-grey-200'}`}>
                <img src={product.image} alt="thumbnail" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Product Info */}
        <div className="flex flex-col">
          {/* Header Info */}
          <div className="mb-6">
            <h2 className="text-3xl lg:text-4xl font-black text-nm-black mb-3 leading-tight">
              {product.name}
            </h2>
            
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium mb-4">
              <span className="flex items-center gap-1.5 text-nm-gold-dark bg-orange-50 px-2 py-1 rounded-lg border border-orange-100">
                <FaStar className="text-nm-gold" /> {product.rating || "4.8"} ({(product.reviews || 24)} reviews)
              </span>
              <span className="flex items-center gap-1.5 text-nm-grey-500">
                <FaMapMarkerAlt className="text-nm-grey-400" /> {product.location} • {product.distance}
              </span>
            </div>

            {/* Vendor Mini-Badge */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-nm-grey-50 border border-nm-grey-200 w-fit">
              <div className="w-10 h-10 bg-nm-green-light rounded-full flex items-center justify-center text-nm-green shadow-inner">
                <FaStore size={18} />
              </div>
              <div>
                <p className="text-xs text-nm-grey-500 uppercase tracking-wider font-bold">Sold By</p>
                <p className="font-bold text-nm-black">{product.vendor || "Farm Source Ltd."}</p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-nm-grey-200 mb-6"></div>

          {/* Pricing & Bidding Box */}
          <div className="bg-nm-white rounded-3xl p-6 md:p-8 shadow-sm border border-nm-grey-200 mb-8 relative overflow-hidden">
            {/* Background flourish */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-nm-green opacity-[0.03] rounded-bl-[100px]" />

            <div className="flex flex-col gap-2 mb-6 relative z-10">
              <span className="font-bold text-nm-grey-500 uppercase tracking-wider text-xs">Current Price / Unit</span>
              <div className="flex items-end gap-3">
                <span className="text-4xl lg:text-5xl font-black text-nm-black">₦{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-lg text-nm-grey-400 line-through font-medium mb-1.5">
                    ₦{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-4 relative z-10">
               <div className="flex items-center gap-3">
                 <button className="w-12 h-12 rounded-xl bg-nm-grey-100 hover:bg-nm-grey-200 transition-colors flex items-center justify-center text-nm-grey-600 shadow-sm border border-nm-grey-200/50">
                   <FaMinus />
                 </button>
                 <div className="flex-1 bg-nm-white border-2 border-nm-grey-200 h-12 rounded-xl flex items-center justify-center font-black text-xl shadow-inner">
                   1
                 </div>
                 <button className="w-12 h-12 rounded-xl bg-nm-grey-100 hover:bg-nm-grey-200 transition-colors flex items-center justify-center text-nm-grey-600 shadow-sm border border-nm-grey-200/50">
                   <FaPlus />
                 </button>
               </div>

               <div className="flex flex-col sm:flex-row gap-3 pt-2">
                 <button className="flex-1 bg-nm-black text-nm-white py-4 rounded-xl font-bold hover:bg-nm-grey-600 transition-colors shadow-md text-sm md:text-base">
                   Add to Cart
                 </button>
                 <button className="flex-1 bg-nm-green text-nm-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-colors shadow-md shadow-nm-green/20 text-sm md:text-base">
                   Buy Now — ₦{(product.price).toLocaleString()}
                 </button>
               </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-bold text-lg mb-3">About this item</h3>
            <p className="text-nm-grey-500 leading-relaxed text-sm md:text-base">
              Freshly harvested {product.name.toLowerCase()} sourced directly from {product.vendor}. Ensuring the highest quality standards from farm to table. Perfect for both wholesale and everyday consumer needs. Sustainably grown with organic principles in mind.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
