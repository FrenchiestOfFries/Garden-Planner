import React from "react";
export default function Fact({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="border rounded-xl p-2 border-neutral-200 bg-neutral-50">
      <div className="text-[11px] uppercase tracking-wide text-neutral-600">{label}</div>
      <div className="text-sm text-neutral-800">{value}</div>
    </div>
  );
}