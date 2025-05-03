import type { Metadata } from "next";
import { SpotifyBar, Menu } from "./components/index";

import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://huxely-is-me.vercel.app/"),
  openGraph: {
    type: "website",
    title: "Huxley Millard",
    description: "A work in progress website for me",
    images: [
      {
        url: `https://huxely-is-me.vercel.app/opengraph-image.png`,
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
      <body>
        <main className="page">
          <SpotifyBar />
          <div className="wrapper">
            <Menu />
            <div className="content">{children}</div>
          </div>
          <footer>
            <p>&copy;copyright huxleyIsMe</p>
            < a href="https://github.com/HuxleyIsMe" target="_blank">
              <img
                className="icons"
                alt="Come checkout my Github"
                src="/images/github.svg"
                width="30px"
                height="30px"
              />
            </a>
            < a href="https://www.linkedin.com/in/huxley-millard-456708102/" target="_blank">
              <img
                className="icons"
                alt="Come checkout my LinkedIn"
                src="/images/linkedin.svg"
                width="30px"
                height="30px"
              />
            </a>
          </footer>
        </main>
      </body>
    </html>
  );
}
