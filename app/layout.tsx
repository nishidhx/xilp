import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { Navigation } from "@/components/common/Navigation";

import "./globals.css";
import { TooltipProvider } from "@/components/[ui]/tooltip";
import ClickSoundProvider from "@/components/ClickSoundProvider";
import ReactLenis from "lenis/react";
import { Footer } from "@/components/landing/footer";

const siteUrl = new URL("https://www.xnishidh.space/");

export const metadata: Metadata = {
  title: "Nishidh Singh | Full Stack Developer",
  description:
    "Hey, I'm Nishidh Singh – Engineer who loves to create superb things.",
  keywords: [
    "xNishidh",
    "xnishidh",
    "Nihit Singh",
    "Nishidh Singh",
    "Nihit",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript",
    "Node.js",
    "Django",
    "Portfolio",
    "Web Developer",
    "Open Source Contributor",
    "Hackathon Developer",
    "Nihit Singh",
    "xnishdh.space",
    "quebits",
    "devrel labs",
    "Devrel labs nihit",
    "qibits",
    "Quebits IT services"
  ],
  authors: [{ name: "Nishidh Singh", url: "https://github.com/nishidhx" }],
  openGraph: {
    title: "xNishidh - Engineer",
    description:
      "Portfolio of Nishidh (Nihit) Singh – Full Stack Developer, open-source contributor, and hackathon enthusiast.",
    url: siteUrl.toString(),
    siteName: "Nishidh's Portfolio",
    images: [
      {
        url: new URL("/banner.png", siteUrl).toString(),
        width: 1200,
        height: 630,
        alt: "Nishidh Singh Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishidh Singh | Full Stack Developer",
    description:
      "Hey, I'm Nishidh – Full Stack Developer working with React, Next.js, Django, and Node.js.",
    site: "@xnishidh",
    images: [{
        url: new URL("/banner.png", siteUrl).toString(),
        width: 1200,
        height: 630,
        alt: "Nishidh Singh Portfolio Preview",
      }],
  },
  icons: {
    icon: "/nishidh.png",
    apple: "/nishidh.png",
  },
  metadataBase: siteUrl,
  alternates: {
    canonical: siteUrl.toString(),
  },
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
      <head>
        <link rel="icon" href="/nishidh.png" />
        <meta name="robots" content="index, follow" />
      </head>
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
