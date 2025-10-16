import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { usePlants } from "../lib/usePlants";
import type { Plant } from "../types";
import Container from "../components/Container";
import Card from "../components/Card";
import PlantCard from "../components/PlantCard";

export default function SearchPage() {
  const { allPlants } = usePlants();
  const [params] = useSearchParams();
  const q = (params.get("q") || "").toLowerCase().trim();

  const results = useMemo<Plant[]>(() => {
    if (!q) return [];
    return allPlants.filter((p) =>
      (p.commonName || "").toLowerCase().includes(q) ||
      (p.scientificName || "").toLowerCase().includes(q)
    );
  }, [q, allPlants]);

  return (
    <Container>
      <div className="mt-4" />
      <div className="text-lg font-semibold">Search Results</div>
      {!q && <div className="text-sm text-neutral-600 mt-2">Type a query on the home page search to see results.</div>}
      <div className="mt-3 grid grid-cols-1 gap-3">
        {q && results.length === 0 && (
          <Card className="p-6 text-center text-neutral-600">No matches for “{q}”.</Card>
        )}
        {results.map((p) => (
          <PlantCard key={p.id} plant={p} />
        ))}
      </div>
    </Container>
  );
}