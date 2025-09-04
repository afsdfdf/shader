"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import SiteSearch from "@/components/site-search"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  // 监听滚动状态
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 关闭移动端菜单当路由改变时
  useEffect(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const navigationItems = [
    { 
      name: "Products", 
      href: "/products",
      description: "Our product ecosystem",
      items: [
        { name: "AegisChain", href: "/products#aegischain", description: "Privacy blockchain" },
        { name: "AegisSphere", href: "/products#aegissphere", description: "AI agent platform" },
        { name: "FHE Bridge", href: "/products#fhe-bridge", description: "Cross-chain bridge" }
      ]
    },
    { 
      name: "Technology", 
      href: "/technology",
      description: "Core technologies"
    },
    { 
      name: "Use Cases", 
      href: "/use-cases",
      description: "Real-world applications"
    },
    { 
      name: "Resources", 
      href: "#",
      description: "Documentation & guides",
      items: [
        { name: "Whitepaper", href: "/whitepaper", description: "Technical documentation" },
        { name: "Tokenomics", href: "/tokenomics", description: "Token economics" },
        { name: "Roadmap", href: "/roadmap", description: "Development roadmap" },
        { name: "FAQ", href: "/faq", description: "Frequently asked questions" }
      ]
    },
    { 
      name: "Team", 
      href: "/team",
      description: "Meet our team"
    }
  ]

  return (
    <>
      {/* Skip to main content link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-lg' 
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
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
          <nav className="hidden lg:flex items-center space-x-2" role="navigation" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.items ? (
                  // Dropdown menu item
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center space-x-1 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 min-h-[40px] ${
                        pathname.startsWith(item.href) && item.href !== '#'
                          ? 'text-purple-400 bg-purple-500/10'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                      aria-expanded={activeDropdown === item.name}
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        className={`w-3 h-3 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl transition-all duration-200 ${
                        activeDropdown === item.name
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible translate-y-2'
                      }`}
                    >
                      <div className="p-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex flex-col p-3 rounded-lg hover:bg-white/10 transition-colors group"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-white font-medium text-sm">{subItem.name}</span>
                              <ExternalLink className="w-3 h-3 text-white/40 group-hover:text-white/60 transition-colors" />
                            </div>
                            <span className="text-white/60 text-xs mt-1">{subItem.description}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Regular menu item
                  <Link
                    href={item.href}
                    className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 min-h-[40px] flex items-center ${
                      pathname === item.href
                        ? 'text-purple-400 bg-purple-500/10'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                    aria-label={`Navigate to ${item.name} page`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden xl:block max-w-sm">
              <SiteSearch />
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/launch">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  Launch App
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:bg-white/10 min-h-[44px] min-w-[44px] rounded-full"
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
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="fixed top-[80px] left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 lg:hidden z-40 max-h-[calc(100vh-80px)] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div className="sr-only" id="mobile-menu-title">Navigation Menu</div>
          <div className="container mx-auto px-6 py-6">
            {/* Search in mobile */}
            <div className="mb-6 xl:hidden">
              <SiteSearch />
            </div>
            
            <nav className="space-y-1" role="navigation" aria-label="Mobile navigation">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-1">
                  {item.items ? (
                    // Dropdown section in mobile
                    <div>
                      <div className="text-white/60 text-xs font-semibold uppercase tracking-wider px-4 py-2">
                        {item.name}
                      </div>
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center justify-between px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg group"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="flex flex-col">
                            <span className="font-medium">{subItem.name}</span>
                            <span className="text-xs text-white/60">{subItem.description}</span>
                          </div>
                          <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/60" />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    // Regular menu item
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                        pathname === item.href
                          ? 'text-purple-400 bg-purple-500/10'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      aria-label={`Navigate to ${item.name} page`}
                    >
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-6 border-t border-white/10 lg:hidden">
                <Link href="/launch" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 min-h-[48px] text-base font-medium rounded-xl"
                    aria-label="Launch AegisMind Network application"
                  >
                    Launch App
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
