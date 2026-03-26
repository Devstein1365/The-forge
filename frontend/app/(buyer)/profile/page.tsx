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
        { label: "Delivery Addresses", icon: FaMapMarkerAlt, value: "2 Saved" },
        {
          label: "Payment Methods",
          icon: FaCreditCard,
          value: "Visa ending in 4242",
        },
      ],
    },
    {
      title: "Preferences",
      items: [
        { label: "Notifications", icon: FaBell, value: "Push, Email" },
        { label: "Privacy & Security", icon: FaShieldAlt },
      ],
    },
    {
      title: "Support",
      items: [{ label: "Help Center", icon: FaQuestionCircle }],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto pb-10">
      <div className="bg-nm-green text-nm-white rounded-3xl p-8 mb-8 relative overflow-hidden shadow-md">
        <div className="absolute top-0 right-0 w-64 h-64 bg-nm-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-nm-gold opacity-10 rounded-full translate-y-1/3 -translate-x-1/3"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="w-24 h-24 rounded-full bg-nm-white p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-nm-grey-200">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&q=80"
                alt="John Doe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-1">John Doe</h1>
            <p className="text-nm-green-light mb-3">
              johndoe@example.com • +234 801 234 5678
            </p>
            <span className="inline-block bg-nm-white text-nm-green text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Premium Buyer
            </span>
          </div>
          <div>
            <button className="bg-nm-gold text-nm-black font-bold py-2 px-6 rounded-xl hover:bg-opacity-90 transition shadow-sm">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-lg font-bold text-nm-black mb-4 px-2">
              {section.title}
            </h2>
            <div className="bg-nm-white rounded-2xl border border-nm-grey-200 overflow-hidden shadow-sm">
              {section.items.map((item, idx) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center justify-between p-4 hover:bg-nm-bg transition-colors ${idx !== section.items.length - 1 ? "border-b border-nm-grey-100" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-nm-bg flex items-center justify-center text-nm-green">
                      <item.icon size={18} />
                    </div>
                    <span className="font-semibold text-nm-black">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {item.value && (
                      <span className="text-sm text-nm-grey-500 hidden sm:block">
                        {item.value}
                      </span>
                    )}
                    <FaChevronRight className="text-nm-grey-400" size={14} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="pt-4">
          <button className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-red-500 font-bold hover:bg-red-50 transition-colors border border-transparent hover:border-red-100">
            <FaSignOutAlt /> Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
