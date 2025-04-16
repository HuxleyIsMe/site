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
          <menu id="mobileMenu"></menu>
          <SpotifyBar />
          <div className="wrapper">
            <Menu />
            <div className="content">{children}</div>
          </div>
          <footer>
            <p>&copy;copyright huxleyIsMe</p>
          </footer>
        </main>
      </body>
    </html>
  );
}
