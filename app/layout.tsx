import type { Metadata, Viewport } from "next";
import "./globals.css";
import BottomNav from "./home/BottomNav";

export const metadata: Metadata = {
  title: "my trip",
  description: "trip",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="mx-auto w-full max-w-md h-full min-h-full relative pb-16">
          {children}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
