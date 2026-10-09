"use client";
import dynamic from "next/dynamic";
import { Route, Routes } from "react-router-dom";
import LoginPage from "@/app/page/LonginPage/login";
import HomePage from "./page/HomePage/home";
import NyarbyPage from "./page/NyarbyPage/nyarby";

const Router = dynamic(
  () => import("react-router-dom").then((module) => module.BrowserRouter),
  { ssr: false },
);

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/nyarby" element={<NyarbyPage />} />
      </Routes>
    </Router>
  );
}
