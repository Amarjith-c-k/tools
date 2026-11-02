"use client";

import { useEffect, useState } from "react";
import { useStore } from "./store";

// Shows "Added" briefly after a click, then resets.
export function AddButton({ id, qty = 1, className = "btn btn--primary btn--small" }: { id: string; qty?: number; className?: string }) {
  const { addToQuote } = useStore();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const t = setTimeout(() => setAdded(false), 1200);
    return () => clearTimeout(t);
  }, [added]);

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        addToQuote(id, qty);
        setAdded(true);
      }}
    >
      {added ? "Added" : "Add to quote"}
    </button>
  );
}
