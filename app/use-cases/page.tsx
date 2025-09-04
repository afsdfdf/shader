"use client"

import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Building2, Users, Gamepad2, Truck, Globe } from "lucide-react"
import Image from "next/image"

export default function UseCasesPage() {
  const useCases = [
    {
      id: "healthcare",
      title: "Healthcare",
      description: "Privacy-preserving medical data analysis and cross-institutional collaborative research",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-pink-600",
      image: "healthcare-privacy-collaboration.png",
      scenarios: [
        {
          title: "Collaborative Medical Research",
          description: "Multiple hospitals jointly train AI diagnostic models without revealing patient privacy"
        },
        {
          title: "Genetic Data Analysis", 
          description: "AI analysis of encrypted genetic data to gain medical insights without exposing personal information"
        },
        {
          title: "Remote Diagnostic Assistance",
          description: "Doctors upload encrypted medical images, AI provides diagnostic references while protecting patient privacy"
        }
      ],
      benefits: ["Patient Privacy Protection", "Cross-institutional Data Sharing", "AI Diagnostic Accuracy Improvement", "Medical Regulation Compliance"],
      status: "Pilot Operation"
    },
    {
      id: "finance",
      title: "Financial Risk Control",
      description: "Cross-institutional collaborative risk control and privacy-preserving financial services",
      icon: <Building2 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      image: "financial-risk-consortium.png",
      scenarios: [
        {
          title: "Joint Anti-fraud",
          description: "Banks and payment institutions share encrypted transaction data to train anti-fraud models"
        },
        {
          title: "Credit Assessment",
          description: "Calculate user credit scores based on multi-party encrypted data without exposing specific financial information"
        },
        {
          title: "Risk Management",
          description: "Financial institutions collaborate on risk assessment while maintaining data confidentiality"
        }
      ],
      benefits: ["Financial Data Protection", "Cross-institutional Collaboration", "Fraud Detection Enhancement", "Regulatory Compliance"],
      status: "Development Phase"
    },
    {
      id: "web3-social",
      title: "Web3 Social",
      description: "Decentralized privacy social networks and content platforms",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
      image: "web3-social-metaverse.png",
      scenarios: [
        {
          title: "Privacy Social Networks",
          description: "Users control their own data while enjoying rich social experiences"
        },
        {
          title: "Content Recommendation",
          description: "AI recommends content based on encrypted user preferences without privacy leakage"
        },
        {
          title: "Decentralized Identity",
          description: "Self-sovereign identity management with privacy protection"
        }
      ],
      benefits: ["User Data Sovereignty", "Privacy Protection", "Decentralized Governance", "Content Security"],
      status: "Concept Phase"
    },
    {
      id: "iot",
      title: "Internet of Things",
      description: "Privacy-preserving IoT data processing and smart device collaboration",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-teal-600",
      image: "iot-smart-city-privacy.png",
      scenarios: [
        {
          title: "Smart City",
          description: "City-wide IoT data analysis for traffic optimization while protecting citizen privacy"
        },
        {
          title: "Industrial IoT",
          description: "Factory equipment data sharing for predictive maintenance without revealing trade secrets"
        },
        {
          title: "Smart Home",
          description: "Home device collaboration with privacy protection and security guarantee"
        }
      ],
      benefits: ["Device Privacy Protection", "Data Sovereignty", "Intelligent Collaboration", "Security Guarantee"],
      status: "Research Phase"
    },
    {
      id: "gaming",
      title: "Gaming & Entertainment",
      description: "Privacy-preserving gaming experiences and digital asset management",
      icon: <Gamepad2 className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      scenarios: [
        {
          title: "Privacy Gaming",
          description: "Game data analysis and personalization while protecting player privacy"
        },
        {
          title: "Digital Asset Trading",
          description: "Secure trading of game assets and NFTs with privacy protection"
        },
        {
          title: "Competitive Gaming",
          description: "Fair competition environment with anti-cheat mechanisms"
        }
      ],
      benefits: ["Player Privacy", "Asset Security", "Fair Competition", "Data Ownership"],
      status: "Planning Phase"
    },
    {
      id: "supply-chain",
      title: "Supply Chain",
      description: "Transparent and privacy-preserving supply chain management",
      icon: <Truck className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-600",
      scenarios: [
        {
          title: "Product Traceability",
          description: "Full product lifecycle tracking while protecting commercial secrets"
        },
        {
          title: "Quality Control",
          description: "Cross-enterprise quality data sharing for collaborative improvement"
        },
        {
          title: "Logistics Optimization",
          description: "Supply chain optimization through encrypted data analysis"
        }
      ],
      benefits: ["Transparency", "Privacy Protection", "Efficiency Improvement", "Trust Building"],
      status: "Research Phase"
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
              Use Cases
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Privacy AI technology is transforming industries across the board,
              enabling secure collaboration while protecting data sovereignty
            </p>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <Card key={useCase.id} className="bg-black/40 border-gray-800 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${useCase.color} bg-opacity-20`}>
                      {useCase.icon}
                    </div>
                    <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                      {useCase.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">
                    {useCase.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-base leading-relaxed">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Use Case Illustration */}
                  <div className="mb-6">
                    <div className="w-full aspect-[16/10] relative overflow-hidden rounded-lg border border-gray-700 bg-gray-900/50">
                      <Image
                        src={`/${useCase.image}`}
                        alt={`${useCase.title} Use Case`}
                        fill
                        className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Application Scenarios</h4>
                      <div className="space-y-3">
                        {useCase.scenarios.map((scenario, index) => (
                          <div key={index} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                            <h5 className="font-semibold text-purple-300 mb-2">{scenario.title}</h5>
                            <p className="text-gray-400 text-sm">{scenario.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Key Benefits</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {useCase.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how privacy AI can revolutionize your business while protecting sensitive data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Contact Us
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