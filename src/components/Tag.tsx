import React from "react";
export default function Tag({ children }: { children: React.ReactNode }) {
  return <span className="inline-block text-[11px] leading-4 px-2 py-1 rounded-full bg-neutral-200 text-neutral-800">{children}</span>;
}