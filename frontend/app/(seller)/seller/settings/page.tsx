"use client";
import { FaStore, FaIdCard, FaLock, FaGlobe, FaChevronRight, FaRegMoneyBillAlt, FaBell, FaSignOutAlt } from 'react-icons/fa';

export default function SellerSettings() {
  const sections = [
    {
      title: 'Store Settings',
      items: [
        { label: 'Store Profile', icon: FaStore, desc: 'Name, logo, and cover image' },
        { label: 'Verification & KYC', icon: FaIdCard, desc: 'Identity and farm location verification', status: 'Verified' },
        { label: 'Delivery Zones', icon: FaGlobe, desc: 'Manage your operating areas' },
      ]
    },
    {
      title: 'Business & Payments',
      items: [
        { label: 'Payout Methods', icon: FaRegMoneyBillAlt, desc: 'Manage your linked bank accounts', status: 'Active' },
      ]
    },
    {
      title: 'Preferences & Security',
      items: [
        { label: 'Notification Settings', icon: FaBell, desc: 'Alerts, push messages and emails' },
        { label: 'Password & Auth', icon: FaLock, desc: 'Manage your credentials' },
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto pb-12 space-y-8 md:space-y-10">
      
      {/* Header */}
      <div className="bg-nm-black rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden shadow-lg border border-nm-black text-nm-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-nm-green opacity-20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="relative z-10">
           <h1 className="text-3xl md:text-4xl font-black mb-3 tracking-tight">Vendor Settings</h1>
           <p className="text-nm-grey-400 text-sm md:text-base font-medium max-w-lg">Manage your business profile, customize your storefront, and securely handle payments.</p>
        </div>
      </div>

      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-sm font-black text-nm-grey-400 uppercase tracking-widest mb-4 px-2">{section.title}</h2>
            <div className="bg-nm-white rounded-[2rem] border border-nm-grey-200/60 overflow-hidden shadow-sm">
              {section.items.map((item, idx) => (
                <button
                  key={item.label}
                  className={`group w-full flex items-center justify-between p-5 hover:bg-nm-bg transition-all duration-300 ${idx !== section.items.length - 1 ? 'border-b border-nm-grey-100' : ''}`}
                >
                  <div className="flex items-center gap-5 text-left">
                    <div className="w-12 h-12 rounded-2xl bg-nm-bg border border-nm-grey-100 flex items-center justify-center text-nm-green shrink-0 group-hover:scale-105 group-hover:bg-nm-green group-hover:text-nm-white transition-all shadow-sm">
                      <item.icon size={20} />
                    </div>
                    <div>
                        <span className="font-bold text-nm-black block mb-1 flex items-center gap-2 text-base">
                           {item.label}
                           {item.status === 'Verified' && (
                             <span className="bg-nm-green-light border border-nm-green/20 text-nm-green-dark text-[10px] px-2 py-0.5 rounded uppercase tracking-widest font-bold ml-1">Verified</span>
                           )}
                           {item.status === 'Active' && (
                             <span className="bg-blue-50 border border-blue-200 text-blue-600 text-[10px] px-2 py-0.5 rounded-lg uppercase tracking-widest font-bold ml-1">Active</span>
                           )}
                        </span>
                        <span className="text-xs font-medium text-nm-grey-500 block">{item.desc}</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-nm-grey-50 flex items-center justify-center group-hover:bg-nm-white group-hover:shadow transition-all shrink-0 ml-4">
                     <FaChevronRight className="text-nm-grey-300 group-hover:text-nm-black transition-colors" size={12} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
         <div className="bg-orange-50 border border-orange-200 p-6 md:p-8 rounded-[2rem] flex flex-col justify-center">
            <p className="font-black text-orange-900 text-lg mb-2">Need Business Help?</p>
            <p className="text-sm font-medium text-orange-800 mb-6">Contact our premium 24/7 Vendor Support Line to resolve critical issues instantly.</p>
            <button className="bg-orange-600 text-nm-white font-bold py-3 px-6 rounded-xl hover:bg-orange-700 transition-colors w-fit shadow-md">
               Call +234 800-NETMKT
            </button>
         </div>

         <div className="border-2 border-nm-grey-200/50 border-dashed p-6 md:p-8 rounded-[2rem] flex flex-col justify-center items-start">
            <h3 className="text-lg font-black text-nm-black mb-2">Store Status</h3>
            <p className="text-sm font-medium text-nm-grey-500 mb-6">Temporarily closing or deleting your store? You can manage your online visibility here.</p>
             <button className="flex items-center gap-2 text-red-500 font-bold hover:bg-red-50 py-3 px-6 rounded-xl border border-red-200 hover:border-red-300 transition-all bg-white shadow-sm">
              <FaSignOutAlt /> Close Store
            </button>
         </div>
      </div>
    </div>
  );
}
