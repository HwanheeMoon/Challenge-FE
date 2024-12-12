import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FcMoneyTransfer, FcRating } from "react-icons/fc";
import { IoBatteryHalfOutline } from "react-icons/io5";

export const UserAbstract = () => {
   const userInfo = {
      name: "홍길동",
      charge: 50,
      cash: 200000,
      reward: 30000,
   };

   return (
      <div>
         <div className="flex justify-start mt-7">
            <div className="flex mr-5">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-24"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
               >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
               </svg>
            </div>
            <div className="">
               <div className="flex-col">
                  <div className="flex items-center">
                     <p className="flex text-2xl font-bold mb-3">
                        {userInfo.name}
                     </p>
                     <FaChevronRight className="flex-row size-6 mb-3 ml-2" />
                  </div>
                  <div
                     className={`h-10 items-center w-40 rounded-lg border-2 ${
                        userInfo.charge >= 50
                           ? "border-green-500 bg-green-50"
                           : "border-orange-500 bg-orange-50"
                     }`}
                  >
                     <div className="flex items-center">
                        {userInfo.charge < 50 ? (
                           <IoBatteryHalfOutline
                              className="ml-2 size-8"
                              style={{ color: "orange" }}
                           />
                        ) : (
                           <IoBatteryHalfOutline
                              className="ml-2 size-8"
                              style={{ color: "green" }}
                           />
                        )}
                        <div
                           className={`ml-3 flex text-xl pt-1.5 justify-center font-extrabold ${
                              userInfo.charge < 50
                                 ? "text-orange-500"
                                 : "text-green-500"
                           }`}
                        >
                           충전도 {userInfo.charge} %
                        </div>
                     </div>
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
               <p className="text-2xl font-extrabold">
                  {userInfo.cash.toLocaleString()}원
               </p>
            </div>

            <div className="justify-center grid grid-rows-3">
               <FcRating className="justify-self-center size-12" />
               <p className="text-center mt-2 font-bold text-lg text-stone-500">
                  상금
               </p>
               <p className="text-2xl font-extrabold">
                  {userInfo.reward.toLocaleString()}원
               </p>
            </div>
         </div>
      </div>
   );
};
