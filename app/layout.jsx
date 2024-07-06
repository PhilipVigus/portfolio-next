import "../styles/globals.css";
import "../styles/main.css";
import { Header } from "../components/header";

export const metadata = {
  title: {
    template: "%s | Netlify",
    default: "Netlify Starter",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <title>Phil&apos;s Portfolio</title>
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
        <div className="h-full screen leading-9">
          <div className="h-screen flex flex-col items-center justify-center p-60">
            <div className="w-full h-full flex flex-col justify-center box-border bg-transparent z-50">
              <Header />
              {children}
              <div className="interlaced top-0 right-0 bottom-0 left-0 fixed pointer-events-none z-10"></div>
              <div className="glare top-0 right-0 bottom-0 left-0 fixed -z-10"></div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
