"use client";
import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaWallet, FaArrowUp, FaArrowDown } from "react-icons/fa";

export function BuyerDashboardHeader() {
  const [showBalance, setShowBalance] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("netmarket_show_balance");
    if (saved !== null) {
      setShowBalance(saved === "true");
    }
  }, []);

  const toggleBalance = () => {
    const newVal = !showBalance;
    setShowBalance(newVal);
    localStorage.setItem("netmarket_show_balance", String(newVal));
  };

  return (
    <div className="bg-nm-green rounded-3xl p-6 md:p-8 text-nm-white relative overflow-hidden shadow-lg mb-8">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-nm-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-nm-gold opacity-10 rounded-full translate-y-1/3 -translate-x-1/3"></div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
          <p className="text-sm text-nm-green-light">
            Discover fresh and affordable local produce today.
          </p>
        </div>

        <div className="bg-nm-white/10 backdrop-blur-md rounded-2xl p-5 border border-nm-white/20 min-w-[280px]">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2 text-nm-green-light">
              <FaWallet size={14} />
              <span className="text-xs font-bold uppercase tracking-wider">Account Balance</span>
            </div>
            <button 
              onClick={toggleBalance} 
              className="text-nm-green-light hover:text-nm-white transition-colors"
            >
              {showBalance ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
            </button>
          </div>
          
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-bold">
              {showBalance ? "₦45,200.00" : "••••••••"}
            </span>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-nm-gold text-nm-black font-bold py-2 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-opacity-90 transition">
              <FaArrowDown size={12} /> Deposit
            </button>
            <button className="flex-1 bg-nm-white/20 text-nm-white font-bold py-2 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-white/30 transition">
              <FaArrowUp size={12} /> Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
