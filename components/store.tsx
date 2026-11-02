"use client";

import { createContext, useCallback, useContext, useMemo, useState, useSyncExternalStore, type ReactNode } from "react";
import { PRODUCTS, type Grade, type SeriesKey } from "@/lib/products";

export type SortKey = "default" | "name" | "series";
export type QuoteLine = { id: string; qty: number };
type FilterKind = "series" | "grades" | "stds";

type Store = {
  query: string;
  setQuery: (q: string) => void;
  series: SeriesKey[];
  grades: Grade[];
  stds: string[];
  toggle: (kind: FilterKind, value: string) => void;
  setOnlySeries: (key: SeriesKey) => void;
  clearFilters: () => void;
  sort: SortKey;
  setSort: (s: SortKey) => void;

  quote: QuoteLine[];
  addToQuote: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  removeFromQuote: (id: string) => void;
  quoteCount: number;

  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
};

const StoreContext = createContext<Store | null>(null);
const STORAGE_KEY = "fastenpro-quote-list";

// The quote list lives in localStorage and is shared with React through
// useSyncExternalStore, so server and first client render both see an empty list.
let raw: string | null = null;
let loaded = false;
const listeners = new Set<() => void>();

function readRaw(): string {
  if (!loaded) {
    loaded = true;
    try {
      raw = localStorage.getItem(STORAGE_KEY);
    } catch {
      raw = null;
    }
  }
  return raw ?? "[]";
}

function writeRaw(next: QuoteLine[]) {
  raw = JSON.stringify(next);
  try {
    localStorage.setItem(STORAGE_KEY, raw);
  } catch {
    /* storage blocked, keep in memory for this page view */
  }
  listeners.forEach((l) => l());
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      raw = e.newValue;
      onChange();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onStorage);
  };
}

function parseQuote(text: string): QuoteLine[] {
  try {
    const value = JSON.parse(text);
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  const [series, setSeries] = useState<SeriesKey[]>([]);
  const [grades, setGrades] = useState<Grade[]>([]);
  const [stds, setStds] = useState<string[]>([]);
  const [sort, setSort] = useState<SortKey>("default");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const snapshot = useSyncExternalStore(subscribe, readRaw, () => "[]");
  const quote = useMemo(() => parseQuote(snapshot), [snapshot]);

  const toggle = useCallback((kind: FilterKind, value: string) => {
    const flip = <T,>(list: T[], v: T) => (list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);
    if (kind === "series") setSeries((l) => flip(l, value as SeriesKey));
    if (kind === "grades") setGrades((l) => flip(l, value as Grade));
    if (kind === "stds") setStds((l) => flip(l, value));
  }, []);

  const setOnlySeries = useCallback((key: SeriesKey) => setSeries([key]), []);

  const clearFilters = useCallback(() => {
    setQuery("");
    setSeries([]);
    setGrades([]);
    setStds([]);
  }, []);

  const addToQuote = useCallback((id: string, qty = 1) => {
    const list = parseQuote(readRaw());
    const hit = list.find((q) => q.id === id);
    writeRaw(hit ? list.map((q) => (q.id === id ? { ...q, qty: q.qty + qty } : q)) : [...list, { id, qty }]);
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    const clean = Math.max(1, Math.min(9999, Math.floor(Number(qty)) || 1));
    writeRaw(parseQuote(readRaw()).map((q) => (q.id === id ? { ...q, qty: clean } : q)));
  }, []);

  const removeFromQuote = useCallback((id: string) => {
    writeRaw(parseQuote(readRaw()).filter((q) => q.id !== id));
  }, []);

  const value = useMemo<Store>(
    () => ({
      query,
      setQuery,
      series,
      grades,
      stds,
      toggle,
      setOnlySeries,
      clearFilters,
      sort,
      setSort,
      quote: quote.filter((q) => PRODUCTS.some((p) => p.id === q.id)),
      addToQuote,
      setQty,
      removeFromQuote,
      quoteCount: quote.reduce((n, q) => n + q.qty, 0),
      drawerOpen,
      setDrawerOpen,
      activeId,
      setActiveId,
    }),
    [query, series, grades, stds, sort, quote, drawerOpen, activeId, toggle, setOnlySeries, clearFilters, addToQuote, setQty, removeFromQuote],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
