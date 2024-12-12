import React from "react";

export const ChallengeStat = () => {
   return (
      <div>
         <div className="border rounded-lg shadow-md shadow-neutral-content items-center">
            <div className="flex pl-4 pr-4 w-full justify-center">
               <div className="w-1/3 text-center px-4 py-2">
                  <p className="font-extrabold text-2xl">4</p>
                  <p className="font-extrabold text-gray-400">참가중</p>
               </div>
               <div className="divider divider-horizontal"></div>
               <div className="w-1/3 text-center px-4 py-2">
                  <p className="font-extrabold text-2xl">14</p>
                  <p className="font-extrabold text-gray-400">완료</p>
               </div>
               <div className="divider divider-horizontal"></div>
               <div className="w-1/3 text-center px-4 py-2">
                  <p className="font-extrabold text-2xl">0</p>
                  <p className="font-extrabold text-gray-400">개설</p>
               </div>
            </div>
         </div>
      </div>
   );
};
