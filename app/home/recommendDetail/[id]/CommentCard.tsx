import Image from "next/image";
import ImgBeach from "@/public/beach.jpg";
import ImgPerson from "@/public/person.jpg";
import { Cat, Dog, Smile, ThumbsUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Comment } from "@/src/data/comment";

export default function CommentCard({item}:{item:Comment}){
  console.log(777777,item)
    return (
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
              <div>{item.title}</div>
              <div className="text-xs text-gray-400">2023-10-10 广东 回复</div>
            </div>
            <div className="flex-none w-10 items-center flex flex-col">
              <ThumbsUp size={16} />
              <span>首赞</span>
            </div>
          </div>
    )
}