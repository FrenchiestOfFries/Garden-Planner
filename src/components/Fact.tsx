import React from "react";
export default function Fact({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="border rounded-xl p-2 border-slate-200 bg-slate-50">
      <div className="text-[11px] uppercase tracking-wide text-slate-500">{label}</div>
      <div className="text-sm text-slate-800">{value}</div>
    </div>
  );
}