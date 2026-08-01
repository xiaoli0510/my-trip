"use client";

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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HotelDetailTop({ hotelId }: { hotelId: number }) {
  const router = useRouter();
  const [collectInfo, setCollectInfo] = useState({
    isCollect:false,
    msg:'已取消收藏'
  });
  const [isShow, setShow] = useState(false);
  useEffect(() => {
    const fetchCollectStatus = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASEAPI_URI}/collect`);
      const jsonData = await res.json();
      const {
        body: { list },
        isSuccess,
      } = jsonData;
      if (!isSuccess) return;
      console.log(11111, list);
      if (list.find((item: number) => item === hotelId)) {
        setCollectInfo({
          ...collectInfo,
            isCollect:true });
      }
    };
    fetchCollectStatus();
  }, [hotelId]);
  const toggleCollect = async (hotelId: number) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEAPI_URI}/collect`, {
      method: "POST",
      body: JSON.stringify({
        hotelId,
        isCollect: collectInfo.isCollect,
      }),
    });
    const jsonData = await res.json();
    const { isSuccess, msg } = jsonData;
    if (isSuccess) {
      console.log(msg);
      setShow(true);
      if(collectInfo.isCollect){

      }
      setCollectInfo((pre) => ({
        ...pre,
        isCollect:!pre.isCollect,
        msg: pre.isCollect === true?'已取消收藏':'收藏成功'
      }));
      setTimeout(() => {
        setShow(false);
      }, 4000);
    }
  };

  //进入收藏列表页
  const enterCollect = () => {
    router.push('/collect?type=1');
  };
  return (
    <div className="flex justify-between absolute top-5 w-full p-1 border bg-black/20 backdrop-blur-sm">
      <div className="bg-black/20 backdrop-blur-sm rounded-full p-1">
        <ArrowLeft color="white" size={16} onClick={() => router.back()} />
      </div>
      <div className="flex justify-start gap-2">
        <div className="bg-black/30 backdrop-blur-sm rounded-full p-1 relative">
          <Heart
            color={collectInfo.isCollect ? "red" : "#fff"}
            size={16}
            onClick={() => toggleCollect(hotelId)}
          />
          {isShow ? (
            <div className="whitespace-nowrap absolute bottom-[-22px] left-[-120px] bg-white flex justify-between">
              <div>{collectInfo.msg}</div>
              <div className="text-theme" onClick={() => enterCollect()}>查看收藏列表</div>
            </div>
          ) : (
            ""
          )}
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
  );
}
