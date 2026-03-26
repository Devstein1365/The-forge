"use client";
import { FaBox, FaCheckCircle, FaClock, FaTruck } from "react-icons/fa";

export default function SellerOrders() {
  const incomingOrders = [
    {
      id: "ORD-8821",
      customer: "John Doe",
      items: "25kg Long Grain Rice",
      total: 17500,
      time: "2 hours ago",
      status: "Pending Approval",
    },
    {
      id: "ORD-8823",
      customer: "Sarah Smith",
      items: "10kg Fresh Tomatoes",
      total: 4200,
      time: "3 hours ago",
      status: "Pending Approval",
    },
  ];

  const activeOrders = [
    {
      id: "ORD-8810",
      customer: 'Restaurant "The Green Fork"',
      items: "50kg Premium Yams, 20L Groundnut Oil",
      total: 54000,
      status: "Awaiting Pickup",
      type: "Bulk",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto pb-10 space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-nm-black mb-1">
            Order Management
          </h1>
          <p className="text-sm text-nm-grey-500">
            Track incoming requests and fulfillment.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-nm-white border border-nm-grey-200 rounded-xl text-sm font-bold shadow-sm">
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-nm-white p-5 rounded-2xl border border-nm-grey-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center shrink-0">
            <FaClock size={20} />
          </div>
          <div>
            <p className="text-xl font-bold">2</p>
            <p className="text-xs text-nm-grey-500 uppercase font-bold tracking-wider">
              Pending
            </p>
          </div>
        </div>
        <div className="bg-nm-white p-5 rounded-2xl border border-nm-grey-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center shrink-0">
            <FaBox size={20} />
          </div>
          <div>
            <p className="text-xl font-bold">1</p>
            <p className="text-xs text-nm-grey-500 uppercase font-bold tracking-wider">
              To Pack
            </p>
          </div>
        </div>
        <div className="bg-nm-white p-5 rounded-2xl border border-nm-grey-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center shrink-0">
            <FaTruck size={20} />
          </div>
          <div>
            <p className="text-xl font-bold">4</p>
            <p className="text-xs text-nm-grey-500 uppercase font-bold tracking-wider">
              In Transit
            </p>
          </div>
        </div>
        <div className="bg-nm-white p-5 rounded-2xl border border-nm-grey-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-nm-green-light text-nm-green rounded-full flex items-center justify-center shrink-0">
            <FaCheckCircle size={20} />
          </div>
          <div>
            <p className="text-xl font-bold">28</p>
            <p className="text-xs text-nm-grey-500 uppercase font-bold tracking-wider">
              Completed
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4">Action Required (New Orders)</h2>
        <div className="space-y-4">
          {incomingOrders.map((order) => (
            <div
              key={order.id}
              className="bg-nm-white border-l-4 border-l-orange-400 p-5 rounded-2xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-bold text-nm-black">
                    {order.customer}
                  </span>
                  <span className="text-xs text-nm-grey-500">{order.time}</span>
                </div>
                <p className="text-sm text-nm-grey-600 mb-2">{order.items}</p>
                <p className="font-bold text-nm-black">
                  ₦{order.total.toLocaleString()}{" "}
                  <span className="font-normal text-xs text-nm-grey-500 ml-1">
                    Paid via Escrow
                  </span>
                </p>
              </div>
              <div className="flex gap-2">
                <button className="px-5 py-2.5 bg-nm-green text-nm-white text-sm font-bold rounded-xl hover:bg-opacity-90">
                  Accept Order
                </button>
                <button className="px-5 py-2.5 bg-nm-grey-100 text-nm-grey-600 text-sm font-bold rounded-xl hover:bg-nm-grey-200">
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4">Active Fulfillment</h2>
        <div className="bg-nm-white rounded-2xl shadow-sm border border-nm-grey-100 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-nm-bg border-b border-nm-grey-200">
              <tr>
                <th className="p-4 font-bold text-nm-grey-600">Order ID</th>
                <th className="p-4 font-bold text-nm-grey-600">Customer</th>
                <th className="p-4 font-bold text-nm-grey-600">Total</th>
                <th className="p-4 font-bold text-nm-grey-600">Status</th>
                <th className="p-4 font-bold text-nm-grey-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {activeOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-nm-grey-100 last:border-0 hover:bg-nm-bg/50"
                >
                  <td className="p-4 font-medium">{order.id}</td>
                  <td className="p-4">
                    <div>{order.customer}</div>
                    <div className="text-[10px] bg-nm-gold-light text-nm-gold-dark inline-block px-2 py-0.5 rounded font-bold mt-1 uppercase">
                      {order.type}
                    </div>
                  </td>
                  <td className="p-4 font-bold">
                    ₦{order.total.toLocaleString()}
                  </td>
                  <td className="p-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="bg-nm-black text-nm-white px-4 py-1.5 rounded-lg text-xs font-bold">
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
