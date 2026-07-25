import Mock from "mockjs";
import { Recommend } from "../data/recommend";
import ImgPerson from '@/public/person.jpg'

export const mockRecommendList:{list:Recommend[]} = Mock.mock({
  "list|20": [
    {
      src: ImgPerson,
      "id|+1": 1,
      likes: "@natural(1,100000)",
      title: "@cword(2,3)",
      author: "@cname",
      authorSrc: "https://picsum.photos/400/300?random=@id",
    },
  ],
});
