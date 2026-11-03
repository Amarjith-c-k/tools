import Image from "next/image";
import { HERO_BG, HERO_TILES, SERIES_PHOTO } from "@/lib/products";

const industries = [
  { title: "Solar & Renewables", note: "T-bolts for PV mounting rails", photo: SERIES_PHOTO.tbolt },
  { title: "Marine & Coastal", note: "316 grade for salt-air exposure", photo: HERO_TILES.acorn },
  { title: "Machine Building", note: "Carriage and flange bolts for frames", photo: SERIES_PHOTO.carriage },
  { title: "Construction", note: "Anchor bolts for concrete foundations", photo: SERIES_PHOTO.anchor },
  { title: "Electronics", note: "Hex spacers for panels and PCBs", photo: HERO_TILES.spacer },
  { title: "Maintenance & MRO", note: "Mixed stock for repair crews", photo: HERO_BG },
];

export function Applications() {
  return (
    <section className="industries" id="industries">
      <div className="container">
        <h2 className="center-title">Solutions tailored for your industry</h2>
        <div className="industries__grid">
          {industries.map((a) => (
            <article key={a.title} className="industry-card">
              <Image src={a.photo} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
              <div>
                <h3>{a.title}</h3>
                <p>{a.note}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="center">
          <a href="#catalog" className="btn btn--primary">Explore industry applications</a>
        </p>
      </div>
    </section>
  );
}
