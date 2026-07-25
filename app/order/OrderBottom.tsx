'use client'
import {
  ShieldCheck,
} from "lucide-react";

interface Props {
  discountPrice: string;
  onSureOrder: () => void;
}
export default function OrderBottom({ discountPrice,onSureOrder }: Props) {
  return (
    <div className="fixed bottom-0 left-0 w-full pb-20">
      <div className="text-center text-green-500 bg-green-50 py-3">
        <ShieldCheck className="inline-block" color="#29b71f" />
        安心预定，免费取消
      </div>
      <div className="flex justify-between items-center p-2">
        <div>
          <span>在线付</span>
          <span className="text-theme">
            ¥ <span className="text-2xl">{discountPrice}</span>
          </span>
          <span className="text-theme">查看明细</span>
        </div>
        <div
          className="bg-theme text-white px-4 py-2 rounded-md"
          onClick={ onSureOrder}
        >
          立即支付
        </div>
      </div>
    </div>
  );
}
