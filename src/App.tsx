import React from "react";
import { Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import Home from "./pages/Home";
import MonthListPage from "./pages/MonthListPage";
import PlantDetails from "./pages/PlantDetails";
import AddPlant from "./pages/AddPlant";
import NotFound from "./pages/NotFound";
import SearchPage from "./pages/SearchPage"; // [NEW]

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-100 text-slate-900">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/months/:slug" element={<MonthListPage />} />
        <Route path="/plant/:id" element={<PlantDetails />} />
        <Route path="/add" element={<AddPlant />} />
        <Route path="/search" element={<SearchPage />} /> {/* [NEW] */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}