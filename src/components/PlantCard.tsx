import React from "react";
import { Link } from "react-router-dom";
import type { Plant } from "../types";
import Card from "./Card";
import Tag from "./Tag";

export default function PlantCard({ plant }: { plant: Plant }) {
  return (
    <Link to={`/plant/${plant.id}`} className="block">
      <Card className="overflow-hidden">
        <div className="flex gap-3 p-3">
          <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-neutral-100"> {/* [CHANGED] */}
            <img
              src={plant.imageUrl || "https://placehold.co/300x300?text=Plant"}
              alt={plant.commonName || plant.scientificName}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-medium truncate">{plant.commonName}</div>
            {plant.scientificName && (
              <div className="text-sm text-neutral-600 truncate italic">{plant.scientificName}</div>
            )}
            <div className="mt-2 flex flex-wrap gap-1">
              {plant.sun && <Tag>{plant.sun}</Tag>}
              {plant.zone && <Tag>Zone {plant.zone}</Tag>}
              {(plant.tags || []).slice(0, 2).map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}