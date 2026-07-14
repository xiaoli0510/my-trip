"use client";

import { Earth, House, List, Mail, UserRoundArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="flex justify-around bg-white text-black fixed left-1/2 z-50 -translate-x-1/2 bottom-0 w-full max-w-md border-t border-gray-300 py-2">
      <Link
        className={`flex-1/5 flex-col items-center flex text-md ${pathname === "/" ? "text-theme" : ""}`}
        href="/"
      >
        <House />
        <div>首页</div>
      </Link>
      <Link
        className={`flex-1/5 flex-col items-center flex text-md ${pathname === "/message" ? "text-theme" : ""}`}
        href="/message"
      >
        <Mail />
        <div>消息</div>
      </Link>
      <Link
        href="/society"
        className={`flex-1/5 flex-col items-center flex text-md ${pathname === "/society" ? "text-theme" : ""}`}
      >
        <Earth />
        <div>社区</div>
      </Link>
      <Link
        className={`flex-1/5 flex-col items-center flex text-md ${pathname === "/trip" ? "text-theme" : ""}`}
        href="/trip"
      >
        <List />
        <div>行程</div>
      </Link>
      <Link
        className={`flex-1/5 flex-col items-center flex text-md ${pathname === "/my" ? "text-theme" : ""}`}
        href="/my"
      >
        <UserRoundArrowLeft />
        <div>我的</div>
      </Link>
    </div>
  );
}
