export default function HotelDetailLoading() {
  return (
    <div>
      <div className="w-full relative h-50"></div>
      <div className="my-2 p-1">
        <div className="flex justify-start">
          <h3></h3>
        </div>
        <div className="flex justify-start gap-2">
          {Array.from({ length: 4 }).map((_, index: number) => (
            <div key={index} className="bg-blue-50/40 text-xs"></div>
          ))}
        </div>

        {Array.from({ length: 10 }).map((item) => (
          <div className="flex justify-between gap-2 mb-2 bg-blue-50/40 p-2 h-50">
            <div className="relative w-1/5 flex-none h-30"></div>
            <div className="flex-auto"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
