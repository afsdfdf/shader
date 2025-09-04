"use client"

import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Lock, Shield, Network } from "lucide-react"
import Image from "next/image"

export default function TechnologyPage() {
  const technologies = [
    {
      id: "fhe",
      title: "Fully Homomorphic Encryption (FHE)",
      description: "The holy grail of cryptography, enabling encrypted computation throughout data lifecycle",
      icon: <Lock className="w-8 h-8" />,
      heroImage: "fhe-encryption-hero.png",
      conceptImage: "fhe-encryption.png",
      details: [
        "Support arbitrary ciphertext computation operations",
        "Data never exposed in plaintext throughout the process", 
        "Quantum-resistant attack capability based on lattice cryptography",
        "NIST standard certified algorithms"
      ],
      benefits: [
        "Privacy Protection: Data encrypted throughout transmission, storage, and computation",
        "Computational Usability: Complex operations without decryption",
        "Zero Trust: No need to trust computation providers",
        "Compliance Friendly: Meets GDPR and other privacy regulations"
      ]
    },
    {
      id: "httpz",
      title: "HTTPZ Zero-Trust Protocol",
      description: "Next-generation internet communication protocol with end-to-end strong encryption",
      icon: <Shield className="w-8 h-8" />,
      heroImage: "zero-trust-concept.png",
      conceptImage: "httpz-protocol.png",
      details: [
        "End-to-end encrypted communication",
        "Zero-trust network architecture",
        "FHE-driven computation",
        "Blockchain native integration"
      ],
      benefits: [
        "Transmission Security: End-to-end protection beyond HTTPS",
        "Computation as Communication: Direct data processing during transmission",
        "Identity Authentication: Built-in public-private key system",
        "Quantum Resistance: Future-proof security guarantee"
      ]
    },
    {
      id: "consensus",
      title: "Privacy Consensus Mechanism",
      description: "Innovative FHE consensus algorithm ensuring voting fairness and consensus security",
      icon: <Network className="w-8 h-8" />,
      heroImage: "quantum-resistance-battle.png",
      conceptImage: "agent-network.png",
      details: [
        "Encrypted voting and counting",
        "Prevent collusion and cheating",
        "Byzantine fault tolerance",
        "Fast finality"
      ],
      benefits: [
        "Fair Voting: Eliminate bandwagon and revenge voting",
        "Anti-manipulation: Validators cannot influence each other",
        "Efficient Consensus: Second-level block confirmation",
        "Security Guarantee: Multiple cryptographic protections"
      ]
    }
  ]

  return (
    <ShaderBackground>
      <Header />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Core Technology
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Privacy AI infrastructure built on cutting-edge cryptographic technologies,
              realizing a secure computing environment where &ldquo;data never appears in plaintext&rdquo;
            </p>
          </div>
        </section>

        {/* Technology Overview */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {technologies.map((tech) => (
              <Card key={tech.id} className="bg-black/40 border-gray-800 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 group">
                <CardHeader className="text-center">
                  {/* Concept Image */}
                  <div className="w-full aspect-[4/3] mb-4 relative overflow-hidden rounded-lg bg-gray-900/50">
                    <Image
                      src={`/${tech.conceptImage}`}
                      alt={tech.title}
                      fill
                      className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 bg-opacity-20 mb-4 mx-auto group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">
                    {tech.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {tech.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Detailed Technology Tabs */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Technical Details
              </h2>
            </div>
            
            <Tabs defaultValue="fhe" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-black/40 border border-gray-800">
                <TabsTrigger value="fhe" className="text-lg">FHE</TabsTrigger>
                <TabsTrigger value="httpz" className="text-lg">HTTPZ Protocol</TabsTrigger>
                <TabsTrigger value="consensus" className="text-lg">Privacy Consensus</TabsTrigger>
              </TabsList>
              
              {technologies.map((tech) => (
                <TabsContent key={tech.id} value={tech.id} className="mt-8">
                  <Card className="bg-black/40 border-gray-800 backdrop-blur-sm">
                    <CardContent className="p-8">
                      {/* Hero Image */}
                      <div className="mb-8">
                        <div className="w-full aspect-[16/9] relative overflow-hidden rounded-lg border border-gray-700 bg-gray-900/50">
                          <Image
                            src={`/${tech.heroImage}`}
                            alt={`${tech.title} Hero`}
                            fill
                            className="object-contain object-center"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <div className="flex items-center mb-6">
                            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 bg-opacity-20 mr-4">
                              {tech.icon}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white">{tech.title}</h3>
                              <p className="text-gray-400">{tech.description}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3">Technical Features</h4>
                              <div className="space-y-2">
                                {tech.details.map((detail, index) => (
                                  <div key={index} className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span className="text-gray-300">{detail}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Core Advantages</h4>
                          <div className="space-y-4">
                            {tech.benefits.map((benefit, index) => (
                              <div key={index} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                                <p className="text-gray-300">{benefit}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Experience Next-Generation Privacy Technology
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the privacy AI revolution and build applications where data sovereignty is guaranteed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 hover:border-purple-500">
                View Documentation
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </ShaderBackground>
  )
}