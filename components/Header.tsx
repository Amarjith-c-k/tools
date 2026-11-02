"use client";

import { useStore } from "./store";

export function Header() {
  const { query, setQuery, quoteCount, setDrawerOpen } = useStore();

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="logo" aria-label="Home">
          <span className="logo__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M12 2l9 5v10l-9 5-9-5V7z" /></svg>
          </span>
          <span className="logo__text">
            FastenPro<small>Stainless Fasteners</small>
          </span>
        </a>

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
            placeholder="Search by part, size or standard  e.g. M8, DIN 603, 316"
            aria-label="Search products"
          />
          <button type="submit" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
          </button>
        </form>

        <nav className="nav" aria-label="Main">
          <a href="#catalog">Products</a>
          <a href="#series">Series</a>
          <a href="#technical">Technical</a>
          <a href="#contact">Contact</a>
        </nav>

        <button type="button" className="rfq-toggle" onClick={() => setDrawerOpen(true)} aria-label="Open quote list">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h15l-1.5 9h-12z" /><path d="M6 6L5 3H2" /><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /></svg>
          <span>Quote list</span>
          <b>{quoteCount}</b>
        </button>
      </div>
    </header>
  );
}
