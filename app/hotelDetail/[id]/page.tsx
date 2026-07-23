import { Hotel } from "@/src/data/hotel";
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  Ellipsis,
  Gem,
  Heart,
  MapPinned,
  ShoppingCart,
  SquareArrowOutUpRight,
  TowelRack,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import RoomCard from "../../room/RoomCard";
import { Room } from "@/src/data/room";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { mockHotelList } from "@/src/mock/hotel";
import { mockRoomList } from "@/src/mock/room";
import PersonRoomModal from "./PersonRoom";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const curHotel: Hotel | undefined = mockHotelList.list.find(
    (item: Hotel) => item.id === Number(id),
  );
  if (!curHotel) notFound();
  return {
    title: curHotel.title,
    description: curHotel.mainComment,
  };
}

export async function generateStaticParams() {
  return mockHotelList.list.map((hotel: Hotel) => ({
    id: String(hotel.id),
  }));
}

export default async function HotelDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const curHotel: Hotel | undefined = mockHotelList.list.find(
    (item: Hotel) => item.id === Number(id),
  );
  if (!curHotel) notFound();
  const roomList = mockRoomList.list;

  //点击间数人数，显示弹框
  const showPersonRoom = () => {};
  return (
    <div>
      <div className="w-full relative h-50 bg-white">
        <Image src={curHotel.img} alt={curHotel.title} fill />
        <div className="flex justify-between absolute top-5 w-full p-1 border bg-black/20 backdrop-blur-sm">
          <div className="bg-black/20 backdrop-blur-sm rounded-full p-1">
            <ArrowLeft color="white" size={16} />
          </div>
          <div className="flex justify-start gap-2">
            <div className="bg-black/30 backdrop-blur-sm rounded-full p-1">
              <Heart color="white" size={16} />
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-full p-1">
              <SquareArrowOutUpRight color="white" size={16} />
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-full p-1">
              <ShoppingCart color="white" size={16} />
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-full p-1">
              <Ellipsis color="white" size={16} />
            </div>
          </div>
        </div>
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
          <div className="flex-none w-2/5 bg-blue-50/40 rounded-xl">
            <div className="flex flex-row align-middle items-center">
              <span className="bg-theme text-white p-1 rounded-md">
                {curHotel.score}
              </span>
              <span>{curHotel.mainComment}</span>
              <span>
                {curHotel.commentCount}条
                <ArrowRight className="inline-block" size={16} />
              </span>
            </div>
            <div>{curHotel.subComment}</div>
          </div>
          <div className="flex-auto flex bg-blue-50/40 rounded-xl">
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
        <div className="flex-initial w-3/5 flex flex-row  items-end justify-between border-r-2 border-gray-200 px-2">
          <div className="flex flex-col  p-1">
            <div className="flex justify-around text-gray-300 text-xs items-start">
              <div className="flex-1">今天</div>
              <div className="flex-1">明天</div>
            </div>
            <div className="text-xl flex justify-around items-start">
              <div className="flex-1">7月18日</div>-
              <div className="flex-1">7月19日</div>
            </div>
          </div>
          <div>共1晚</div>
        </div>
        <div
          className="w-1/5 flex-none flex justify-end text-xs align-bottom items-end"
        
        >
         <PersonRoomModal/>
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
