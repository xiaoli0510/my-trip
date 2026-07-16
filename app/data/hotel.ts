
import ImgPerson from "@/public/person.jpg";
import { StaticImageData } from "next/image";

// 定义 Hotel 的类型结构
export interface Hotel {
  city:string;
  id: number;              // 数字类型
  title: string;           // 字符串
  level: number;           // 酒店星级
  score: string;           // 评分（字符串方便保留 ".6"）
  mainComment: string;     // 主要评价
  subComment: string;      // 次要评价
  commentCount: number;    // 评论数量
  follow: number;          // 关注数
  near: string[];          // 附近地标（字符串数组）
  tag: string[];           // 标签（字符串数组）
  originPrice: number;     // 原价
  discountPrice: number;   // 折扣价
  img: StaticImageData;             // 图片（可以是 URL 字符串，或导入的图片模块）
  continueGreat: number;   // 连续好评天数
}

export const hotelList:Hotel[] = [
    {
      id: 0,
      title: "万彩城酒店(万象城店)",
      level: 2,
      score: "4.6",
      mainComment: "很好",
      subComment: "去哪里都很方便",
      commentCount: 500,
      follow: 5443,
      near: ["万象城", "小公园"],
      tag: ["拍照好看", "阳台", "美食"],
      originPrice: 199,
      discountPrice: 134,
      img: ImgPerson,
      continueGreat:111,
      city:'汕头',
    },
    {
      id: 1,
       city:'潮州',
      title: "万小公园酒店(小公园店)",
      level: 2,
      score: "4.6",
      mainComment: "很好",
      subComment: "去哪里都很方便",
      commentCount: 500,
      follow: 5443,
      near: ["万象城", "小公园"],
      tag: ["拍照好看", "阳台", "美食"],
      originPrice: 1919,
      discountPrice: 1134,
      img: ImgPerson,
      continueGreat:111,
    },
]