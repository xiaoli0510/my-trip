import { Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Room } from "@/src/data/room";

type Props = {
  item: Room;
};

export default function RoomCard({ item }: Props) {
  return (
    <Link
      className="flex justify-between gap-2 mb-2 bg-blue-50/40 p-2"
      key={item.id}
      href={`/hotelDetail/${item.id}`}
    >
      <div className="relative w-1/5 flex-none h-30">
        <Image
        loading='lazy'
          src={item.img}
          alt={item.title}
          width={100}
          height={100}
          className="rounded-md"
        />
      </div>
      <div className="flex-auto">
        <h3 className="font-bold flex justify-start">
          <span>{item.title}</span>
        </h3>
        <div className="flex flex-row justify-start gap-2 text-xs">
          <span>
            {item.bedCount}张{item.bedSize}米大床
          </span>
          <span>
            {item.minArea}-{item.maxArea}㎡
          </span>
          <span>{item.checkInPerson}人入住</span>
          <span>{item.floor}层</span>
        </div>
        <div className="flex flex-row justify-start gap-2 text-xs">
          <span>{item.hasBreakfast ? "有" : "无"}早餐</span>
          <span className="text-theme">
            入住当前{item.cancelTime}前可免费取消
          </span>
        </div>
        <div className="text-xs flex justify-start gap-2">
          {item.tag.map((tag: string, i: number) => (
            <span key={i} className="border px-1">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-end">
            <span className="line-through">¥{item.originPrice}</span>
            <span className="text-theme text-xl">
              <span className="text-xl">{item.discountPrice}</span>起
            </span>
          </div>
          <div className="text-xs flex justify-end">
            {item.vipTag.map((i, index) => (
              <span key={index} className="rounded-xs">{i}</span>
            ))}
          </div>
          <div className="flex justify-end gap-2 items-center align-middle">
            <div className="border rounded-xs h-10 p-2">1间</div>
            <div className="bg-theme text-white p-2 h-10 rounded-xs">领券订</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
