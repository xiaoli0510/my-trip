export default function orderLoading() {
  return (
    <div className="bg-white">
      {/* 房间信息 */}
      <div className="rounded-xl bg-green-50/20 my-4 p-4 flex flex-col gap-2">
        {Array.from({ length: 3 }).map(() => (
          <div className="flex flex-row justify-between h-10">
            <div className="w-1/3"></div>
            <div className="w-2/3"></div>
          </div>
        ))}
      </div>
      {/* 优惠 */}
      <div className="rounded-xl bg-green-50/20 my-4 p-4 flex flex-col gap-2">
        {Array.from({ length: 3 }).map(() => (
          <div className="flex flex-row justify-between h-10">
            <div className="w-1/3"></div>
            <div className="w-2/3"></div>
          </div>
        ))}
      </div>
      {/* 支付方式 */}
      <div className="rounded-xl bg-green-50/20 my-4 p-4  flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <div className="font-bold text-xl">支付方式</div>
        </div>
        {Array.from({ length: 2 }).map(() => (
          <div className="bg-gray-100/30 px-2 py-3 flex justify-between my-1 rounded-md h-10">
            <div className="w-2/3">立即支付</div>
            <div className="w-1/3"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
