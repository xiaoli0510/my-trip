"use client";
import { Bot, MapPinned, ChevronLeft, CircleX } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchPage() {
  const router = useRouter();
  const [key, setKey] = useState("汕头");

  const enterHotels = () => {
    router.push(`/city?city=${encodeURIComponent(key)}`
    );
  };

  const goBack = () => {
    router.back();
  };

  return (
    <div className="w-full p-1">
      <div className="flex justify-between gap-2 items-center">
        <ChevronLeft size={20} className="flex-none" onClick={goBack} />
        <div className="border border-theme rounded-2xl py-1 px-2 flex flex-auto w-64">
          <Bot className="text-theme inline-block flex-non" size={20} />
          <input
            className="flex-initial w-70 text-xs"
            placeholder="汕头的酒店"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
          {key ? (
            <CircleX size={16} onClick={() => setKey("")} />
          ) : (
            <MapPinned className="flex-none" size={18} />
          )}
        </div>
        <div
          className="flex-none bg-theme text-white rounded-2xl px-3 py-1"
          onClick={enterHotels}
        >
          搜索
        </div>
      </div>
    </div>
  );
}
