# 本周总目标（Mini 携程）
做出这些页面就够练一轮：

首页：搜索框（目的地 / 日期）+ 金刚区入口
目的地 / 酒店列表
酒店详情（图、价格、设施、下单入口）
订单确认（假下单）
我的行程（可顺手塞你汕头潮州 3 天）
底部 Tab（首页 / 行程 / 我的）
技术主线：App Router、布局、动态路由、Server/Client 组件、searchParams、Route Handler、基础状态。



#  逐日进度
周二 7/14 · 搭骨架（5h）
上午

跑通项目，看清 app/ 目录
定信息架构：路由表写在纸上/备忘录
建基础布局：layout、全局样式、颜色变量（携程蓝可简化）
下午

首页静态版：顶栏 + 搜索区占位 + 金刚区（酒店/门票/火车票…先做 UI）
底部 Tab 组件（先用 Link，可先不做高亮逻辑）
当日完成：打开首页像「旅游 App」，路由空壳齐了。

周三 7/15 · 数据与列表（5h）
上午

设计类型：City / Hotel / TripDay
写 data/mock.ts（汕头、潮州、南澳几家假酒店就行）
分清 Server Component 默认渲染 vs 何时加 "use client"
下午

/hotels 列表页：卡片、价格、评分
支持 URL 查询：/hotels?city=汕头（练 searchParams）
首页搜索 → 跳列表
当日完成：能搜城市并看到列表。

周四 7/16 · 详情与动态路由（5h）
上午

动态路由：/hotels/[id]
generateStaticParams 或直接按 id 查 mock（二选一，先简单）
next/image 规范用法
下午

酒店详情：头图、设施、房型假数据、底部「订」按钮
列表 → 详情跳转
空状态 / 找不到 id 的 not-found
当日完成：完整「搜 → 列表 → 详情」链路。

周五 7/17 · 交互与下单流（5h）
上午

日期选择、人数（Client 组件）
理解受控表单；状态先放组件内，别急着上全局库
下午

/booking 或 /hotels/[id]/book：确认页（入住日、总价）
「提交订单」→ 跳成功页（订单存 localStorage 即可）
「我的」页读出本地订单列表
当日完成：假下单闭环（不接支付）。

周六 7/18 · 行程模块（贴合你刚玩的）（5h）
上午

行程数据结构：天、地点、交通、备注
页面：/trips、/trips/[id]
下午

做一趟「汕头潮州南澳 3 日」示例行程（你真实路线可写进去）
行程详情：按天时间线
首页入口「我的行程」
当日完成：旅游 App 里最有辨识度的一块出来了。

周日 7/19 · API 与体验打磨（5h）
上午

app/api/hotels/route.ts：用 Route Handler 返回 JSON
列表改为 fetch 自己的 API（体会服务端/客户端取数差异）
下午

Loading UI（loading.tsx）
简单筛选：价格排序 / 仅看某城
移动端宽度优先（模拟手机框）
修样式、空状态、小 bug
当日完成：像个能演示的作品，而不只是作业页。

周一 7/20 · 收束与复盘（5h，可减量）
上午

npm run build，修类型错误
写一页 README：功能列表、路由图、本周学到的 5 点
下午

选做 1 个加深：登录假墙 / 收藏酒店 / 火车票列表 UI
或录 1 分钟操作演示给自己看
当日完成：本周 MVP 封版。

# 本周刻意练到的 Next.js 点
概念	安排在哪天
app 布局与嵌套路由
二
Server / Client 组件
三–五
searchParams
三
动态路由 [id]
四
客户端交互与表单
五
Route Handler
日
loading / not-found
四、日
图片与移动布局
四、日



今天的：

我先了解一下项目的整体结构和相关文件，再做全面的 code review。

