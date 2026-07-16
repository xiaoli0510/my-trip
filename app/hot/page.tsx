
import { City, hotCityList } from "@/app/data/city";

export default async function HotPage({searchParams}:{searchParams:Promise<{id?:string}>}) {
  const {id} = await searchParams;
  const curCity:City | null = hotCityList.find((item) => item.id === Number(id)) || null;
  return (
    <div>
      这是热门城市{id}
      {curCity?.name}
    </div>
  );
}
