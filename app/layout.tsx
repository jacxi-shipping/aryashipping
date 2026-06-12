import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arya Shipping | USA & Canada Car Shipping to Afghanistan",
  description:
    "Secure vehicle shipping from the USA and Canada to Afghanistan through Mersin Port, with pickup, ocean freight, customs, and inland delivery coordination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
