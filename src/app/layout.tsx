import type { Metadata } from "next";
import Header from "@/src/components/common/Header";
import icon from "@/src/app/favicon.ico";
import "./globals.css";
import Footer from "@/src/components/common/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Bitboltz Indonesia",
  description: "Bitboltz Indonesia Web Company Profile",
  icons: icon.src,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
