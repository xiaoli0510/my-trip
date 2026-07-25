'use client'
import { Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Hotel } from "@/src/data/hotel";

type Props = {
  item: Hotel;
};

export default function HotelCard({ item }: Props) {
  return (
    <Link
      className="flex justify-between gap-2 mb-2"
      href={`/hotelDetail/${item.id}`}
    >
      <div>id:{item.id}</div>
      <div className="relative w-1/5 flex-none h-30">
        <Image
          src={item.img}
          alt={item.title}
          fill // ✅ 填充父容器
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-md object-cover"
        />
      </div>
      <div className="flex-auto">
        <h3 className="font-bold flex justify-start">
          <span>{item.title}</span>
          {Array.from({ length: item.level }).map((_, i) => (
            <Gem size={16} key={i} />
          ))}
        </h3>
        <div className="flex flex-row justify-start gap-2 text-xs">
          <div className="bg-theme text-white">{item.score}</div>
          <div className="text-theme">{item.mainComment}</div>
          <div>
            {item.commentCount}人点评.{item.follow}收藏
          </div>
        </div>
        <div>
          近
          {item.near.map((place: string, i: number) => (
            <span key={i}>{place}.</span>
          ))}
        </div>
        <div className="flex justify-start gap-2">
          {item.tag.map((t: string, i: number) => (
            <span key={i}>{t}</span>
          ))}
        </div>
        <div className="flex justify-between">
          <div>连续{item.continueGreat}位住客好评</div>
          <div>
            <span className="line-through">¥{item.originPrice}</span>
            <span className="text-theme text-3xl">
              <span className="text-3xl">{item.discountPrice}</span>起
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
