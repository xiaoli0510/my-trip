"use client";
export default function HotelDetailError({
  error,
  unstable_retry,
}: {
  error: Error & { digest: string };
  unstable_retry: () => void;
}) {
  return (
    <div>
      <div>酒店详情加载失败</div>
      <p>{error.message}</p>
      <button onClick={() => unstable_retry()}>Try again</button>
    </div>
  );
}
