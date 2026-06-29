import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CurtainReveal } from "@/components/CurtainReveal";
import ScrollToTop from "@/components/ScrollToTop";
import { RevealProvider } from "@/context/RevealContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://redwanouthouna.com"),
  title: "Redwan Outhouna | Marketing & Design",
  description:
    "O.REDWAN — Creating visual narratives that speak to the heart of brands.",
  icons: { icon: "/images/o-redwan-logo.svg" },
  openGraph: {
    title: "O.REDWAN — Creative Studio Portfolio",
    description:
      "O.REDWAN — Creating visual narratives that speak to the heart of brands.",
    siteName: "O.REDWAN",
    images: [{ url: "/images/o-redwan-logo.svg", alt: "O.REDWAN" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body
        className="min-h-full flex flex-col bg-background text-foreground"
        suppressHydrationWarning
      >
        <ScrollToTop />
        <RevealProvider>
          <CurtainReveal />
          {children}
        </RevealProvider>
      </body>
    </html>
  );
}
