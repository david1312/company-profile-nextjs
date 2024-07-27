import type { Metadata } from "next";
import Header from "@/src/components/Header";
import icon from "@/public/favicon.ico";
import "./globals.css";

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
      </body>
    </html>
  );
}
