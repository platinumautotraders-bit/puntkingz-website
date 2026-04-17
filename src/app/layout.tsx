import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://puntkingz.com"),
  title: {
    default: "Punt Kingz — NRL Match Predictions",
    template: "%s | Punt Kingz",
  },
  description:
    "10,000 Monte Carlo simulations per match. Player-level data. Real-world adjustments. No AI guesswork. NRL match predictions backed by pure mathematics.",
  keywords: [
    "NRL predictions",
    "NRL tips",
    "rugby league predictions",
    "Monte Carlo simulation",
    "NRL match predictions",
    "sports prediction",
    "NRL betting",
    "try scorer predictions",
  ],
  authors: [{ name: "Punt Kingz" }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://puntkingz.com",
    siteName: "Punt Kingz",
    title: "Punt Kingz — NRL Match Predictions",
    description:
      "10,000 Monte Carlo simulations per match. Player-level data. Real-world adjustments. No AI guesswork.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1920,
        height: 1080,
        alt: "Punt Kingz — NRL Match Predictions powered by Monte Carlo simulation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Punt Kingz — NRL Match Predictions",
    description:
      "10,000 Monte Carlo simulations per match. Player-level data. Real-world adjustments. No AI guesswork.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-16 md:pt-18 pb-16 md:pb-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
