
import { FaChevronLeft, FaPhoneAlt, FaEllipsisV, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function ChatPage() {
  return (
    <div className="max-w-2xl mx-auto h-[80vh] flex flex-col bg-nm-bg rounded-3xl border border-nm-grey-200 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-nm-white p-4 border-b border-nm-grey-200 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <Link href="/buyer/product/p1" className="text-nm-green p-2"><FaChevronLeft /></Link>
          <div className="w-10 h-10 rounded-full bg-nm-grey-300 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" alt="Arthur" className="w-full h-full object-cover" />
          </div>
          <div>
             <h3 className="font-bold text-nm-black flex items-center gap-1.5">Arthur Reed <FaShieldAlt className="text-nm-green" size={12}/></h3>
             <p className="text-[10px] text-nm-grey-500">⭐ 4.9 (124 reviews)</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-nm-green">
           <FaPhoneAlt />
           <FaEllipsisV />
        </div>
      </div>
      
      {/* Negotiation Banner */}
      <div className="bg-nm-white border-b border-nm-grey-200 p-4 flex justify-between items-center">
         <div>
            <p className="text-[10px] text-nm-green font-bold tracking-wider uppercase mb-0.5">Negotiating For:</p>
            <p className="text-sm font-bold">25kg Long Grain Rice</p>
         </div>
         <div className="text-right">
            <p className="text-[10px] text-nm-grey-500 font-medium">Market Price</p>
            <p className="font-bold text-nm-black">₦18,500</p>
         </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
         <div className="flex justify-center">
            <span className="bg-nm-green-light/50 text-nm-green text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
               <FaShieldAlt /> Order Protection Active
            </span>
         </div>
         
         <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0"><img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" alt="Arthur" /></div>
            <div className="bg-nm-grey-200 text-nm-black p-3.5 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
               Good morning! I saw your interest in the Long Grain Rice. This batch is freshly harvested from the valley. How many units were you looking for?
            </div>
         </div>
         
         <div className="flex justify-end gap-3">
            <div className="bg-nm-green text-nm-white p-3.5 rounded-2xl rounded-tr-none max-w-[80%] text-sm shadow-sm">
               Hi Arthur, just one 25kg bag for now. Would you consider ₦17,000? I'm a regular buyer from the local market.
            </div>
         </div>
         
         <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0"><img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" alt="Arthur" /></div>
            <div className="bg-nm-grey-200 text-nm-black p-4 rounded-2xl rounded-tl-none max-w-[85%] text-sm block">
               <div className="flex items-center gap-2 mb-2">
                 <FaShieldAlt className="text-nm-gold-dark" size={14} />
                 <span className="text-xs font-bold text-nm-gold-dark tracking-wide">NEW OFFER: ₦17,500</span>
               </div>
               <p className="mb-4">I can't go quite that low due to shipping costs, but I can do ₦17,500 as a special price for you.</p>
               <div className="flex gap-2">
                 <button className="flex-1 bg-nm-gold-dark text-nm-white font-bold py-2 rounded-xl hover:bg-opacity-90">Accept Offer</button>
                 <button className="flex-1 bg-nm-grey-300 text-nm-grey-700 font-bold py-2 rounded-xl hover:bg-nm-grey-400">Decline</button>
               </div>
            </div>
         </div>
      </div>
      
      {/* Input */}
      <div className="p-4 bg-nm-white">
         <div className="bg-nm-grey-100 rounded-full flex items-center px-4 py-2">
            <input type="text" placeholder="Type a message..." className="flex-1 bg-transparent border-none focus:outline-none text-sm p-2" />
            <button className="w-8 h-8 bg-nm-green text-nm-white rounded-full flex items-center justify-center shrink-0">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
            </button>
         </div>
      </div>
    </div>
  );
}
