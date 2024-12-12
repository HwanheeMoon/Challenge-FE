import React, { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const TopBar = () => {
   const [tabIndex, setTabIndex] = useState("home");

   return (
      <div>
         <div className="flex mt-7 justify-between gap-4 ">
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
                  tabIndex === "home"
                     ? "text-red-400 tab-border-3 font-bold"
                     : "text-black border-gray-300"
               }`}
               style={
                  tabIndex === "home"
                     ? {
                          borderColor: "#ff6f70",
                       }
                     : {}
               }
               aria-label="홈"
               defaultChecked
               onClick={() => {
                  setTabIndex("home");
               }}
            />

            {/* <div role="tabpanel" className="tab-content p-10">Tab content 1</div> */}

            <input
               type="radio"
               name="my_tabs_1"
               role="tab"
               className={`tab  ${
                  tabIndex === "best"
                     ? "text-red-400 tab-border-3 font-bold "
                     : "text-black border-gray-300"
               }`}
               style={
                  tabIndex === "best"
                     ? {
                          borderColor: "#ff6f70",
                       }
                     : {}
               }
               aria-label="인기"
               onClick={() => {
                  setTabIndex("best");
               }}
            />
            {/* <div role="tabpanel" className="tab-content p-10">Tab content 2</div> */}

            <input
               type="radio"
               name="my_tabs_1"
               role="tab"
               className={`tab  ${
                  tabIndex === "new"
                     ? "text-red-400 tab-border-3 font-bold "
                     : "text-black border-gray-300"
               }`}
               style={
                  tabIndex === "new"
                     ? {
                          borderColor: "#ff6f70",
                       }
                     : {}
               }
               aria-label="신규"
               defaultChecked
               onClick={() => {
                  setTabIndex("new");
               }}
            />
            {/* <div role="tabpanel" className="tab-content p-10">Tab content 3</div> */}

            <input
               type="radio"
               name="my_tabs_1"
               role="tab"
               className={`tab  ${
                  tabIndex === "recom"
                     ? "text-red-400 tab-border-3 font-bold "
                     : "text-black border-gray-300"
               }`}
               style={
                  tabIndex === "recom"
                     ? {
                          borderColor: "#ff6f70",
                       }
                     : {}
               }
               aria-label="추천"
               defaultChecked
               onClick={() => {
                  setTabIndex("recom");
               }}
            />
            {/* <div role="tabpanel" className="tab-content p-10">Tab content 3</div> */}
         </div>
      </div>
   );
};

export default TopBar;
