import Image from "next/image";
import { Recommend } from "../../src/data/recommend";

//推荐区
export default async function RecommendList() {
  let data = await fetch(process.env.BASEAPI_URI + "/recommend");
  let recommendList: Recommend[] = (await data.json()).list;
  return (
    <div className="columns-2 gap-2">
      {recommendList.map((item, index) => (
        <div className="w-full rounded-md mb-2" key={item.id}>
          <Image
            src={item.src}
            alt="pic"
            className="w-full h-auto rounded-2xl"
            sizes="10vw"
            width={100}
            height={100}
            preload={index === 0 ? true : false}
          />
          <div className="px-1 font-bold">{item.title}</div>
          <div className="text-sm text-gray-400 flex justify-between px-1">
            <div>
              <Image
                className="inline-block mr-1 rounded-full"
                src={item.authorSrc}
                alt={item.title}
                width={10}
                height={10}
              />
              <span>{item.author}</span>
            </div>
            <div>{item.likes}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
