import { ChevronLeft } from "lucide-react";
import CollectCityFilter from "./CollectCityFilter";

export default async function CollectPage() {
  return (
    <div>
      <div className="p-2">
        <ChevronLeft size={16} />
        <div className="flex justify-center gap-10">
          <div>购物车</div>
          <div className="text-theme border-b-2 border-theme">我的收藏</div>
        </div>
        <CollectCityFilter />
      </div>
    </div>
  );
}
