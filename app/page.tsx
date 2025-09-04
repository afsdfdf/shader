"use client"

import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import PulsingCircle from "@/components/pulsing-circle"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, Lock, Network, Zap, Users, Building2, Heart, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ScrollReveal, StaggeredAnimation, CountUp, TypewriterEffect } from "@/components/advanced-animations"

export default function HomePage() {
  const coreFeatures = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Fully Homomorphic Encryption (FHE)",
      description: "The holy grail of cryptography, enabling encrypted computation throughout data lifecycle with arbitrary ciphertext operations",
      color: "from-purple-500 to-blue-600",
      image: "fhe-encryption.png"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "HTTPZ Zero-Trust Protocol",
      description: "Next-generation internet communication protocol with end-to-end strong encryption, surpassing traditional HTTPS security",
      color: "from-blue-500 to-cyan-600",
      image: "httpz-protocol.png"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Agent Collaboration Network",
      description: "AegisSphere platform supporting privacy-preserving AI agent coordination and secure multi-agent collaboration",
      color: "from-green-500 to-emerald-600",
      image: "agent-network.png"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quantum-Resistant Security",
      description: "Built on lattice cryptography, providing future-proof quantum security with NIST standard certification",
      color: "from-orange-500 to-red-600",
      image: "quantum-resistance-battle.png"
    }
  ]

  const products = [
    {
      title: "AegisChain Mainnet",
      description: "FHE-based privacy blockchain supporting encrypted transaction verification and privacy consensus voting",
      icon: <Shield className="w-6 h-6" />,
      href: "/products",
      image: "aegischain-architecture.png"
    },
    {
      title: "AegisSphere Agent Platform", 
      description: "Decentralized AI agent collaboration network enabling privacy-preserving multi-agent coordination",
      icon: <Network className="w-6 h-6" />,
      href: "/products",
      image: "aegissphere-platform.png"
    },
    {
      title: "FHE Bridge",
      description: "Privacy-preserving cross-chain asset transfer bridge supporting multi-chain interoperability",
      icon: <Zap className="w-6 h-6" />,
      href: "/products",
      image: "fhe-bridge.png"
    }
  ]

  const useCases = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Healthcare",
      description: "Privacy-preserving medical data analysis enabling hospital collaboration without exposing patient privacy",
      image: "healthcare-privacy-collaboration.png"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Financial Risk Control", 
      description: "Cross-institutional collaborative risk management, sharing risk models between banks without exposing customer data",
      image: "financial-risk-consortium.png"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Web3 Social",
      description: "Decentralized privacy social networks protecting user social data and behavioral privacy",
      image: "web3-social-metaverse.png"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Internet of Things",
      description: "Privacy-preserving IoT data processing for secure sensor data analysis in smart cities",
      image: "iot-smart-city-privacy.png"
    }
  ]

  const partners = [
    { name: "ZAMA", logo: "/logo.png" },
    { name: "Chainlink", logo: "/logo.png" },
    { name: "EigenLayer", logo: "/logo.png" },
    { name: "Binance Labs", logo: "/logo.png" }
  ]

  return (
    <ShaderBackground>
      <Header />
      
      <main id="main-content" className="relative z-10" role="main">
        {/* Hero Section */}
        <section className="container mx-auto container-padding hero-spacing text-center" aria-labelledby="hero-title">
          <div className="max-w-5xl mx-auto">
            <h1 
              id="hero-title"
              className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
            >
              AegisMind Network
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
              Next-Generation Privacy AI Network Based on FHE
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-4xl mx-auto">
              Building zero-trust network infrastructure to realize an intelligent world where &ldquo;data never appears in plaintext&rdquo;.
              Through Fully Homomorphic Encryption technology, we provide comprehensive solutions for data sovereignty protection, privacy computing, secure cross-chain interaction, and trusted AI agents.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/launch">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4">
                  Launch App
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/whitepaper">
                <Button size="lg" variant="outline" className="border-gray-700 hover:border-purple-500 text-lg px-8 py-4">
                  Read Whitepaper
                </Button>
              </Link>
            </div>

            {/* Key Metrics */}
            <ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">256-bit</div>
                  <div className="text-sm text-gray-400">Encryption Strength</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">&lt; 5s</div>
                  <div className="text-sm text-gray-400">Block Confirmation</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    <CountUp end={1000} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-400">TPS Processing</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    <CountUp end={99.9} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-400">Network Uptime</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <PulsingCircle />

        {/* Core Features */}
        <section className="container mx-auto container-padding section-spacing">
          <div className="text-center component-margin">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Core Technical Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Privacy AI infrastructure built on cutting-edge cryptographic technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="bg-black/40 border-gray-800 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  {/* Feature Image */}
                  <div className="w-full aspect-[4/3] mb-4 relative overflow-hidden rounded-lg bg-gray-900/50">
                    <Image
                      src={`/${feature.image}`}
                      alt={feature.title}
                      fill
                      className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${feature.color} bg-opacity-20 mb-4 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/technology">
              <Button variant="outline" className="border-gray-700 hover:border-purple-500">
                Learn More About Technology
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Products Overview */}
        <section className="container mx-auto container-padding section-spacing">
          <div className="text-center component-margin">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Product Ecosystem
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete privacy AI infrastructure from underlying blockchain to upper-layer applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link key={index} href={product.href}>
                <Card className="bg-black/40 border-gray-800 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 group cursor-pointer h-full">
                  <CardHeader className="text-center">
                    {/* Product Image */}
                    <div className="w-full aspect-[3/2] mb-4 relative overflow-hidden rounded-lg bg-gray-900/50">
                      <Image
                        src={`/${product.image}`}
                        alt={product.title}
                        fill
                        className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 bg-opacity-20 mb-4 mx-auto group-hover:scale-110 transition-transform">
                      {product.icon}
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products">
              <Button variant="outline" className="border-gray-700 hover:border-purple-500">
                View All Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Use Cases Preview */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Privacy AI technology is transforming industries with breakthrough applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-black/40 border-gray-800 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  {/* Use Case Image */}
                  <div className="w-full aspect-[16/10] mb-4 relative overflow-hidden rounded-lg bg-gray-900/50">
                    <Image
                      src={`/${useCase.image}`}
                      alt={useCase.title}
                      fill
                      className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 bg-opacity-20 mb-4 group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/use-cases">
              <Button variant="outline" className="border-gray-700 hover:border-purple-500">
                Explore More Applications
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Partners */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Strategic Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Establishing deep partnerships with industry-leading institutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-black/20 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Join the Privacy AI Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Experience the secure computing environment where &ldquo;data never appears in plaintext&rdquo;,
              and build next-generation privacy-preserving intelligent applications
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/launch">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4">
                  Launch App
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/team">
                <Button size="lg" variant="outline" className="border-gray-700 hover:border-purple-500 text-lg px-8 py-4">
                  Meet the Team
                </Button>
              </Link>
              <Link href="/roadmap">
                <Button size="lg" variant="outline" className="border-gray-700 hover:border-purple-500 text-lg px-8 py-4">
                  View Roadmap
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </ShaderBackground>
  )
}
