import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/mainPage/MainPage.tsx";
import { MyPage } from "./components/myPage/MyPage.tsx";
import BottomNav from "./components/mainPage/BottomNav.tsx";
import { Home } from "./components/mainPage/Home.tsx";
import { ChallengeDetail } from "./components/challengePage/ChallengeDetail.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/myPage" element={<MyPage />} />
            <Route path="/detail" element={<ChallengeDetail id={1} />} />
         </Routes>
         <BottomNav />
      </BrowserRouter>
   </React.StrictMode>
);
