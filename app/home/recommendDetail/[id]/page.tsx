"use client";
import Image from "next/image";
import ImgBeach from "@/public/beach.jpg";
import ImgPerson from "@/public/person.jpg";
import { Cat, Dog, Smile, ThumbsUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CommentCard from "./CommentCard";
import { Comment } from "@/src/data/comment";

export default function RecommendDetail() {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageList = [ImgBeach, ImgPerson, ImgBeach, ImgPerson];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  //触摸相关
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);
  const isSwiping = useRef(false);

  const [commentList,setCommentList] = useState<Comment[]>([])
  useEffect(() => {
    const fetchData =async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASEAPI_URI}/comment`,{
        method:'POST',
        body:JSON.stringify({id:1})
      });
      const jsonData = (await res.json());
      setCommentList(jsonData.body.list)
    }

    fetchData();
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
    isSwiping.current = true;
  }

  const onTouchMove = (e:React.TouchEvent) => {
    if(!isSwiping.current) return;
    const touch = e.touches[0];
    touchEndX.current = touch.clientX;
    touchEndY.current = touch.clientY;
  }

  const onTouchEnd = () => {
    if(!isSwiping.current) return;
    isSwiping.current = false;
    const deltaX = touchEndX.current - touchStartX.current;
    const deltaY = touchEndY.current - touchStartY.current;

    if(Math.abs(deltaX) > Math.abs(deltaY)){
        //是水平方向的滑动
        if(deltaX < -50){
            //向左边滑动
            setActiveIndex((prev) =>  (prev + 1) % imageList.length);
        }else if(deltaX > 50){
            //向右边滑动
            setActiveIndex((prev) => (prev - 1) % imageList.length);
        }
    }

  }
  return (
    <div>
      <div className="section-slider">
        <div className="flex w-full overflow-hidden relative"
         onTouchStart={onTouchStart}
         onTouchMove={onTouchMove}
         onTouchEnd={onTouchEnd}
         >
          {imageList.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="hotelImg"
              className={activeIndex === index ? "w-full h-[100]" : "w-full h-[100] hidden"}
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
          {
            commentList.map(item => (
              <CommentCard item={item} key={item.id}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}
