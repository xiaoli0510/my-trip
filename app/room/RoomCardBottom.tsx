

'use client';
import { useRouter } from "next/navigation";

export default function RoomCardBottom(){
    const router = useRouter();
    const onBook = (e:React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        router.push('/order');
    }
    return (
         <div className="flex justify-end gap-2 items-center align-middle">
            <div className="border rounded-xs h-10 p-2 font-bold">1间</div>
            <div className="bg-theme text-white p-2 h-10 rounded-xs" onClick={(e) => onBook(e)}>领券订</div>
          </div>
    )
}