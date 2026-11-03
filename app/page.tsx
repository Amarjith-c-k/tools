import { About } from "@/components/About";
import { Applications } from "@/components/Applications";
import { Catalog } from "@/components/Catalog";
import { Hero } from "@/components/Hero";
import { Insights } from "@/components/Insights";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";
import { QuoteForm } from "@/components/QuoteForm";
import { SeriesGrid } from "@/components/SeriesGrid";
import { Technical } from "@/components/Technical";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <SeriesGrid />
      <Catalog />
      <Applications />
      <About />
      <Insights />
      <Technical />
      <Testimonials />
      <QuoteForm />
    </>
  );
}
