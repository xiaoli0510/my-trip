"use client";
import Image from "next/image";
import ImgBeach from "@/public/beach.jpg";
import ImgPerson from "@/public/person.jpg";
import { Cat, Dog, Smile, ThumbsUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function RecommendDetail() {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageList = [ImgBeach, ImgPerson, ImgBeach, ImgPerson];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  //触摸相关
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);

  useEffect(() => {
    // timerRef.current = setInterval(() => {
    //   setActiveIndex((pre) => (pre + 1) % imageList.length);
    // }, 3000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [imageList.length]);

  const onTouchStart = (e:React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  }

  const onTouchMove = (e:React.TouchEvent) => {
    const touch = e.touches[0];
    touchEndX.current = touch.clientX;
    touchEndY.current = touch.clientY;
  }

  const onTouchEnd = () => {
    
  }
  return (
    <div>
      这里是一个轮播图
      <div className="section-slider">
        <div className="flex w-full overflow-hidden relative"
         onTouchStart={(e) => onTouchStart(e)}
         onTouchMove={(e) => onTouchMove(e)}
         onTouchEnd={(e) => onTouchEnd(e)}
         >
          {imageList.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="hotelImg"
              className={activeIndex === index ? "w-full h-[75]" : "w-full h-[75] hidden"}
            />
          ))}
        </div>
        <div className="flex justify-center gap-2 my-2">
          {imageList.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-blue-500" : "bg-gray-300"}`}
            ></div>
          ))}
        </div>
      </div>
      <div className="p-2">
        <h3>推荐标题</h3>
        <div>这是一段描述的文字</div>
      </div>
      {/* 评论区 */}
      <div className="comment-section p-2">
        <div className="flex justify-between">
          <div>共17条评论</div>
          <div className="text-blue-500 text-xs">
            写评论每日领10积分，去领钱
          </div>
        </div>
        <div className="flex justify-between rounded-3xl bg-green-50/50 p-1 my-2">
          <div className="flex gap-2 my-2">
            <Image
              src={ImgPerson}
              alt="User"
              width={24}
              height={24}
              className="rounded-full w-6 h-6"
            />
            <span className="text-gray-300">写评论，天天领积分</span>
          </div>
          <div className="flex gap-2 items-center">
            <Smile size={16} />
            <Dog size={16} />
            <Cat size={16} />
          </div>
        </div>

        <div className="comment-list">
          <div className="comment-item flex">
            <Image
              src={ImgPerson}
              alt="User"
              className="flex-none rounded-full w-8 h-8 inline-block"
              width={32}
              height={32}
            />
            <div className="ml-2 flex-1">
              <div className="text-xs text-gray-400">我是猴子</div>
              <div>这是评级的文字内容</div>
              <div className="text-xs text-gray-400">2023-10-10 广东 回复</div>
            </div>
            <div className="flex-none w-10 items-center flex flex-col">
              <ThumbsUp size={16} />
              <span>首赞</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
