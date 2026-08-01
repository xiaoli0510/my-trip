"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import HotelCard from "../hotels/hotelCard";
import { Hotel } from "@/src/data/hotel";

export default function CollectCityFilter() {
  const CITY_LIST = ["汕头", "潮州", "南澳"] as const;
  const ALL_CITY = '全部收藏'
  const [filterCity, setFilterCity] = useState<string>(ALL_CITY );
  const  [allList, setAllList ] = useState<Hotel[]>([]);

  useEffect(() => {
    const fetData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASEAPI_URI}/hotel`);
      const data = await res.json()
      setAllList(data.list || []);
    };
    fetData();
  }, []);

  //依赖于allList filterCity
  const filterList = useMemo(() => {
    if(filterCity === ALL_CITY) return allList;
    return allList.filter((item) => item.city === filterCity);
  },[allList,filterCity])

  //useCallback 缓存函数，只有依赖变化时才会重建函数，没有依赖，永远不会重建函数
  const handleCityChange = useCallback((city: string) => {
    setFilterCity(city);
  },[]);

  const handleReset = useCallback(() => {
    setFilterCity(ALL_CITY);
  },[])
  return (
    <div>
      <div className="flex justify-start gap-2">
        <div className={`p-1 rounded-xs ${filterCity === ALL_CITY?"bg-theme text-white":""}`} onClick={handleReset}>全部收藏</div>
        {CITY_LIST.map((item,i:number) => (
          <div key={i}
            className={`p-1 bg-gray-50 rounded-xs ${item === filterCity ? "bg-theme text-white" : ""}`}
            onClick={() => handleCityChange(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="my-2">
        {filterList.length === 0 ? (
          <div>还未收藏</div>
        ) : (
          filterList.map((item) => <HotelCard item={item} key={item.id}/>)
        )}
      </div>
    </div>
  );
}
