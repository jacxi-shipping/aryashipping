import type { Metadata } from "next";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

export const metadata: Metadata = {
  title: "Arya Shipping | Premium Vehicle Logistics",
  description:
    "Secure vehicle shipping from the USA and Canada to Afghanistan through Mersin Port. Experience high-control workflow and premium concierge handoff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#030609] text-white antialiased selection:bg-[#00a3ff]/30 selection:text-white">
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
