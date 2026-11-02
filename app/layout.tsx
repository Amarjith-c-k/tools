import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/components/store";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductDialog } from "@/components/ProductDialog";
import { QuoteDrawer } from "@/components/QuoteDrawer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const serif = DM_Serif_Display({ variable: "--font-serif", weight: "400", style: ["normal", "italic"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FastenPro | Stainless Bolts, T-Bolts & Anchor Bolts",
  description: "Stainless steel 304 and 316 carriage, flange, T-slot, square head and anchor bolts. Request a quote online.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body>
        <StoreProvider>
          <TopBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <ProductDialog />
          <QuoteDrawer />
        </StoreProvider>
      </body>
    </html>
  );
}
