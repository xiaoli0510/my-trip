import Mock from 'mockjs';

const pickItems = (source:any[],min:number,max:number) => {
  return function(){
    const count = Mock.Random.integer(min,max);
    const shuffled = Mock.Random.shuffle(source);
    return shuffled.slice(0,count);
  }
}

export const mockHotelList = Mock.mock({
  'list|20': [{      
      img: 'https://picsum.photos/400/300?random=@id',  // 用 @id 等随机值让每次请求不同                    // 生成 20 条
    'id|+1': 1,
    title: '@ctitle(5, 10)',              // 随机中文标题
    city: '@pick(["汕头", "潮州", "南澳"])',
    score: '@float(3.0, 5.0, 1, 1)',     // 3.0~5.0 一位小数
    'level|3-5': 1,                       // 3~5 星级
    tag: ['拍照好看', '阳台', '美食'],
    near:pickItems(['万象城', '小公园'],1,3),
    originPrice: '@integer(100, 2000)',
    discountPrice: '@integer(80, 1500)',
    commentCount: '@integer(100, 5000)',
  }],
});