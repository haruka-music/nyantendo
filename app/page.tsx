"use client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "@/app/page/LonginPage/login";
import HomePage from "./page/HomePage/home";
import NyarbyPage from "./page/NyarbyPage/nyarby";

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
