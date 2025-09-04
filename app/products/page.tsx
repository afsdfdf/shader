"use client"

import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Network, Code } from "lucide-react"
import Image from "next/image"
import Breadcrumb from "@/components/breadcrumb"

export default function ProductsPage() {
  const products = [
    {
      id: "aegischain",
      title: "AegisChain Mainnet",
      description: "FHE-based privacy blockchain supporting encrypted transaction verification and privacy consensus mechanisms",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Fully Homomorphic Encryption transaction verification",
        "Privacy consensus voting mechanism preventing collusion", 
        "Quantum-resistant security algorithms with NIST standards",
        "High-performance Rollup architecture for scalability"
      ],
      status: "Mainnet Live",
      color: "from-blue-500 to-purple-600",
      architectureImage: "aegischain-architecture.png"
    },
    {
      id: "aegissphere",
      title: "AegisSphere Agent Platform",
      description: "Decentralized AI agent collaboration network enabling privacy-preserving multi-agent coordination and task distribution",
      icon: <Network className="w-8 h-8" />,
      features: [
        "AI Agent creation and deployment with AMN token staking",
        "Hub task collaboration center for encrypted task execution",
        "Privacy computing and inference on encrypted data",
        "Agent marketplace ecosystem for trading and capability enhancement"
      ],
      status: "Testnet Phase",
      color: "from-purple-500 to-pink-600",
      architectureImage: "aegissphere-platform.png"
    },
    {
      id: "fhe-bridge",
      title: "FHE Bridge",
      description: "Privacy-preserving cross-chain asset and data transfer bridge enabling secure multi-chain ecosystem interconnection",
      icon: <Network className="w-8 h-8" />,
      features: [
        "Encrypted cross-chain asset transfer maintaining encryption during transit",
        "Privacy data relay without content exposure during cross-chain transmission",
        "Multi-chain ecosystem integration supporting mainstream blockchain interoperability",
        "Zero-trust cross-chain protocol requiring no trusted intermediaries"
      ],
      status: "In Development",
      color: "from-green-500 to-blue-600",
      architectureImage: "fhe-bridge.png"
    },
    {
      id: "developer-tools",
      title: "Developer Toolkit",
      description: "Complete SDK, API, and development framework supporting privacy application development and agent creation",
      icon: <Code className="w-8 h-8" />,
      features: [
        "Multi-language SDK support for JavaScript, Python, Rust and more",
        "FHE computation library providing homomorphic encryption APIs",
        "HTTPZ protocol tools for zero-trust communication development",
        "Smart contract templates for privacy application development"
      ],
      status: "Continuous Updates",
      color: "from-orange-500 to-red-600",
      architectureImage: "network-architecture.png"
    }
  ]

  return (
    <ShaderBackground>
      <Header />
      
      <main id="main-content" className="relative z-10 pt-20" role="main">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb />
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Product Ecosystem
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                AegisMind Network builds complete privacy AI infrastructure,
                from underlying blockchain to upper-layer applications, providing comprehensive privacy protection solutions for developers and users
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="bg-black/40 border-gray-800 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${product.color} bg-opacity-20`}>
                      {product.icon}
                    </div>
                    <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                      {product.status}
                    </Badge>
                  </div>
                  {/* Simple SVG Illustration */}
                  <div className="mb-4 flex justify-center">
                    {product.id === 'aegischain' && (
                      <svg width="200" height="60" viewBox="0 0 200 60" className="border border-gray-700 rounded bg-gray-900/50">
                        <defs>
                          <linearGradient id="chainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor:"#3b82f6", stopOpacity:0.8}} />
                            <stop offset="100%" style={{stopColor:"#8b5cf6", stopOpacity:0.8}} />
                          </linearGradient>
                        </defs>
                        {/* Blockchain blocks */}
                        <rect x="20" y="15" width="25" height="25" rx="3" fill="url(#chainGrad)" stroke="#60a5fa" strokeWidth="1"/>
                        <rect x="55" y="15" width="25" height="25" rx="3" fill="url(#chainGrad)" stroke="#60a5fa" strokeWidth="1"/>
                        <rect x="90" y="15" width="25" height="25" rx="3" fill="url(#chainGrad)" stroke="#60a5fa" strokeWidth="1"/>
                        <rect x="125" y="15" width="25" height="25" rx="3" fill="url(#chainGrad)" stroke="#60a5fa" strokeWidth="1"/>
                        <rect x="160" y="15" width="25" height="25" rx="3" fill="url(#chainGrad)" stroke="#60a5fa" strokeWidth="1"/>
                        {/* Connection lines */}
                        <line x1="45" y1="27" x2="55" y2="27" stroke="#60a5fa" strokeWidth="2"/>
                        <line x1="80" y1="27" x2="90" y2="27" stroke="#60a5fa" strokeWidth="2"/>
                        <line x1="115" y1="27" x2="125" y2="27" stroke="#60a5fa" strokeWidth="2"/>
                        <line x1="150" y1="27" x2="160" y2="27" stroke="#60a5fa" strokeWidth="2"/>
                        {/* FHE symbols */}
                        <text x="32" y="32" textAnchor="middle" fill="#ffffff" fontSize="8">🔒</text>
                        <text x="67" y="32" textAnchor="middle" fill="#ffffff" fontSize="8">🔒</text>
                        <text x="102" y="32" textAnchor="middle" fill="#ffffff" fontSize="8">🔒</text>
                        <text x="137" y="32" textAnchor="middle" fill="#ffffff" fontSize="8">🔒</text>
                        <text x="172" y="32" textAnchor="middle" fill="#ffffff" fontSize="8">🔒</text>
                        <text x="100" y="52" textAnchor="middle" fill="#60a5fa" fontSize="9">Encrypted Blockchain</text>
                      </svg>
                    )}
                    
                    {product.id === 'aegissphere' && (
                      <svg width="200" height="60" viewBox="0 0 200 60" className="border border-gray-700 rounded bg-gray-900/50">
                        <defs>
                          <linearGradient id="sphereGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor:"#8b5cf6", stopOpacity:0.8}} />
                            <stop offset="100%" style={{stopColor:"#ec4899", stopOpacity:0.8}} />
                          </linearGradient>
                        </defs>
                        {/* Central hub */}
                        <circle cx="100" cy="30" r="12" fill="url(#sphereGrad)" stroke="#c084fc" strokeWidth="2"/>
                        <text x="100" y="35" textAnchor="middle" fill="#ffffff" fontSize="8">Hub</text>
                        {/* Agent nodes */}
                        <circle cx="70" cy="15" r="6" fill="#7c3aed" stroke="#a855f7" strokeWidth="1"/>
                        <circle cx="130" cy="15" r="6" fill="#7c3aed" stroke="#a855f7" strokeWidth="1"/>
                        <circle cx="70" cy="45" r="6" fill="#7c3aed" stroke="#a855f7" strokeWidth="1"/>
                        <circle cx="130" cy="45" r="6" fill="#7c3aed" stroke="#a855f7" strokeWidth="1"/>
                        <circle cx="50" cy="30" r="6" fill="#7c3aed" stroke="#a855f7" strokeWidth="1"/>
                        <circle cx="150" cy="30" r="6" fill="#7c3aed" stroke="#a855f7" strokeWidth="1"/>
                        {/* Connection lines */}
                        <line x1="88" y1="30" x2="76" y2="21" stroke="#c084fc" strokeWidth="1" strokeDasharray="1,1"/>
                        <line x1="112" y1="30" x2="124" y2="21" stroke="#c084fc" strokeWidth="1" strokeDasharray="1,1"/>
                        <line x1="88" y1="30" x2="76" y2="39" stroke="#c084fc" strokeWidth="1" strokeDasharray="1,1"/>
                        <line x1="112" y1="30" x2="124" y2="39" stroke="#c084fc" strokeWidth="1" strokeDasharray="1,1"/>
                        <line x1="88" y1="30" x2="56" y2="30" stroke="#c084fc" strokeWidth="1" strokeDasharray="1,1"/>
                        <line x1="112" y1="30" x2="144" y2="30" stroke="#c084fc" strokeWidth="1" strokeDasharray="1,1"/>
                        {/* Agent labels */}
                        <text x="70" y="19" textAnchor="middle" fill="#ffffff" fontSize="5">AI</text>
                        <text x="130" y="19" textAnchor="middle" fill="#ffffff" fontSize="5">AI</text>
                        <text x="70" y="49" textAnchor="middle" fill="#ffffff" fontSize="5">AI</text>
                        <text x="130" y="49" textAnchor="middle" fill="#ffffff" fontSize="5">AI</text>
                        <text x="50" y="34" textAnchor="middle" fill="#ffffff" fontSize="5">AI</text>
                        <text x="150" y="34" textAnchor="middle" fill="#ffffff" fontSize="5">AI</text>
                        <text x="100" y="55" textAnchor="middle" fill="#c084fc" fontSize="9">Agent Network</text>
                      </svg>
                    )}
                    
                    {product.id === 'fhe-bridge' && (
                      <svg width="200" height="60" viewBox="0 0 200 60" className="border border-gray-700 rounded bg-gray-900/50">
                        <defs>
                          <linearGradient id="bridgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor:"#10b981", stopOpacity:0.8}} />
                            <stop offset="100%" style={{stopColor:"#3b82f6", stopOpacity:0.8}} />
                          </linearGradient>
                          <marker id="arrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                            <polygon points="0 0, 6 2, 0 4" fill="#6b7280" />
                          </marker>
                        </defs>
                        {/* Chain A */}
                        <rect x="20" y="15" width="35" height="30" rx="4" fill="#1f2937" stroke="#10b981" strokeWidth="2"/>
                        <text x="37" y="28" textAnchor="middle" fill="#10b981" fontSize="7">Chain</text>
                        <text x="37" y="38" textAnchor="middle" fill="#10b981" fontSize="7">A</text>
                        {/* Chain B */}
                        <rect x="145" y="15" width="35" height="30" rx="4" fill="#1f2937" stroke="#3b82f6" strokeWidth="2"/>
                        <text x="162" y="28" textAnchor="middle" fill="#3b82f6" fontSize="7">Chain</text>
                        <text x="162" y="38" textAnchor="middle" fill="#3b82f6" fontSize="7">B</text>
                        {/* Bridge */}
                        <rect x="75" y="22" width="50" height="16" rx="8" fill="url(#bridgeGrad)" stroke="#6b7280" strokeWidth="1"/>
                        <text x="100" y="32" textAnchor="middle" fill="#ffffff" fontSize="7">FHE Bridge</text>
                        {/* Connection arrows */}
                        <line x1="55" y1="30" x2="75" y2="30" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)"/>
                        <line x1="125" y1="30" x2="145" y2="30" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)"/>
                        <text x="100" y="55" textAnchor="middle" fill="#34d399" fontSize="9">Cross-Chain Bridge</text>
                      </svg>
                    )}
                    
                    {product.id === 'developer-tools' && (
                      <svg width="200" height="60" viewBox="0 0 200 60" className="border border-gray-700 rounded bg-gray-900/50">
                        <defs>
                          <linearGradient id="toolGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor:"#f97316", stopOpacity:0.8}} />
                            <stop offset="100%" style={{stopColor:"#ef4444", stopOpacity:0.8}} />
                          </linearGradient>
                        </defs>
                        {/* SDK box */}
                        <rect x="30" y="10" width="30" height="20" rx="3" fill="url(#toolGrad)" stroke="#fb923c" strokeWidth="1"/>
                        <text x="45" y="23" textAnchor="middle" fill="#ffffff" fontSize="7">SDK</text>
                        {/* API box */}
                        <rect x="85" y="10" width="30" height="20" rx="3" fill="url(#toolGrad)" stroke="#fb923c" strokeWidth="1"/>
                        <text x="100" y="23" textAnchor="middle" fill="#ffffff" fontSize="7">API</text>
                        {/* Tools box */}
                        <rect x="140" y="10" width="30" height="20" rx="3" fill="url(#toolGrad)" stroke="#fb923c" strokeWidth="1"/>
                        <text x="155" y="23" textAnchor="middle" fill="#ffffff" fontSize="7">Tools</text>
                        {/* Developer */}
                        <circle cx="100" cy="42" r="8" fill="#374151" stroke="#fb923c" strokeWidth="2"/>
                        <text x="100" y="46" textAnchor="middle" fill="#ffffff" fontSize="6">👨‍💻</text>
                        {/* Connection lines */}
                        <line x1="45" y1="30" x2="95" y2="38" stroke="#fb923c" strokeWidth="1" strokeDasharray="2,2"/>
                        <line x1="100" y1="30" x2="100" y2="34" stroke="#fb923c" strokeWidth="1" strokeDasharray="2,2"/>
                        <line x1="155" y1="30" x2="105" y2="38" stroke="#fb923c" strokeWidth="1" strokeDasharray="2,2"/>
                        <text x="100" y="57" textAnchor="middle" fill="#fb923c" fontSize="9">Developer Toolkit</text>
                      </svg>
                    )}
                  </div>
                  
                  <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Architecture Image */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Architecture Overview</h4>
                    <div className="w-full aspect-[4/3] relative overflow-hidden rounded-lg border border-gray-700 bg-gray-900/50">
                      <Image
                        src={`/${product.architectureImage}`}
                        alt={`${product.title} Architecture`}
                        fill
                        className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-700 hover:border-purple-500 hover:bg-purple-500/10 group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Technical Architecture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Layered modular design with components working together to build a complete privacy AI ecosystem
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Application Layer */}
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-lg border border-purple-500/30">
                <h3 className="text-lg font-semibold text-white mb-3">Application Layer</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• DApps</li>
                  <li>• User Interfaces</li>
                  <li>• SDK/API</li>
                </ul>
              </div>
              
              {/* Agent Layer */}
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-lg border border-blue-500/30">
                <h3 className="text-lg font-semibold text-white mb-3">Agent Layer</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• AegisSphere</li>
                  <li>• Hub Collaboration</li>
                  <li>• Agent Management</li>
                </ul>
              </div>
              
              {/* Consensus Layer */}
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-6 rounded-lg border border-green-500/30">
                <h3 className="text-lg font-semibold text-white mb-3">Consensus Layer</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• AegisChain</li>
                  <li>• FHE Consensus</li>
                  <li>• Privacy Voting</li>
                </ul>
              </div>
              
              {/* Security Layer */}
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-6 rounded-lg border border-orange-500/30">
                <h3 className="text-lg font-semibold text-white mb-3">Security Layer</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• FHE Validation</li>
                  <li>• Key Management</li>
                  <li>• Zero-Trust Protocol</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">
Ready to Start Building?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
Explore our developer documentation to learn how to build privacy-preserving AI applications on AegisMind Network
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                View Documentation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 hover:border-purple-500">
                Start Building
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </ShaderBackground>
  )
}

