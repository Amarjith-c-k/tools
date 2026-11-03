"use client";

import Image from "next/image";
import { PRODUCTS, SERIES, SERIES_PHOTO } from "@/lib/products";
import { useStore } from "./store";

export function SeriesGrid() {
  const { setOnlySeries } = useStore();

  return (
    <section className="series" id="series">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">What we supply</p>
          <h2>Our comprehensive product range</h2>
          <p>Each series groups bolts by head style and application. Click a series to filter the catalog.</p>
        </div>
        <div className="series__grid">
          {SERIES.map((s) => {
            const count = PRODUCTS.filter((p) => p.series === s.key).length;
            return (
              <button
                key={s.key}
                type="button"
                className="series-card"
                onClick={() => {
                  setOnlySeries(s.key);
                  document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="series-card__img">
                  <Image src={SERIES_PHOTO[s.key]} alt="" fill sizes="(max-width: 560px) 50vw, 240px" />
                </span>
                <h3>{s.label}</h3>
                <p>{s.blurb}</p>
                <span>{count} products &rarr;</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
