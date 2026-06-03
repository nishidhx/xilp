import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { Navigation } from "@/components/common/Navigation";

import "./globals.css";
import { TooltipProvider } from "@/components/[ui]/tooltip";

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
      data-theme="dark"
      lang="en"
      className={`h-full antialiased`}
      suppressHydrationWarning
    >
      <body className={`font-hanken-grotesk antialiased overflow-hidden`}>
        <TooltipProvider>
          <ThemeProvider>
            <header>
              <Navigation />
            </header>
            {children}
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
