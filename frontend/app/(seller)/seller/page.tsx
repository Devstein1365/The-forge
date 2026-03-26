"use client";
import { useState, useEffect } from "react";
import { mockVendorStats } from '@/lib/mock-data';
import { FaCheckCircle, FaPlus, FaTag, FaCalendarAlt, FaTruck, FaStar, FaEye, FaEyeSlash, FaArrowUp, FaChartLine } from 'react-icons/fa';

export default function SellerDashboard() {
  const [showBalance, setShowBalance] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("netmarket_seller_show_balance");
    if (saved !== null) {
      setShowBalance(saved === "true");
    }
  }, []);

  const toggleBalance = () => {
    const newVal = !showBalance;
    setShowBalance(newVal);
    localStorage.setItem("netmarket_seller_show_balance", String(newVal));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      
      {/* Seller Identity / Hero */}
      <div className="flex flex-col md:flex-row md:items-center justify-between bg-nm-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-nm-grey-200/60 gap-6">
         <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="w-20 h-20 bg-nm-green text-nm-white rounded-3xl flex items-center justify-center text-3xl font-black shadow-lg relative shadow-nm-green/20 shrink-0">
               {mockVendorStats.name.substring(0,2).toUpperCase()}
               <FaCheckCircle className="absolute -bottom-2 -right-2 text-nm-green bg-nm-white rounded-full border-2 border-nm-white" size={28}/>
            </div>
            <div>
               <h1 className="text-3xl font-black text-nm-black mb-1.5">{mockVendorStats.name}</h1>
               <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm text-nm-grey-500 font-bold flex items-center gap-1">
                     <FaStar className="text-nm-gold" size={14} /> {mockVendorStats.rating} ({mockVendorStats.reviews} Reviews)
                  </p>
                  <span className="text-nm-grey-300">•</span>
                  <span className="text-nm-green-dark bg-nm-green-light px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide uppercase border border-nm-green/20">
                     Verified Verified
                  </span>
               </div>
            </div>
         </div>
         <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-6 py-3 bg-nm-bg font-bold text-sm rounded-2xl hover:bg-nm-grey-200 transition-colors border border-nm-grey-200">
              View Store
            </button>
            <button className="flex-1 md:flex-none px-6 py-3 bg-nm-green text-nm-white font-bold text-sm rounded-2xl hover:bg-opacity-90 transition-all shadow-md shadow-nm-green/20 active:scale-95">
              Edit Profile
            </button>
         </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
         {/* Balance Card */}
         <div className="bg-nm-black p-6 md:p-8 rounded-[2rem] shadow-xl border border-nm-black relative overflow-hidden text-nm-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-nm-green rounded-bl-full opacity-20" />
            <div className="relative z-10 flex justify-between items-start mb-4">
              <p className="text-xs font-bold text-nm-grey-400 uppercase tracking-widest flex items-center gap-2">
                 Total Revenue Today
              </p>
              <button onClick={toggleBalance} className="text-nm-grey-400 hover:text-nm-white transition-colors">
                {showBalance ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
            <p className="text-4xl md:text-5xl font-black text-nm-white mb-4 relative z-10">
               {showBalance ? `₦${mockVendorStats.totalSales.toLocaleString()}` : "••••••••"}
            </p>
            <div className="relative z-10 inline-flex items-center gap-1.5 bg-nm-white/10 px-3 py-1.5 rounded-xl text-xs font-bold text-nm-white backdrop-blur-sm border border-nm-white/10">
               <FaChartLine className="text-nm-green-light" /> +12.5% vs Yesterday
            </div>
         </div>

         <div className="bg-nm-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-nm-grey-200/60 flex flex-col justify-between">
            <div>
               <p className="text-xs font-bold text-nm-grey-400 uppercase tracking-widest mb-1.5">Active Orders</p>
               <p className="text-4xl md:text-5xl font-black text-nm-black tracking-tight">{mockVendorStats.activeOrders}</p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-nm-gold-dark bg-nm-gold-light/40 w-fit px-3 py-1.5 rounded-xl border border-nm-gold-light">
               <span className="w-2 h-2 rounded-full bg-nm-gold animate-pulse"></span>
               4 orders pending dispatch
            </div>
         </div>

         <div className="bg-nm-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-nm-grey-200/60 sm:col-span-2 lg:col-span-1 border-l-4 border-l-red-500 flex flex-col justify-between">
            <div>
               <p className="text-xs font-bold text-nm-grey-400 uppercase tracking-widest mb-1.5">Unread Messages</p>
               <p className="text-4xl md:text-5xl font-black text-nm-black tracking-tight">0{mockVendorStats.newMessages}</p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-red-600 bg-red-50 w-fit px-3 py-1.5 rounded-xl border border-red-100">
               <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
               Requires your response
            </div>
         </div>
      </div>

      {/* Actions */}
      <div>
         <div className="flex justify-between items-end mb-5">
            <h2 className="text-xl font-black text-nm-black tracking-tight">Quick Actions</h2>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <button className="flex flex-col items-center justify-center gap-3 bg-nm-green text-nm-white p-5 rounded-3xl font-bold text-sm shadow-md hover:scale-[1.02] hover:bg-opacity-90 transition-all">
               <div className="w-12 h-12 bg-nm-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"><FaPlus size={20}/></div>
               Add Listing
            </button>
            <button className="flex flex-col items-center justify-center gap-3 bg-nm-white border border-nm-grey-200 text-nm-black p-5 rounded-3xl font-bold text-sm shadow-sm hover:border-nm-gold hover:scale-[1.02] transition-all">
               <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center"><FaTag size={20}/></div>
               Run Discount
            </button>
            <button className="flex flex-col items-center justify-center gap-3 bg-nm-white border border-nm-grey-200 text-nm-black p-5 rounded-3xl font-bold text-sm shadow-sm hover:border-nm-green hover:scale-[1.02] transition-all">
               <div className="w-12 h-12 bg-nm-green-light/40 text-nm-green rounded-full flex items-center justify-center"><FaCalendarAlt size={20}/></div>
               Market Calendar
            </button>
             <button className="flex flex-col items-center justify-center gap-3 bg-nm-white border border-nm-grey-200 text-nm-black p-5 rounded-3xl font-bold text-sm shadow-sm hover:border-nm-black hover:scale-[1.02] transition-all">
               <div className="w-12 h-12 bg-nm-grey-100 text-nm-black rounded-full flex items-center justify-center"><FaArrowUp size={20}/></div>
               Withdraw
            </button>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* Listings */}
         <div>
            <div className="flex justify-between items-center mb-5">
               <h2 className="text-xl font-black text-nm-black tracking-tight">Top Listings</h2>
               <button className="text-nm-green text-sm font-bold hover:underline">View All (24)</button>
            </div>
            <div className="space-y-4">
               {[
                 {n: "Organic Heirloom Carrots", s: "45 lbs", p: "450/lb", t: "Trending Spotlight", r: false, img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=100&q=80"},
                 {n: "Wild Garden Strawberries", s: "12 pints", p: "600/pt", t: "Low Stock Alert", r: true, img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=100&q=80"}
               ].map(l => (
                  <div key={l.n} className="bg-nm-white p-4 rounded-[1.5rem] shadow-sm border border-nm-grey-200/60 flex items-center justify-between group hover:border-nm-green/50 transition-colors cursor-pointer">
                     <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-nm-grey-200 rounded-2xl overflow-hidden shrink-0 shadow-inner">
                           <img src={l.img} alt={l.n} className="w-full h-full object-cover" />
                        </div>
                        <div>
                           <h3 className="font-bold text-nm-black text-sm lg:text-base leading-tight mb-1">{l.n}</h3>
                           <p className="text-xs font-bold text-nm-grey-500 mb-1.5 flex items-center gap-1.5">
                              Stock: <span className={l.r ? 'text-red-500' : 'text-nm-green'}>{l.s}</span>
                           </p>
                           <div className="flex items-center gap-2">
                              <span className="font-black text-nm-black">₦{l.p}</span>
                              <span className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${l.r ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-nm-green-light border border-nm-green/20 text-nm-green-dark'}`}>{l.t}</span>
                           </div>
                        </div>
                     </div>
                     <div className="pl-2">
                        <FaChevronRight className="text-nm-grey-300 group-hover:text-nm-green transition-colors" />
                     </div>
                  </div>
               ))}
            </div>
         </div>
         
         {/* Live Updates */}
         <div>
            <div className="flex justify-between items-center mb-5">
               <h2 className="text-xl font-black text-nm-black tracking-tight">Live Event Feed</h2>
            </div>
            <div className="bg-nm-white rounded-[2rem] shadow-sm border border-nm-grey-200/60 p-6 md:p-8 space-y-6">
               <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-nm-green-light text-nm-green flex items-center justify-center shrink-0 border border-nm-green/20"><FaTruck size={20}/></div>
                  <div className="border-b border-nm-grey-100 pb-5 flex-1">
                     <div className="flex justify-between items-start mb-1">
                        <p className="text-sm font-bold text-nm-black">Delivery Confirmed</p>
                        <p className="text-[10px] text-nm-grey-400 uppercase font-bold tracking-wider">2m ago</p>
                     </div>
                     <p className="text-xs text-nm-grey-500 font-medium">Order #8821 has been delivered to customer safely.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-nm-gold text-nm-black flex items-center justify-center shrink-0 border border-nm-gold-dark/20"><FaTag size={20}/></div>
                  <div className="border-b border-nm-grey-100 pb-5 flex-1">
                     <div className="flex justify-between items-start mb-1">
                        <p className="text-sm font-bold text-nm-black">New Bulk Bid Arrived</p>
                        <p className="text-[10px] text-nm-grey-400 uppercase font-bold tracking-wider">45m ago</p>
                     </div>
                     <p className="text-xs text-nm-grey-500 font-medium">Restaurant "The Green Fork" bid <strong className="text-nm-black">₦20,000</strong> for 50lbs Carrots.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center shrink-0 border border-orange-200"><FaStar size={20}/></div>
                  <div className="flex-1">
                     <div className="flex justify-between items-start mb-1">
                        <p className="text-sm font-bold text-nm-black">New 5-Star Review</p>
                        <p className="text-[10px] text-nm-grey-400 uppercase font-bold tracking-wider">2h ago</p>
                     </div>
                     <p className="text-xs text-nm-grey-600 italic">"Best strawberries in the county!" - Sarah J.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
