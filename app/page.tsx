import RecommendList from "@/app/home/Recommend";
import HotSearchPlaceholder from "./home/HotSearchPlaceholder";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '订酒店-就上携程旅行APP',
  description: '覆盖全球百万酒店，今日特价低至3折',
}

export default function Home() {
  return (
    <div>
      <HotSearchPlaceholder />
      <RecommendList />
    </div>
  );
}
