import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CurtainReveal } from "@/components/CurtainReveal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Norell — Portfolio Website Template for Creative Studios and Agencies",
  description:
    "Creating Visual Narratives that Speak to the Heart of Brands.",
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
        <CurtainReveal />
        {children}
      </body>
    </html>
  );
}
