import Image from "next/image";
import { SERIES_PHOTO } from "@/lib/products";

const apps = [
  { title: "Solar racking", note: "T-bolts for PV mounting rails", photo: SERIES_PHOTO.tbolt },
  { title: "Marine & coastal", note: "316 grade for salt-air exposure", photo: SERIES_PHOTO.square },
  { title: "Machine frames", note: "Carriage and flange bolts for panels", photo: SERIES_PHOTO.carriage },
];

export function Applications() {
  return (
    <section className="applications">
      <div className="container applications__inner">
        <div className="applications__intro">
          <p className="eyebrow eyebrow--light">Where they are used</p>
          <h2>Built for demanding sites.</h2>
          <p>From solar farms to coastal plants, the right grade and thread keep assemblies tight for years.</p>
          <a href="#catalog" className="btn btn--light">View full catalog</a>
        </div>
        <div className="applications__cards">
          {apps.map((a) => (
            <article key={a.title} className="app-card">
              <div className="app-card__img">
                <Image src={a.photo} alt="" fill sizes="(max-width: 900px) 100vw, 30vw" />
              </div>
              <h3>{a.title}</h3>
              <p>{a.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
