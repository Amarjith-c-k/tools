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
  title: "TorqueConnect | Precision Fasteners & Assembly Hardware",
  description: "Precision fasteners, assembly hardware and stainless nuts, spacers, bolts and anchors for the GCC, Europe and Africa. Request a quote online.",
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
