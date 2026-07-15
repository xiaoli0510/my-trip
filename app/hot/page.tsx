
import { City, hotCityList } from "@/app/data/city";

export default async function Hot({searchParams}:{searchParams:Promise<{id?:string}>}) {
  const {id} = await searchParams;
  const curCity:City = hotCityList.find((item) => item.id === Number(id))!;
  return (
    <div>
      这是热门城市{id}
      {curCity?.name}
    </div>
  );
}
