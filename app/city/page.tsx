"use client";
import {
  Bot,
  MapPinned,
  ChevronLeft,
  Ellipsis,
  Check,
  Hotel,
  Warehouse,
  Ticket,
  MountainSnow,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

//城市综合主页

export default function CityPage() {
  const searchParams = useSearchParams();
  const city = searchParams.get('city') || '';

  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  const enterHotels = () => {
    router.push(`/hotels?city=${encodeURIComponent(city)}`);
  }

  return (
    <div className="w-full p-1">
      <div className="flex justify-between gap-2 items-center">
        <ChevronLeft size={20} className="flex-none" onClick={goBack} />
        <div className="border border-theme rounded-2xl py-1 px-2 flex flex-auto w-60">
          <Bot className="text-theme inline-block flex-non" size={20} />
          <input
            className="flex-initial w-70 text-xs"
            placeholder="城市"
            value={city}
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
      <div className="border-b border-gray-200 flex justify-around mt-4 mb-2 py-2">
        <div className="text-theme">
          <span>{city}</span>
          <Check size={16} className="inline-block"/>
        </div>
        <div>
          <span>问ai</span>
          <Bot size={16} className="inline-block"/>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="rounded-md bg-blue-50/50 flex flex-row items-center px-1" onClick={enterHotels}>
          <Hotel size={16} />
          <span>酒店</span>
        </div>
        <div className="rounded-md bg-blue-50/50 flex flex-row items-center px-2 py-1">
          <Warehouse size={16} />
          <span>民宿</span>
        </div>
        <div className="rounded-md bg-blue-50/50 flex flex-row items-center px-1">
          <Ticket size={16} />
          <span>机票/火车票</span>
        </div>
        <div className="rounded-md bg-blue-50/50 flex flex-row items-center px-1">
        <MountainSnow size={16} />
          <span>景点/日游</span>
        </div>
      </div>
    </div>
  );
}
