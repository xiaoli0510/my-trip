import { City } from "@/src/data/city";

export default async function HotPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  const data = await fetch(`${process.env.BASEAPI_URI}/city`);
  const hotCityList: City[] = await data.json();
  const curCity: City | null =
    hotCityList.find((item) => item.id === Number(id)) || null;
  return (
    <div>
      这是热门城市{id}
      {curCity?.place}
    </div>
  );
}
