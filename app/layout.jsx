import "../styles/globals.css";
import "../styles/glare.css";
import { Header } from "../components/header";
import React from "react";
import { VT323 } from "next/font/google";
import InterlacedEffectOverlay from "../components/interlacedEffectOverlay";
import GlareEffectOverlay from "../components/glareEffectOverlay";

const vt323 = VT323({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata = {
  title: {
    default: "Phil's Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={vt323.className}>
      <head>
        <title>{metadata.title.default}</title>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body>
        <div className="h-full leading-9 text-terminal-text bg-terminal-background text-shadow-custom text-terminal-large whitespace-pre-wrap break-words">
          <div className="h-screen flex flex-col items-center justify-center p-10 md:p-20 lg:p-20 xl:p-60">
            <div className="w-full h-full flex flex-col box-border bg-transparent z-50">
              <GlareEffectOverlay />
              <InterlacedEffectOverlay />
              <Header />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
