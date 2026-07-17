import { hotCityList } from "@/src/data/city";

export async function GET() {
  return Response.json(hotCityList);
}
