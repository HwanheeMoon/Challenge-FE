import React from "react";
import { IoPeople } from "react-icons/io5";
interface props {
   item: item;
}

interface item {
   title: string;
   description: string;
   startDate: Date;
   endDate: Date;
   img: string;
   counts: Number;
}
export const NewChallengeItem = (props: props) => {
   return (
      <div className="rounded-lg ml-2 mb-3 mr-2 justify-self-center">
         <div className="relative">
            <img src={props.item.img} alt="img" className="rounded-lg h-32" />
            <div className="flex rounded-lg px-2 items-center absolute text-white top-2 right-2 bg-black bg-opacity-45">
               <IoPeople className="fill-white mr-2" />
               {props.item.counts.toLocaleString()}명
            </div>
            <div className="w-full rounded-b-lg text-white text-center bg-black bg-opacity-55 absolute bottom-0">
               마감{" "}
               {Math.floor(
                  (new Date(props.item.endDate).getTime() -
                     new Date().getTime()) /
                     (1000 * 60 * 60 * 24)
               )}
               일 남음
            </div>
         </div>
         <div className="mt-2 text-xl font-extrabold">{props.item.title}</div>
         <div className="text-sm font-bold text-gray-400">
            {props.item.startDate.getFullYear()}.
            {props.item.startDate.getMonth() + 1}.
            {props.item.startDate.getDate()} 시작
         </div>
      </div>
   );
};
