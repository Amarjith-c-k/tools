import { SITE } from "@/lib/products";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <a href="#top" className="logo" aria-label="Home">
          <span className="logo__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M12 2l9 5v10l-9 5-9-5V7z" /></svg>
          </span>
          <span className="logo__text">
            FastenPro<small>Precision in every thread</small>
          </span>
        </a>
        <span className="topbar__contact">
          <span>{SITE.city}</span>
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
        </span>
      </div>
    </div>
  );
}
