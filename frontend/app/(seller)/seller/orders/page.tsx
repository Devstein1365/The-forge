"use client";
import { useState } from "react";
import { FaBox, FaTruck, FaCheckCircle, FaUser, FaEllipsisV, FaPrint, FaSearch, FaFilter } from "react-icons/fa";

export default function SellerOrders() {
  const [activeTab, setActiveTab] = useState<"pending" | "shipped" | "completed">("pending");

  const orders = [
    {
      id: "ORD-9910",
      customer: "Sarah J.",
      items: "5x Organic Tomatoes, 2x Sweet Corn",
      total: 12500,
      status: "Pending Pack",
      date: "Today, 10:45 AM",
      category: "pending"
    },
    {
      id: "ORD-9908",
      customer: "Kano Resto Hub",
      items: "50kg Premium Yams",
      total: 82000,
      status: "Awaiting Rider",
      date: "Today, 08:30 AM",
      category: "pending"
    },
    {
      id: "ORD-9884",
      customer: "Michael A.",
      items: "12x Organic Strawberries",
      total: 18000,
      status: "In Transit",
      date: "Yesterday",
      category: "shipped"
    }
  ];

  const filteredOrders = orders.filter(o => o.category === activeTab);

  return (
    <div className="max-w-5xl mx-auto pb-12 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-nm-black tracking-tight mb-1">Order Management</h1>
          <p className="text-sm text-nm-grey-500 font-medium">Process, dispatch, and track your customer orders.</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-4 py-2 bg-nm-white border border-nm-grey-200 rounded-xl text-sm font-bold text-nm-black hover:bg-nm-grey-50 transition-colors shadow-sm">
              <FaPrint size={14} className="text-nm-grey-400" /> Export CSV
           </button>
        </div>
      </div>

      {/* Tabs & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-nm-white p-2 rounded-2xl shadow-sm border border-nm-grey-200/60 sticky top-0 z-10 md:static">
        <div className="flex p-1 bg-nm-bg rounded-xl">
          {["pending", "shipped", "completed"].map((tab) => (
             <button 
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg text-sm font-bold capitalize transition-all ${activeTab === tab ? "bg-nm-white text-nm-black shadow-sm border border-nm-grey-200/50" : "text-nm-grey-500 hover:text-nm-black"}`}
              >
                {tab}
                {tab === "pending" && <span className="ml-2 bg-nm-gold text-nm-black px-1.5 py-0.5 rounded text-[10px]">2</span>}
             </button>
          ))}
        </div>
        
        <div className="flex items-center gap-2 px-2 md:px-0">
           <div className="relative flex-1 md:w-64">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-nm-grey-400" size={14} />
              <input type="text" placeholder="Search order ID or name..." className="w-full pl-9 pr-4 py-2.5 bg-nm-bg border border-transparent focus:border-nm-green/30 focus:bg-nm-white rounded-xl text-sm font-medium outline-none transition-all" />
           </div>
           <button className="w-10 h-10 bg-nm-bg rounded-xl flex items-center justify-center text-nm-grey-500 hover:text-nm-black hover:bg-nm-grey-200 transition-colors shrink-0">
              <FaFilter size={14} />
           </button>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.length === 0 ? (
          <div className="bg-nm-white border border-nm-grey-200/60 border-dashed rounded-[2rem] p-12 text-center flex flex-col items-center">
             <div className="w-20 h-20 bg-nm-grey-50 rounded-full flex items-center justify-center text-nm-grey-300 mb-4">
                <FaBox size={32} />
             </div>
             <h3 className="text-lg font-bold text-nm-black mb-1">No {activeTab} orders</h3>
             <p className="text-nm-grey-500 text-sm">You're all caught up for now!</p>
          </div>
        ) : (
          filteredOrders.map(order => (
            <div key={order.id} className="bg-nm-white border border-nm-grey-200/60 rounded-[1.5rem] p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row gap-5 md:items-center">
               <div className="flex items-center gap-4 md:w-1/4 shrink-0">
                  <div className="w-12 h-12 bg-nm-bg rounded-2xl flex items-center justify-center text-nm-black border border-nm-grey-200 shrink-0 shadow-inner">
                     <FaUser size={18} className="opacity-50" />
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-nm-grey-400 uppercase tracking-widest">{order.id}</p>
                     <p className="font-bold text-nm-black text-sm md:text-base leading-tight mt-0.5">{order.customer}</p>
                  </div>
               </div>

               <div className="md:w-2/5 md:border-l md:border-r border-nm-grey-100 md:px-6">
                  <p className="text-xs font-bold text-nm-grey-500 uppercase tracking-wider mb-1">Order Items</p>
                  <p className="text-sm font-bold text-nm-black line-clamp-2">{order.items}</p>
               </div>

               <div className="flex items-center justify-between md:flex-1 md:pl-2">
                  <div>
                     <p className="text-xs font-bold text-nm-grey-500 uppercase tracking-wider mb-1">Total & Status</p>
                     <p className="text-lg font-black text-nm-black leading-none mb-1.5">₦{order.total.toLocaleString()}</p>
                     <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg uppercase tracking-wide border ${
                        order.category === 'pending' ? 'bg-orange-50 text-orange-600 border-orange-100' : 
                        order.category === 'shipped' ? 'bg-blue-50 text-blue-600 border-blue-100' : 
                        'bg-nm-green-light/50 text-nm-green border-nm-green/20'
                     }`}>
                        {order.status}
                     </span>
                  </div>

                  <div className="flex items-center gap-2">
                     {order.category === 'pending' && (
                        <button className="bg-nm-black text-nm-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-nm-grey-600 shadow-md transition-colors">
                           Process
                        </button>
                     )}
                     <button className="w-10 h-10 rounded-xl border border-nm-grey-200 flex items-center justify-center text-nm-grey-400 hover:bg-nm-bg hover:text-nm-black transition-colors">
                        <FaEllipsisV size={14} />
                     </button>
                  </div>
               </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
