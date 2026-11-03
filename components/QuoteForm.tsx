"use client";

import { useState, type FormEvent } from "react";
import { PRODUCTS, SITE } from "@/lib/products";
import { useStore } from "./store";

export function QuoteForm() {
  const { quote } = useStore();
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);

  const lines = quote
    .map(({ id, qty }) => {
      const p = PRODUCTS.find((x) => x.id === id);
      return p ? `${p.name} (${p.grades.join("/")}, ${p.thread}) x ${qty}` : null;
    })
    .filter(Boolean);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!quote.length) {
      setStatus({ ok: false, text: "Add at least one product to your quote list first." });
      return;
    }
    // Front-end only: nothing is sent yet. Connect to an email service, CRM or API route.
    setStatus({ ok: true, text: `Thanks. Your request for ${quote.length} product(s) is ready. Connect this form to ${SITE.email} to receive it.` });
    e.currentTarget.reset();
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact__grid">
        <div>
          <h2>Request a quote</h2>
          <p>Add items from the catalog, then tell us who to reply to. Our sales team usually responds within one working day.</p>
          <ul className="contact__list">
            <li><strong>Sales</strong> {SITE.email}</li>
            <li><strong>Phone</strong> {SITE.phone}</li>
            <li><strong>Hours</strong> Mon to Fri, 9:00 to 18:00</li>
          </ul>
        </div>
        <form className="contact__form" onSubmit={onSubmit}>
          <div className="field-row">
            <label>Full name<input name="name" required autoComplete="name" /></label>
            <label>Company<input name="company" required autoComplete="organization" /></label>
          </div>
          <div className="field-row">
            <label>Work email<input name="email" type="email" required autoComplete="email" /></label>
            <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
          </div>
          <label>Country<input name="country" autoComplete="country-name" /></label>
          <label>
            Message or special requirements
            <textarea name="message" rows={4} placeholder="Custom lengths, packaging, delivery port, certificates needed" />
          </label>
          <p className="form-note">
            {lines.length ? `Included in this request: ${lines.join("; ")}` : "No items selected yet. Add products from the catalog to include them."}
          </p>
          <button type="submit" className="btn btn--primary btn--block">Send quote request</button>
          <p className="form-status" role="status" style={{ color: status && !status.ok ? "#132b57" : undefined }}>
            {status?.text}
          </p>
        </form>
      </div>
    </section>
  );
}
