import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { MONTH_PAIRS, Plant } from "../types";
import { usePlants } from "../lib/usePlants";
import Container from "../components/Container";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import PlantCard from "../components/PlantCard";
import NotFound from "./NotFound";

function useMonthPair(slug: string | undefined) {
  return MONTH_PAIRS.find((p) => p.slug === slug) || null;
}

export default function MonthListPage() {
  const { allPlants } = usePlants();
  const { slug } = useParams();
  const pair = useMonthPair(slug);
  const [q, setQ] = useState("");

  const results = useMemo<Plant[]>(() => {
    if (!pair) return [];
    const filtered = allPlants.filter((p) => (p.bloomMonths || []).some((m) => pair.months.includes(m)));
    if (!q.trim()) return filtered;
    const s = q.toLowerCase();
    return filtered.filter((p) =>
      (p.commonName || "").toLowerCase().includes(s) || (p.scientificName || "").toLowerCase().includes(s)
    );
  }, [pair, allPlants, q]);

  if (!pair) return <NotFound message="Unknown month pair." />;

  return (
    <Container>
      <div className="mt-4" />
      <div className="flex items-center justify-between mb-3 mt-4">
        <h2 className="text-lg font-semibold">Plants in {pair.label}</h2>
        <span className="text-sm text-neutral-600">{pair.label}</span>
      </div>
      <SearchBar value={q} onChange={setQ} />
      <div className="mt-3 grid grid-cols-1 gap-3">
        {results.length === 0 ? (
          <Card className="p-6 text-center text-neutral-600">No plants match yet.</Card>
          ) : (
          results.map((p) => <PlantCard key={p.id} plant={p} />)
      )}
    </div>
</Container>
);
}
