import { About } from "@/components/About";
import { Applications } from "@/components/Applications";
import { Catalog } from "@/components/Catalog";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { QuoteForm } from "@/components/QuoteForm";
import { SeriesGrid } from "@/components/SeriesGrid";
import { Technical } from "@/components/Technical";

export default function Home() {
  return (
    <>
      <Hero />
      <SeriesGrid />
      <Catalog />
      <Applications />
      <Process />
      <About />
      <Technical />
      <QuoteForm />
    </>
  );
}
