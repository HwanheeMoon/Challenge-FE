import React, { useState } from "react";
import { useEffect } from "react";
import TopBar from "./TopBar.tsx";
import { Home } from "./Home.tsx";
import { useAtom } from "jotai";
import { topSt } from "../store/TopBarStore.ts";
import { BestChallenge } from "./bestComponents/BestChallenge.tsx";
import { NewChallenge } from "./newComponents/NewChallenge.tsx";
import { RecommendChallenge } from "./recommendComponents/RecommendChallenge.tsx";

interface item {
   title: string;
   description: string;
   startDate: Date;
   endDate: Date;
   img: string;
   counts: Number;
   category: string;
}
const MainPage = () => {
   useEffect(() => {}, []);

   const [st, setSt] = useAtom(topSt);
   const challengeList: item[] = [
      {
         title: "달리기 챌린지",
         description: "매일 최소 3km를 달리며 유지!",
         startDate: new Date("2024-12-05"),
         endDate: new Date("2025-1-15"),
         img: "imgs/running.png",
         counts: 2404,
         category: "exercise",
      },
      {
         title: "독서 챌린지",
         description: "하루에 최소 30분씩 독서하기",
         startDate: new Date("2024-12-20"),
         endDate: new Date("2025-01-20"),
         img: "imgs/reading.png",
         counts: 4443,
         category: "lifeStyle",
      },
      {
         title: "영어 스피킹 챌린지",
         description: "매일 15분 이상 영어로 말하기 연습!",
         startDate: new Date("2024-12-18"),
         endDate: new Date("2025-02-18"),
         img: "imgs/english.png",
         counts: 41341,
         category: "study",
      },
      {
         title: "저녁 6시 이후 금식 챌린지",
         description: "매일 저녁 6시 이후에는 금식!",
         startDate: new Date("2024-12-22"),
         endDate: new Date("2025-1-22"),
         img: "imgs/diet.png",
         counts: 4434,
         category: "lifeStyle",
      },
      {
         title: "명상 챌린지",
         description: "하루 10분씩 명상을 통해 스트레스를 관리합니다.",
         startDate: new Date("2024-12-25"),
         endDate: new Date("2025-1-25"),
         img: "imgs/image.png",
         counts: 2133,
         category: "lifeStyle",
      },
   ];

   return (
      <div className="ml-4 mr-4 mt-12">
         <TopBar />
         <div>
            {st === "home" && <Home list={challengeList} />}
            {st === "best" && <BestChallenge list={challengeList} />}
            {st === "new" && <NewChallenge list={challengeList} />}
            {st === "recom" && <RecommendChallenge list={challengeList} />}
         </div>
      </div>
   );
};

export default MainPage;
