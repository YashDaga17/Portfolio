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
  title: "Yash Daga | Software Developer & Innovator",
  description: "Portfolio of Yash Daga - Software Developer experienced in React.js, Next.js, TypeScript, Azure, and REST APIs. Hackathon winner and innovation enthusiast.",
  keywords: ["Yash Daga", "Software Developer", "React", "Next.js", "TypeScript", "Azure", "Portfolio", "Hackathon Winner"],
  authors: [{ name: "Yash Daga" }],
  creator: "Yash Daga",
  publisher: "Yash Daga",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Yash Daga | Software Developer & Innovator",
    description: "Portfolio showcasing my journey as a Software Developer, Hackathon winner, and tech innovator",
    url: "https://yashdaga17.github.io",
    siteName: "Yash Daga Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Daga | Software Developer & Innovator",
    description: "Portfolio showcasing my journey as a Software Developer, Hackathon winner, and tech innovator",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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
