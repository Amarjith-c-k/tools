export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <strong className="footer__brand">FastenPro</strong>
          <p>Stainless steel fasteners for industrial, marine and solar projects.</p>
        </div>
        <nav aria-label="Footer">
          <a href="#catalog">Products</a>
          <a href="#technical">Technical</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="footer__legal">
          &copy; {new Date().getFullYear()} FastenPro. Placeholder content, replace before launch.
          <br />
          Temporary photos: Wikimedia Commons. Acorn nuts by R. Henrik Nilsson (CC BY 4.0); hex standoffs by wdwd (CC BY-SA 4.0); nylon lock nut by Btarski (CC BY-SA 3.0); anchor bolt by ほーるだうん (CC BY-SA 3.0); hex socket screws by Phiarc (CC BY-SA 4.0); molly bolts by Dmitry G (CC BY-SA 3.0); T-slot profile by Mike1024 (public domain).
        </p>
      </div>
    </footer>
  );
}
