import Mock from "mockjs";

export const mockHotCityList = Mock.mock({
  "list|20": [
    {
      place: '@pick(["汕头", "潮州", "南澳"])',
      "id|+1": 1,
    },
  ],
});
