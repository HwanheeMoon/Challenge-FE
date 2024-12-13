import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import { IoPeople } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface detail {
   title: string;
   description: string;
   startDate: Date;
   endDate: Date;
   img: string;
   counts: Number;
   category: string;
}

const days: string[] = ["일", "월", "화", "수", "목", "금", "토"];

const item = {
   title: "달리기 챌린지",
   description: "매일 최소 3km를 달리며 유지!",
   startDate: new Date("2024-12-21"),
   endDate: new Date("2025-1-15"),
   img: "imgs/running.png",
   counts: 2404,
   category: "exercise",
};

export const ChallengeDetail = () => {
   const navigate = useNavigate();
   const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
   });

   const [block, setBlock] = useState(true);

   useEffect(() => {
      const calculateTimeLeft = () => {
         const now = new Date().getTime();
         const start = item.startDate.getTime();
         const difference = start - now;

         if (difference > 0) {
            setBlock(true);
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
               (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
               (difference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
         } else {
            setBlock(false);
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
         }
      };

      const timer = setInterval(calculateTimeLeft, 1000);
      return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 제거
   }, []);

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
         {/**
          * 디테일 body
          */}
         <div className={`mt-5 mx-auto ml-5 h-72`}>
            <div className="flex items-center mb-2">
               <HiBadgeCheck className="size-6 mr-1 text-stone-500" />
               <p className="font-semibold text-stone-500">공식 인증 챌린지</p>
            </div>
            <p className={`font-extrabold text-3xl`}>{item.title}</p>
            <div className="flex mt-1 items-center">
               <IoPeople className="size-5 mr-2" />
               <p className={`font-bold text-lg`}>
                  현재 {item.counts.toLocaleString()}명
               </p>
            </div>
            <hr className="mb-4 mt-2 mr-4" />
            <div>
               <div className="mt-2 mb-3">
                  {block ? (
                     <div>
                        <div className="font-semibold mb-1">
                           챌린지 시작까지
                        </div>
                        <div className="grid grid-flow-col gap-2 text-center auto-cols-max items-center font-semibold">
                           <div className="flex flex-col p-2 border bg-white rounded-box text-black text-xs">
                              <span className="countdown text-base">
                                 <span
                                    style={
                                       {
                                          "--value": `${timeLeft.days}`,
                                       } as React.CSSProperties
                                    }
                                 ></span>
                              </span>
                           </div>
                           <div>일</div>
                           <div className="flex flex-col p-2 rounded-box border bg-white  text-black text-xs">
                              <span className="countdown text-base">
                                 <span
                                    style={
                                       {
                                          "--value": `${timeLeft.hours}`,
                                       } as React.CSSProperties
                                    }
                                 ></span>
                              </span>
                           </div>
                           <div>시간</div>
                           <div className="flex  flex-col p-2 border bg-white rounded-box text-black text-xs">
                              <span className="countdown text-base">
                                 <span
                                    style={
                                       {
                                          "--value": `${timeLeft.minutes}`,
                                       } as React.CSSProperties
                                    }
                                 ></span>
                              </span>
                           </div>
                           <div>분</div>
                           <div className="flex border  flex-col p-2 bg-white rounded-box text-black text-xs">
                              <span className="countdown text-base">
                                 <span
                                    style={
                                       {
                                          "--value": timeLeft.seconds,
                                       } as React.CSSProperties
                                    }
                                 ></span>
                              </span>
                           </div>
                           <div>초</div>
                           <div>남음</div>
                        </div>
                     </div>
                  ) : (
                     <div></div>
                  )}
               </div>

               <p className={`font-semibold`}>챌린지 기간</p>
               <p className={`font-semibold text-lg`}>
                  {item.startDate.toLocaleDateString()}{" "}
                  {days[item.startDate.getDay()]} ~{" "}
                  {item.endDate.toLocaleDateString()}{" "}
                  {days[item.endDate.getDay()]}
               </p>
            </div>
         </div>
         <div className="w-screen h-3 bg-gray-200"></div>

         <div></div>

         <div className="btm-nav border-t-2">
            <button
               className={`btn bg-blue-400 max-w-80 text-lg ${
                  block ? "disabled" : "text-white"
               }`}
            >
               {block ? "아직 참가 할 수 없어요" : "참가하기"}
            </button>
         </div>
      </div>
   );
};
