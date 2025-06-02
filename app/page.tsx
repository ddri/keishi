import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Music, Play, ExternalLink, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-white to-zinc-400 rounded-sm flex items-center justify-center">
                <Music className="h-4 w-4 text-black" />
              </div>
              <span className="text-xl font-light tracking-wider">KEISHI URATA</span>
            </Link>
            <div className="hidden md:flex space-x-12">
              <Link href="/" className="text-white hover:text-zinc-300 transition-colors font-light tracking-wide">
                HOME
              </Link>
              <Link
                href="/discography"
                className="text-zinc-400 hover:text-white transition-colors font-light tracking-wide"
              >
                DISCOGRAPHY
              </Link>
              <Link href="/about" className="text-zinc-400 hover:text-white transition-colors font-light tracking-wide">
                ABOUT
              </Link>
              <Link
                href="/contact"
                className="text-zinc-400 hover:text-white transition-colors font-light tracking-wide"
              >
                CONTACT
              </Link>
            </div>
            <Button variant="ghost" className="md:hidden text-white hover:bg-zinc-900">
              MENU
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_70%)] z-20" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Keishi Urata"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="relative z-30 text-center max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <div className="inline-block border border-zinc-700 px-4 py-2 rounded-full mb-6">
              <span className="text-xs tracking-widest text-zinc-300 uppercase">Legendary Composer</span>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-extralight mb-8 tracking-tight">
            KEISHI
            <br />
            <span className="text-zinc-400">URATA</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            The visionary behind Akira's iconic soundtrack and architect of Japan's electronic music revolution
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-zinc-200 font-light tracking-wide px-8 py-6 text-base"
            >
              <Play className="mr-3 h-4 w-4" />
              EXPERIENCE AKIRA
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-600 text-white hover:bg-zinc-900 font-light tracking-wide px-8 py-6 text-base"
            >
              EXPLORE WORKS
              <ArrowRight className="ml-3 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-32 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div className="space-y-8">
                <div>
                  <div className="inline-block border border-zinc-800 px-3 py-1 rounded-full mb-6">
                    <span className="text-xs tracking-widest text-zinc-400 uppercase">Biography</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extralight mb-8 tracking-tight">
                    Defining an
                    <br />
                    <span className="text-zinc-400">Era</span>
                  </h2>
                </div>
                <div className="space-y-6 text-zinc-300 leading-relaxed font-light">
                  <p className="text-lg">
                    Keishi Urata emerged from Tokyo's underground electronic scene to become one of Japan's most
                    influential composers, forever changing the landscape of anime and electronic music.
                  </p>
                  <p>
                    His groundbreaking work on Akira in 1988 didn't just score a film—it created a new language for
                    cyberpunk aesthetics, blending traditional orchestration with cutting-edge synthesis.
                  </p>
                  <p>
                    Across two decades, Urata composed for over 400 projects, each piece a testament to his ability to
                    capture the essence of modern Japan's technological evolution through sound.
                  </p>
                </div>
                <div className="pt-8">
                  <div className="grid grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-extralight mb-2">400+</div>
                      <div className="text-xs tracking-widest text-zinc-400 uppercase">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-extralight mb-2">1988</div>
                      <div className="text-xs tracking-widest text-zinc-400 uppercase">Akira Release</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-extralight mb-2">20+</div>
                      <div className="text-xs tracking-widest text-zinc-400 uppercase">Years Active</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=500"
                    alt="Keishi Urata in studio"
                    width={500}
                    height={600}
                    className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Albums Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block border border-zinc-800 px-3 py-1 rounded-full mb-6">
                <span className="text-xs tracking-widest text-zinc-400 uppercase">Selected Works</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight">
                Essential
                <br />
                <span className="text-zinc-400">Compositions</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Akira Soundtrack */}
              <Card className="bg-zinc-950 border-zinc-800 hover:border-zinc-600 transition-all duration-500 group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Akira Original Soundtrack"
                      width={400}
                      height={400}
                      className="w-full h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <Button size="sm" className="bg-white text-black hover:bg-zinc-200 font-light tracking-wide">
                        <Play className="h-3 w-3 mr-2" />
                        PLAY
                      </Button>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="text-xs tracking-widest text-zinc-500 uppercase mb-3">1988 • Symphonic Suite</div>
                    <h3 className="text-xl font-light mb-4 tracking-wide">AKIRA ORIGINAL SOUNDTRACK</h3>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed">
                      The legendary masterpiece that redefined anime music through complex orchestral and electronic
                      fusion.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Neo-Tokyo Chronicles */}
              <Card className="bg-zinc-950 border-zinc-800 hover:border-zinc-600 transition-all duration-500 group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Neo-Tokyo Chronicles"
                      width={400}
                      height={400}
                      className="w-full h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <Button size="sm" className="bg-white text-black hover:bg-zinc-200 font-light tracking-wide">
                        <Play className="h-3 w-3 mr-2" />
                        PLAY
                      </Button>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="text-xs tracking-widest text-zinc-500 uppercase mb-3">1985 • Electronic</div>
                    <h3 className="text-xl font-light mb-4 tracking-wide">NEO-TOKYO CHRONICLES</h3>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed">
                      Early exploration of cyberpunk themes through innovative synthesizer compositions and ambient
                      textures.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Synthesized Dreams */}
              <Card className="bg-zinc-950 border-zinc-800 hover:border-zinc-600 transition-all duration-500 group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Synthesized Dreams"
                      width={400}
                      height={400}
                      className="w-full h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <Button size="sm" className="bg-white text-black hover:bg-zinc-200 font-light tracking-wide">
                        <Play className="h-3 w-3 mr-2" />
                        PLAY
                      </Button>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="text-xs tracking-widest text-zinc-500 uppercase mb-3">
                      1992 • Ambient Electronic
                    </div>
                    <h3 className="text-xl font-light mb-4 tracking-wide">SYNTHESIZED DREAMS</h3>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed">
                      Atmospheric compositions showcasing mastery of electronic textures and melodic innovation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-16">
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white font-light tracking-wide px-8 py-6"
              >
                VIEW COMPLETE DISCOGRAPHY
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
