"use client";
import { useState } from "react";
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
  FaChevronLeft,
  FaChevronRight,
  FaExchangeAlt,
} from "react-icons/fa";

export function Sidebar({ isSeller = false }: { isSeller?: boolean }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const buyerNavItems = [
    { label: "Map", href: "/map", icon: FaMap },
    { label: "Market", href: "/", icon: FaStore },
    { label: "Chat", href: "/chat", icon: FaCommentDots },
    { label: "Orders", href: "/orders", icon: FaClipboardList },
    { label: "Profile", href: "/profile", icon: FaUser },
  ];

  const sellerNavItems = [
    { label: "Dashboard", href: "/seller", icon: FaChartPie },
    { label: "Products", href: "/seller/products", icon: FaTags },
    { label: "Chat", href: "/seller/chat", icon: FaCommentDots },
    { label: "Orders", href: "/seller/orders", icon: FaClipboardList },
    { label: "Settings", href: "/seller/settings", icon: FaUser },
  ];

  const navItems = isSeller ? sellerNavItems : buyerNavItems;

  return (
    <div
      className={`hidden md:flex flex-col bg-nm-white/80 backdrop-blur-xl border-r border-nm-grey-200/50 h-screen sticky top-0 transition-all duration-300 z-40 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div
        className={`p-4 flex items-center border-b border-nm-grey-200/50 ${
          isCollapsed ? "justify-center" : "justify-between"
        }`}
      >
        {!isCollapsed && (
          <div className="flex flex-col whitespace-nowrap overflow-hidden">
            <h1 className="text-2xl font-bold italic bg-gradient-to-r from-nm-green to-teal-500 bg-clip-text text-transparent tracking-tight">
              NetMarket
            </h1>
            {isSeller && (
              <span className="text-[10px] bg-nm-gold/20 text-yellow-700 px-2 py-0.5 rounded-full mt-1 inline-block font-bold uppercase w-max tracking-wider">
                Vendor Portal
              </span>
            )}
          </div>
        )}

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-full hover:bg-nm-grey-100 text-nm-grey-500 hover:text-nm-black transition-all hover:scale-105 shrink-0 shadow-sm border border-transparent hover:border-nm-grey-200"
        >
          {isCollapsed ? (
            <FaChevronRight size={14} />
          ) : (
            <FaChevronLeft size={14} />
          )}
        </button>
      </div>

      <nav
        className={`flex-1 overflow-y-auto overflow-x-hidden space-y-2 mt-6 ${
          isCollapsed ? "px-3" : "px-4"
        }`}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && item.href !== '/seller' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.label}
              href={item.href}
              title={isCollapsed ? item.label : undefined}
              className={`group flex items-center gap-4 rounded-xl font-medium transition-all duration-300 relative overflow-hidden ${
                isCollapsed ? "justify-center p-3" : "py-3 px-4"
              } ${
                isActive
                  ? "text-nm-white shadow-md shadow-nm-green/20"
                  : "text-nm-grey-600 hover:text-nm-green"
              }`}
            >
              {/* Active Background */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-nm-green to-teal-500 transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-10"
                }`}
              />

              <item.icon size={isCollapsed ? 22 : 20} className={`shrink-0 relative z-10 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
              
              {!isCollapsed && (
                <span className="whitespace-nowrap relative z-10">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      <div
        className={`border-t border-nm-grey-200/50 mt-auto ${
          isCollapsed ? "p-4 flex justify-center" : "p-4 m-4 bg-nm-grey-100/50 rounded-2xl"
        }`}
      >
        <Link
          href={isSeller ? "/" : "/seller"}
          title={
            isCollapsed
              ? `Switch to ${isSeller ? "Buyer" : "Seller"}`
              : undefined
          }
          className={`flex items-center text-sm font-bold transition-all duration-300 group ${
            isCollapsed ? "justify-center text-nm-grey-400 hover:text-nm-black" : "justify-between w-full text-nm-grey-600 hover:text-nm-black"
          }`}
        >
          {!isCollapsed && (
            <span>{isSeller ? "Exit Vendor" : "Become Vendor"}</span>
          )}
          <div className={`p-2 rounded-full transition-colors duration-300 ${isCollapsed ? '' : 'bg-white shadow-sm group-hover:bg-nm-black group-hover:text-white'}`}>
             <FaExchangeAlt size={isCollapsed ? 20 : 14} />
          </div>
        </Link>
      </div>
    </div>
  );
}
