const fs = require("fs");

const sidebarCode = `'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaMap, FaStore, FaCommentDots, FaClipboardList, FaUser, FaChartPie, FaTags } from 'react-icons/fa';

export function Sidebar({ isSeller = false }: { isSeller?: boolean }) {
  const pathname = usePathname();

  const buyerNavItems = [
    { label: 'Map', href: '/map', icon: FaMap },
    { label: 'Market', href: '/', icon: FaStore },
    { label: 'Chat', href: '/chat', icon: FaCommentDots },
    { label: 'Orders', href: '/orders', icon: FaClipboardList },
    { label: 'Profile', href: '/profile', icon: FaUser },
  ];

  const sellerNavItems = [
    { label: 'Dashboard', href: '/seller', icon: FaChartPie },
    { label: 'Products', href: '/seller/products', icon: FaTags },
    { label: 'Chat', href: '/seller/chat', icon: FaCommentDots },
    { label: 'Orders', href: '/seller/orders', icon: FaClipboardList },
    { label: 'Settings', href: '/seller/settings', icon: FaUser },
  ];

  const navItems = isSeller ? sellerNavItems : buyerNavItems;

  return (
    <div className="hidden md:flex flex-col w-64 bg-nm-white border-r border-nm-grey-200 h-screen sticky top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold italic text-nm-green tracking-tight">The Digital Harvest</h1>
        {isSeller && <span className="text-[10px] bg-nm-gold px-2 py-0.5 rounded-full mt-2 inline-block font-bold text-nm-black uppercase">Vendor Portal</span>}
      </div>
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={\`flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-colors \${
                isActive
                  ? 'bg-nm-green text-nm-white shadow-sm'
                  : 'text-nm-grey-600 hover:bg-nm-grey-100 hover:text-nm-black'
              }\`}
            >
              <item.icon size={20} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-nm-grey-200 m-4">
        <Link href={isSeller ? '/' : '/seller'} className="flex items-center gap-2 text-sm text-nm-grey-500 hover:text-nm-black transition-colors font-bold">
          Switch to {isSeller ? 'Buyer' : 'Seller'} View
        </Link>
      </div>
    </div>
  );
}`;

const bottomCode = `'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaMap, FaStore, FaCommentDots, FaClipboardList, FaUser, FaChartPie, FaTags } from 'react-icons/fa';

export function BottomNav({ isSeller = false }: { isSeller?: boolean }) {
  const pathname = usePathname();

  const buyerNavItems = [
    { label: 'MAP', href: '/map', icon: FaMap },
    { label: 'MARKET', href: '/', icon: FaStore },
    { label: 'CHAT', href: '/chat', icon: FaCommentDots },
    { label: 'ORDERS', href: '/orders', icon: FaClipboardList },
    { label: 'PROFILE', href: '/profile', icon: FaUser },
  ];

  const sellerNavItems = [
    { label: 'DASHBOARD', href: '/seller', icon: FaChartPie },
    { label: 'PRODUCTS', href: '/seller/products', icon: FaTags },
    { label: 'CHAT', href: '/seller/chat', icon: FaCommentDots },
    { label: 'ORDERS', href: '/seller/orders', icon: FaClipboardList },
    { label: 'SETTING', href: '/seller/settings', icon: FaUser },
  ];

  const navItems = isSeller ? sellerNavItems : buyerNavItems;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-nm-white border-t border-nm-grey-200 mt-20 z-50">
      <div className="flex justify-between items-center py-2 px-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={\`flex flex-col items-center gap-1 min-w-[64px] \${isActive ? 'text-nm-green' : 'text-nm-grey-500 hover:text-nm-black'}\`}
            >
              <item.icon size={20} className={isActive ? 'text-nm-green' : ''} />
              <span className="text-[10px] font-bold tracking-wide">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}`;

fs.writeFileSync("components/layout/Sidebar.tsx", sidebarCode);
fs.writeFileSync("components/layout/BottomNav.tsx", bottomCode);
