
import { FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";

export default function MapPage() {
  return (
    <div className="h-full flex flex-col pt-4">
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-2xl font-bold text-nm-black">Nearby Vendors</h2>
        <button className="bg-nm-white p-2 rounded-full shadow text-nm-green"><FaLocationArrow size={16} /></button>
      </div>
      
      <div className="flex-1 relative bg-nm-grey-200 rounded-3xl overflow-hidden shadow-sm border border-nm-grey-300 border-2">
        {/* Mock Map Background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(var(--color-nm-green) 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
        
        {/* Mock Markers */}
        <div className="absolute top-1/3 left-1/3 text-nm-green animate-bounce"><FaMapMarkerAlt size={40} className="drop-shadow-lg" /></div>
        <div className="absolute top-1/2 right-1/4 text-nm-gold"><FaMapMarkerAlt size={32} /></div>
        <div className="absolute bottom-1/4 left-1/2 text-nm-grey-600"><FaMapMarkerAlt size={28} /></div>
        
        {/* Overlay Card on Map */}
        <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 bg-nm-white p-4 rounded-2xl shadow-lg border border-nm-grey-100">
           <div className="flex justify-between items-start mb-2">
              <div>
                 <span className="text-xs font-bold text-nm-gold bg-nm-gold-light px-2 py-0.5 rounded uppercase">Market Day</span>
                 <h3 className="font-bold text-lg text-nm-black mt-1">Mama Ebube's Grains</h3>
                 <p className="text-xs text-nm-grey-500">0.5km away • ⭐ 4.8</p>
              </div>
              <div className="w-10 h-10 bg-nm-green-light text-nm-green rounded-full flex items-center justify-center">
                 <FaLocationArrow size={14} />
              </div>
           </div>
           <button className="w-full mt-3 bg-nm-green text-nm-white py-2 rounded-xl text-sm font-semibold hover:bg-nm-green/90">
             View Full Marketplace
           </button>
        </div>
      </div>
    </div>
  );
}
