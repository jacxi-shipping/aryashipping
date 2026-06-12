import type { Metadata } from "next";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import I18nProvider from "@/components/I18nProvider";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased selection:bg-[#00a3ff]/30 selection:text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            <SmoothScrolling>
              {children}
            </SmoothScrolling>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
