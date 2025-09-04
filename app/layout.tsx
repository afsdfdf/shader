import type React from "react"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Instrument_Serif } from "next/font/google"
import PerformanceOptimizer from "@/components/performance-optimizer"
import UIEnhancements from "@/components/ui-enhancements"
import { PageErrorBoundary } from "@/components/error-boundary"
import { ToastProvider } from "@/components/toast-system"
import "./globals.css"

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AegisMind Network - Next-Generation Privacy AI Network",
  description:
    "Experience the future of privacy-preserving AI with AegisMind Network. Built on Fully Homomorphic Encryption (FHE) technology, we provide zero-trust infrastructure for secure data processing, AI agent collaboration, and quantum-resistant security.",
  keywords: [
    "privacy AI",
    "fully homomorphic encryption",
    "FHE",
    "zero trust",
    "blockchain",
    "quantum resistant",
    "AI agents",
    "privacy computing",
    "data sovereignty",
    "encrypted computation"
  ],
  authors: [{ name: "AegisMind Network Team" }],
  creator: "AegisMind Network",
  publisher: "AegisMind Network",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aegismind.network',
    title: 'AegisMind Network - Privacy AI Revolution',
    description: 'The next-generation privacy AI network based on FHE technology. Building zero-trust infrastructure for the encrypted future.',
    siteName: 'AegisMind Network',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'AegisMind Network Logo',
      },
      {
        url: '/fhe-encryption-hero.png',
        width: 1920,
        height: 1080,
        alt: 'AegisMind Network - Privacy AI Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AegisMind Network - Privacy AI Revolution',
    description: 'Experience the future of privacy-preserving AI with cutting-edge FHE technology.',
    images: ['/logo.png', '/fhe-encryption-hero.png'],
    creator: '@AegisMindNetwork',
  },
  metadataBase: new URL('https://aegismind.network'),
  generator: "Next.js",
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        <style>{`
html {
  font-family: ${figtree.style.fontFamily};
  --font-sans: ${figtree.variable};
  --font-mono: ${GeistMono.variable};
  --font-instrument-serif: ${instrumentSerif.variable};
}
        `}</style>
      </head>
      <body className={`${figtree.variable} ${instrumentSerif.variable}`}>
        <PerformanceOptimizer />
        <UIEnhancements />
        <ToastProvider>
          <PageErrorBoundary>
            {children}
          </PageErrorBoundary>
        </ToastProvider>
      </body>
    </html>
  )
}
