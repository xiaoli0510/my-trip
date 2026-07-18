import { recommendList } from "@/src/data/recommend";
import { mockRecommendList } from "@/src/mock/recommend";



export async function GET(){
  return Response.json(mockRecommendList)
}