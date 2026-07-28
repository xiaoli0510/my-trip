
export interface DiscountInfo {
  promotion: number;
  coupon: number;
  integral: number;
}
export default async function DiscountSection(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASEAPI_URI}/discount`,{
     method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
  })
  const jsonData = await res.json();
  const discount = jsonData.body
    return (
         <div className="rounded-xl bg-white my-4 p-4  flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <div className="font-bold text-xl">本单可享</div>
          <div className="flex gap-2">
            <span>已享最大优惠</span>
            <span className="text-orange-300">
              ¥{discount.promotion + discount.coupon}
            </span>
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
            <span className="text-orange-300">减少 ¥{discount.coupon}</span>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>离店赚积分</div>
          <div>
            <span>{discount.integral}积分</span>
          </div>
        </div>
      </div>
    )
}