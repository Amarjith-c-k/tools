import Image from "next/image";
import { HERO_TILES } from "@/lib/products";
import { TrustBar } from "./TrustBar";

const categories = ["Nuts", "Spacers", "Bolts", "Anchors", "T-slots"];

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Reliable fixings for a better build</p>
          <h1>
            Stainless fixings, <em>sourced right.</em>
          </h1>
          <p className="hero__sub">Nuts, spacers, bolts and anchors for production lines.</p>
          <p className="lead">
            Pick the grade, thread and length your drawings call for, then send one quote request for the whole list.
          </p>
          <div className="hero__actions">
            <a href="#catalog" className="btn btn--primary">Browse the catalog</a>
            <a href="#contact" className="btn btn--ghost">Request a quote</a>
          </div>
          <TrustBar />
        </div>

        <div className="hero__collage">
          <figure className="tile tile--main">
            <Image src={HERO_TILES.lock} alt="Nylon lock nuts" fill priority sizes="(max-width: 900px) 60vw, 26vw" />
            <figcaption>Lock nuts</figcaption>
          </figure>
          <figure className="tile tile--spacer">
            <Image src={HERO_TILES.spacer} alt="Hex standoff spacers" fill priority sizes="(max-width: 900px) 40vw, 18vw" />
            <figcaption>Hex spacers</figcaption>
          </figure>
          <figure className="tile tile--lock">
            <Image src={HERO_TILES.acorn} alt="Stainless acorn nuts" fill priority sizes="(max-width: 900px) 40vw, 18vw" />
            <figcaption>Acorn nuts</figcaption>
          </figure>

          <ul className="hero__vertical" aria-hidden="true">
            {categories.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="hero__tagline" aria-hidden="true">Every size. One supplier.</p>

          <div className="hero__badge">
            <span>Next-day quote</span>
            <small>Engineer reply within one working day</small>
          </div>
        </div>
      </div>
    </section>
  );
}
