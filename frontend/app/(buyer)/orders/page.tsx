"use client";
import { useState } from "react";
import {
  FaBox,
  FaTruck,
  FaCheckCircle,
  FaStore,
  FaChevronRight,
  FaRedo
} from "react-icons/fa";
import Link from "next/link";

export default function BuyerOrders() {
  const [activeTab, setActiveTab] = useState<"active" | "past">("active");

  const activeOrders = [
    {
      id: "ORD-8821",
      vendor: "Mama Ebube's Grains",
      items: "25kg Long Grain Rice",
      total: 17500,
      status: "Out for Delivery",
      date: "Today, 09:30 AM",
      icon: FaTruck,
      color: "text-orange-500",
      bg: "bg-orange-100",
    },
    {
      id: "ORD-8822",
      vendor: "Green Valley Farms",
      items: "10kg Fresh Tomatoes",
      total: 4200,
      status: "Processing",
      date: "Today, 10:15 AM",
      icon: FaBox,
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
  ];

  const pastOrders = [
    {
      id: "ORD-8710",
      vendor: "Abuja Tubers",
      items: "50kg Premium Yams",
      total: 32000,
      status: "Delivered",
      date: "Oct 12, 2023",
      icon: FaCheckCircle,
      color: "text-nm-green",
      bg: "bg-nm-green-light",
    },
    {
      id: "ORD-8605",
      vendor: "Mama Ebube's Grains",
      items: "10L Groundnut Oil",
      total: 11000,
      status: "Delivered",
      date: "Oct 05, 2023",
      icon: FaCheckCircle,
      color: "text-nm-green",
      bg: "bg-nm-green-light",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-black text-nm-black mb-2 tracking-tight">My Orders</h1>    
        <p className="text-sm text-nm-grey-500">
          Track your current deliveries and view past purchases.
        </p>
      </div>

      <div className="flex gap-6 border-b border-nm-grey-200">
        <button 
          onClick={() => setActiveTab("active")}
          className={`pb-3 font-bold text-sm px-2 transition-all relative ${activeTab === "active" ? "text-nm-green" : "text-nm-grey-400 hover:text-nm-grey-600"}`}
        >
          Active Orders ({activeOrders.length})
          {activeTab === "active" && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-nm-green rounded-t-full"></span>
          )}
        </button>
        <button 
          onClick={() => setActiveTab("past")}
          className={`pb-3 font-bold text-sm px-2 transition-all relative ${activeTab === "past" ? "text-nm-black" : "text-nm-grey-400 hover:text-nm-grey-600"}`}
        >
          Past Orders
          {activeTab === "past" && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-nm-black rounded-t-full"></span>
          )}
        </button>
      </div>

      <div className="space-y-6">
        {activeTab === "active" && (
          <>
            {activeOrders.map((order) => (
              <div
                key={order.id}
                className="bg-nm-white border border-nm-grey-200/60 rounded-3xl p-5 md:p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-5">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${order.bg} ${order.color} shadow-sm`}
                    >
                      <order.icon size={24} />
                    </div>
                    <div>
                      <p className="text-base font-bold text-nm-black mb-1">
                        {order.status}
                      </p>
                      <p className="text-xs font-semibold text-nm-grey-500">
                        Est. Delivery: <span className="text-nm-black">{order.date}</span>
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-nm-black">
                      ₦{order.total.toLocaleString()}
                    </p>
                    <p className="text-[11px] font-bold text-nm-grey-400 uppercase tracking-widest mt-1">
                      {order.id}
                    </p>
                  </div>
                </div>

                <div className="bg-nm-grey-50 rounded-2xl p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4 border border-nm-grey-200/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-nm-white rounded-xl flex items-center justify-center text-nm-grey-400 border border-nm-grey-200 shadow-sm shrink-0">
                      <FaStore size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-nm-black mb-0.5">
                        {order.items}
                      </p>
                      <p className="text-xs text-nm-grey-500 font-medium">
                        Seller: <span className="text-nm-grey-600">{order.vendor}</span>
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`/chat`}
                    className="group w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-nm-white border border-nm-grey-200 shadow-sm text-sm font-bold text-nm-green hover:bg-nm-green hover:text-nm-white hover:border-nm-green transition-all"
                  >
                    Contact Seller
                    <FaChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </>
        )}

        {activeTab === "past" && (
          <div className="space-y-4">
            {pastOrders.map((order) => (
              <div
                key={order.id}
                className="bg-nm-white border border-nm-grey-200/60 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-5 opacity-90 hover:opacity-100"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${order.bg} ${order.color}`}
                  >
                    <order.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-nm-black mb-1">{order.items}</p>
                    <p className="text-xs font-medium text-nm-grey-500">
                      Sold by {order.vendor} &bull; Delivered {order.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 border-nm-grey-100 pt-4 md:pt-0">
                  <p className="text-base font-black text-nm-black">
                    ₦{order.total.toLocaleString()}
                  </p>
                  <button className="flex items-center gap-2 text-xs font-bold text-nm-green bg-nm-green-light/40 px-4 py-2.5 rounded-xl hover:bg-nm-green hover:text-nm-white transition-colors border border-nm-green-light">
                    <FaRedo size={10} />
                    Reorder
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
