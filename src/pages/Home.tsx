import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MONTH_PAIRS } from "../types";
import Container from "../components/Container";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const query = q.trim();
    navigate(query ? `/search?q=${encodeURIComponent(query)}` : "/search");
  }

  return (
    <Container>
      <div className="mt-4" />
      {/* [CHANGED] Replace 'By Month' header with a full-width search bar */}
      <form onSubmit={onSubmit} className="mb-3 mt-2">
        <SearchBar value={q} onChange={setQ} placeholder="Search all plants..." />
      </form>

      <div className="grid grid-cols-2 gap-3">
        {MONTH_PAIRS.map((pair) => (
          <Link key={pair.slug} to={`/months/${pair.slug}`}>
            <Card className="p-5 active:scale-[.99]">
              <div className="text-xl font-semibold">{pair.label}</div>
              <div className="text-xs text-neutral-600 mt-1">Tap to view plants active in these months</div> {/* [CHANGED] */}
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-4" />
      <Link to="/add" className="block">
        <Card className="p-5 text-center border-dashed">
          <div className="text-base font-semibold">➕ Add a Plant</div>
          <div className="text-xs text-neutral-700 mt-1">Create a new entry (saved locally for now)</div> {/* [CHANGED] */}
        </Card>
      </Link>
    </Container>
  );
}
