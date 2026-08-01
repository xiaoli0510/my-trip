"use client";
import { useEffect, useMemo, useState } from "react";
import HotelCard from "../hotels/hotelCard";

export default function CollectCityFilter() {
  const [filterCity, setFilterCity] = useState("汕头");
  const  [allList, setAllList ] = useState<any[]>([]);
  const collectCityList = ["汕头", "潮州", "南澳"];

  useEffect(() => {
    const fetData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASEAPI_URI}/hotel`);
      const curList = (await res.json()).list
      console.log(1111111111,curList);
      setAllList(curList);
    };
    fetData();
  }, []);

  //依赖于allList filterCity
  const filterList = useMemo(() => {
    if(filterCity === "全部收藏") return allList;
    return allList.filter((item) => item.city === filterCity);
  },[allList,filterCity])

  const onChangeCity = (city: string) => {
    setFilterCity(city);
  };

  const onReset = () => {
    setFilterCity("全部收藏");
  }
  return (
    <div>
      <div className="flex justify-start gap-2">
        <div className={`p-1 rounded-xs ${filterCity === '全部收藏'?"bg-theme text-white":""}`} onClick={onReset}>全部收藏</div>
        {collectCityList.map((item,i:number) => (
          <div key={i}
            className={`p-1 bg-gray-50 rounded-xs ${item === filterCity ? "bg-theme text-white" : ""}`}
            onClick={() => onChangeCity(item)}
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