Read [](file:///d%3A/study/my-trip/app/book/page.tsx#1-1), lines 1 to 150

Read [](file:///d%3A/study/my-trip/src/data/room.ts)

Read [](file:///d%3A/study/my-trip/app/layout.tsx)

Read [](file:///d%3A/study/my-trip/src/mock/room.ts)

Read [](file:///d%3A/study/my-trip/app/api/room/route.ts)

Read [](file:///d%3A/study/my-trip/app/api/hotel/route.ts)

Read [](file:///d%3A/study/my-trip/app/api/city/route.ts)

Read [](file:///d%3A/study/my-trip/app/api/recommend/route.ts)

Read [](file:///d%3A/study/my-trip/package.json)

Read [](file:///d%3A/study/my-trip/app/hotelDetail/%5Bid%5D/page.tsx#1-1), lines 1 to 100

Read [](file:///d%3A/study/my-trip/app/hotelDetail/%5Bid%5D/page.tsx#100-100), lines 100 to 149

Read [](file:///d%3A/study/my-trip/app/globals.css)

Read [](file:///d%3A/study/my-trip/src/data/hotel.ts)

现在我已经全面了解了项目结构，以下是完整的 code review 和优化建议。

---

## 📋 Code Review — page.tsx

### 🔴 严重问题

| # | 问题 | 说明 |
|---|------|------|
| 1 | **价格硬编码** | `¥246` 是硬编码的，没有从 URL、API 或 props 获取真实价格 |
| 2 | **折扣券显示 Bug** | `减少¥23{discount.coupon}` → 实际渲染为 `减少¥2350`，应该改为 `减少¥{discount.coupon}` |
| 3 | **`onMinus` 无下限检查** | `roomCount` 可以减到负数 |
| 4 | **手机号用 number 类型** | `phone: 12345678901` 作为 number 会丢失前导零，应改为 `string` |

### 🟡 代码质量问题

| # | 问题 | 说明 |
|---|------|------|
| 5 | **未使用的导入** | `Baby`, `TowelRack`, `UserRound`, `X` 从 `lucide-react` 导入但从未使用 |
| 6 | **未使用的接口定义** | `RoomInfo` 和 `DiscountInfo` 定义但未使用，state 类型直接内联了 |
| 7 | **`setDiscount` 从未调用** | discount state 定义了 setter 但从未使用，数据完全静态 |
| 8 | **缺少函数式更新** | `setInfo({...info, roomCount: info.roomCount + 1})` 应改用 `setInfo(prev => ({...prev, roomCount: prev.roomCount + 1}))`，多并发更新时有闭包问题 |
| 9 | **协议 checkbox 无交互** | 显示"已阅读并同意"但没有实际 state 追踪是否勾选 |
| 10 | **`onSureBook` 无实际逻辑** | 只是 `console.log`，没有验证、API 调用或跳转 |

### 🟢 架构/设计建议（针对练习 Next.js）

| # | 建议 | 说明 |
|---|------|------|
| 11 | **用 `searchParams` 传参** | 从 `RoomCard` 跳转时带上 `hotelId&roomId&price`，使 BookPage 获取真实数据 |
| 12 | **使用 Route Handler 提交订单** | 创建 `POST /api/order` 处理订单提交，练习 API Routes |
| 13 | **拆分组件** | 将房间信息、优惠、支付方式拆为独立组件 |
| 14 | **添加 React Hook 管理表单** | 可以自己写一个 `useBookingForm` 自定义 hook |
| 15 | **增加 form 验证** | 姓名至少2字、手机号11位校验 |
| 16 | **添加 error/loading 边界** | 利用 Next.js 的 `error.tsx` 和 `loading.tsx` |

---

## 🎯 今日下午 3 小时工作计划

### ⏰ 13:00 - 14:00 | BookPage 修复（1h）

| 任务 | 细节 |
|------|------|
| **修复 Bug** | 折扣券显示修正、onMinus 下限保护、phone 类型改为 string |
| **清理代码** | 移除未使用的导入和接口定义 |
| **函数式更新** | 将 setInfo 改为 `prev =>` 模式 |

### ⏰ 14:00 - 15:30 | 数据流打通（1.5h）

| 任务 | 细节 |
|------|------|
| **使用 searchParams** | 修改 `RoomCard` 跳转到 `/book?hotelId=xxx&price=246`，BookPage 读取参数展示真实价格 |
| **创建 API Route** | `app/api/order/route.ts` 处理 POST 请求，接收订房数据并返回成功响应 |
| **对接 onSureBook** | 调用 `POST /api/order`，成功后跳转回首页并提示 |

### ⏰ 15:30 - 16:00 | 组件拆分 + 表单验证（0.5h）

| 任务 | 细节 |
|------|------|
| **拆分组件** | 提取 `RoomInfoSection`、`DiscountSection`、`PaymentSection` 三个子组件 |
| **表单验证** | 添加姓名（≥2字符）、手机号（11位数字）、协议勾选 的校验逻辑 |

---

### 💡 扩展练习建议（今日可选）

如果 3 小时内还有余量，可尝试：

1. **添加 `loading.tsx`** 给 BookPage 添加加载骨架屏
2. **使用 React Server Component** 将价格明细部分改为 Server Component 获取数据
3. **添加 `generateMetadata`** 动态设置 BookPage 的页面标题

需要我开始实施上述计划中的某些任务吗？