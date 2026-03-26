"use client";
import { FaChevronLeft, FaPhoneAlt, FaEllipsisV, FaShieldAlt, FaPaperPlane, FaImage } from 'react-icons/fa';
import Link from 'next/link';

export default function ChatPage() {
  return (
    <div className="max-w-4xl mx-auto h-[85vh] md:h-[calc(100vh-120px)] flex flex-col bg-nm-white md:bg-nm-bg md:rounded-3xl md:border border-nm-grey-200 overflow-hidden md:shadow-lg relative">
      {/* Header */}
      <div className="bg-nm-white p-4 border-b border-nm-grey-200 flex items-center justify-between z-10 sticky top-0 shadow-sm relative">
        <div className="flex items-center gap-4">
          <Link href="/orders" className="text-nm-grey-500 hover:text-nm-black transition-colors p-2 bg-nm-grey-50 rounded-full">
            <FaChevronLeft size={14} />
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-nm-green/20 relative shadow-sm">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" alt="Vendor" className="w-full h-full object-cover rounded-full" />
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-nm-white rounded-full"></div>
            </div>
            <div>
               <h3 className="font-bold text-nm-black flex items-center gap-1.5 text-base">
                 Arthur Reed <FaShieldAlt className="text-nm-green" size={14} title="Verified Vendor"/>
               </h3>
               <p className="text-[11px] text-nm-grey-500 font-medium">⭐ 4.9 (124 reviews) &bull; Typically replies in 5m</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button className="w-10 h-10 rounded-full flex items-center justify-center text-nm-green bg-nm-green-light/40 hover:bg-nm-green hover:text-nm-white transition-colors">
              <FaPhoneAlt size={14} />
           </button>
           <button className="w-10 h-10 rounded-full flex items-center justify-center text-nm-grey-500 hover:bg-nm-grey-100 transition-colors">
              <FaEllipsisV size={14} />
           </button>
        </div>
      </div>

      {/* Negotiation Banner */}
      <div className="bg-nm-grey-50 border-b border-nm-grey-200 p-4 md:px-6 flex justify-between items-center sm:hidden md:flex">
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-nm-grey-200 rounded-lg overflow-hidden shrink-0 border border-nm-grey-300">
               <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=100" alt="Product" className="w-full h-full object-cover" />
            </div>
            <div>
               <p className="text-[10px] text-nm-green font-bold tracking-widest uppercase mb-0.5">Negotiating For:</p>
               <p className="text-sm font-bold text-nm-black">25kg Long Grain Rice</p>
            </div>
         </div>
         <div className="text-right flex flex-col justify-center">
            <p className="text-[10px] text-nm-grey-500 font-bold uppercase tracking-wider">Market Price</p>
            <p className="font-black text-nm-black text-lg">₦18,500</p>
         </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar bg-nm-white md:bg-transparent">
         {/* System Message */}
         <div className="flex justify-center my-2">
            <span className="bg-nm-green-light/40 border border-nm-green/20 text-nm-green-dark text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-2 shadow-sm">
               <FaShieldAlt /> End-to-End Order Protection Active
            </span>
         </div>

         <div className="flex gap-4 max-w-[90%] md:max-w-[75%]">
            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 shadow-sm mt-auto mb-1">
               <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" alt="Arthur" />
            </div>
            <div className="bg-nm-grey-100 text-nm-black p-4 rounded-3xl rounded-bl-sm text-sm border border-nm-grey-200 shadow-sm">
               Good morning! I saw your interest in the Long Grain Rice. This batch is freshly harvested from the valley. How many units were you looking for?
               <p className="text-[10px] text-nm-grey-400 mt-2 text-right font-medium">10:41 AM</p>
            </div>
         </div>

         <div className="flex justify-end gap-3 max-w-[90%] md:max-w-[75%] ml-auto">
            <div className="bg-nm-green text-nm-white p-4 rounded-3xl rounded-br-sm text-sm shadow-sm">
               Hi Arthur, just one 25kg bag for now. Would you consider ₦17,000? I'm a regular buyer from the local market.
               <p className="text-[10px] text-nm-white/70 mt-2 text-right font-medium">10:45 AM</p>
            </div>
         </div>

         {/* Interactive Offer Node */}
         <div className="flex gap-4 max-w-[95%] md:max-w-[80%]">
            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 shadow-sm mt-auto mb-1">
               <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80" alt="Arthur" />
            </div>
            <div className="bg-nm-white border border-nm-gold/40 p-5 rounded-3xl rounded-bl-sm text-sm block shadow-md flex-1">
               <div className="flex items-center justify-between mb-3 border-b border-nm-grey-100 pb-3">
                 <div className="flex items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-nm-gold-light/50 flex items-center justify-center text-nm-gold-dark">
                     <FaShieldAlt size={14} />
                   </div>
                   <span className="text-sm font-black text-nm-black tracking-wide">COUNTER OFFER</span>
                 </div>
                 <span className="text-xl font-black text-nm-black">₦17,500</span>
               </div>
               <p className="mb-5 text-nm-grey-600 leading-relaxed font-medium">I can't go quite that low due to shipping costs, but I can do ₦17,500 as a special price for you.</p>
               <div className="flex gap-3 mt-4">
                 <button className="flex-[2] bg-nm-gold hover:bg-opacity-90 text-nm-black shadow-sm font-bold py-3 rounded-xl transition-all active:scale-[0.98]">
                    Accept & Pay
                 </button>
                 <button className="flex-1 bg-nm-grey-100 hover:bg-nm-grey-200 text-nm-grey-600 font-bold py-3 rounded-xl transition-colors">
                    Decline
                 </button>
               </div>
               <p className="text-[10px] text-nm-grey-400 mt-3 text-right font-medium">10:52 AM</p>
            </div>
         </div>
      </div>

      {/* Input */}
      <div className="p-4 md:p-6 bg-nm-white border-t border-nm-grey-200 sticky bottom-0 z-10 w-full">
         <div className="bg-nm-grey-50 border border-nm-grey-200 rounded-2xl flex items-end p-2 focus-within:ring-2 focus-within:ring-nm-green/20 transition-all shadow-inner">
            <button className="p-3 text-nm-grey-400 hover:text-nm-green transition-colors disabled:opacity-50 shrink-0">
               <FaImage size={20} />
            </button>
            <textarea 
               placeholder="Write your message here..." 
               className="flex-1 bg-transparent border-none focus:outline-none text-sm p-3 resize-none max-h-32 min-h-[44px] custom-scrollbar text-nm-black font-medium" 
               rows={1}
               onChange={(e) => {
                 e.target.style.height = 'auto';
                 e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
               }}
            />
            <button className="w-10 h-10 m-1 bg-nm-green text-nm-white rounded-xl flex items-center justify-center shrink-0 hover:bg-opacity-90 transition-transform active:scale-95 shadow-sm">
               <FaPaperPlane size={14} className="-ml-0.5" />
            </button>
         </div>
      </div>
    </div>
  );
}
