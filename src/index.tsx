import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/mainPage/MainPage.tsx";
import { MyPage } from "./components/myPage/MyPage.tsx";
import BottomNav from "./components/mainPage/BottomNav.tsx";
import { ChallengeDetail } from "./components/challengePage/ChallengeDetail.tsx";

import { useLocation } from "react-router-dom";

function App() {
   const location = useLocation();

   // 숨기고 싶은 경로를 배열로 정의
   const hiddenPaths = ["/detail"];

   return (
      <>
         <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/myPage" element={<MyPage />} />
            <Route path="/detail" element={<ChallengeDetail />} />
         </Routes>
         {!hiddenPaths.includes(location.pathname) && <BottomNav />}
      </>
   );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </React.StrictMode>
);
