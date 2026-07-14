import Image from "next/image";
import Recommend from '@/app/home/Recommend'
import Link from "next/link";
import { hotCityList} from '@/app/data/hotCity';

export default function Home() {
  return (
    <div>
      <div className="bg-blue-100/20 rounded-sm p-1 mb-2">
        <div className=" flex justify-between">
          <div className="border border-theme rounded-sm p-1 flex w-[80%] justify-between flex-row items-center">
            <div>
              <Image
                src="/robot.png"
                width={20}
                height={20}
                alt="robot"
                className="inline-block mr-1"
              />
              <span>搜索目的地/酒店/旅游/景点/交通</span>
            </div>
            <div className="bg-theme rounded-sm py-1 px-2">
              <Image src="/search.png" width={14} height={14} alt="search" />
            </div>
          </div>
          <div className="flex flex-col w-[20%] text-center align-middle items-center">
            <Image src="/map.png" width={18} height={18} alt="map" />
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
      <Recommend/>
    </div>
  );
}
