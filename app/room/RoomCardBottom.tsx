

'use client';
import { Room } from "@/src/data/room";
import { useRouter } from "next/navigation";

interface Props {
    item: Room,
    hotelId: number
}
export default function RoomCardBottom({item,hotelId}:Props){
    const router = useRouter();
    const onOrder = (e:React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        console.log(`/order?discountPrice=${encodeURIComponent(item.discountPrice)}&roomId=${item.id}&hotelId=${hotelId}`);
        router.push(`/order?discountPrice=${encodeURIComponent(item.discountPrice)}&roomId=${item.id}&hotelId=${hotelId}`);
    }
    return (
         <div className="flex justify-end gap-2 items-center align-middle">
           <div>hotelId{hotelId}</div>
            <div className="border rounded-xs h-10 p-2 font-bold">1间</div>
            <div className="bg-theme text-white p-2 h-10 rounded-xs" onClick={(e) => onOrder(e)}>领券订</div>
          </div>
    )
}