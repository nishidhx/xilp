import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { Navigation } from "@/components/common/Navigation";

import "./globals.css";
import { TooltipProvider } from "@/components/[ui]/tooltip";
import ClickSoundProvider from "@/components/ClickSoundProvider";
import ReactLenis from "lenis/react";
import { Footer } from "@/components/landing/footer";

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
      <body className={`font-hanken-grotesk antialiased no-scrollbar`}>
       <ClickSoundProvider />
        <TooltipProvider>
          <ThemeProvider>
            <ReactLenis root>
              <div className="min-h-screen flex flex-col">
                <header>
                  <Navigation />
                </header>

                <main className="flex-1">{children}</main>

                <Footer />
              </div>
            </ReactLenis>
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
