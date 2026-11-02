import Image from "next/image";
import { PRODUCTS, SERIES, SERIES_PHOTO } from "@/lib/products";

export function About() {
  const grades = new Set(PRODUCTS.flatMap((p) => p.grades)).size;
  const stats = [
    { value: String(PRODUCTS.length), label: "Core products" },
    { value: String(SERIES.length), label: "Product series" },
    { value: String(grades), label: "Stainless grades" },
  ];

  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <div className="about__copy">
          <p className="eyebrow">About us</p>
          <h2>More than a parts catalog.</h2>
          <p>
            We supply stainless steel fasteners in the sizes and standards your drawings call for, with clear specs on
            every listing and one quote for the whole list.
          </p>
          <a href="#contact" className="btn btn--primary">Talk to our team</a>
        </div>
        <div className="about__media">
          <Image src={SERIES_PHOTO.anchor} alt="Anchor bolt" fill sizes="(max-width: 900px) 100vw, 40vw" />
        </div>
        <ul className="about__stats">
          {stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
