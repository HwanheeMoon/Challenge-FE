import { useAtom } from "jotai";
import React from "react";
import { AiFillEdit, AiOutlineEdit } from "react-icons/ai";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import { IoCamera, IoCameraOutline } from "react-icons/io5";
import { LuLayoutGrid } from "react-icons/lu";
import { TbBrandSafari } from "react-icons/tb";
import { PageState } from "../store/NavStore.ts";
import { useNavigate } from "react-router-dom";
import { PiLayoutFill } from "react-icons/pi";
import { GoHome, GoHomeFill } from "react-icons/go";

const BottomNav = () => {
   const [pageSt, setPageSt] = useAtom(PageState);

   const navigate = useNavigate();

   return (
      <div className="btm-nav w-screen border-2 text-sm font-semibold mx-auto  h-20">
         <button
            onClick={() => {
               setPageSt("home");
               navigate("/main");
            }}
         >
            {pageSt === "home" ? (
               <div className=" text-black">
                  <GoHomeFill className="size-8" />
                  <p>홈</p>
               </div>
            ) : (
               <div className="text-gray-400">
                  <GoHome className="size-8" />
                  <p>홈</p>
               </div>
            )}
         </button>

         <button
            onClick={() => {
               setPageSt("edit");
            }}
         >
            {pageSt === "edit" ? (
               <div className=" text-black">
                  <AiFillEdit className="size-8" />
                  <p>개설</p>
               </div>
            ) : (
               <div className="text-gray-400">
                  <AiOutlineEdit className="size-8" />
                  <p>개설</p>
               </div>
            )}
         </button>

         <button
            onClick={() => {
               setPageSt("auth");
            }}
         >
            {pageSt === "auth" ? (
               <div className=" text-black">
                  <IoCamera className="size-8" />
                  <p>인증</p>
               </div>
            ) : (
               <div className="text-gray-400">
                  <IoCameraOutline className="size-8" />
                  <p>인증</p>
               </div>
            )}
         </button>

         <button
            onClick={() => {
               setPageSt("feed");
            }}
         >
            {pageSt === "feed" ? (
               <div className=" text-black">
                  <LuLayoutGrid className="size-8 fill-black" />
                  <p>피드</p>
               </div>
            ) : (
               <div className="text-gray-400">
                  <LuLayoutGrid className="size-8" />
                  <p>피드</p>
               </div>
            )}
         </button>

         <button
            className="justify-self-center"
            onClick={() => {
               setPageSt("myPage");
               navigate("/myPage");
            }}
         >
            {pageSt === "myPage" ? (
               <div className=" text-black">
                  <FaUserCircle className="justify-self-center size-8" />
                  <p>내 정보</p>
               </div>
            ) : (
               <div className="text-gray-400">
                  <FaRegUserCircle className="justify-self-center size-8" />
                  <p>내 정보</p>
               </div>
            )}
         </button>
      </div>
   );
};

export default BottomNav;