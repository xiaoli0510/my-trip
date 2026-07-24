"use client";

import { useState } from "react";
import {
  CircleMinus,
  CirclePlus,
  Baby,
  TowelRack,
  UserRound,
  X,
  CircleCheck,
  Circle,
  ShieldCheck,
} from "lucide-react";

interface RoomInfo {
  roomCount: number;
  name: string;
  phone: number;
}
interface DiscountInfo {
     promotion: number;
    coupon: number;
    integral: number;
}

export default function BookPage() {
    //订房信息
  const [info, setInfo] = useState({
    roomCount: 1,
    name: '孙悟空',
    phone: 12345678901,
  });

  //优惠信息
  const [discount,setDiscount] = useState({
    promotion:83,
    coupon:50,
    integral:148,
  })

  //付款方式 0立即支付 1先住后付
  const [payWay, setPayWay] = useState(0)
  const onAdd = () => {
    setInfo({
      ...info,
      roomCount: info.roomCount + 1,
    });
  };
  const onMinus = () => {
    setInfo({
      ...info,
      roomCount:  info.roomCount - 1,
    });
  };
  
  const onSureBook = () => {
    console.log('提交订单成功了');
  }
  return (
    <div className="p-2 bg-green-50/20">
      {/* 房间信息 */}
      <div className="rounded-xl bg-white my-4 p-4 flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <div className="font-bold text-xl">订房信息</div>
          <div className="flex gap-2">
            <CircleMinus
              size={16}
              color={info.roomCount > 0 ? "#0086f6" : "#ddd"}
              onClick={() => onMinus()}
            />
            <span>{info.roomCount}</span>
            <CirclePlus
              size={16}
              color="#0086f6"
              onClick={() => onAdd()}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>住客姓名</div>
          <div>{info.name}</div>
        </div>
        <div className="flex flex-row justify-between">
          <div>联系手机</div>
          <div>{info.phone}</div>
        </div>
      </div>
      {/* 优惠 */}
      <div className="rounded-xl bg-white my-4 p-4  flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <div className="font-bold text-xl">本单可享</div>
          <div className="flex gap-2">
            <span>已享最大优惠</span>
            <span className="text-orange-300">¥{discount.promotion + discount.coupon}</span>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>促销优惠</div>
          <div>
            <span>白银贵宾价</span>
            <span className="text-orange-300">减少¥{discount.promotion}</span>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>优惠券</div>
          <div>
            <span>折扣券</span>
            <span className="text-orange-300">减少¥23{discount.coupon}</span>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>离店赚积分</div>
          <div>
            <span>{discount.integral}积分</span>
          </div>
        </div>
      </div>
      {/* 支付方式 */}
      <div className="rounded-xl bg-white my-4 p-4  flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <div className="font-bold text-xl">支付方式</div>
        </div>
        <div className="bg-gray-100/30 px-2 py-3 flex justify-between my-1 rounded-md" onClick={() => setPayWay(0)}>
          <div>立即支付</div>
          {payWay===0?<CircleCheck color="#0086f6" size={16} />:<Circle color="#0086f6" size={16} />}
        </div>
        <div className="bg-gray-100/30 px-2 py-3 flex justify-between my-1 rounded-md" onClick={() => setPayWay(1)}>
          <div>先住后付</div>
          {payWay===1?<CircleCheck color="#0086f6" size={16} />:<Circle color="#0086f6" size={16} />}
        </div>
      </div>
      <div className="flex justify-start gap-2">
        <Circle color="#0086f6" size={16} />
        <span>我已阅读并同意程信分服务协议</span>
      </div>

      <div className="fixed bottom-0 left-0 w-full pb-20">
        <div className="text-center text-green-500 bg-green-50 py-3">
          <ShieldCheck className="inline-block" color="#29b71f" />
          安心预定，免费取消
        </div>
        <div className="flex justify-between items-center p-2">
          <div>
            <span>在线付</span>
            <span className="text-theme">
              ¥ <span className="text-2xl">246</span>
            </span>
            <span className="text-theme">查看明细</span>
          </div>
          <div className="bg-theme text-white px-4 py-2 rounded-md" onClick={() => onSureBook()}>
            立即支付
          </div>
        </div>
      </div>
    </div>
  );
}
