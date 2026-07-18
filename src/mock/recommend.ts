import Mock from "mockjs";
export const mockRecommendList = Mock.mock({
  "list|20": [
    {
      src: "https://picsum.photos/400/300?random=@id",
      "id|+1": 1,
      likes: "@natural(1,100000)",
      title: "@cword(2,3)",
      author: "@cname",
      authorSrc: "https://picsum.photos/400/300?random=@id",
    },
  ],
});
