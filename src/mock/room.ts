import Mock from 'mockjs';
import {  Room } from '../data/room';

const pickItems = (source:any[],min:number,max:number) => {
  return function(){
    const count = Mock.Random.integer(min,max);
    const shuffled = Mock.Random.shuffle(source);
    return shuffled.slice(0,count);
  }
}

export const mockRoomList:{list:Room[]} = Mock.mock({
  'list|4': [{      
      img: 'https://picsum.photos/400/300?random=@id',  // 用 @id 等随机值让每次请求不同                    // 生成 20 条
    'id|+1': 1,
    title: '@ctitle(5, 10)',              // 随机中文标题
    city: '@pick(["汕头", "潮州", "南澳"])',
    score: '@float(3.0, 5.0, 1, 1)',     // 3.0~5.0 一位小数
    'level|3-5': 1,                       // 3~5 星级
    tag: ["在线付", "立即确认", "部分禁烟"],
    originPrice: '@integer(100, 2000)',
    discountPrice: '@integer(80, 1500)',
    commentCount: '@integer(100, 5000)',
    facility:pickItems(['免费停车场', '畅享影音','宠物友好'],1,3),
    hasBreakfast:'@boolean',
    cancelTime:'@time',
    bedCount:1,
    bedSize:1.5,
    minArea:'@natural(10,20)',
    maxArea:'@natural(21,25)',
    checkInPerson:2,
    floor:'@natural',
    vipTag:['白银贵宾价','门店首单','4项优惠123']
  }],
});