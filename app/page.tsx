"use client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./page/HomePage/home";

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
