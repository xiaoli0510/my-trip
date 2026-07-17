import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <h1>404 - Page Not Found</h1>
         <Link href="/" className="text-theme">去首页吧</Link>
      </body>
    </html>
  )
}