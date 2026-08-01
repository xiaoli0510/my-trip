"use client";

import { Earth, House, List, Mail, UserRoundArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();
  const BOTTOM_TABS = [
    { id: 0, name: "首页", path: "/", icon: House },
    { id: 0, name: "消息", path: "/message", icon: Mail },
    { id: 0, name: "社区", path: "/society", icon: Earth },
    { id: 0, name: "行程", path: "/trip", icon: House },
    { id: 0, name: "我的", path: "/my", icon: UserRoundArrowLeft },
  ];

  const showBottomNav = BOTTOM_TABS.some((tab) => tab.path === pathname);
  if (!showBottomNav) return null;

  return (
    <div className="flex justify-around bg-white text-black fixed left-1/2 z-50 -translate-x-1/2 bottom-0 w-full max-w-md border-t border-gray-300 py-2">
      {BOTTOM_TABS.map((tab) => {
        const Icon = tab.icon;
        return (
          <a key={tab.id}
            className={`flex-1/5 flex-col items-center flex text-md ${pathname === tab.path ? "text-theme" : ""}`}
            href={tab.path}
          >
            <Icon size={16} />
            <div>{tab.name}</div>
          </a>
        );
      })}
    </div>
  );
}
