"use client";

import { PRODUCTS } from "@/lib/products";
import { useStore } from "./store";

export function QuoteDrawer() {
  const { drawerOpen, setDrawerOpen, quote, setQty, removeFromQuote } = useStore();

  return (
    <>
      <div className="scrim" hidden={!drawerOpen} onClick={() => setDrawerOpen(false)} />
      <aside className={`drawer ${drawerOpen ? "is-open" : ""}`} aria-label="Quote list" aria-hidden={!drawerOpen}>
        <div className="drawer__head">
          <h3>Quote list</h3>
          <button type="button" className="link" onClick={() => setDrawerOpen(false)}>Close</button>
        </div>
        <div className="drawer__body">
          {quote.length === 0 && <p className="drawer__empty">Your quote list is empty.<br />Add products from the catalog.</p>}
          {quote.map(({ id, qty }) => {
            const p = PRODUCTS.find((x) => x.id === id);
            if (!p) return null;
            return (
              <div key={id} className="rfq-item">
                <div>
                  <strong>{p.name}</strong>
                  <small>{p.grades.join(" / ")} &middot; {p.thread}</small>
                </div>
                <div className="qty__ctl">
                  <button type="button" onClick={() => setQty(id, qty - 1)} aria-label="Decrease">&minus;</button>
                  <input type="number" min={1} value={qty} onChange={(e) => setQty(id, Number(e.target.value))} aria-label="Quantity" />
                  <button type="button" onClick={() => setQty(id, qty + 1)} aria-label="Increase">+</button>
                </div>
                <button type="button" className="link rfq-item__remove" onClick={() => removeFromQuote(id)}>Remove</button>
              </div>
            );
          })}
        </div>
        <div className="drawer__foot">
          <a href="#contact" className="btn btn--primary btn--block" onClick={() => setDrawerOpen(false)}>
            Continue to quote
          </a>
        </div>
      </aside>
    </>
  );
}
