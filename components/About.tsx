import Image from "next/image";
import { HERO_TILES, SERIES_PHOTO } from "@/lib/products";

export function About() {
  return (
    <section className="about" id="about">
      <div className="about__band">
        <div className="container about__head">
          <span className="about__squares" aria-hidden="true"><i /><i /></span>
          <div>
            <p className="kicker">About TorqueConnect</p>
            <h2>Building a trusted fasteners brand.</h2>
          </div>
        </div>
      </div>
      <div className="container about__body">
        <figure className="about__img">
          <Image src={SERIES_PHOTO.anchor} alt="Anchor bolt with nut and washer" fill sizes="(max-width: 900px) 100vw, 32vw" />
        </figure>
        <div className="about__copy">
          <p>
            TorqueConnect was founded with a single goal: to deliver world-class fastening and assembly solutions that power
            industries of the future. Based in the Middle East with a strong supply network across GCC, Europe and Africa,
            we set new benchmarks in product quality, customer service and global accessibility.
          </p>
          <a href="#contact" className="btn btn--dark">Learn more about us</a>
        </div>
        <figure className="about__img about__img--small">
          <Image src={HERO_TILES.acorn} alt="Stainless acorn nuts" fill sizes="20vw" />
        </figure>
      </div>
    </section>
  );
}
