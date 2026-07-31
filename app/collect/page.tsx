import { Backpack, ChevronLeft } from "lucide-react";
import HotelCard from "../hotels/hotelCard";

export default async function CollectPage() {
  let list: any[];
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASEAPI_URI}/hotel`);
  list = (await res.json()).list;

  return (
    <div>
      <div className="p-2">
        <ChevronLeft size={16} />
        <div className="flex justify-center gap-10">
          <div>购物车</div>
          <div className="text-theme border-b-2 border-theme">我的收藏</div>
        </div>
        <div className="my-2">
          {list.length === 0 ? (
            <div>还未收藏</div>
          ) : (
            list.map((item) => <HotelCard item={item} key={item.id} />)
          )}
        </div>
      </div>
    </div>
  );
}
