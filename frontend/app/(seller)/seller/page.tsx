
import { mockVendorStats } from '@/lib/mock-data';
import { FaCheckCircle, FaPlus, FaTag, FaCalendarAlt, FaTruck, FaStar } from 'react-icons/fa';

export default function SellerDashboard() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between bg-nm-white p-6 rounded-3xl shadow-sm border border-nm-grey-100">
         <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-nm-green text-nm-white rounded-full flex items-center justify-center text-xl font-bold shadow-md relative">
               MF
               <FaCheckCircle className="absolute -bottom-1 -right-1 text-nm-green bg-nm-white rounded-full border-2 border-nm-white" size={24}/>
            </div>
            <div>
               <h1 className="text-2xl font-bold text-nm-black">{mockVendorStats.name}</h1>
               <p className="text-sm text-nm-grey-500 font-medium">⭐ {mockVendorStats.rating} ({mockVendorStats.reviews} Reviews) • <span className="text-nm-green bg-nm-green-light px-2 py-0.5 rounded text-xs">VERIFIED SELLER</span></p>
            </div>
         </div>
         <div className="hidden sm:flex gap-3">
            <button className="px-4 py-2 bg-nm-grey-100 font-bold text-sm rounded-xl hover:bg-nm-grey-200">View Public Store</button>
            <button className="px-4 py-2 bg-nm-green text-nm-white font-bold text-sm rounded-xl hover:bg-nm-green/90">Edit Profile</button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         <div className="bg-nm-white p-6 rounded-3xl shadow-sm border border-nm-grey-100">
            <p className="text-xs font-bold text-nm-grey-400 uppercase tracking-wider mb-2">Total Sales Today</p>
            <p className="text-3xl font-bold text-nm-green mb-2">₦{mockVendorStats.totalSales.toLocaleString()}</p>
            <p className="text-xs font-bold text-nm-green flex items-center gap-1">↗ +12% from yesterday</p>
         </div>
         <div className="bg-nm-white p-6 rounded-3xl shadow-sm border border-nm-grey-100">
            <p className="text-xs font-bold text-nm-grey-400 uppercase tracking-wider mb-2">Active Orders</p>
            <p className="text-3xl font-bold text-nm-black mb-2">{mockVendorStats.activeOrders}</p>
            <p className="text-xs font-bold text-nm-gold-dark flex items-center gap-1">• 4 orders pending pick-up</p>
         </div>
         <div className="bg-nm-white p-6 rounded-3xl shadow-sm border border-nm-grey-100 border-l-4 border-l-red-500">
            <p className="text-xs font-bold text-nm-grey-400 uppercase tracking-wider mb-2">New Messages</p>
            <p className="text-3xl font-bold text-nm-black mb-2">0{mockVendorStats.newMessages}</p>
            <p className="text-xs font-bold text-red-500 flex items-center gap-1">Requires response</p>
         </div>
      </div>

      <div>
         <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button className="flex items-center justify-center gap-2 bg-nm-green-light py-4 rounded-2xl font-bold text-sm text-nm-green hover:bg-nm-green hover:text-nm-white transition-colors">
               <FaPlus /> Add New Listing
            </button>
            <button className="flex items-center justify-center gap-2 bg-orange-100 py-4 rounded-2xl font-bold text-sm text-orange-800 hover:bg-orange-200 transition-colors">
               <FaTag /> Update Prices
            </button>
            <button className="flex items-center justify-center gap-2 bg-nm-gold py-4 rounded-2xl font-bold text-sm text-nm-black hover:bg-opacity-90 transition-colors">
               <FaCalendarAlt /> Mark as Market Day
            </button>
         </div>
      </div>

      <div>
         <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">My Active Listings</h2>
            <button className="text-nm-green text-sm font-bold hover:underline">See all 24 items</button>
         </div>
         <div className="space-y-4">
            {/* Mock listing rows */}
            {[
              {n: "Organic Heirloom Carrots", s: "45 lbs", p: "450/lb", t: "Trending"},
              {n: "Wild Garden Strawberries", s: "12 pints", p: "600/pt", t: "Low Stock", r: true}
            ].map(l => (
               <div key={l.n} className="bg-nm-white p-4 rounded-2xl shadow-sm border border-nm-grey-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="w-16 h-16 bg-nm-grey-200 rounded-xl overflow-hidden shrink-0">
                        {/* placeholder color block */}
                     </div>
                     <div>
                        <h3 className="font-bold text-nm-black text-sm lg:text-base">{l.n}</h3>
                        <p className="text-xs text-nm-grey-500 mb-1">Stock: <span className={l.r ? 'text-red-500 font-bold' : 'text-nm-green font-bold'}>{l.s}</span></p>
                        <div className="flex items-center gap-2">
                           <span className="font-bold">₦{l.p}</span>
                           <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${l.r ? 'bg-red-50 text-red-600' : 'bg-nm-green-light text-nm-green'}`}>{l.t}</span>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col items-end gap-3 border-l border-nm-grey-100 pl-4">
                     <div className="w-10 h-5 bg-nm-green rounded-full relative shadow-inner cursor-pointer"><div className="w-4 h-4 bg-nm-white rounded-full absolute right-0.5 top-0.5 shadow"></div></div>
                     <button className="text-nm-grey-400 hover:text-nm-black"><FaTag/></button>
                  </div>
               </div>
            ))}
         </div>
      </div>
      
      <div>
         <h2 className="text-xl font-bold mb-4">Updates</h2>
         <div className="space-y-4">
            <div className="flex gap-4">
               <div className="w-10 h-10 rounded-full bg-nm-green-light text-nm-green flex items-center justify-center shrink-0"><FaTruck/></div>
               <div className="border-b border-nm-grey-200 pb-4 flex-1">
                  <p className="text-sm font-bold">Delivery Update</p>
                  <p className="text-xs text-nm-grey-500 mt-1">Order #8821 has been delivered to customer.</p>
                  <p className="text-[10px] text-nm-grey-400 mt-2 uppercase font-bold">2 mins ago</p>
               </div>
            </div>
            <div className="flex gap-4">
               <div className="w-10 h-10 rounded-full bg-nm-gold text-nm-white flex items-center justify-center shrink-0"><FaTag/></div>
               <div className="border-b border-nm-grey-200 pb-4 flex-1">
                  <p className="text-sm font-bold">New Bulk Bid</p>
                  <p className="text-xs text-nm-grey-500 mt-1">Restaurant "The Green Fork" bid ₦20,000 for 50lbs Carrots.</p>
                  <p className="text-[10px] text-nm-grey-400 mt-2 uppercase font-bold">45 mins ago</p>
               </div>
            </div>
            <div className="flex gap-4">
               <div className="w-10 h-10 rounded-full bg-orange-200 text-orange-600 flex items-center justify-center shrink-0"><FaStar/></div>
               <div className="pb-2 flex-1">
                  <p className="text-sm font-bold">New 5-Star Review</p>
                  <p className="text-xs text-nm-grey-500 mt-1">"Best strawberries in the county!" - Sarah J.</p>
                  <p className="text-[10px] text-nm-grey-400 mt-2 uppercase font-bold">2 hours ago</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
