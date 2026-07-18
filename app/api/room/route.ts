import { mockRoomList} from '@/src/mock/room'

export async function GET(){
  return Response.json(mockRoomList)
}