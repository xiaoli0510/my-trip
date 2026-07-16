import HotelCard from "./hotelCard";
import HotelHeader from "./hotelHeader";

//酒店列表

export default async function HotelPage({
  searchParams
}:{searchParams:Promise<{
  city: string
}>}) {
  const {city} = await searchParams;
  return (
    <div className="w-full p-1">
      <HotelHeader city={city}/>
      <div>
        <HotelCard city={city}/>
      </div>
    </div>
  );
}
