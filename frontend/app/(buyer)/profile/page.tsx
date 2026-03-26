"use client";
import {
  FaUserCircle,
  FaMapMarkerAlt,
  FaCreditCard,
  FaBell,
  FaShieldAlt,
  FaQuestionCircle,
  FaSignOutAlt,
  FaChevronRight,
  FaCamera,
  FaStar,
  FaBoxOpen
} from "react-icons/fa";

export default function BuyerProfile() {
  const sections = [
    {
      title: "Account Settings",
      items: [
        {
          label: "Personal Information",
          icon: FaUserCircle,
          value: "John Doe",
        },
        { label: "Delivery Addresses", icon: FaMapMarkerAlt, value: "Home, Office" },
        {
          label: "Payment Methods",
          icon: FaCreditCard,
          value: "Mastercard •••• 4242",
        },
      ],
    },
    {
      title: "Preferences & Security",
      items: [
        { label: "Notifications", icon: FaBell, value: "Push, SMS" },
        { label: "Privacy Settings", icon: FaShieldAlt },
      ],
    },
    {
      title: "Help & Support",
      items: [{ label: "Help Center & FAQ", icon: FaQuestionCircle }],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto pb-16 space-y-6 md:space-y-10">
      
      {/* Profile Header Card */}
      <div className="bg-nm-white border border-nm-grey-200/60 rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
        {/* Background Decorative Gradient Layer */}
        <div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-br from-nm-green-light/30 to-nm-green/10"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-nm-gold/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 mt-12 md:mt-24 text-center md:text-left">
          
          {/* Avatar Group */}
          <div className="relative -mt-20 md:-mt-24">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] bg-nm-white p-2 shadow-xl border border-nm-grey-100 rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-nm-grey-200 relative group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&q=80"
                  alt="John Doe"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-nm-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <FaCamera size={24} className="text-nm-white" />
                </div>
              </div>
            </div>
            {/* Status Badge */}
            <div className="absolute -bottom-3 -right-3 md:-right-6 bg-nm-gold text-nm-black text-xs font-black px-4 py-2 rounded-xl border-4 border-nm-white shadow-sm flex items-center gap-1">
               <FaStar /> Premium
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <h1 className="text-3xl md:text-4xl font-black text-nm-black tracking-tight">John Doe</h1>
            <p className="text-nm-grey-500 font-medium text-sm md:text-base">
              johndoe@example.com <span className="mx-2 text-nm-grey-300">|</span> +234 801 234 5678
            </p>
            <p className="text-nm-grey-400 text-sm">Joined October 2022</p>
          </div>

          <div className="w-full md:w-auto mt-4 md:mt-0 flex gap-3">
             <button className="flex-1 md:flex-none bg-nm-green text-nm-white font-bold py-3.5 px-8 rounded-2xl hover:bg-opacity-90 transition-all active:scale-95 shadow-lg shadow-nm-green/20">
               Edit Profile
             </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-10 border-t border-nm-grey-100">
           <div className="text-center md:text-left">
              <p className="text-2xl font-black text-nm-black">24</p>
              <p className="text-xs font-bold text-nm-grey-400 uppercase tracking-wider mt-1">Total Orders</p>
           </div>
           <div className="text-center md:text-left">
              <p className="text-2xl font-black text-nm-black">12</p>
              <p className="text-xs font-bold text-nm-grey-400 uppercase tracking-wider mt-1">Vendors Saved</p>
           </div>
           <div className="text-center md:text-left">
              <p className="text-2xl font-black text-nm-black">₦45.2k</p>
              <p className="text-xs font-bold text-nm-grey-400 uppercase tracking-wider mt-1">Wallet Balance</p>
           </div>
           <div className="text-center md:text-left">
              <p className="text-2xl font-black text-nm-black flex items-center justify-center md:justify-start gap-2">4.9 <FaStar size={16} className="text-nm-gold" /></p>
              <p className="text-xs font-bold text-nm-grey-400 uppercase tracking-wider mt-1">Buyer Rating</p>
           </div>
        </div>
      </div>

      {/* Main Settings Sections */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-12 space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h2 className="text-sm font-black text-nm-grey-400 uppercase tracking-widest px-2">
                {section.title}
              </h2>
              <div className="bg-nm-white rounded-[2rem] border border-nm-grey-200/60 overflow-hidden shadow-sm">
                {section.items.map((item, idx) => (
                  <button
                    key={item.label}
                    className={`group w-full flex items-center justify-between p-5 hover:bg-nm-bg transition-colors ${idx !== section.items.length - 1 ? "border-b border-nm-grey-100" : ""}`}
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-nm-bg flex items-center justify-center text-nm-green group-hover:scale-105 group-hover:bg-nm-green group-hover:text-nm-white transition-all shadow-sm">
                        <item.icon size={20} />
                      </div>
                      <span className="font-bold text-nm-black text-base">
                        {item.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      {item.value && (
                        <span className="text-sm font-medium text-nm-grey-500 hidden sm:block">
                          {item.value}
                        </span>
                      )}
                      <div className="w-8 h-8 rounded-full bg-nm-grey-50 flex items-center justify-center group-hover:bg-nm-white group-hover:shadow transition-all">
                        <FaChevronRight className="text-nm-grey-400 group-hover:text-nm-black transition-colors" size={12} />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-6">
            <button className="w-full flex items-center justify-center gap-3 py-5 rounded-[2rem] text-red-500 font-bold hover:bg-red-50 transition-colors border-2 border-red-50 hover:border-red-100 text-lg">
              <FaSignOutAlt /> Log Out securely
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
