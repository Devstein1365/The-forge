import { FaStore, FaIdCard, FaLock, FaGlobe, FaChevronRight } from 'react-icons/fa';

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
      title: 'Security',
      items: [
        { label: 'Password & Auth', icon: FaLock, desc: 'Manage your credentials' },
      ]
    }
  ];

  return (
    <div className="max-w-3xl mx-auto pb-10 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-nm-black mb-1">Vendor Settings</h1>
        <p className="text-sm text-nm-grey-500">Manage your farm or market presence.</p>
      </div>

      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-sm font-bold text-nm-grey-500 uppercase tracking-wider mb-3 px-2">{section.title}</h2>
            <div className="bg-nm-white rounded-2xl border border-nm-grey-200 overflow-hidden shadow-sm">
              {section.items.map((item, idx) => (
                <button 
                  key={item.label} 
                  className={`w-full flex items-center justify-between p-4 hover:bg-nm-bg transition-colors ${idx !== section.items.length - 1 ? 'border-b border-nm-grey-100' : ''}`}
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-xl bg-nm-bg flex items-center justify-center text-nm-green shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                        <span className="font-bold text-nm-black block mb-0.5 flex items-center gap-2">
                           {item.label}
                           {item.status && <span className="bg-nm-green-light text-nm-green text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">{item.status}</span>}
                        </span>
                        <span className="text-xs text-nm-grey-500 block">{item.desc}</span>
                    </div>
                  </div>
                  <FaChevronRight className="text-nm-grey-400" size={14} />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between items-center bg-nm-gold-light/30 border border-nm-gold p-4 rounded-xl">
         <div>
            <p className="font-bold text-nm-black text-sm">Need Help?</p>
            <p className="text-xs text-nm-grey-600 mt-1">Contact our Vendor Support Line at +234 800 NETMKT</p>
         </div>
      </div>
    </div>
  );
}
