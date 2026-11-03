import Image from "next/image";
import { SITE } from "@/lib/products";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <a href="#top" className="logo" aria-label="Home">
          <Image src="/logo.png" alt={SITE.company} width={230} height={33} priority />
        </a>
        <span className="topbar__contact">
          <span>{SITE.address}</span>
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
        </span>
      </div>
    </div>
  );
}
