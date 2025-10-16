import { useEffect, useMemo, useState } from "react";
import type { Plant } from "../types";
import { SEED_PLANTS } from "../data/seed";

const APP_STORAGE_KEY = "garden:plants";

export function usePlants() {
  const [userPlants, setUserPlants] = useState<Plant[]>(() => {
    try {
      const raw = localStorage.getItem(APP_STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Plant[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(userPlants));
  }, [userPlants]);

  const allPlants = useMemo<Plant[]>(() => {
    const byId = new Map<string, Plant>();
    for (const p of SEED_PLANTS) byId.set(p.id, p);
    for (const p of userPlants) byId.set(p.id, p);
    return Array.from(byId.values());
  }, [userPlants]);

  function addPlant(newPlant: Plant) {
    setUserPlants((prev) => [{ ...newPlant }, ...prev]);
  }

  return { allPlants, addPlant };
}
