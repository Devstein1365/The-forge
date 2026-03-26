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
      className={`hidden md:flex flex-col bg-nm-white border-r border-nm-grey-200 h-screen sticky top-0 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div
        className={`p-4 flex items-center border-b border-nm-grey-100 ${isCollapsed ? "justify-center" : "justify-between"}`}
      >
        {!isCollapsed && (
          <div className="flex flex-col whitespace-nowrap overflow-hidden">
            <h1 className="text-2xl font-bold italic text-nm-green tracking-tight">
              NetMarket
            </h1>
            {isSeller && (
              <span className="text-[10px] bg-nm-gold px-2 py-0.5 rounded-full mt-1 inline-block font-bold text-nm-black uppercase w-max">
                Vendor Portal
              </span>
            )}
          </div>
        )}

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-full hover:bg-nm-grey-100 text-nm-grey-500 hover:text-nm-black transition-colors shrink-0"
        >
          {isCollapsed ? (
            <FaChevronRight size={16} />
          ) : (
            <FaChevronLeft size={16} />
          )}
        </button>
      </div>

      <nav
        className={`flex-1 overflow-y-auto overflow-x-hidden space-y-2 mt-4 ${isCollapsed ? "px-2" : "px-4"}`}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              title={isCollapsed ? item.label : undefined}
              className={`flex items-center gap-4 rounded-xl font-medium transition-all duration-300 ${
                isCollapsed ? "justify-center p-3" : "py-3 px-4"
              } ${
                isActive
                  ? "bg-nm-green text-nm-white shadow-sm"
                  : "text-nm-grey-600 hover:bg-nm-grey-100 hover:text-nm-black"
              }`}
            >
              <item.icon size={isCollapsed ? 22 : 20} className="shrink-0" />
              {!isCollapsed && (
                <span className="whitespace-nowrap">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      <div
        className={`border-t border-nm-grey-200 mt-auto ${isCollapsed ? "p-4 flex justify-center" : "p-4 m-4"}`}
      >
        <Link
          href={isSeller ? "/" : "/seller"}
          title={
            isCollapsed
              ? `Switch to ${isSeller ? "Buyer" : "Seller"}`
              : undefined
          }
          className={`flex items-center text-sm text-nm-grey-500 hover:text-nm-black transition-colors font-bold ${
            isCollapsed ? "justify-center" : "gap-2"
          }`}
        >
          {isCollapsed ? (
            <FaExchangeAlt size={20} />
          ) : (
            `Switch to ${isSeller ? "Buyer" : "Seller"} View`
          )}
        </Link>
      </div>
    </div>
  );
}
