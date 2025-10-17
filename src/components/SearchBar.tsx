import React from "react";
export default function SearchBar({ value, onChange, placeholder = "Search plants...", onClear }: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  onClear?: () => void;
}) {
  return (
    <div className="relative">
      <input
        className="w-full px-3 py-2 rounded-xl border border-neutral-300 bg-neutral-50 focus:bg-white outline-none focus:ring-2 focus:ring-emerald-500 transition-colors pr-8"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode="search"
      />
      {value && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}
