import { useAtom } from "jotai";
import React from "react";
import { CiBookmark } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { topSt } from "../store/TopBarStore.ts";

const TopBar = () => {
   const [st, setSt] = useAtom(topSt);

   const borderColor = "#60a5fa";
   const selectedTextColor = "text-blue-400";
   const nonSelectedTextColor = "text-gray-500";

   return (
      <div>
         <div className="flex mt-7 justify-between gap-4 h-10">
            <label className="input bg-base-200 rounded-sm flex items-center gap-2 w-full h-10">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
               >
                  <path
                     fillRule="evenodd"
                     d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                     clipRule="evenodd"
                  />
               </svg>
               <input
                  type="text"
                  className="grow text-sm"
                  placeholder="어떤 습관을 가지고 싶으신가요?"
               />
            </label>

            <div className="flex gap-4">
               <CiBookmark className="h-10 w-10" />
               <CiShoppingCart className="h-10 w-10" />
            </div>
         </div>

         <div
            role="tablist"
            className="tabs mt-3 p-1 h-4 tab-border-2 tabs-bordered w-full text-gray-500 font-semibold"
         >
            <input
               type="radio"
               name="my_tabs_1"
               role="tab"
               className={`tab  ${
                  st === "home"
                     ? `${selectedTextColor} tab-border-3 font-bold`
                     : `${nonSelectedTextColor} border-gray-300`
               }`}
               style={
                  st === "home"
                     ? {
                          borderColor: `${borderColor}`,
                       }
                     : {}
               }
               aria-label="홈"
               onClick={() => {
                  setSt("home");
               }}
            />

            {/* <div role="tabpanel" className="tab-content p-10">Tab content 1</div> */}

            <input
               type="radio"
               name="my_tabs_1"
               role="tab"
               className={`tab  ${
                  st === "best"
                     ? `${selectedTextColor} tab-border-3 font-bold`
                     : `${nonSelectedTextColor} border-gray-300`
               }`}
               style={
                  st === "best"
                     ? {
                          borderColor: `${borderColor}`,
                       }
                     : {}
               }
               aria-label="인기"
               onClick={() => {
                  setSt("best");
               }}
            />
            {/* <div role="tabpanel" className="tab-content p-10">Tab content 2</div> */}

            <input
               type="radio"
               name="my_tabs_1"
               role="tab"
               className={`tab  ${
                  st === "new"
                     ? `${selectedTextColor} tab-border-3 font-bold`
                     : `${nonSelectedTextColor} border-gray-300`
               }`}
               style={
                  st === "new"
                     ? {
                          borderColor: `${borderColor}`,
                       }
                     : {}
               }
               aria-label="신규"
               onClick={() => {
                  setSt("new");
               }}
            />
            {/* <div role="tabpanel" className="tab-content p-10">Tab content 3</div> */}

            <input
               type="radio"
               name="my_tabs_1"
               role="tab"
               className={`tab  ${
                  st === "recom"
                     ? `${selectedTextColor} tab-border-3 font-bold`
                     : `${nonSelectedTextColor} border-gray-300`
               }`}
               style={
                  st === "recom"
                     ? {
                          borderColor: `${borderColor}`,
                       }
                     : {}
               }
               aria-label="추천"
               onClick={() => {
                  setSt("recom");
               }}
            />
            {/* <div role="tabpanel" className="tab-content p-10">Tab content 3</div> */}
         </div>
      </div>
   );
};

export default TopBar;
