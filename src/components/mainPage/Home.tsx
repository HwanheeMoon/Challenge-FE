import React from "react";
import { Banner } from "./bannerComponents/Banner.tsx";
import Category from "./Category.tsx";

interface data {
   list: banner[];
}

interface banner {
   title: string;
   description: string;
   startDate: Date;
   endDate: Date;
   img: string;
   counts: Number;
}
export const Home = (props: data) => {
   return (
      <div>
         <Banner list={props.list} />
         <Category />
      </div>
   );
};
