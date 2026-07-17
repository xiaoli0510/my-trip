import { recommendList } from "@/src/data/recommend";


export async function GET(){
  return Response.json(recommendList)
}