import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MONTH_LABELS, Plant, uuid } from "../types";
import { usePlants } from "../lib/usePlants";
import Container from "../components/Container";

export default function AddPlant() {
  const { addPlant } = usePlants();
  const navigate = useNavigate();
  const [form, setForm] = useState<Partial<Plant>>({
    commonName: "",
    scientificName: "",
    category: "Perennial",
    zone: "",
    sun: "",
    water: "",
    bloomMonths: [],
    imageUrl: "",
    notes: "",
  });

  function toggleMonth(m: number) {
    setForm((f) => {
      const set = new Set<number>((f.bloomMonths as number[]) || []);
      if (set.has(m)) set.delete(m); else set.add(m);
      return { ...f, bloomMonths: Array.from(set).sort((a, b) => a - b) };
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.commonName?.trim()) {
      alert("Common name is required.");
      return;
    }
    const newPlant: Plant = {
      id: `USR-${uuid()}`,
      commonName: form.commonName,
      scientificName: form.scientificName || undefined,
      category: form.category,
      zone: form.zone || undefined,
      sun: form.sun || undefined,
      water: form.water || undefined,
      bloomMonths: (form.bloomMonths as number[]) || [],
      imageUrl: form.imageUrl || undefined,
      notes: form.notes || undefined,
      heightIn: undefined,
      spreadIn: undefined,
      tags: [],
      source: "Local",
      lastUpdated: new Date().toISOString(),
    };
    addPlant(newPlant);
    navigate("/", { replace: true });
  }

  return (
    <Container>
      <div className="mt-4" />
      <div className="text-lg font-semibold mb-3">Add a Plant</div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Common Name" required>
          <input
            className="w-full px-3 py-2 rounded-xl border border-slate-300"
            value={form.commonName || ""}
            onChange={(e) => setForm({ ...form, commonName: e.target.value })}
            placeholder="e.g., Purple Coneflower"
          />
        </Field>

        <Field label="Scientific Name">
          <input
            className="w-full px-3 py-2 rounded-xl border border-slate-300"
            value={form.scientificName || ""}
            onChange={(e) => setForm({ ...form, scientificName: e.target.value })}
            placeholder="e.g., Echinacea purpurea"
          />
        </Field>

        <Field label="Category">
          <select
            className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value as Plant["category"] })}
          >
            {["Perennial", "Shrub", "Tree", "Annual", "Grass", "Groundcover", "Vine", "Other"].map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Zone">
            <input
              className="w-full px-3 py-2 rounded-xl border border-slate-300"
              value={form.zone || ""}
              onChange={(e) => setForm({ ...form, zone: e.target.value })}
              placeholder="e.g., 4-8"
            />
          </Field>
          <Field label="Sun">
            <input
              className="w-full px-3 py-2 rounded-xl border border-slate-300"
              value={form.sun || ""}
              onChange={(e) => setForm({ ...form, sun: e.target.value })}
              placeholder="e.g., Full Sun"
            />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Water">
            <input
              className="w-full px-3 py-2 rounded-xl border border-slate-300"
              value={form.water || ""}
              onChange={(e) => setForm({ ...form, water: e.target.value })}
              placeholder="e.g., Low / Medium / High"
            />
          </Field>
          <Field label="Image URL">
            <input
              className="w-full px-3 py-2 rounded-xl border border-slate-300"
              value={form.imageUrl || ""}
              onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
              placeholder="https://example.com/plant.jpg"
              inputMode="url"
            />
          </Field>
        </div>

        <Field label="Bloom Months">
          <div className="grid grid-cols-4 gap-2">
            {MONTH_LABELS.map((ml, idx) => {
              const m = idx + 1;
              const active = (form.bloomMonths as number[] | undefined)?.includes(m);
              return (
                <button
                  key={ml}
                  type="button"
                  onClick={() => toggleMonth(m)}
                  className={`px-2 py-2 rounded-xl border text-sm ${active ? "bg-emerald-600 border-emerald-600 text-white" : "bg-white border-slate-300"}`}
                >
                  {ml}
                </button>
              );
            })}
          </div>
        </Field>

        <Field label="Notes">
          <textarea
            className="w-full px-3 py-2 rounded-xl border border-slate-300 min-h-[80px]"
            value={form.notes || ""}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            placeholder="Care tips, where planted, etc."
          />
        </Field>

        <div className="h-2" />
        <div className="flex items-center gap-2">
          <button type="submit" className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-medium active:scale-[.99]">Save Plant</button>
          <Link to="/" className="px-4 py-2 rounded-xl border border-slate-300 bg-white text-slate-700">Cancel</Link>
        </div>
      </form>
    </Container>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-sm font-medium mb-1">{label} {required && <span className="text-rose-600">*</span>}</div>
      {children}
    </label>
  );
}