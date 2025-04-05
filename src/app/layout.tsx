import type { Metadata } from "next";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import { ShopingCartContextProvider } from "@/components/ShopingCartContext";

export const metadata: Metadata = {
  title: "You & Me Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body>
        <ShopingCartContextProvider>
          <HeaderTop />
          <Header />
          <MobileMenu />
          {children}
        </ShopingCartContextProvider>
      </body>
    </html>
  );
}
