export function POST(){
    return Response.json({
        isSuccess: true,
        msg:'收藏成功'
    })
}

//获取收藏的id
export function GET(){
    return Response.json({
        isSuccess: true,
        msg:'收藏成功',
        body:{
            list:[1,3,4]
        }
    })
}