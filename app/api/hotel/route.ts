import { hotelData } from "@/src/data/hotel";
import {mockHotelList} from '@/src/mock/hotel'

export async function GET(){
  return Response.json(mockHotelList)
}