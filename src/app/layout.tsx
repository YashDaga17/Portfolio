import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { getAssetPath } from "@/lib/config"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yash Daga | Full-Stack Developer & Tech Innovator",
  description: "Experienced Full-Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  icons: {
    icon: getAssetPath("/favicon.svg"),
    shortcut: getAssetPath("/favicon.svg"),
    apple: getAssetPath("/favicon.svg"),
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/svg+xml" href={getAssetPath("/favicon.svg")} />
        <link rel="alternate icon" href={getAssetPath("/favicon.svg")} />
        <link rel="mask-icon" href={getAssetPath("/favicon.svg")} color="#22c55e" />
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
