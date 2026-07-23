"use client";

import {
  CircleMinus,
  CirclePlus,
  Baby,
  TowelRack,
  UserRound,
  X,
} from "lucide-react";
import { useState } from "react";

interface RoomInfo {
  roomCount: number;
  adult: number;
  child: number;
}
//选择人数和房间数
export default function PersonRoomModal() {
  const infoStorage = localStorage.getItem("info");

  const initialInfo = infoStorage
    ? JSON.parse(infoStorage)
    : {
        roomCount: 1,
        adult: 1,
        child: 1,
      };
  const [displayInfo, setDisplayInfo] = useState(initialInfo);
  const [info, setInfo] = useState(initialInfo);
  const onAdd = (type: keyof RoomInfo) => {
    setInfo({
      ...info,
      roomCount: info[type] + 1,
    });
  };
  const onMinus = (type: keyof RoomInfo) => {
    setInfo({
      ...info,
      roomCount: info[type] - 1,
    });
  };
  const onSubmit = () => {
    setDisplayInfo({
      ...displayInfo,
      ...info,
    });
    localStorage.setItem("info", JSON.stringify(displayInfo));
    console.log(11111111, displayInfo);
  };
  return (
    <div>
      <div>
        <div className="text-right">间数人数</div>
        <div className="flex font-bold gap-2">
          <div className="flex justify-around gap-1">
            {displayInfo.roomCount}
            <TowelRack size={16} />
          </div>
          <div className="flex justify-around gap-1">
            {displayInfo.adult}
            <UserRound size={16} />
          </div>
          <div className="flex justify-around gap-1">
            {displayInfo.child}
            <Baby size={16} />
          </div>
        </div>
      </div>

      <div className="w-screen h-screen absolute left-0 top-0 right-0 bottom-0 bg-[rgba(0,0,0,.2)] z-50">
        <div className="fixed bottom-0 left-0 w-full  pb-20 bg-white">
          <span className="absolute top-1 left-1.5">
            <X size={16} />
          </span>
          <h3 className="font-bold text-2xl text-center my-3">
            选择客房和入住人数
          </h3>
          <div className="bg-green-50/20 text-xs px-2">
            入住人数较多时，试试增加间数
          </div>
          <div className="px-2">
            <div className="flex justify-between py-3 border-b border-gray-100">
              <div>间数</div>
              <div className="flex gap-2">
                <CircleMinus
                  size={16}
                  color={info.roomCount > 0 ? "#0086f6" : "#ddd"}
                  onClick={() => onMinus("roomCount")}
                />
                <span>{info.roomCount}</span>
                <CirclePlus
                  size={16}
                  color="#0086f6"
                  onClick={() => onAdd("roomCount")}
                />
              </div>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-100">
              <div>成人数</div>
              <div className="flex gap-2">
                <CircleMinus
                  size={16}
                  color={info.adult > 0 ? "#0086f6" : "#ddd"}
                  onClick={() => onMinus("roomCount")}
                />
                <span>{info.adult}</span>
                <CirclePlus
                  size={16}
                  color="#0086f6"
                  onClick={() => onAdd("adult")}
                />
              </div>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-100">
              <div>儿童数</div>
              <div className="flex gap-2">
                <CircleMinus
                  size={16}
                  color={info.child > 0 ? "#0086f6" : "#ddd"}
                  onClick={() => onMinus("roomCount")}
                />
                <span>{info.child}</span>
                <CirclePlus
                  size={16}
                  color="#0086f6"
                  onClick={() => onAdd("child")}
                />
              </div>
            </div>
            <div
              className="bg-theme text-white rounded-[5px] w-full py-2 text-center"
              onClick={() => onSubmit()}
            >
              完成
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
