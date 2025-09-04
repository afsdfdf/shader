"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import SiteSearch from "@/components/site-search"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { name: "Products", href: "/products" },
    { name: "Technology", href: "/technology" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Tokenomics", href: "/tokenomics" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Team", href: "/team" },
    { name: "Whitepaper", href: "/whitepaper" },
    { name: "FAQ", href: "/faq" }
  ]

  return (
    <>
      {/* Skip to main content link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <header className="relative z-20 flex items-center justify-between p-6" role="banner">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center space-x-3"
          aria-label="AegisMind Network - Go to homepage"
        >
        <div className="w-10 h-10 relative">
          <Image
            src="/logo.png"
            alt="AegisMind Network Logo"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
        </div>
        <span className="text-white font-semibold text-lg">AegisMind</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-white/80 hover:text-white text-sm font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200 focus-visible min-h-[44px] flex items-center"
            aria-label={`Navigate to ${item.name} page`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Search */}
      <div className="hidden lg:block flex-1 max-w-md mx-8">
        <SiteSearch />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:bg-white/10 min-h-[44px] min-w-[44px]"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>
        </Button>
      </div>

      {/* CTA Button */}
      <div className="hidden md:block">
        <Link href="/launch">
          <div id="gooey-btn" className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
            <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10">
              Launch App
            </button>
          </div>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className="sr-only" id="mobile-menu-title">Navigation Menu</div>
          <nav className="flex flex-col p-4 space-y-2" role="navigation" aria-label="Mobile navigation">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white text-sm font-light px-3 py-4 rounded-lg hover:bg-white/10 transition-all duration-200 min-h-[44px] flex items-center touch-target"
                onClick={() => setIsMenuOpen(false)}
                aria-label={`Navigate to ${item.name} page`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-800">
              <Link href="/launch" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 min-h-[44px]"
                  aria-label="Launch AegisMind Network application"
                >
                  Launch App
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
    </>
  )
}
