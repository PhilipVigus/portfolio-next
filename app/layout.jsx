import '../styles/globals.css';
import '../styles/main.css';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="mytheme">
        <head>
            <link rel="icon" href="/favicon.svg" sizes="any" />
            <title>Phil&apos;s Portfolio</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Ga+Maamli&display=swap" rel="stylesheet" />
        </head>
        <body className="screen">
        <div className="grow">{children}</div>

        </body>
        </html>
    );
}
