"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaMap,
  FaStore,
  FaCommentDots,
  FaClipboardList,
  FaUser,
  FaChartPie,
  FaTags,
} from "react-icons/fa";

export function BottomNav({ isSeller = false }: { isSeller?: boolean }) {
  const pathname = usePathname();

  const buyerNavItems = [
    { label: "Map", href: "/map", icon: FaMap },
    { label: "Market", href: "/", icon: FaStore },
    { label: "Chat", href: "/chat", icon: FaCommentDots },
    { label: "Orders", href: "/orders", icon: FaClipboardList },
    { label: "Profile", href: "/profile", icon: FaUser },
  ];

  const sellerNavItems = [
    { label: "Home", href: "/seller", icon: FaChartPie },
    { label: "Products", href: "/seller/products", icon: FaTags },
    { label: "Chat", href: "/seller/chat", icon: FaCommentDots },
    { label: "Orders", href: "/seller/orders", icon: FaClipboardList },
    { label: "Settings", href: "/seller/settings", icon: FaUser },
  ];

  const navItems = isSeller ? sellerNavItems : buyerNavItems;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-2 bg-gradient-to-t from-nm-white via-nm-white to-transparent pointer-events-none">
      <div className="bg-nm-white/80 backdrop-blur-md border border-nm-grey-200/50 shadow-lg rounded-2xl flex justify-around items-center px-2 py-2 pointer-events-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && item.href !== '/seller' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center p-2 relative group"
            >
              <div 
                className={`absolute inset-0 bg-nm-green/10 rounded-xl scale-0 transition-transform duration-300 ${isActive ? 'scale-100' : 'group-hover:scale-100'}`}
              />
              <item.icon
                size={20}
                className={`relative z-10 transition-colors duration-300 ${
                  isActive ? "text-nm-green scale-110" : "text-nm-grey-400 group-hover:text-nm-green"
                }`}
              />
              <span
                className={`text-[10px] mt-1 font-medium transition-colors duration-300 relative z-10 ${
                  isActive ? "text-nm-green" : "text-nm-grey-500"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
