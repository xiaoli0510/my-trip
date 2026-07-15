import Link from "next/link";
import { hotCityList} from '@/app/data/city';
import { Bot,MapPinned,Search } from "lucide-react";

// 热门搜索占位区
export default function HotSearch(){
    return (
         <div className="bg-blue-100/20 rounded-sm p-1 mb-2">
        <div className=" flex justify-between">
          <div className="border border-theme rounded-sm p-1 flex flex-auto w-[76%] justify-between flex-row">
            <div className="flex justify-self-start items-center align-middle">
              <Bot className="text-theme inline-block"/>
              <span>搜索目的地/酒店/旅游/景点/交通</span>
            </div>
            <div className="text-white bg-theme rounded-sm py-1 px-2">
              <Search size="16"/>
            </div>
          </div>
          <div className="flex-none flex flex-col w-[20%] text-center align-middle items-center">
            <MapPinned />
            <div className="text-xs">旅游地图</div>
          </div>
        </div>
        <div className="flex flex-row mt-2 justify-between">
          {
            hotCityList.map(item => (
             <Link href={{
              pathname:'/hot',
              query:{id:item.id}
             }} className="rounded-[10px] bg-white px-1" key={item.id}>
              {item.name}
             </Link>
            ))
          }
        </div>
      </div>
    )
}