import React from "react";
import { Link } from "react-router-dom";
import { MONTH_PAIRS } from "../types";
import Container from "../components/Container";
import Card from "../components/Card";

export default function Home() {
  return (
    <Container>
      <div className="mt-4" />
      <div className="flex items-center justify-between mb-3 mt-4">
        <h2 className="text-lg font-semibold">By Month</h2>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {MONTH_PAIRS.map((pair) => (
          <Link key={pair.slug} to={`/months/${pair.slug}`}>
            <Card className="p-5 active:scale-[.99]">
              <div className="text-xl font-semibold">{pair.label}</div>
              <div className="text-xs text-slate-500 mt-1">Tap to view plants active in these months</div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-4" />
      <Link to="/add" className="block">
        <Card className="p-5 text-center border-dashed">
          <div className="text-base font-semibold">➕ Add a Plant</div>
          <div className="text-xs text-slate-500 mt-1">Create a new entry (saved locally for now)</div>
        </Card>
      </Link>
    </Container>
  );
}
