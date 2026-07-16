"use client";
import { MapPinned, ChevronLeft, Ellipsis, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HotelHeader({city}:{city:string}) {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <div className="flex justify-between gap-2 items-center mb-2">
      <ChevronLeft size={20} className="flex-none" onClick={goBack} />
      <div className="bg-blue-50/30 rounded-4xl py-1 px-2 flex gap-2 items-center text-xs">
        <div>{city}</div>
        <div className="flex flex-col shrink-0">
          <div>07-15</div>
          <div>07-16</div>
        </div>
        <div className="shrink-0 flex flex-col  border-r border-white pr-1">
          <div>1间</div>
          <div>1人</div>
        </div>
        <Search size={16} />
        <input
          className="flex-initial text-xs"
          placeholder="位置/品牌/酒店"
          disabled
        />
      </div>
      <div className="flex-none flex flex-row gap-2">
        <MapPinned />
        <div className="flex-none flex flex-col text-center align-middle items-center">
          <Ellipsis size={16} />
          <div className="text-xs">更多</div>
        </div>
      </div>
    </div>
  );
}
