import React, { useEffect, useState } from "react";
import { IoPeople } from "react-icons/io5";
interface banner {
   title: string;
   description: string;
   startDate: Date;
   endDate: Date;
   img: string;
   counts: Number;
}

interface data {
   list: banner[];
}

export const Banner = (data: data) => {
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) % data.list.length);
      }, 2500);

      return () => clearInterval(interval);
   }, [data.list.length]);
   return (
      <div>
         <div className="mt-12">
            <p className="font-extrabold text-2xl">챌린지</p>
         </div>
         <div className="mt-4 carousel relative w-full h-44 rounded-3xl">
            {data.list.map((banner, index) => (
               <div
                  key={index}
                  className={`carousel-item absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                     index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
               >
                  <img
                     src={banner.img}
                     alt={`img-${index}`}
                     className="w-full object-cover z-0"
                  />
                  <div className="flex items-center top-3 right-5 absolute bg-black bg-opacity-55 rounded-md px-3 text-white">
                     <IoPeople className="fill-white mr-3" />
                     <p>{banner.counts.toLocaleString()}명</p>
                  </div>
                  <div className="w-full bg-black text-white bg-opacity-40 z-10 absolute top-24 pt-1 pl-2 -mt-2">
                     <p className="text-2xl">{banner.title}</p>
                     <p className="text-md">{banner.description}</p>
                  </div>
                  <div className="bg-black w-full text-gray-200 text-xl bg-opacity-40 z-10 absolute top-36 mt-1">
                     <p className="pl-4 justify-self-center">
                        모집마감 {banner.endDate.getFullYear()}.
                        {banner.endDate.getMonth() + 1}.
                        {banner.endDate.getDate()}
                     </p>
                  </div>
               </div>
            ))}

            <div></div>
         </div>
      </div>
   );
};
