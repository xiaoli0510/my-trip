import { StaticImageData } from "next/image";
import ImgMoon from "../../public/moon.jpg";
import ImgPerson from "../../public/person.jpg";

export interface Recommend {
  src: StaticImageData;
  id: number;
  likes: string;
  title: string;
  author: string;
  authorSrc: StaticImageData;
}

export const recommendList: Recommend[] = [
  {
    src: ImgMoon,
    id: 1,
    likes: "1.4万",
    title: "你是谁",
    author: "张三",
    authorSrc: ImgMoon,
  },
  {
    src: ImgPerson,
    id: 2,
    title: "你是谁2",
    likes: "1.4万",
    author: "张三",
    authorSrc: ImgMoon,
  },
];
