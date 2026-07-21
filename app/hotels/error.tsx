'use client';
export default function HotelError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <div>
      <h2>酒店加载出错了</h2>
      <button onClick={() => unstable_retry()}>Try again</button>
    </div>
  );
}
