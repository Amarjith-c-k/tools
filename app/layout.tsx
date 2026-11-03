import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/components/store";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductDialog } from "@/components/ProductDialog";
import { QuoteDrawer } from "@/components/QuoteDrawer";

const poppins = Poppins({ variable: "--font-poppins", weight: ["400", "500", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FastenPro | Stainless Bolts, T-Bolts & Anchor Bolts",
  description: "Stainless steel 304 and 316 carriage, flange, T-slot, square head and anchor bolts. Request a quote online.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={poppins.variable}>
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
