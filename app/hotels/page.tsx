import { Hotel } from "../../src/data/hotel";
import HotelCard from "./hotelCard";
import HotelHeader from "./hotelHeader";

//酒店列表
export default async function HotelPage({
  searchParams,
}: {
  searchParams: Promise<{
    city: string;
  }>;
}) {
  const data = await fetch(`${process.env.BASEAPI_URI}/hotel`)
  console.log(1111111111,data)
  const hotelData = (await data.json()).list
  console.log(22222,hotelData)
  const { city } = await searchParams;
  const list:Hotel[] = city
    ? hotelData.filter((item:Hotel) => item.city === city)
    : hotelData;

  return (
    <div className="w-full p-1">
      <HotelHeader city={city} />
      <div className="p-1 bg-blue-50/40">
        {list.length === 0 ? (
          <div className="p-4 text-gray-400 text-center">
            该城市暂无酒店数据
          </div>
        ) : (
          list.map((item) => <HotelCard item={item} key={item.id}/>)
        )}
      </div>
    </div>
  );
}
