import React from "react";
import { IoBatteryHalfOutline } from "react-icons/io5";
const userInfo = {
   name: "홍길동",
   charge: 30,
   cash: 200000,
   reward: 30000,
};
export const ChallengeStat = () => {
   return (
      <div>
         <div className="flex justify-between items-center mb-3">
            <p className="font-extrabold text-xl ml-2">🏃 챌린지 현황</p>
            <div
               className={`items-center px-2 rounded-md border-2 ${
                  userInfo.charge >= 50
                     ? "border-green-500 bg-green-50"
                     : "border-orange-500 bg-orange-50"
               }`}
            >
               <div className="flex gap-2 items-center">
                  {userInfo.charge < 50 ? (
                     <IoBatteryHalfOutline
                        className="size-7"
                        style={{ color: "orange" }}
                     />
                  ) : (
                     <IoBatteryHalfOutline
                        className="size-7"
                        style={{ color: "green" }}
                     />
                  )}
                  <div
                     className={`flex -mt-0.5 text-lg justify-center font-bold ${
                        userInfo.charge < 50
                           ? "text-orange-500"
                           : "text-green-500"
                     }`}
                  >
                     충전도 {userInfo.charge}%
                  </div>
               </div>
            </div>
         </div>
         <div className="border rounded-lg shadow-lg shadow-neutral-content items-center">
            <div className="flex pl-4 pr-4 w-full justify-center">
               <div className="w-1/3 text-center px-4 py-2">
                  <p className="font-extrabold text-2xl">4</p>
                  <p className="font-extrabold text-gray-400">참가중</p>
               </div>
               <div className="divider divider-horizontal py-3"></div>
               <div className="w-1/3 text-center px-4 py-2">
                  <p className="font-extrabold text-2xl">14</p>
                  <p className="font-extrabold text-gray-400">완료</p>
               </div>
               <div className="divider divider-horizontal py-3"></div>
               <div className="w-1/3 text-center px-4 py-2">
                  <p className="font-extrabold text-2xl">0</p>
                  <p className="font-extrabold text-gray-400">개설</p>
               </div>
            </div>
         </div>
         <div></div>
      </div>
   );
};
