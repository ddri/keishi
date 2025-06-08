import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Keishi Urata - Legendary Electronic Music Composer",
    template: "%s | Keishi Urata"
  },
  description: "Official website of Keishi Urata, legendary Japanese composer and pioneer of electronic music in anime and media. Creator of the iconic Akira soundtrack and over 400 musical works.",
  keywords: [
    "Keishi Urata",
    "Japanese composer",
    "electronic music",
    "Akira soundtrack",
    "anime music",
    "cyberpunk music",
    "film composer",
    "synthesizer",
    "Tokyo electronic scene",
    "video game music"
  ],
  authors: [{ name: "Keishi Urata" }],
  creator: "Keishi Urata",
  publisher: "Keishi Urata Official",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://keishiurata.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://keishiurata.com",
    siteName: "Keishi Urata Official",
    title: "Keishi Urata - Legendary Electronic Music Composer",
    description: "Official website of Keishi Urata, legendary Japanese composer and pioneer of electronic music in anime and media. Creator of the iconic Akira soundtrack.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Keishi Urata - Electronic Music Pioneer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keishi Urata - Legendary Electronic Music Composer",
    description: "Official website of Keishi Urata, creator of the iconic Akira soundtrack and pioneer of electronic music.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
