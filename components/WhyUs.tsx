import Image from "next/image";
import { HERO_TILES } from "@/lib/products";

const features = [
  { title: "Expertise", text: "Engineers who read your drawings, not just your order.", icon: <path d="M6 3h12l3 6-9 12L3 9z M3 9h18 M9 3l3 18 3-18" /> },
  { title: "Certified grades", text: "Mill certificates for 304 and 316 on request.", icon: <path d="M12 2l3 3h4v4l3 3-3 3v4h-4l-3 3-3-3H5v-4l-3-3 3-3V5h4z M8.5 12l2.5 2.5 4.5-5" /> },
  { title: "Global reach", text: "Export-ready stock for GCC, Europe and Africa.", icon: <path d="M12 3a9 9 0 100 18 9 9 0 000-18z M3 12h18 M12 3c3 3 3 15 0 18 M12 3c-3 3-3 15 0 18" /> },
  { title: "Custom solutions", text: "Special lengths, finishes and packaging.", icon: <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z M19 3v4 M17 5h4" /> },
];

export function WhyUs() {
  return (
    <section className="why-us">
      <div className="why-us__intro">
        <figure className="why-us__img why-us__img--left">
          <Image src={HERO_TILES.lock} alt="Nylon lock nuts" fill sizes="25vw" />
        </figure>
        <div className="why-us__copy">
          <p className="kicker">Why TorqueConnect?</p>
          <h2>Your partner in high-performance engineering.</h2>
          <p>
            We do more than supply parts. Our stainless fasteners are chosen by production lines for their consistency,
            clear specifications and compliance with DIN, GB and ANSI standards.
          </p>
        </div>
        <figure className="why-us__img why-us__img--right">
          <Image src={HERO_TILES.spacer} alt="Hex standoff spacers" fill sizes="20vw" />
        </figure>
      </div>
      <ul className="container why-us__features">
        {features.map((f) => (
          <li key={f.title}>
            <svg viewBox="0 0 24 24" aria-hidden="true">{f.icon}</svg>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
