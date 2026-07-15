import Image from "next/image";
import { recommendList } from "../data/recommend";

//推荐区
export default function Recommend() {
  return (
    <div className="columns-2 gap-2">
      {recommendList.map((item) => (
        <div className="w-full rounded-md mb-2" key={item.id}>
          <Image src={item.src} alt="pic" className="w-full h-auto" />
          <div className="px-1">{item.title}</div>
          <div className="text-sm text-gray-400 flex justify-between px-1">
            <div>
              <Image
                className="inline-block mr-1 rounded-full"
                src={item.authorSrc}
                alt="pic"
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
