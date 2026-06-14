import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { Navigation } from "@/components/common/Navigation";

import "./globals.css";
import { TooltipProvider } from "@/components/[ui]/tooltip";
import ClickSoundProvider from "@/components/ClickSoundProvider";
import ReactLenis from "lenis/react";
import { Footer } from "@/components/landing/footer";


export const metadata: Metadata = {
  title: "Nishidh Singh | Full Stack Developer",
  description:
    "Hey, I'm Nishihd Singh – a passionate Full Stack Developer skilled in JavaScript, TypeScript, React, Next.js, Node.js, Django, and more. Open to internships, full-time opportunities, and freelance projects.",
  keywords: [
    "xNishidh",
    "xnishidh",
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
    url: "https://www.xnishidh.space",
    siteName: "Nishidh's Portfolio",
    images: [
      {
        url: "https://www.xnishidh.space/banner.png", // Place this image in /public
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
    images: ["https://www.xnishidh.space/nishidh.png"],
  },
  icons: {
    icon: "/nishidh.png",
    apple: "/nishidh.png",
  },
  metadataBase: new URL("https://www.xnishidh.space/"),
  alternates: {
    canonical: "https://xnishidh.space/",
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
