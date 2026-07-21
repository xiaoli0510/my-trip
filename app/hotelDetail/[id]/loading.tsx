export default function HotelDetailLoading() {
  return (
    <div className="animate-pulse">
      {/* 图片区域骨架 */}
      <div className="w-full relative h-50 bg-gray-200" />
      <div className="my-2 p-1">
        {/* 标题骨架 */}
        <div className="h-5 bg-gray-200 rounded w-2/3 my-2" />
        {/* 标签骨架 */}
        <div className="flex justify-start gap-2">
          {Array.from({ length: 3 }).map((_, index: number) => (
            <div key={index} className="bg-gray-200 rounded w-16 h-5" />
          ))}
        </div>
        {/* 评分+地址骨架 */}
        <div className="flex gap-2 my-2">
          <div className="h-16 bg-gray-200 rounded-xl w-2/5" />
          <div className="h-16 bg-gray-200 rounded-xl flex-1" />
        </div>

        {/* 房间列表骨架 */}
        <div className="space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="my-2 flex gap-2 h-24 bg-gray-200 rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}
