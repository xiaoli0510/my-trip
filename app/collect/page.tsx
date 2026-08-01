"use client";
import { ChevronLeft } from "lucide-react";
import CollectCityFilter from "./CollectCityFilter";
import { useEffect, useState } from "react";
import ShopCart from "./ShopCart";
import { useRouter, useSearchParams } from "next/navigation";

export default function CollectPage() {
  const TABS = [
    { id: 0, name: "购物车", component: ShopCart },
    { id: 1, name: "我的收藏", component: CollectCityFilter },
  ] as const;
  const DEFAULT_TAB = 0;
  const router = useRouter();
  const searchParams = useSearchParams();

  //获取初始化的tab索引
  const getInitialTab = () => {
    const type = searchParams.get("type") ?? DEFAULT_TAB;
    const typeNum = Number(type);
    return TABS.some((tab) => tab.id === typeNum) ? typeNum : DEFAULT_TAB;
  };

  const [activeTab, setActiveTab] = useState<number>(getInitialTab());

  useEffect(() => {
    const type = searchParams.get("type");
    if(type !==null){
      const tabNum = Number(type);
      if (TABS.some((tab) => tab.id === tabNum)) {
        setActiveTab(tabNum);
      }
    }
  },[searchParams])

  const goBack = () => {
    router.back();
  };

  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
  }

  //获取当前应该显示的组件
  const ActiveComponent = TABS.find(tab => tab.id === activeTab)?.component || ShopCart
  return (
    <div>
      <div className="p-2">
        <ChevronLeft size={16} onClick={goBack} />
        <div className="flex justify-center gap-10">
          {TABS.map((tab, index) => (
            <div
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`${activeTab === index ? "text-theme border-b-2 border-theme" : ""}`}
            >
              {tab.name}
            </div>
          ))}
        </div>
        <ActiveComponent key={activeTab}/>
      </div>
    </div>
  );
}
