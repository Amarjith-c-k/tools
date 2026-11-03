"use client";

import { useStore } from "./store";

export function Header() {
  const { query, setQuery, quoteCount, setDrawerOpen } = useStore();

  return (
    <header className="header">
      <div className="container header__inner">
        <nav className="nav" aria-label="Main">
          <a href="#series">Products</a>
          <a href="#industries">Industries</a>
          <a href="#resources">Resources</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact us</a>
        </nav>

        <form
          className="search"
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search M8, DIN 603, 316"
            aria-label="Search products"
          />
          <button type="submit" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
          </button>
        </form>

        <button type="button" className="rfq-toggle" onClick={() => setDrawerOpen(true)} aria-label="Open quote list">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h15l-1.5 9h-12z" /><path d="M6 6L5 3H2" /><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /></svg>
          <span>Quote</span>
          <b>{quoteCount}</b>
        </button>
      </div>
    </header>
  );
}
