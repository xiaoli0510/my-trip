import Mock from "mockjs";
import { Recommend } from "../data/recommend";
import ImgPerson from '@/public/person.jpg'
import ImgBeach from '@/public/beach.jpg'

export const mockCommentList:{list:Recommend[]} = Mock.mock({
  "list|20": [
    {
      src: ImgBeach,
      "id|+1": 1,
      likes: "@natural(1,100000)",
      title: "@cword(2,3)",
      author: "@cname",
      authorSrc: ImgPerson,
    },
  ],
});
