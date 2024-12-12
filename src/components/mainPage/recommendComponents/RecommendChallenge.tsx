import React, { useState } from "react";
import { BestChallengeItem } from "../bestComponents/BestChallengeItem.tsx";
import { IoAlertOutline } from "react-icons/io5";
interface props {
   list: item[];
}

interface item {
   title: string;
   description: string;
   startDate: Date;
   endDate: Date;
   img: string;
   counts: Number;
   category: string;
}

export const RecommendChallenge = (props: props) => {
   const [category, setCategory] = useState("all");
   const [filteredList, setFilteredList] = useState(props.list);

   const filterList = (state: string) => {
      setCategory(state);
      if (state !== "all") {
         setFilteredList(props.list.filter((item) => item.category === state));
      } else {
         setFilteredList(props.list);
      }
   };

   return (
      <div className="mt-10 mb-32">
         <div
            className="flex justify-self-start overflow-x-scroll pb-2 [&::-webkit-scrollbar]:hidden"
            style={{
               scrollbarWidth: "none",
               msOverflowStyle: "none",
            }}
         >
            <button
               type="button"
               className={`btn shadow-md rounded-3xl font-medium mr-3 ${
                  category === "all" ? "bg-red-400 text-white" : "bg-white"
               } `}
               onClick={() => filterList("all")}
            >
               전체
            </button>
            <button
               type="button"
               className={`btn shadow-md rounded-3xl font-medium mr-3 ${
                  category === "lifeStyle"
                     ? "bg-red-400 text-white"
                     : "bg-white"
               } `}
               onClick={() => filterList("lifeStyle")}
            >
               생활습관
            </button>
            <button
               type="button"
               className={`btn shadow-md rounded-3xl font-medium mr-3 ${
                  category === "exercise" ? "bg-red-400 text-white" : "bg-white"
               } `}
               onClick={() => filterList("exercise")}
            >
               운동
            </button>
            <button
               type="button"
               className={`btn shadow-md rounded-3xl font-medium mr-3 ${
                  category === "care" ? "bg-red-400 text-white" : "bg-white"
               } `}
               onClick={() => filterList("care")}
            >
               돌봄
            </button>
            <button
               type="button"
               className={`btn shadow-md rounded-3xl font-medium mr-3 ${
                  category === "study" ? "bg-red-400 text-white" : "bg-white"
               } `}
               onClick={() => filterList("study")}
            >
               공부
            </button>
         </div>

         <div>
            {filteredList.length > 0 ? (
               <div className="mt-4 grid grid-cols-2">
                  {filteredList.map((item) => (
                     <BestChallengeItem item={item} />
                  ))}
               </div>
            ) : (
               <div className="justify-self-center items-center mt-12">
                  <IoAlertOutline className="justify-self-center mb-5 size-20 text-gray-400" />
                  <p className="text-center text-2xl font-medium text-gray-400">
                     개설된 챌린지가 없습니다.
                  </p>
               </div>
            )}
         </div>
      </div>
   );
};
