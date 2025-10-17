import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import type { Plant } from "../types";

export default function SearchDropdown({
                                         query,
                                         plants,
                                         onItemClick,
                                       }: {
  query: string;
  plants: Plant[];
  onItemClick?: () => void;
}) {
  const q = query.toLowerCase().trim();
  const results = useMemo(() => {
    if (!q) return [] as Plant[];
    return plants
      .filter((p) =>
        (p.commonName || "").toLowerCase().includes(q) ||
        (p.scientificName || "").toLowerCase().includes(q)
      )
      .slice(0, 8); // [NEW] show up to 8 suggestions
  }, [q, plants]);

  if (!q) return null;

  return (
    <div className="absolute left-0 right-0 mt-2 z-40 rounded-2xl border border-neutral-200 bg-white shadow-lg overflow-hidden"> {/* [NEW] dropdown shell */}
      {results.length === 0 ? (
        <div className="p-3 text-sm text-neutral-600">
          No quick matches. Press Enter to view all results.
        </div>
      ) : (
        <ul className="divide-y divide-neutral-100">
          {results.map((p) => (
            <li key={p.id}>
              <Link
                to={`/plant/${p.id}`}
                onClick={onItemClick}
                className="flex items-center gap-3 px-3 py-2 hover:bg-neutral-50 active:bg-neutral-100"
              >
                <div className="w-8 h-8 rounded-lg overflow-hidden bg-neutral-100 shrink-0">
                  <img
                    src={p.imageUrl || "https://placehold.co/64x64?text=🌿"}
                    alt={p.commonName}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium truncate">{p.commonName}</div>
                  {p.scientificName && (
                    <div className="text-xs text-neutral-600 truncate italic">
                      {p.scientificName}
                    </div>
                  )}
                </div>
                {/* [NEW] Placeholder for future: Active Month / tags */}
              </Link>
            </li>
          ))}
          {/* [NEW] Footer link to full results */}
          <li>
            <Link
              to={`/search?q=${encodeURIComponent(query)}`}
              className="block px-3 py-2 text-sm text-emerald-700 hover:bg-neutral-50"
            >
              View all results for “{query}”
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
