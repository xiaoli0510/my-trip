
import { Metadata } from "next";
import DiscountSection, { DiscountInfo } from "./DiscountSection";
import RoomPayment from "./RoomPayment";

interface Props {
  searchParams:{
    hotelId:string;
    roomId:string;

  }
}
export async function generateMetadata(
  {  searchParams }: Props,
): Promise<Metadata> {
  const searchParamsObj =await searchParams
  const {hotelId} = searchParamsObj;
  return {
    title: `订单-酒店 #${hotelId}`,
    description: "在线预订酒店",
  }
}

export default function BookPage() {
  //优惠信息
  const discount:DiscountInfo = {
    promotion: 1,
    coupon: 2,
    integral: 3,
  };
  return (
    <div className="p-2 bg-green-50/20">
      {/* 优惠信息 service  组件 */}
      <DiscountSection/>
      {/* 房间和支付 client组件 */}
      <RoomPayment />
    </div>
  );
}
