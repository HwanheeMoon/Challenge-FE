import React from "react";
import { useEffect } from "react";
import TopBar from "./TopBar.tsx";
import Category from "./Category.tsx";

const MainPage = () => {
   useEffect(() => {}, []);

   return (
      <div className="ml-4 mr-4">
         <TopBar />

         <div className="container mt-12">
            <div className="carousel w-full">
               <div className="carousel-item w-full">
                  <img src="" alt="img1" className="w-full" />
               </div>
            </div>

            <div className="carousel w-full">
               <div className="carousel-item w-full">
                  <img src="" alt="img1" className="w-full" />
               </div>
            </div>

            <div className="carousel w-full">
               <div className="carousel-item w-full">
                  <img src="" alt="img1" className="w-full" />
               </div>
            </div>
         </div>

         <Category />
      </div>
   );
};

export default MainPage;
