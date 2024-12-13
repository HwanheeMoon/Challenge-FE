import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FcMoneyTransfer, FcRating } from "react-icons/fc";
import { HiMiniUserCircle } from "react-icons/hi2";
import { IoBatteryHalfOutline } from "react-icons/io5";

export const UserAbstract = () => {
   const userInfo = {
      name: "홍길동",
      charge: 30,
      cash: 200000,
      reward: 30000,
   };

   return (
      <div>
         <div className="flex justify-start mt-5 items-center">
            <div className="flex mr-5">
               <HiMiniUserCircle className="text-gray-400 size-24" />
            </div>
            <div className="">
               <div className="flex-col items-center">
                  <div className="flex items-center">
                     <p className="flex text-2xl font-bold">{userInfo.name}</p>
                     <FaChevronRight className="flex-row size-6 ml-2" />
                  </div>
               </div>
            </div>
         </div>
         <div className="mt-5 grid grid-cols-2">
            <div className="justify-center grid grid-rows-3">
               <FcMoneyTransfer className="justify-self-center size-12" />
               <p className="text-center mt-2 font-bold text-lg text-stone-500">
                  예치금
               </p>
               <p className="text-2xl -mt-3 font-extrabold">
                  {userInfo.cash.toLocaleString()}원
               </p>
            </div>

            <div className="justify-center grid grid-rows-3">
               <FcRating className="justify-self-center size-12" />
               <p className="text-center mt-2 font-bold text-lg text-stone-500">
                  상금
               </p>
               <p className="text-2xl -mt-3 font-extrabold">
                  {userInfo.reward.toLocaleString()}원
               </p>
            </div>
         </div>
      </div>
   );
};
