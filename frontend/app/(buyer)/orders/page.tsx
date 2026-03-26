"use client";
import {
  FaBox,
  FaTruck,
  FaCheckCircle,
  FaStore,
  FaChevronRight,
} from "react-icons/fa";
import Link from "next/link";

export default function BuyerOrders() {
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
    <div className="max-w-4xl mx-auto space-y-6 pb-8">
      <div>
        <h1 className="text-2xl font-bold text-nm-black mb-2">My Orders</h1>
        <p className="text-sm text-nm-grey-500">
          Track your current deliveries and view past purchases.
        </p>
      </div>

      <div className="flex gap-4 border-b border-nm-grey-200">
        <button className="pb-3 border-b-2 border-nm-green text-nm-green font-bold text-sm px-2">
          Active Orders (2)
        </button>
        <button className="pb-3 border-b-2 border-transparent text-nm-grey-500 font-bold text-sm px-2 hover:text-nm-black transition-colors">
          Past Orders
        </button>
      </div>

      <div className="space-y-4">
        {activeOrders.map((order) => (
          <div
            key={order.id}
            className="bg-nm-white border border-nm-grey-200 rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${order.bg} ${order.color}`}
                >
                  <order.icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-nm-black">
                    {order.status}
                  </p>
                  <p className="text-xs text-nm-grey-500">
                    Estimated: {order.date}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold">
                  ₦{order.total.toLocaleString()}
                </p>
                <p className="text-[10px] text-nm-grey-500 uppercase tracking-wider">
                  {order.id}
                </p>
              </div>
            </div>

            <div className="bg-nm-bg rounded-xl p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-nm-grey-200 rounded-lg flex items-center justify-center text-nm-grey-500 border border-nm-grey-300">
                  <FaStore size={16} />
                </div>
                <div>
                  <p className="text-sm font-bold text-nm-black">
                    {order.items}
                  </p>
                  <p className="text-xs text-nm-grey-500">
                    From {order.vendor}
                  </p>
                </div>
              </div>
              <Link
                href={`/chat`}
                className="w-8 h-8 rounded-full bg-nm-white shadow flex items-center justify-center text-nm-green hover:bg-nm-green-light transition-colors"
              >
                <FaChevronRight size={12} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-bold text-nm-black mt-8 mb-4">
        Recent Deliveries
      </h2>
      <div className="space-y-4 opacity-75">
        {pastOrders.map((order) => (
          <div
            key={order.id}
            className="bg-nm-white border border-nm-grey-200 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${order.bg} ${order.color}`}
              >
                <order.icon size={16} />
              </div>
              <div>
                <p className="text-sm font-bold text-nm-black">{order.items}</p>
                <p className="text-xs text-nm-grey-500">
                  {order.vendor} • {order.date}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 border-nm-grey-100 pt-3 md:pt-0">
              <p className="text-sm font-bold">
                ₦{order.total.toLocaleString()}
              </p>
              <button className="text-xs font-bold text-nm-green bg-nm-green-light px-4 py-2 rounded-lg hover:bg-nm-green hover:text-nm-white transition-colors">
                Reorder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
