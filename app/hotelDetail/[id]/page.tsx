import { hotelData } from "@/src/data/hotel"

export default async function HotelDetailPage({
   params, 
}:{
    params:Promise<{id: string}>
}){
    const {id} = await params
    const curHotel = hotelData.find(item => item.id === Number(id));
    return (
        <div>hotel detail
            <div>
                {curHotel?.title}
            </div>
        </div>
    )
}