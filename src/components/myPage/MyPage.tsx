import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { UserAbstract } from "./UserAbstract.tsx";
import { ChallengeStat } from "./ChallengeStat.tsx";

export const MyPage = () => {
   return (
      <div className="mt-4">
         <div className="flex mr-1 items-center justify-between">
            <p className="text-2xl font-extrabold ml-5">마이페이지</p>
            <button className="mr-3">
               <IoSettingsOutline className="size-8 h-12" />
            </button>
         </div>
         <div className="ml-4 mr-4">
            <UserAbstract />
            <ChallengeStat />
         </div>
      </div>
   );
};
