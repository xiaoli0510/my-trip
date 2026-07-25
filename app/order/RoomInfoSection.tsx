"use client";

import { CircleMinus, CirclePlus } from "lucide-react";

export interface RoomInfo {
  roomCount: number;
  name: string;
  phone: string;
}
interface Props {
  info: RoomInfo; //房间info
  onUpdateRoomInfo: (type: keyof RoomInfo, val: string) => void;
  onMinus: () => void;
  onAdd: () => void;
}
//组件只显示，状态和事件在父组件里面控制
export default function OrderRoom({ info, onUpdateRoomInfo, onMinus,onAdd }: Props) {
  return (
    <div className="rounded-xl bg-white my-4 p-4 flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <div className="font-bold text-xl">订房信息</div>
        <div className="flex gap-2">
          <CircleMinus
            size={16}
            color={info.roomCount > 1 ? "#0086f6" : "#ddd"}
            onClick={onMinus}
          />
          <span>{info.roomCount}间</span>
          <CirclePlus
            size={16}
            color="#0086f6"
            onClick={onAdd}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div>住客姓名</div>
        <input
          value={info.name}
          onChange={(e) => onUpdateRoomInfo("name", e.target.value)}
        />
      </div>
      <div className="flex flex-row justify-between">
        <div>联系手机</div>
        <input
          value={info.phone}
          onChange={(e) => onUpdateRoomInfo("phone", e.target.value)}
        />
      </div>
    </div>
  );
}
