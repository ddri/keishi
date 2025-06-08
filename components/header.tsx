'use client'

import { useState } from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Music, Menu, X } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/discography', label: 'DISCOGRAPHY' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' },
    { href: '/press', label: 'PRESS' },
  ]

  return (
    <header className="border-b border-zinc-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
            <div className="w-8 h-8 bg-gradient-to-br from-white to-zinc-400 rounded-sm flex items-center justify-center">
              <Music className="h-4 w-4 text-black" />
            </div>
            <span className="text-xl font-light tracking-wider">KEISHI URATA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors font-light tracking-wide ${
                  isActive(item.href)
                    ? 'text-white hover:text-zinc-300'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            className="md:hidden text-white hover:bg-zinc-900"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-zinc-800">
            <div className="pt-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-3 px-4 rounded-lg transition-colors font-light tracking-wide ${
                    isActive(item.href)
                      ? 'text-white bg-zinc-900'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 