import React from "react";
export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-screen-md px-4 pb-24">{children}</div>;
}
