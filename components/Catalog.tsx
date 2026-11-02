"use client";

import { useMemo } from "react";
import { PRODUCTS, SERIES, SERIES_LABEL, type Grade, type Product } from "@/lib/products";
import { BoltIcon } from "./BoltIcon";
import { ProductPhoto } from "./ProductPhoto";
import { useStore } from "./store";
import { AddButton } from "./AddButton";

const GRADES: { value: Grade; label: string }[] = [
  { value: "304", label: "304 stainless" },
  { value: "316", label: "316 stainless (marine grade)" },
];
const STANDARDS = [
  { value: "DIN", label: "DIN" },
  { value: "GB", label: "GB (China)" },
  { value: "ANSI", label: "ANSI (Imperial)" },
  { value: "EU", label: "EU T-slot" },
];

function matches(p: Product, s: ReturnType<typeof useStore>) {
  if (s.series.length && !s.series.includes(p.series)) return false;
  if (s.grades.length && !p.grades.some((g) => s.grades.includes(g))) return false;
  if (s.stds.length && !s.stds.includes(p.std)) return false;
  if (s.query) {
    const hay = `${p.name} ${p.std} ${p.thread} ${p.length} ${p.grades.join(" ")} ${SERIES_LABEL[p.series]}`.toLowerCase();
    const terms = s.query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.every((t) => hay.includes(t))) return false;
  }
  return true;
}

export function Catalog() {
  const store = useStore();
  const { series, grades, stds, sort, setSort, toggle, clearFilters, setActiveId } = store;

  const list = useMemo(() => {
    const filtered = PRODUCTS.filter((p) => matches(p, store));
    if (sort === "name") return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "series")
      return [...filtered].sort((a, b) => SERIES.findIndex((s) => s.key === a.series) - SERIES.findIndex((s) => s.key === b.series));
    return filtered;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.query, series, grades, stds, sort]);

  return (
    <section className="catalog" id="catalog">
      <div className="container catalog__layout">
        <aside className="filters" aria-label="Filters">
          <div className="filters__head">
            <h3>Filters</h3>
            <button type="button" className="link" onClick={clearFilters}>Clear all</button>
          </div>

          <fieldset>
            <legend>Series</legend>
            {SERIES.map((s) => (
              <label key={s.key} className="check">
                <input type="checkbox" checked={series.includes(s.key)} onChange={() => toggle("series", s.key)} />
                {s.label}
                <small>{PRODUCTS.filter((p) => p.series === s.key).length}</small>
              </label>
            ))}
          </fieldset>

          <fieldset>
            <legend>Material grade</legend>
            {GRADES.map((g) => (
              <label key={g.value} className="check">
                <input type="checkbox" checked={grades.includes(g.value)} onChange={() => toggle("grades", g.value)} />
                {g.label}
              </label>
            ))}
          </fieldset>

          <fieldset>
            <legend>Standard</legend>
            {STANDARDS.map((s) => (
              <label key={s.value} className="check">
                <input type="checkbox" checked={stds.includes(s.value)} onChange={() => toggle("stds", s.value)} />
                {s.label}
              </label>
            ))}
          </fieldset>

          <div className="help-card">
            <strong>Not sure which bolt?</strong>
            <p>Send us the drawing or a photo. We will match it to a catalog part or quote a custom length.</p>
            <a href="#contact">Ask an engineer</a>
          </div>
        </aside>

        <div className="results">
          <div className="results__bar">
            <p>Showing {list.length} of {PRODUCTS.length} products</p>
            <label className="sort">
              Sort
              <select value={sort} onChange={(e) => setSort(e.target.value as typeof sort)}>
                <option value="default">Catalog order</option>
                <option value="name">Name A to Z</option>
                <option value="series">Series</option>
              </select>
            </label>
          </div>

          <div className="product-grid">
            {list.map((p) => (
              <article key={p.id} className="product">
                <div className="product__img">
                  <span className="product__series">{SERIES_LABEL[p.series]}</span>
                  <ProductPhoto series={p.series} sizes="(max-width: 560px) 50vw, 260px" />
                  <BoltIcon series={p.series} />
                </div>
                <div className="product__body">
                  <div>
                    <span className="product__std">{p.std} standard</span>
                    <h3>{p.name}</h3>
                  </div>
                  <div><GradeChips grades={p.grades} /></div>
                  <dl className="specs">
                    <dt>Thread</dt><dd>{p.thread}</dd>
                    <dt>Length</dt><dd>{p.length}</dd>
                  </dl>
                  <div className="product__foot">
                    <button type="button" className="btn btn--ghost btn--small" onClick={() => setActiveId(p.id)}>
                      Details
                    </button>
                    <AddButton id={p.id} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {list.length === 0 && (
            <p className="empty">
              No products match these filters.{" "}
              <button type="button" className="link" onClick={clearFilters}>Reset filters</button>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export function GradeChips({ grades }: { grades: Grade[] }) {
  return (
    <>
      {grades.map((g) => (
        <span key={g} className={`chip ${g === "316" ? "chip--316" : ""}`}>{g}</span>
      ))}
    </>
  );
}
