import Mock from "mockjs";
import {City} from '@/src/data/city'

export const mockHotCityList:{list:City[]} = Mock.mock({
  "list|3": [
    {
      place: '@pick(["汕头", "潮州", "南澳"])',
      "id|+1": 1,
    },
  ],
});
