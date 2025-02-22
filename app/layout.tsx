import "./globals.css"
import { Space_Grotesk } from "next/font/google"
import type React from "react"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "Tesuji Systems Ltd",
  description: "Decentralized Validation & Network Services",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}



import './globals.css'