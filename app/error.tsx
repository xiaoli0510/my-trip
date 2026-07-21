"use client";
export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div>
      <div>出错了</div>
      <p>{error.message}</p>
    </div>
  );
}
