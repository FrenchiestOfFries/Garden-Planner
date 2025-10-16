import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";

export default function NotFound({ message = "Page not found." }: { message?: string }) {
  return (
    <Container>
      <div className="mt-12 text-center">
        <div className="text-5xl">🪴</div>
        <div className="text-lg font-semibold mt-2">{message}</div>
        <div className="mt-3">
          <Link to="/" className="text-emerald-700 underline">Go Home</Link>
        </div>
      </div>
    </Container>
  );
}