"use client";
import { FaMapMarkerAlt, FaLocationArrow, FaSearch, FaFilter, FaStar, FaStore, FaDirections } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function MapPage() {
  const [selectedVendor, setSelectedVendor] = useState<string | null>("mama-ebube");

  const vendors = [
    {
      id: "mama-ebube",
      name: "Mama Ebube's Grains",
      type: "Market Day Active",
      distance: "0.5km away",
      rating: 4.8,
      position: "top-1/3 left-1/3",
      color: "text-nm-green",
      size: 44,
      bounce: true
    },
    {
      id: "green-valley",
      name: "Green Valley Farm",
      type: "Organic Produce",
      distance: "2.1km away",
      rating: 4.5,
      position: "top-1/2 right-1/4",
      color: "text-nm-gold",
      size: 32,
      bounce: false
    },
    {
      id: "abuja-tubers",
      name: "Abuja Tubers Hub",
      type: "Wholesale",
      distance: "5.4km away",
      rating: 4.2,
      position: "bottom-1/4 left-[45%]",
      color: "text-nm-grey-600",
      size: 28,
      bounce: false
    }
  ];

  return (
    <div className="h-[calc(100vh-140px)] md:h-[calc(100vh-80px)] flex flex-col relative rounded-3xl overflow-hidden shadow-sm border border-nm-grey-200 bg-nm-grey-100">
      
      {/* Absolute Map Background Imagery Layer */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity grayscale"></div>
      
      {/* Grid Pattern overlay for tech feel */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--color-nm-green) 2px, transparent 2px)", backgroundSize: "40px 40px" }}></div>

      {/* Floating Header UI */}
      <div className="relative z-10 flex flex-col gap-3 p-4 md:p-6 pointer-events-none">
        <div className="flex justify-between items-start">
          <div className="pointer-events-auto w-full max-w-sm">
             <div className="bg-nm-white rounded-2xl shadow-lg border border-nm-grey-200 p-2 flex items-center gap-3">
                <FaSearch className="text-nm-grey-400 ml-3" />
                <input type="text" placeholder="Search areas or vendors..." className="flex-1 bg-transparent border-none focus:outline-none text-sm font-medium text-nm-black py-1 h-8" />
                <button className="w-10 h-10 bg-nm-bg rounded-xl flex items-center justify-center text-nm-black hover:bg-nm-grey-200 transition-colors">
                   <FaFilter size={14} />
                </button>
             </div>
          </div>

          <button className="pointer-events-auto bg-nm-white p-3.5 rounded-full shadow-lg text-nm-green border border-nm-grey-200 hover:bg-nm-green-light transition-colors ml-4 shrink-0">
            <FaLocationArrow size={18} />
          </button>
        </div>
      </div>

      {/* Interactive Map Area Layer */}
      <div className="absolute inset-0 z-0">
        {vendors.map(v => (
          <button 
            key={v.id}
            onClick={() => setSelectedVendor(v.id)}
            className={`absolute ${v.position} transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 active:scale-95 flex flex-col items-center gap-1 z-20 ${v.id === selectedVendor ? 'drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] z-30' : 'drop-shadow-md'} ${v.bounce ? 'animate-bounce hover:animate-none' : ''}`}
          >
             {v.id === selectedVendor && (
               <div className="bg-nm-black text-nm-white text-[10px] font-bold px-2.5 py-1 rounded-lg mb-1 whitespace-nowrap shadow-lg">
                 {v.name}
               </div>
             )}
             <FaMapMarkerAlt size={v.id === selectedVendor ? v.size + 10 : v.size} className={`${v.color} transition-all duration-300`} />
             <div className={`w-4 h-1.5 bg-black/20 rounded-[100%] blur-[2px] mt-1 ${v.id === selectedVendor ? 'w-6 h-2' : ''}`}></div>
          </button>
        ))}
      </div>

      {/* Floating Bottom Info Card */}
      <div className={`absolute bottom-6 left-4 right-4 md:left-auto md:right-6 md:w-[380px] bg-nm-white/95 backdrop-blur-xl p-5 md:p-6 rounded-[2rem] shadow-2xl border border-nm-white z-20 transition-transform duration-500 transform ${selectedVendor ? 'translate-y-0' : 'translate-y-[150%]'}`}>
         {selectedVendor && (() => {
           const vendor = vendors.find(v => v.id === selectedVendor);
           if (!vendor) return null;
           return (
             <>
               <div className="flex justify-between items-start mb-4">
                  <div>
                     <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg ${vendor.color === 'text-nm-green' ? 'bg-nm-green-light text-nm-green' : vendor.color === 'text-nm-gold' ? 'bg-nm-gold-light text-nm-gold-dark' : 'bg-nm-grey-200 text-nm-grey-600'}`}>
                        {vendor.type}
                     </span>
                     <h3 className="font-black text-xl md:text-2xl text-nm-black mt-2 leading-tight">{vendor.name}</h3>
                     <div className="flex items-center gap-3 mt-1.5">
                        <span className="text-xs font-bold text-nm-grey-500 flex items-center gap-1.5"><FaDirections className="text-nm-grey-400"/> {vendor.distance}</span>
                        <span className="text-[10px] text-nm-grey-300">•</span>
                        <span className="text-xs font-bold text-nm-black flex items-center gap-1"><FaStar className="text-nm-gold" size={12}/> {vendor.rating}</span>
                     </div>
                  </div>
                  <div className="w-12 h-12 bg-nm-bg rounded-2xl flex items-center justify-center border border-nm-grey-200 shrink-0 text-nm-green">
                     <FaStore size={20} />
                  </div>
               </div>
               
               <div className="grid grid-cols-2 gap-3 mt-6">
                 <Link href="/" className="bg-nm-green text-nm-white py-3.5 rounded-xl text-sm font-bold text-center shadow-lg shadow-nm-green/20 hover:bg-opacity-90 transition-all active:scale-[0.98]">
                    View Store
                 </Link>
                 <button className="bg-nm-grey-100 text-nm-black py-3.5 rounded-xl text-sm font-bold border border-nm-grey-200 hover:bg-nm-grey-200 transition-all active:scale-[0.98]">
                    Get Directions
                 </button>
               </div>
             </>
           )
         })()}
      </div>
    </div>
  );
}
