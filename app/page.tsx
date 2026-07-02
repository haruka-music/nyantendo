"use client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./page/HomePage/home";
import NyarbyPage from "./page/NyarbyPage/nyarby";

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nyarby" element={<NyarbyPage />} />
      </Routes>
    </Router>
  );
}
