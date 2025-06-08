import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, Calendar, Award, MapPin, Users, Download, ExternalLink } from "lucide-react"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "About - Biography & Career Journey",
  description: "Learn about Keishi Urata's remarkable journey from Tokyo's underground electronic scene to becoming Japan's most influential composer. Discover his awards, timeline, and legacy.",
  keywords: [
    "Keishi Urata biography",
    "Japanese composer biography",
    "electronic music pioneer",
    "Akira composer",
    "Tokyo electronic scene",
    "music awards",
    "composer timeline",
    "electronic music history"
  ],
  openGraph: {
    title: "About Keishi Urata - Biography & Career Journey",
    description: "Discover the remarkable journey of Japan's most influential electronic music composer, from underground beginnings to global recognition.",
    url: "https://keishiurata.com/about",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Keishi Urata - Electronic Music Pioneer Biography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Keishi Urata - Biography & Career Journey",
    description: "Discover the remarkable journey of Japan's most influential electronic music composer.",
    images: ["/og-about.jpg"],
  },
  alternates: {
    canonical: "/about",
  },
}

// Timeline data
const timeline = [
  {
    year: "1980",
    title: "Early Beginnings",
    description: "Started experimenting with electronic music synthesis at Tokyo University's music lab."
  },
  {
    year: "1985",
    title: "First Commercial Release",
    description: "Released 'Neo-Tokyo Chronicles', establishing a unique sound that would define cyberpunk music."
  },
  {
    year: "1988",
    title: "Akira Breakthrough",
    description: "Composed the legendary Akira soundtrack, revolutionizing anime music forever."
  },
  {
    year: "1990-1995",
    title: "Golden Era",
    description: "Peak creative period with multiple groundbreaking releases and film scores."
  },
  {
    year: "1996-2000",
    title: "International Recognition",
    description: "Gained global acclaim and influenced a generation of electronic music producers."
  },
  {
    year: "2000-Present",
    title: "Legacy & Innovation",
    description: "Continued to push boundaries while mentoring new artists and preserving electronic music history."
  }
]

