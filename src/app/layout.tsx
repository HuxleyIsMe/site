import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpotifyBar, Menu } from "./components/index";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://huxely-is-me.vercel.app/"),
  openGraph: {
    title: "Huxley Millard",
    description: "A work in progress website for me",
    images: [
      {
        url: `/opengraph-image.webp"`,
        width: 1200,
        height: 630,
        alt: `Preview image for Huxley Millard site`,
      },
    ],
  },
  title: "Huxley Millard",
  description: "A work in progress little site to say hello",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className="page">
          <SpotifyBar />
          <div className="wrapper">
            <Menu />
            <div className="content">{children}</div>
          </div>
          <footer>
            <p>&copy;copyright huxleyIsMe</p>
            <img
              className="icons"
              alt="Come checkout my Github"
              src="/images/github.svg"
              width="30px"
              height="30px"
            />
            <img
              className="icons"
              alt="Come checkout my LinkedIn"
              src="/images/linkedin.svg"
              width="30px"
              height="30px"
            />
          </footer>
        </main>
      </body>
    </html>
  );
}
