import { Hotel } from "@/src/data/hotel";
import { Gem, MapPinned } from "lucide-react";
import Image from "next/image";
import RoomCard from "../../room/RoomCard";
import { Room } from "@/src/data/room";

export default async function HotelDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const data = await fetch(`${process.env.BASEAPI_URI}/hotel`);
  const hotelList = (await data.json()).list;
  const { id } = await params;
  const curHotel = hotelList.find((item: Hotel) => item.id === Number(id));

  const roomData = await fetch(`${process.env.BASEAPI_URI}/room`);
  const roomList = (await roomData.json()).list;
  return (
    <div>
      <div className="w-full relative h-50">
        <Image src={curHotel.img} alt={curHotel.title} fill/>
      </div>
      <div className="my-2 p-1">
        <div className="flex justify-start">
          <h3>{curHotel?.title}</h3>
          <Gem size={16} />
        </div>
        <div className="flex justify-start gap-2">
          {curHotel.facility.map((f:string,index:number) => (
            <div key={index}>{f}</div>
          ))}
        </div>
        <div className="flex gap-2">
          <div className="flex-none w-2/5">
            <div className="flex flex-row">
              <span className="bg-theme text-white p-1">4.5</span>
              <span>很好</span>
              <span>4433条</span>
            </div>
            <div>地理位置很好的</div>
          </div>
          <div className="flex-auto flex">
            <div className="flex-auto">
              <span>距离汕头高铁站步行333米</span>
              <span>金平区炮台街道中山路103号1楼</span>
            </div>
            <div className="flex-none flex flex-col w-[20%] text-center align-middle items-center">
              <MapPinned />
              <div className="text-xs">旅游地图</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {
          roomList.map((room:Room) => (
            <RoomCard item={room} key={room.id}/>
          ))
        }
      </div>
    </div>
  );
}
