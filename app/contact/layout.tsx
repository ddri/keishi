import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Get In Touch",
  description: "Connect with Keishi Urata for collaborations, bookings, press inquiries, or general correspondence. Professional contact information and response times.",
  keywords: [
    "contact Keishi Urata",
    "music collaboration",
    "booking inquiries",
    "press contact",
    "composer contact",
    "electronic music collaboration",
    "film scoring contact",
    "music production contact"
  ],
  openGraph: {
    title: "Contact Keishi Urata - Get In Touch",
    description: "Connect with the legendary electronic music composer for collaborations, bookings, and press inquiries.",
    url: "https://keishiurata.com/contact",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Keishi Urata - Electronic Music Composer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Keishi Urata - Get In Touch",
    description: "Connect with the legendary electronic music composer for collaborations, bookings, and press inquiries.",
    images: ["/og-contact.jpg"],
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 