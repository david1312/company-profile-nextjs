import type { Metadata } from "next";
import Header from "@/src/components/common/Header";
import icon from "@/public/favicon.ico";
import "./globals.css";
import Footer from "@/src/components/common/Footer";
import ReduxProvider from "./ReduxProvider";

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
        <ReduxProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
