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
    { label: "MAP", href: "/map", icon: FaMap },
    { label: "MARKET", href: "/", icon: FaStore },
    { label: "CHAT", href: "/chat", icon: FaCommentDots },
    { label: "ORDERS", href: "/orders", icon: FaClipboardList },
    { label: "PROFILE", href: "/profile", icon: FaUser },
  ];

  const sellerNavItems = [
    { label: "DASHBOARD", href: "/seller", icon: FaChartPie },
    { label: "PRODUCTS", href: "/seller/products", icon: FaTags },
    { label: "CHAT", href: "/seller/chat", icon: FaCommentDots },
    { label: "ORDERS", href: "/seller/orders", icon: FaClipboardList },
    { label: "SETTING", href: "/seller/settings", icon: FaUser },
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
              className={`flex flex-col items-center gap-1 min-w-[64px] ${isActive ? "text-nm-green" : "text-nm-grey-500 hover:text-nm-black"}`}
            >
              <item.icon
                size={20}
                className={isActive ? "text-nm-green" : ""}
              />
              <span className="text-[10px] font-bold tracking-wide">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
