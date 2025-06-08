import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, Download, Image as ImageIcon, FileText, Calendar, ExternalLink, Mail, Headphones } from "lucide-react"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "Press Kit - Media Resources & Information",
  description: "Complete press kit for Keishi Urata including high-resolution photos, biographical information, press materials, and media contact information for journalists and media professionals.",
  keywords: [
    "Keishi Urata press kit",
    "media resources",
    "press photos",
    "composer biography",
    "press contact",
    "media information",
    "electronic music press",
    "Akira composer press",
    "music journalist resources"
  ],
  openGraph: {
    title: "Press Kit - Keishi Urata Media Resources",
    description: "Complete press kit with high-resolution photos, biographical information, and media resources for the legendary electronic music composer.",
    url: "https://keishiurata.com/press",
    images: [
      {
        url: "/og-press.jpg",
        width: 1200,
        height: 630,
        alt: "Keishi Urata Press Kit - Media Resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Press Kit - Keishi Urata Media Resources",
    description: "Complete press kit with high-resolution photos, biographical information, and media resources.",
    images: ["/og-press.jpg"],
  },
  alternates: {
    canonical: "/press",
  },
}

// Press kit resources
const pressResources = [
  {
    category: "Biography",
    items: [
      { name: "Short Bio (100 words)", format: "PDF", size: "45 KB", type: "bio" },
      { name: "Medium Bio (300 words)", format: "PDF", size: "78 KB", type: "bio" },
      { name: "Extended Bio (800 words)", format: "PDF", size: "125 KB", type: "bio" }
    ]
  },
  {
    category: "Photos",
    items: [
      { name: "Portrait - High Resolution", format: "JPG", size: "8.2 MB", type: "photo" },
      { name: "Studio Session - Collection", format: "ZIP", size: "45 MB", type: "photo" },
      { name: "Live Performance - Set", format: "ZIP", size: "32 MB", type: "photo" },
      { name: "Album Artwork - High Res", format: "ZIP", size: "128 MB", type: "photo" }
    ]
  },
  {
    category: "Audio",
    items: [
      { name: "Interview Excerpts", format: "MP3", size: "12 MB", type: "audio" },
      { name: "Track Samples (30s)", format: "ZIP", size: "67 MB", type: "audio" },
      { name: "Akira Theme - Isolated", format: "WAV", size: "45 MB", type: "audio" }
    ]
  },
  {
    category: "Press",
    items: [
      { name: "Fact Sheet", format: "PDF", size: "156 KB", type: "document" },
      { name: "Discography List", format: "PDF", size: "234 KB", type: "document" },
      { name: "Awards & Recognition", format: "PDF", size: "189 KB", type: "document" }
    ]
  }
]

// Recent press coverage
const pressClippings = [
  {
    outlet: "Electronic Music Magazine",
    title: "The Akira Legacy: How Keishi Urata Defined Cyberpunk Music",
    date: "March 2024",
    type: "Feature Article",
    url: "#"
  },
  {
    outlet: "Japan Times",
    title: "Electronic Pioneer Still Pushing Boundaries at 69",
    date: "February 2024",
    type: "Interview",
    url: "#"
  },
  {
    outlet: "Anime News Network",
    title: "40 Years of Soundtracks: A Retrospective",
    date: "January 2024",
    type: "Documentary",
    url: "#"
  },
  {
    outlet: "Wire Magazine",
    title: "Tokyo's Electronic Underground: Past and Present",
    date: "December 2023",
    type: "Feature",
    url: "#"
  }
]

export default function PressPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block border border-zinc-800 px-4 py-2 rounded-full mb-8">
              <span className="text-xs tracking-widest text-zinc-300 uppercase">Media Resources</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 tracking-tight">
              PRESS KIT
            </h1>
            <p className="text-xl md:text-2xl font-light text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Complete media resources including high-resolution images, biographical information, and press materials
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200 font-light tracking-wide px-8 py-6">
                <Download className="mr-3 h-4 w-4" />
                DOWNLOAD FULL KIT
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-600 text-white hover:bg-zinc-900 font-light tracking-wide px-8 py-6"
              >
                <Mail className="mr-3 h-4 w-4" />
                MEDIA CONTACT
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Bio */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block border border-zinc-800 px-3 py-1 rounded-full mb-6">
                <span className="text-xs tracking-widest text-zinc-400 uppercase">Quick Reference</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight">
                Media
                <br />
                <span className="text-zinc-400">Biography</span>
              </h2>
            </div>

            <Card className="bg-zinc-950 border-zinc-800">
              <CardContent className="p-12">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-zinc-300 font-light leading-relaxed mb-6">
                    <strong className="text-white">Keishi Urata</strong> is a legendary Japanese composer and electronic music pioneer 
                    who forever changed the landscape of anime and film music. Born in Tokyo in 1955, Urata emerged from the 
                    underground electronic scene to become one of Japan's most influential musical voices.
                  </p>
                  <p className="text-lg text-zinc-300 font-light leading-relaxed mb-6">
                    His groundbreaking work on the 1988 anime film <em>Akira</em> created a new language for cyberpunk aesthetics, 
                    blending traditional orchestration with cutting-edge synthesis. This revolutionary soundtrack not only defined 
                    the sound of cyberpunk but influenced generations of electronic music producers worldwide.
                  </p>
                  <p className="text-lg text-zinc-300 font-light leading-relaxed">
                    Across four decades, Urata has composed music for over 400 projects, spanning anime films, video games, 
                    commercials, and avant-garde installations. Beyond composition, he has been instrumental in establishing 
                    electronic music as a legitimate art form in Japan and continues to mentor emerging artists while 
                    preserving electronic music history.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-zinc-800">
                  <div className="text-center">
                    <div className="text-3xl font-extralight mb-2">400+</div>
                    <div className="text-xs tracking-widest text-zinc-400 uppercase">Projects Scored</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-extralight mb-2">1988</div>
                    <div className="text-xs tracking-widest text-zinc-400 uppercase">Akira Release</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-extralight mb-2">40+</div>
                    <div className="text-xs tracking-widest text-zinc-400 uppercase">Years Active</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Press Kit Downloads */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block border border-zinc-800 px-3 py-1 rounded-full mb-6">
                <span className="text-xs tracking-widest text-zinc-400 uppercase">Download Resources</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight">
                Press
                <br />
                <span className="text-zinc-400">Materials</span>
              </h2>
            </div>

            <div className="space-y-12">
              {pressResources.map((category) => (
                <div key={category.category}>
                  <h3 className="text-2xl font-light mb-6 tracking-wide">{category.category}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, index) => (
                      <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-zinc-600 transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-white to-zinc-400 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              {item.type === "photo" && <ImageIcon className="h-6 w-6 text-black" />}
                              {item.type === "bio" && <FileText className="h-6 w-6 text-black" />}
                              {item.type === "audio" && <Music className="h-6 w-6 text-black" />}
                              {item.type === "document" && <FileText className="h-6 w-6 text-black" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-base font-light mb-2 tracking-wide line-clamp-2">
                                {item.name}
                              </h4>
                              <div className="flex items-center space-x-3 mb-4">
                                <Badge variant="outline" className="border-zinc-600 text-zinc-400 text-xs">
                                  {item.format}
                                </Badge>
                                <span className="text-xs text-zinc-500">{item.size}</span>
                              </div>
                              <Button size="sm" variant="outline" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 w-full">
                                <Download className="h-3 w-3 mr-2" />
                                Download
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Press Coverage */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block border border-zinc-800 px-3 py-1 rounded-full mb-6">
                <span className="text-xs tracking-widest text-zinc-400 uppercase">Media Coverage</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight">
                Recent
                <br />
                <span className="text-zinc-400">Press</span>
              </h2>
            </div>

            <div className="space-y-6">
              {pressClippings.map((clip, index) => (
                <Card key={index} className="bg-zinc-950 border-zinc-800 hover:border-zinc-600 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <Badge className="bg-zinc-800 text-zinc-300 border-zinc-700">
                            {clip.outlet}
                          </Badge>
                          <Badge variant="outline" className="border-zinc-600 text-zinc-400">
                            {clip.type}
                          </Badge>
                          <div className="flex items-center space-x-2 text-sm text-zinc-500">
                            <Calendar className="h-3 w-3" />
                            <span>{clip.date}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-light mb-2 tracking-wide">
                          {clip.title}
                        </h3>
                      </div>
                      <Button variant="outline" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 flex-shrink-0">
                        Read Article
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white font-light tracking-wide px-8 py-6"
              >
                VIEW ALL COVERAGE
                <ExternalLink className="ml-3 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block border border-zinc-800 px-3 py-1 rounded-full mb-6">
              <span className="text-xs tracking-widest text-zinc-400 uppercase">Media Inquiries</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-8">
              Press
              <br />
              <span className="text-zinc-400">Contact</span>
            </h2>
            
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h3 className="text-xl font-light mb-4 tracking-wide">Press & Media Relations</h3>
                    <div className="space-y-3 text-zinc-300">
                      <div>
                        <div className="text-sm text-zinc-400 uppercase tracking-wide">Name</div>
                        <div>Yuki Tanaka</div>
                      </div>
                      <div>
                        <div className="text-sm text-zinc-400 uppercase tracking-wide">Email</div>
                        <div>press@keishiurata.com</div>
                      </div>
                      <div>
                        <div className="text-sm text-zinc-400 uppercase tracking-wide">Phone</div>
                        <div>+81-3-XXXX-XXXX</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-light mb-4 tracking-wide">Response Guidelines</h3>
                    <ul className="space-y-3 text-zinc-400 text-sm">
                      <li>• Standard press inquiries: Same day response</li>
                      <li>• Interview requests: 48-72 hours</li>
                      <li>• Photo/media requests: 24 hours</li>
                      <li>• Event coverage: 1 week notice preferred</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
                  <Button size="lg" className="bg-white text-black hover:bg-zinc-200 font-light tracking-wide px-8 py-6">
                    <Mail className="mr-3 h-4 w-4" />
                    CONTACT PRESS TEAM
                  </Button>
                </div>
              </CardContent>
            </Card>
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