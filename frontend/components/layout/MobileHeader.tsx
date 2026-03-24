import { FaSearch, FaBell, FaSlidersH } from 'react-icons/fa';

export function MobileHeader() {
  return (
    <div className="md:hidden sticky top-0 bg-nm-white/80 backdrop-blur-md z-40 px-4 py-3 pb-4">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-xl font-bold italic text-nm-green tracking-tight">netMarket</h1>
        <button className="relative text-nm-green">
          <FaBell size={20} />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-nm-white"></span>
        </button>
      </div>
      <div className="relative flex items-center">
        <FaSearch className="absolute left-4 text-nm-green" />
        <input 
          type="text" 
          placeholder="Search for fresh harvests..." 
          className="w-full bg-nm-grey-100 rounded-full py-3 pl-11 pr-12 text-sm text-nm-black focus:outline-none focus:ring-1 focus:ring-nm-green"
        />
        <button className="absolute right-4 text-nm-green border-l border-nm-grey-300 pl-3">
          <FaSlidersH />
        </button>
      </div>
    </div>
  );
}
