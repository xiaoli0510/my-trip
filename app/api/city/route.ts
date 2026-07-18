import {mockHotCityList} from '@/src/mock/city'

export async function GET() {
  return Response.json(mockHotCityList);
}
