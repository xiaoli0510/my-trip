"use client";

import { useState } from "react";
import {
  CircleCheck,
  Circle,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import RoomInfoSection, { RoomInfo } from "./RoomInfoSection";
import  { DiscountInfo } from "./DiscountSection";
import PaymentSection from "./PaymentSection";
import OrderBottom from "./OrderBottom";

//房间+支付方式+协议 client 组件
export default function RoomPayment() {
  const searchParams = useSearchParams();
  const discountPrice = searchParams.get("discountPrice") || '';
  const hotelId = searchParams.get("hotelId");
  const roomId = searchParams.get("roomId");
  const router = useRouter();

  const [info, setInfo] = useState<RoomInfo>({
    roomCount: 1,
    name: "孙悟空",
    phone: "12345678901",
  });

  const onUpdateRoomInfo = (type: keyof RoomInfo, val: string) => {
    setInfo((pre) => ({
      ...pre,
      [type]:val,
    }));
  };
  const onAdd = () => {
    setInfo((pre) => ({
      ...pre,
      roomCount: pre.roomCount + 1,
    }));
  };
  const onMinus = () => {
    if (info.roomCount === 1) return;
    setInfo((pre) => ({
      ...pre,
      roomCount: pre.roomCount - 1,
    }));
  };

  //优惠信息
  const [discount, setDiscount] = useState<DiscountInfo>({
    promotion: 83,
    coupon: 50,
    integral: 148,
  });

  //付款方式 0立即支付 1先住后付
  const [payWay, setPayWay] = useState(0);

  //是否阅读协议
  const [hasRead, setHasRead] = useState(true);

  const onSureOrder = async () => {
    if (!hasRead) return;
    const {name,phone} = info;
    if(name.length < 2) {
      console.log('姓名不能少于两位!');
      return;
    }
    if(phone.length !== 11 || !/\d{11}/.test(phone)) {
      console.log('请输入正确的手机号码!');
      return;
    }
    const params = Object.assign({}, info, {
      roomId,
      hotelId,
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEAPI_URI}/order`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params), // body data type must match "Content-Type" header
    });
    const jsonData = await res.json();
    const { isSuccess } = jsonData;
    if (isSuccess) {
      console.log("订成功拉！");
      //router.push("/");
    }
  };
  return (
    <div className="p-2 bg-green-50/20">
      {/* 房间信息 */}
      <RoomInfoSection
        info={info}
        onUpdateRoomInfo={onUpdateRoomInfo}
        onAdd = {onAdd}
        onMinus={onMinus}
      />

      {/* 支付方式 */}
      <PaymentSection payWay={payWay} setPayWay={setPayWay} />
      <div
        className="flex justify-start gap-2"
        onClick={() => setHasRead(!hasRead)}
      >
        {hasRead ? (
          <CircleCheck color="#0086f6" size={16} />
        ) : (
          <Circle color="#0086f6" size={16} />
        )}
        <span>我已阅读并同意程信分服务协议</span>
      </div>

      <OrderBottom discountPrice={discountPrice} onSureOrder={onSureOrder} />
    </div>
  );
}
