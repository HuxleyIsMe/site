import type { Metadata } from "next";
import { Menu } from "./menu";
import { Geist, Geist_Mono } from "next/font/google";
import { SpotifyBar } from "./spotifyBar";
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
      <body className={`${geistSans.variable} ${geistMono.variable} wrapper2`}>
        <menu id="mobileMenu"></menu>
        <SpotifyBar />
        <div className="wrapper">
          <Menu />

          <div className="content">{children}</div>
        </div>
      </body>
    </html>
  );
}
