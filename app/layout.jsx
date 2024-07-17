import "../styles/globals.css";
import "../styles/home.css";
import { Header } from "../components/header";
import React from "react";

export const metadata = {
  title: {
    default: "Phil's Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ga+Maamli&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="h-full leading-9 text-terminal-text bg-terminal-background text-shadow-custom text-terminal-large whitespace-pre-wrap break-words">
          <div className="h-screen flex flex-col items-center justify-center p-10 md:p-20 lg:p-20 xl:p-60">
            <div className="w-full h-full flex flex-col box-border bg-transparent z-50">
              <Header />
              {children}
              <div className="interlaced top-0 right-0 bottom-0 left-0 fixed z-10 pointer-events-none"></div>
              <div className="glare top-0 right-0 bottom-0 left-0 fixed -z-10  "></div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
