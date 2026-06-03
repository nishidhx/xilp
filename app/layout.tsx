import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { Navigation } from "@/components/Navigation";

import "./globals.css";

export const metadata: Metadata = {
  title: "xilp",
  description: "nishidhx portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
      suppressHydrationWarning
    >
      <body className={`font-hanken-grotesk antialiased`}>
        <ThemeProvider>
          <header>
            <Navigation />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
