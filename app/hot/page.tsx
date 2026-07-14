
import { hotCityList } from "@/app/data/hotCity";

export default async function Hot({searchParams}:{searchParams:Promise<{id?:string}>}) {
  const {id} = await searchParams;
  const curCity = hotCityList.find((item) => item.id === Number(id));
  return (
    <div>
      这是热门城市{id}
      {curCity?.name}
    </div>
  );
}
