"use client"

import Image from "next/image"

export default function Footer() {
  const links = {
    Products: [
      { name: "AegisChain", href: "/products#aegischain" },
      { name: "AegisSphere", href: "/products#aegissphere" },
      { name: "FHE Bridge", href: "/products#fhe-bridge" },
      { name: "Developer Tools", href: "/products#developer-tools" },
    ],
    Resources: [
      { name: "Whitepaper", href: "/whitepaper" },
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Developer Guide", href: "#" },
    ],
    Community: [
      { name: "Discord", href: "#" },
      { name: "Telegram", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "GitHub", href: "#" },
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Team", href: "/team" },
      { name: "Partners", href: "#" },
      { name: "Contact", href: "#" },
    ],
  }

  return (
    <footer className="relative z-10 py-16 px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 relative">
                <Image
                  src="/logo.png"
                  alt="AegisMind Network Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-white font-medium">AegisMind</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Next-generation privacy AI network based on FHE, building zero-trust data security and intelligent agent collaboration platform.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-medium mb-4">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm mb-4 md:mb-0">© 2024 AegisMind Network. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
              Legal Notice
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
