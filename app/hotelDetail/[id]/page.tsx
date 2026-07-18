import { Hotel } from "@/src/data/hotel";
import { ArrowRight, Gem, MapPinned } from "lucide-react";
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
  console.log(111111111111, curHotel);

  const roomData = await fetch(`${process.env.BASEAPI_URI}/room`);
  const roomList = (await roomData.json()).list;
  return (
    <div>
      <div className="w-full relative h-50">
        <Image src={curHotel.img} alt={curHotel.title} fill />
      </div>
      <div className="my-2 p-1">
        <div className="flex justify-start">
          <h3>{curHotel?.title}</h3>
          <Gem size={16} />
        </div>
        <div className="flex justify-start gap-2">
          {curHotel.facility.map((f: string, index: number) => (
            <div key={index} className="bg-blue-50/40 text-xs">
              {f}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <div className="flex-none w-2/5 bg-blue-50/40 rounded-md">
            <div className="flex flex-row">
              <span className="bg-theme text-white p-1">{curHotel.score}</span>
              <span>{curHotel.mainComment}</span>
              <span>
                {curHotel.score}条 <ArrowRight />
              </span>
            </div>
            <div>{curHotel.subComment}</div>
          </div>
          <div className="flex-auto flex bg-blue-50/40 rounded-md">
            <div className="flex-auto">
              <span>距离汕头高铁站步行{curHotel.distance}米</span>
              <span className="text-gray-300">{curHotel.address}</span>
            </div>
            <div className="flex-none flex flex-col w-[20%] text-center align-middle items-center">
              <MapPinned />
              <div className="text-xs">地图</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <div>
            <div>今天 </div>
            <div>明天 </div>
          </div>
          <div>
            <div>7月18日 </div>
            <div>7月19日 </div>
          </div>
        </div>
        <div>
          <div>共1晚</div>
        </div>
      </div>
      <div>
        {roomList.map((room: Room) => (
          <RoomCard item={room} key={room.id} />
        ))}
      </div>
    </div>
  );
}
