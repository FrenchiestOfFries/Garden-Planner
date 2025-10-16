import React from "react";
export default function SearchBar({ value, onChange, placeholder = "Search plants..." }: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      className="w-full px-3 py-2 rounded-xl border border-neutral-300 outline-none focus:ring-2 focus:ring-emerald-500"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      inputMode="search"
    />
  );
}