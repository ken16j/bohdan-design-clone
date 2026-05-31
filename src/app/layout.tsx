import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const interDisplay = localFont({
  src: [
    { path: "../../public/fonts/inter-display-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/inter-display-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/inter-display-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/inter-display-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter-display",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bohdan Skrypka — Product Designer",
  description: "A product designer shaping experiences users choose and competitors chase.",
  icons: {
    icon: "/seo/favicon.png",
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
      className={`${interDisplay.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
