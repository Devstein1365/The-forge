
import { mockProducts } from '@/lib/mock-data';
import { FaHeart, FaChevronLeft, FaMinus, FaPlus, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function ProductDetailPage(props: { params: Promise<{ id: string }> }) {
  // Static rendering workaround for mock data
  const product = mockProducts[0]; 

  return (
    <div className="max-w-2xl mx-auto pb-8">
      <div className="flex justify-between items-center mb-4">
        <Link href="/buyer" className="p-2 bg-nm-white rounded-full shadow-sm text-nm-black hover:bg-nm-grey-100"><FaChevronLeft /></Link>
        <h1 className="font-bold text-lg">Product Details</h1>
        <button className="p-2 bg-nm-white rounded-full shadow-sm text-nm-grey-400 hover:text-nm-gold"><FaHeart /></button>
      </div>

      <div className="bg-nm-white rounded-3xl shadow-sm border border-nm-grey-100 overflow-hidden mb-6">
        <div className="h-64 sm:h-96 w-full bg-nm-grey-200">
          <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
        </div>
        
        <div className="p-6">
          <p className="text-xs font-bold text-nm-gold tracking-widest mb-2 uppercase">Direct From Farm</p>
          <h2 className="text-3xl font-bold text-nm-black mb-2">{product.name}</h2>
          <p className="text-nm-grey-500 text-sm mb-6">Heirloom variety harvested from the central valley. Nutty aroma with a perfect fluffy texture for every meal.</p>
          
          <div className="bg-nm-bg rounded-2xl p-5 mb-6 border border-nm-grey-200">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-nm-grey-600 flex items-center gap-2">Bidding Status</span>
              <span className="bg-nm-gold text-nm-white text-[10px] font-bold px-2 py-1 rounded">LIVE</span>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold text-nm-green">₦{(product.price-1000).toLocaleString()}</span>
              <span className="text-xs text-nm-grey-500">Current High Bid</span>
            </div>
            
            <div className="mt-6">
               <p className="text-xs font-bold text-nm-grey-500 mb-2 uppercase tracking-wide">Enter Your Bid</p>
               <div className="flex items-center gap-3 mb-4">
                 <button className="w-10 h-10 rounded-full bg-nm-grey-200 flex items-center justify-center text-nm-grey-600"><FaMinus/></button>
                 <div className="flex-1 bg-nm-grey-200 h-12 rounded-xl flex items-center justify-center font-bold text-lg">₦{product.price.toLocaleString()}</div>
                 <button className="w-10 h-10 rounded-full bg-nm-grey-200 flex items-center justify-center text-nm-grey-600"><FaPlus/></button>
               </div>
               
               <div className="flex gap-3">
                 <Link href="/buyer/chat" className="flex-1 bg-nm-green text-nm-white text-center py-3.5 rounded-xl font-bold hover:bg-nm-green/90 transition">Place Bid</Link>
                 <button className="flex-1 bg-nm-gold-dark text-nm-white py-3.5 rounded-xl font-bold hover:bg-nm-gold-dark/90 transition flex flex-col items-center justify-center leading-tight">
                    <span>Pay Quickly</span>
                    <span className="text-[10px] font-normal opacity-90">₦{product.price.toLocaleString()} Buy Now</span>
                 </button>
               </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 flex items-center gap-2"><span className="w-1.5 h-6 bg-nm-green rounded-full block"></span> Product Specifications</h3>
            <div className="grid grid-cols-2 gap-y-4 text-sm">
                <div><p className="text-xs text-nm-grey-500 uppercase font-bold tracking-wider mb-1">Weight</p><p className="font-medium">25kg Bulk Sack</p></div>
                <div><p className="text-xs text-nm-grey-500 uppercase font-bold tracking-wider mb-1">Origin</p><p className="font-medium">Green Valley Farms</p></div>
                <div><p className="text-xs text-nm-grey-500 uppercase font-bold tracking-wider mb-1">Stock Levels</p><p className="font-medium">12 Units Available</p></div>
                <div><p className="text-xs text-nm-grey-500 uppercase font-bold tracking-wider mb-1">Harvest Date</p><p className="font-medium">Sept 2023</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
