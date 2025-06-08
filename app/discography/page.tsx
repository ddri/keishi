import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, Play, ExternalLink, Filter, Calendar, Clock } from "lucide-react"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "Discography - Complete Album Collection",
  description: "Explore Keishi Urata's complete discography spanning four decades of electronic and orchestral compositions. From the legendary Akira soundtrack to experimental electronic works.",
  keywords: [
    "Keishi Urata discography",
    "Akira soundtrack",
    "electronic albums",
    "Japanese electronic music",
    "cyberpunk music albums",
    "anime soundtracks",
    "synthesizer music",
    "film scores"
  ],
  openGraph: {
    title: "Discography - Keishi Urata's Complete Album Collection",
    description: "Explore four decades of electronic and orchestral compositions from the legendary creator of the Akira soundtrack.",
    url: "https://keishiurata.com/discography",
    images: [
      {
        url: "/og-discography.jpg",
        width: 1200,
        height: 630,
        alt: "Keishi Urata Discography - Album Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discography - Keishi Urata's Complete Album Collection",
    description: "Explore four decades of electronic and orchestral compositions from the legendary creator of the Akira soundtrack.",
    images: ["/og-discography.jpg"],
  },
  alternates: {
    canonical: "/discography",
  },
}

// Mock data for albums - replace with real data later
const albums = [
  {
    id: "akira-ost",
    title: "AKIRA ORIGINAL SOUNDTRACK",
    year: 1988,
    type: "Symphonic Suite",
    genre: "Electronic/Orchestral",
    duration: "58:32",
    tracks: 12,
    description: "The legendary masterpiece that redefined anime music through complex orchestral and electronic fusion.",
    image: "/placeholder.svg?height=400&width=400",
    featured: true
  },
  {
    id: "neo-tokyo-chronicles",
    title: "NEO-TOKYO CHRONICLES",
    year: 1985,
    type: "Electronic",
    genre: "Ambient Electronic",
    duration: "42:18",
    tracks: 10,
    description: "Early exploration of cyberpunk themes through innovative synthesizer compositions.",
    image: "/placeholder.svg?height=400&width=400",
    featured: false
  },
  {
    id: "synthesized-dreams",
    title: "SYNTHESIZED DREAMS",
    year: 1992,
    type: "Ambient Electronic",
    genre: "Ambient",
    duration: "51:45",
    tracks: 8,
    description: "Atmospheric compositions showcasing mastery of electronic textures and melodic innovation.",
    image: "/placeholder.svg?height=400&width=400",
    featured: false
  },
  {
    id: "digital-landscapes",
    title: "DIGITAL LANDSCAPES",
    year: 1990,
    type: "Electronic",
    genre: "Experimental",
    duration: "47:22",
    tracks: 11,
    description: "Experimental electronic compositions exploring the intersection of technology and emotion.",
    image: "/placeholder.svg?height=400&width=400",
    featured: false
  },
  {
    id: "ghost-machine",
    title: "GHOST IN THE MACHINE",
    year: 1995,
    type: "Film Score",
    genre: "Cinematic Electronic",
    duration: "39:15",
    tracks: 9,
    description: "Haunting score for cyberpunk thriller exploring themes of consciousness and technology.",
    image: "/placeholder.svg?height=400&width=400",
    featured: false
  },
  {
    id: "urban-pulse",
    title: "URBAN PULSE",
    year: 1987,
    type: "Electronic",
    genre: "Techno",
    duration: "44:33",
    tracks: 13,
    description: "High-energy electronic compositions capturing the rhythm of modern city life.",
    image: "/placeholder.svg?height=400&width=400",
    featured: false
  }
]

export default function DiscographyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block border border-zinc-800 px-4 py-2 rounded-full mb-8">
              <span className="text-xs tracking-widest text-zinc-300 uppercase">Complete Collection</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 tracking-tight">
              DISCOGRAPHY
            </h1>
            <p className="text-xl md:text-2xl font-light text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Four decades of sonic innovation spanning electronic, orchestral, and experimental compositions
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-extralight mb-2">25+</div>
                <div className="text-xs tracking-widest text-zinc-400 uppercase">Albums</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extralight mb-2">400+</div>
                <div className="text-xs tracking-widest text-zinc-400 uppercase">Compositions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extralight mb-2">1980</div>
                <div className="text-xs tracking-widest text-zinc-400 uppercase">Since</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-black border-b border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="flex items-center space-x-3">
                <Filter className="h-4 w-4 text-zinc-400" />
                <span className="text-sm font-light tracking-wide text-zinc-400">FILTER BY</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-white text-black hover:bg-zinc-200 cursor-pointer">
                  All
                </Badge>
                <Badge variant="outline" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 cursor-pointer">
                  Electronic
                </Badge>
                <Badge variant="outline" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 cursor-pointer">
                  Film Score
                </Badge>
                <Badge variant="outline" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 cursor-pointer">
                  Ambient
                </Badge>
                <Badge variant="outline" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 cursor-pointer">
                  Experimental
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Album */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block border border-zinc-800 px-3 py-1 rounded-full mb-6">
                <span className="text-xs tracking-widest text-zinc-400 uppercase">Featured Release</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-4">
                Masterwork
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Akira Original Soundtrack"
                  width={500}
                  height={500}
                  className="w-full grayscale hover:grayscale-0 transition-all duration-700 rounded-lg"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-lg">
                  <Button size="lg" className="bg-white text-black hover:bg-zinc-200 font-light tracking-wide">
                    <Play className="h-4 w-4 mr-3" />
                    PLAY ALBUM
                  </Button>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-zinc-800 text-zinc-300 border-zinc-700">
                      1988
                    </Badge>
                    <Badge variant="outline" className="border-zinc-600 text-zinc-300">
                      Symphonic Suite
                    </Badge>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
                    AKIRA ORIGINAL SOUNDTRACK
                  </h3>
                  <p className="text-lg text-zinc-300 font-light leading-relaxed mb-8">
                    The groundbreaking soundtrack that forever changed anime music. A complex fusion of orchestral grandeur 
                    and cutting-edge electronic innovation that captures the essence of cyberpunk dystopia.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-zinc-400" />
                    <span className="text-sm text-zinc-400">58:32 runtime</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Music className="h-4 w-4 text-zinc-400" />
                    <span className="text-sm text-zinc-400">12 tracks</span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button className="bg-white text-black hover:bg-zinc-200 font-light tracking-wide">
                    <Play className="h-4 w-4 mr-2" />
                    LISTEN NOW
                  </Button>
                  <Button variant="outline" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800">
                    VIEW DETAILS
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Albums Grid */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-4">
                Complete Collection
              </h2>
              <p className="text-zinc-400 font-light">
                Explore the full catalog of electronic and orchestral compositions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {albums.map((album) => (
                <Card key={album.id} className="bg-zinc-950 border-zinc-800 hover:border-zinc-600 transition-all duration-500 group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={album.image}
                        alt={album.title}
                        width={400}
                        height={400}
                        className="w-full h-64 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <Button size="sm" className="bg-white text-black hover:bg-zinc-200 font-light tracking-wide">
                          <Play className="h-3 w-3 mr-2" />
                          PLAY
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-xs tracking-widest text-zinc-500 uppercase">
                          {album.year} • {album.type}
                        </div>
                        <Badge variant="outline" className="border-zinc-700 text-zinc-400 text-xs">
                          {album.genre}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-light mb-3 tracking-wide line-clamp-2">
                        {album.title}
                      </h3>
                      <p className="text-sm text-zinc-400 font-light leading-relaxed mb-4 line-clamp-3">
                        {album.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-zinc-500">
                        <span>{album.tracks} tracks</span>
                        <span>{album.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white font-light tracking-wide px-8 py-6"
              >
                LOAD MORE ALBUMS
                <ExternalLink className="ml-3 h-4 w-4" />
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