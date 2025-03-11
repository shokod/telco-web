import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "TIS GLOBAL (Pty) Ltd | Expert Safety Solutions Since 2013",
  description:
    "TIS GLOBAL (Pty) Ltd is a proudly South African company established in 2013, offering quality fall arrest, rope access, and rescue equipment that meet SABS and SANS/EN standards.",
  keywords: [
    "Safety Solutions",
    "Working at Heights",
    "Fall Arrest Equipment",
    "Rope Access",
    "South African Safety",
    "TIS Global",
    "PPE",
  ],
  openGraph: {
    title: "TIS GLOBAL (Pty) Ltd | Expert Safety Solutions Since 2013",
    description:
      "Delivering professional, sustainable, and reliable safety solutions for working at heights. Discover our range of equipment and services that meet SABS and SANS/EN standards.",
    url: "https://tisglobal.co.za",
    siteName: "TIS GLOBAL (Pty) Ltd",
    images: [
      {
        url: "https://tisglobal.co.za/og-image.jpg",
        width: 800,
        height: 600,
        alt: "TIS GLOBAL Safety Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TIS GLOBAL (Pty) Ltd | Expert Safety Solutions Since 2013",
    description:
      "Providing quality fall arrest, rope access, and rescue equipment for the working at heights industry in South Africa and beyond.",
    // images: ["https://tisglobal.co.za/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
