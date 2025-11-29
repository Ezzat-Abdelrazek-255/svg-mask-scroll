import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactLenis } from "@/libs/lenis";

const kilimanjaroSans = localFont({
  src: "./fonts/KilimanjaroSans-Regular.woff2",
  variable: "--font-kilimanjaro-sans",
});

export const metadata: Metadata = {
  title: "SVG Mask Scroll",
  description: "SVG Mask Scroll",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kilimanjaroSans.variable} antialiased`}>
        <div className="pointer-events-none fixed inset-0 z-[99999] h-screen bg-noise bg-repeat opacity-[0.03]"></div>
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
