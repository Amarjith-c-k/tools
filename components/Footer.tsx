import { SITE } from "@/lib/products";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__cols">
        <div>
          <h4>Quick links</h4>
          <a href="#series">Products</a>
          <a href="#industries">Industries</a>
          <a href="#about">About</a>
          <a href="#resources">Resources</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Get a quote</a>
          <a href="#technical">Technical data</a>
        </div>
        <div>
          <h4>Contact</h4>
          <p>{SITE.city}</p>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
        </div>
        <div>
          <h4>About FastenPro</h4>
          <p>Supplier of stainless steel nuts, spacers, bolts and anchors for industrial, marine, solar and construction projects.</p>
        </div>
      </div>
      <div className="container footer__brandrow">
        <span className="logo">
          <span className="logo__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M12 2l9 5v10l-9 5-9-5V7z" /></svg>
          </span>
          <span className="logo__text">FastenPro<small>Precision in every thread</small></span>
        </span>
      </div>
      <p className="container footer__legal">
        &copy; {new Date().getFullYear()} FastenPro. Placeholder content, replace before launch. Temporary photos:
        Wikimedia Commons. Screws assortment (Dornbirn, CC BY-SA 4.0); acorn nuts by R. Henrik Nilsson (CC BY 4.0); hex
        standoffs by wdwd (CC BY-SA 4.0); nylon lock nut by Btarski (CC BY-SA 3.0); anchor bolt by ほーるだうん (CC BY-SA 3.0);
        hex socket screws by Phiarc (CC BY-SA 4.0); molly bolts by Dmitry G (CC BY-SA 3.0); T-slot profile by Mike1024
        (public domain).
      </p>
    </footer>
  );
}
