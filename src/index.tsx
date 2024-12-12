import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/mainPage/MainPage.tsx";
import { MyPage } from "./components/myPage/MyPage.tsx";
import BottomNav from "./components/mainPage/BottomNav.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<App />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/myPage" element={<MyPage />} />
         </Routes>
         <BottomNav />
      </BrowserRouter>
   </React.StrictMode>
);