// Awards data
const awards = [
  {
    year: "1989",
    title: "Japan Record Award",
    category: "Best Soundtrack",
    work: "Akira Original Soundtrack"
  },
  {
    year: "1990",
    title: "Tokyo International Film Festival",
    category: "Best Music Score",
    work: "Ghost in the Machine"
  },
  {
    year: "1995",
    title: "Electronic Music Pioneer Award",
    category: "Lifetime Achievement",
    work: "Career Recognition"
  },
  {
    year: "2000",
    title: "Cultural Ambassador",
    category: "Japanese Arts Council",
    work: "Cultural Contribution"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block border border-zinc-800 px-4 py-2 rounded-full mb-8">
              <span className="text-xs tracking-widest text-zinc-300 uppercase">Artist Biography</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 tracking-tight">
              ABOUT
            </h1>
            <p className="text-xl md:text-2xl font-light text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              The visionary composer who defined the sound of cyberpunk and electronic anime music
            </p>
          </div>
        </div>
      </section>

      {/* Main Biography */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-extralight mb-8 tracking-tight">
                    Defining an
                    <br />
                    <span className="text-zinc-400">Era</span>
                  </h2>
                </div>
                <div className="space-y-6 text-zinc-300 leading-relaxed font-light text-lg">
                  <p>
                    Born in Tokyo in 1955, Keishi Urata emerged from the underground electronic scene to become one of 
                    Japan's most influential composers, forever changing the landscape of anime and electronic music.
                  </p>
                  <p>
                    His groundbreaking work on Akira in 1988 didn't just score a film—it created a new language for 
                    cyberpunk aesthetics, blending traditional orchestration with cutting-edge synthesis techniques 
                    that were revolutionary for their time.
                  </p>
                  <p>
                    Across four decades, Urata has composed for over 400 projects, each piece a testament to his 
                    ability to capture the essence of modern Japan's technological evolution through sound. His work 
                    bridges the gap between electronic experimentation and emotional storytelling.
                  </p>
                  <p>
                    Beyond composition, Urata has been instrumental in establishing electronic music as a legitimate 
                    art form in Japan, mentoring countless artists and advocating for the preservation of electronic 
                    music history.
                  </p>
                </div>
                
                {/* Quick Facts */}
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-zinc-400" />
                      <span className="text-sm text-zinc-400">Born in Tokyo, Japan</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-4 w-4 text-zinc-400" />
                      <span className="text-sm text-zinc-400">Active since 1980</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Music className="h-4 w-4 text-zinc-400" />
                      <span className="text-sm text-zinc-400">400+ Compositions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-4 w-4 text-zinc-400" />
                      <span className="text-sm text-zinc-400">50+ Artists Mentored</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=500"
                    alt="Keishi Urata in studio"
                    width={500}
                    height={600}
                    className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                  <div className="text-center">
                    <div className="text-2xl font-extralight mb-1">2024</div>
                    <div className="text-xs tracking-widest text-zinc-400 uppercase">Still Creating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block border border-zinc-800 px-3 py-1 rounded-full mb-6">
                <span className="text-xs tracking-widest text-zinc-400 uppercase">Career Journey</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight">
                Timeline
              </h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-px bg-zinc-700"></div>
              
              <div className="space-y-16">
                {timeline.map((item, index) => (
                  <div key={item.year} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-600 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="mb-3">
                            <Badge className="bg-white text-black font-light">
                              {item.year}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-light mb-3 tracking-wide">
                            {item.title}
                          </h3>
                          <p className="text-zinc-400 font-light leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="w-4 h-4 bg-white rounded-full border-4 border-zinc-800 relative z-10"></div>
                    
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block border border-zinc-800 px-3 py-1 rounded-full mb-6">
                <span className="text-xs tracking-widest text-zinc-400 uppercase">Recognition</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight">
                Awards &
                <br />
                <span className="text-zinc-400">Honors</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {awards.map((award, index) => (
                <Card key={index} className="bg-zinc-950 border-zinc-800 hover:border-zinc-600 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-white to-zinc-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="h-6 w-6 text-black" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge variant="outline" className="border-zinc-600 text-zinc-300">
                            {award.year}
                          </Badge>
                          <Badge className="bg-zinc-800 text-zinc-300 border-zinc-700">
                            {award.category}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-light mb-2 tracking-wide">
                          {award.title}
                        </h3>
                        <p className="text-zinc-400 font-light">
                          {award.work}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block border border-zinc-800 px-3 py-1 rounded-full mb-6">
                <span className="text-xs tracking-widest text-zinc-400 uppercase">Visual Archive</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight">
                Photo
                <br />
                <span className="text-zinc-400">Gallery</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Gallery+${i}`}
                    alt={`Gallery image ${i}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white font-light tracking-wide px-8 py-6"
              >
                VIEW FULL GALLERY
                <Download className="ml-3 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-6 h-6 bg-gradient-to-br from-white to-zinc-400 rounded-sm flex items-center justify-center">
                  <Music className="h-3 w-3 text-black" />
                </div>
                <span className="text-lg font-light tracking-wider">KEISHI URATA</span>
              </div>
              <p className="text-zinc-400 max-w-md font-light leading-relaxed">
                Legendary Japanese composer and pioneer of electronic music in anime and media. Creator of the iconic
                Akira soundtrack and over 400 musical works.
              </p>
            </div>
            <div>
              <h4 className="text-white font-light mb-6 tracking-wide">NAVIGATION</h4>
              <ul className="space-y-3 text-zinc-400 font-light">
                <li>
                  <Link href="/discography" className="hover:text-white transition-colors tracking-wide">
                    Discography
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors tracking-wide">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors tracking-wide">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:text-white transition-colors tracking-wide">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-light mb-6 tracking-wide">PLATFORMS</h4>
              <ul className="space-y-3 text-zinc-400 font-light">
                <li>
                  <Link href="#" className="hover:text-white transition-colors tracking-wide">
                    Spotify
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors tracking-wide">
                    Apple Music
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors tracking-wide">
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors tracking-wide">
                    SoundCloud
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-16 pt-8 text-center text-zinc-500 font-light tracking-wide">
            <p>&copy; {new Date().getFullYear()} KEISHI URATA. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 