import React from "react";
import { Link } from "react-router-dom";

export default function TopNav() {
  return (
    <div className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <div className="mx-auto max-w-screen-md px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-wide">Garden Planner</Link>
        <div className="flex items-center gap-2">
          <Link
            to="/add"
            className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-sm font-medium active:scale-[.99]"
          >
            + Add Plant
          </Link>
        </div>
      </div>
    </div>
  );
}
