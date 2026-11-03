import Image from "next/image";
import { HERO_BG, HERO_TILES, SERIES_PHOTO } from "@/lib/products";

const posts = [
  { title: "304 or 316? Choosing the right grade for coastal sites", photo: HERO_TILES.acorn, href: "#technical" },
  { title: "Download our complete product catalogue", photo: HERO_BG, href: "#catalog" },
  { title: "T-slot bolts for aluminium profile systems", photo: SERIES_PHOTO.tbolt, href: "#catalog" },
];

export function Insights() {
  return (
    <section className="insights" id="resources">
      <div className="container insights__inner">
        <div className="insights__intro">
          <h2>Insights that power innovation</h2>
          <p>
            We equip our partners with knowledge as well as components. Explore technical guidance, application notes
            and the latest in fastening.
          </p>
          <a href="#technical" className="btn btn--primary">Explore resources</a>
        </div>
        <div className="insights__list">
          {posts.map((p) => (
            <a key={p.title} href={p.href} className="insight-card">
              <div>
                <h3>{p.title}</h3>
                <span>Read more</span>
              </div>
              <span className="insight-card__img">
                <Image src={p.photo} alt="" fill sizes="(max-width: 700px) 40vw, 260px" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
