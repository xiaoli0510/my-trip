import { mockCommentList } from "@/src/mock/comment"
export function POST(){
    return Response.json({
        isSuccess: true,
        body:mockCommentList
    })
}