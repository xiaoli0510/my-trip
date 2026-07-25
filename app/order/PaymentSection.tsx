"use client";

import {
  CircleCheck,
  Circle,
} from "lucide-react";

interface Props {
  payWay: number;
  setPayWay: (val: number) => void;
}
export default function PaymentSection({ payWay, setPayWay }: Props) {
  return (
    <div className="rounded-xl bg-white my-4 p-4  flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <div className="font-bold text-xl">支付方式</div>
      </div>
      <div
        className="bg-gray-100/30 px-2 py-3 flex justify-between my-1 rounded-md"
        onClick={() => setPayWay(0)}
      >
        <div>立即支付</div>
        {payWay === 0 ? (
          <CircleCheck color="#0086f6" size={16} />
        ) : (
          <Circle color="#0086f6" size={16} />
        )}
      </div>
      <div
        className="bg-gray-100/30 px-2 py-3 flex justify-between my-1 rounded-md"
        onClick={() => setPayWay(1)}
      >
        <div>先住后付</div>
        {payWay === 1 ? (
          <CircleCheck color="#0086f6" size={16} />
        ) : (
          <Circle color="#0086f6" size={16} />
        )}
      </div>
    </div>
  );
}
