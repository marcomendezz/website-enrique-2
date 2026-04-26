import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Enrique Vazquez — Luxury Real Estate in Los Cabos",
  description:
    "Enrique Vazquez is one of Los Cabos' most accomplished luxury real estate professionals. TOP 20 Agent in BCS, $30M+ in career sales. Specializing in Pedregal, Quivira, Diamante, Palmilla, and more.",
  keywords:
    "Los Cabos real estate, Cabo San Lucas luxury homes, Enrique Vazquez realtor, Oceanside Realty Group, Pedregal homes, Quivira Los Cabos, Diamante Cabo, luxury villas Cabo, buy property Mexico",
  openGraph: {
    title: "Enrique Vazquez — Luxury Real Estate in Los Cabos",
    description:
      "TOP 20 Agent in BCS, $30M+ in career sales. Born & raised in Cabo San Lucas.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-[100dvh] bg-background text-foreground">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
