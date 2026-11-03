"use client";

import { useState } from "react";

// Placeholder quotes; replace with real client testimonials before launch.
const quotes = [
  { text: "Their ability to supply both standard and special hardware makes them our go-to partner.", who: "Manufacturing client" },
  { text: "Clear specs on every part and quotes back the next day. Ordering is simple.", who: "Procurement manager" },
  { text: "316 anchors arrived certified and on time for our coastal project.", who: "Construction contractor" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const step = (d: number) => setI((n) => (n + d + quotes.length) % quotes.length);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__box">
          <button type="button" aria-label="Previous" onClick={() => step(-1)}>&lsaquo;</button>
          <div>
            <h2>Testimonials</h2>
            <p className="testimonials__sub">Trusted by leading industries</p>
            <blockquote>&ldquo;{quotes[i].text}&rdquo;</blockquote>
            <cite>&ndash; {quotes[i].who}</cite>
          </div>
          <button type="button" aria-label="Next" onClick={() => step(1)}>&rsaquo;</button>
        </div>
      </div>
    </section>
  );
}
