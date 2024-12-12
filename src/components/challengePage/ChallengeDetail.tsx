import React from "react";
import { FaAngleLeft, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface props {
   id: Number;
}

interface detail {
   title: string;
   description: string;
   startDate: Date;
   endDate: Date;
   img: string;
   counts: Number;
   category: string;
}

const item = {
   title: "달리기 챌린지",
   description: "매일 최소 3km를 달리며 유지!",
   startDate: new Date("2024-12-05"),
   endDate: new Date("2025-1-15"),
   img: "imgs/running.png",
   counts: 2404,
   category: "exercise",
};

export const ChallengeDetail = (props: props) => {
   const navigate = useNavigate();

   return (
      <div>
         <div className="relative">
            <img src={item.img} alt="img" className="h-72 w-full" />
            <button
               className={`bg-white border shadow-lg rounded-full ml-4 mt-4 absolute top-1 p-2`}
               onClick={() => {
                  navigate(-1);
               }}
            >
               <FaAngleLeft className={`size-8 font-light`} />
            </button>
            <button
               className={`bg-white border shadow-lg rounded-full ml-4 mt-4 absolute top-1 right-20 p-2`}
            >
               <FaShareAlt className={`size-7 font-light`} />
            </button>
            <button
               className={`bg-white border shadow-lg rounded-full ml-4 mt-4 absolute top-1 right-4 p-2`}
            >
               <FaRegBookmark className={`size-7 font-light`} />
            </button>
         </div>
         <div className={`mt-5 mx-auto ml-5 h-96`}>
            <p className={`text-extrabold font-extrabold text-4xl`}>
               {item.title}
            </p>
            <div className="flex mt-1 items-center">
               <IoPeople className="size-5 mr-2" />
               <p className={`font-bold text-lg`}>현재 {item.counts}명</p>
            </div>
         </div>
      </div>
   );
};
