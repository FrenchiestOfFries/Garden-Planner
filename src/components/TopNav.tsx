import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function TopNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  return (
    <div className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-neutral-200">
      <div className="mx-auto max-w-screen-md px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-wide">Garden Planner</Link>
        <div className="flex items-center gap-2">
          {!isHome && (
            <button
              onClick={() => navigate(-1)}
              className="px-3 py-1.5 rounded-xl border border-neutral-300 text-sm font-medium text-neutral-700 active:scale-[.99]"
            >
              ← Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
