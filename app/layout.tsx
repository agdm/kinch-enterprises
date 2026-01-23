import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kinch Enterprises - Real Estate Development & General Construction",
  description:
    "Professional real estate development, general construction, and project management services across NY, NJ, CT, GA, and FL. Quality craftsmanship and sustainable solutions.",
  keywords:
    "real estate development, general construction, project management, HVAC design, custom design, remodeling, renovation, New York, New Jersey, Connecticut, Georgia, Florida",
  generator: 'v0.dev',
  openGraph: {
    images: [
      {
        url: "https://kinch-enterprises.thepeopleservice.com/images/ke-black-logo.png",
        width: 800,
        height: 600,
        alt: "Kinch Enterprises Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "https://kinch-enterprises.thepeopleservice.com/images/ke-black-logo.png",
        width: 800,
        height: 600,
        alt: "Kinch Enterprises Logo"
      }
    ]
  }
}

import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
