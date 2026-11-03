import Image from "next/image";
import { HERO_BG } from "@/lib/products";

export function Hero() {
  return (
    <section className="hero" id="top">
      <Image className="hero__bg" src={HERO_BG} alt="" fill priority sizes="100vw" />
      <div className="container hero__inner">
        <div className="hero__card">
          <h1>Precision Fasteners &amp; Assembly Hardware You Can Rely On</h1>
          <p className="lead">
            Stainless nuts, spacers, bolts and anchors in 304 and 316 grade, trusted by manufacturers across the GCC,
            Europe and Africa.
          </p>
          <div className="hero__actions">
            <a href="#catalog" className="btn btn--primary">Explore products</a>
            <a href="#contact" className="btn btn--yellow">Request a quote</a>
          </div>
        </div>
      </div>
    </section>
  );
}
