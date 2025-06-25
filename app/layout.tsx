import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Izisol - Freelance Company",
  description: "Professional freelance solutions for E-commerce, CRM and Web development projects.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./8.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
