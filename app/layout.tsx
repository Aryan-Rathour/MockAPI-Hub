import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MockAPI Hub - Free Fake APIs for Prototyping & Testing",
  description:
    "Access hundreds of mock APIs instantly. Perfect for frontend development, testing, and rapid prototyping. No setup required.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
