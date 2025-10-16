import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MONTH_LABELS } from "../types";
import { usePlants } from "../lib/usePlants";
import Container from "../components/Container";
import Fact from "../components/Fact";
import NotFound from "./NotFound";

export default function PlantDetails() {
  const { allPlants } = usePlants();
  const { id } = useParams();
  const plant = allPlants.find((p) => p.id === id);
  const navigate = useNavigate();

  if (!plant) return <NotFound message="Plant not found." />;

  return (
    <Container>
      <div className="mt-3" />
      <button onClick={() => navigate(-1)} className="text-slate-600 text-sm mb-2">← Back</button>

      <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
        <div className="w-full h-48 bg-slate-100">
          <img
            src={plant.imageUrl || "https://placehold.co/1200x600?text=Plant"}
            alt={plant.commonName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h1 className="text-xl font-semibold">{plant.commonName}</h1>
          {plant.scientificName && <div className="text-sm text-slate-500 italic">{plant.scientificName}</div>}

          <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {plant.category && <Fact label="Category" value={plant.category} />}
            {plant.zone && <Fact label="Zone" value={plant.zone} />}
            {plant.sun && <Fact label="Sun" value={plant.sun} />}
            {plant.water && <Fact label="Water" value={plant.water} />}
            {plant.heightIn && <Fact label="Height" value={`${plant.heightIn}\"`} />}
            {plant.spreadIn && <Fact label="Spread" value={`${plant.spreadIn}\"`} />}
            {plant.bloomMonths?.length ? (
              <Fact label="Bloom" value={plant.bloomMonths.map((m) => MONTH_LABELS[m - 1]).join(", ")} />
            ) : null}
          </div>

          {plant.notes && (
            <div className="mt-4">
              <div className="text-sm font-medium">Notes</div>
              <p className="text-sm text-slate-700 mt-1">{plant.notes}</p>
            </div>
          )}

          <div className="mt-4">
            <div className="text-sm font-medium">Care Calendar</div>
            <div className="text-sm text-slate-500 mt-1">(Placeholder for tasks by month)</div>
          </div>

          {plant.sourceUrl && (
            <div className="mt-4">
              <a href={plant.sourceUrl} target="_blank" rel="noreferrer" className="text-emerald-700 underline">Source page</a>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}