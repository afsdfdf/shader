"use client"

import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, HelpCircle, MessageCircle, Mail } from "lucide-react"

export default function FAQPage() {
  const faqCategories = [
    {
      title: "About the Project",
      questions: [
        {
          question: "What is AegisMind Network?",
          answer: "AegisMind Network is a privacy AI network based on Fully Homomorphic Encryption (FHE), building a zero-trust data security and intelligent agent collaboration platform. Our core vision is to realize 'data never appears in plaintext' - ensuring data remains encrypted throughout its entire lifecycle of transmission, storage, and computation."
        },
        {
          question: "Why do we need Fully Homomorphic Encryption?",
          answer: "Fully Homomorphic Encryption is hailed as the 'holy grail of cryptography' because it allows direct computation on ciphertext without decryption. This solves the privacy leakage problem in traditional cloud computing, achieving the ideal state of 'data usable but invisible', which is particularly suitable for privacy protection needs in the AI era."
        },
        {
          question: "How is AegisMind different from other privacy projects?",
          answer: "Our uniqueness lies in: 1) Using FHE technology to achieve true end-to-end encrypted computation; 2) Innovative HTTPZ zero-trust protocol; 3) Collaboration platform specifically designed for AI agents; 4) Quantum-resistant cryptographic foundation; 5) Complete privacy AI ecosystem."
        },
        {
          question: "How is the network performance?",
          answer: "Although FHE computation has relatively high overhead compared to traditional plaintext computation, we have significantly improved performance through algorithm optimization, hardware acceleration, and modular architecture. Currently, the network can achieve 1000+ TPS with block confirmation time less than 5 seconds, meeting most commercial application needs."
        }
      ]
    },
    {
      title: "Token & Economics",
      questions: [
        {
          question: "What are the uses of AMN tokens?",
          answer: "AMN token is the native token of the network with main uses including: 1) Network staking and validation; 2) Agent activation and operation; 3) Task fees and rewards; 4) Governance rights and DAO voting; 5) Service fee payments; 6) Ecosystem value capture."
        },
        {
          question: "What is the token total supply and distribution?",
          answer: "AMN total supply is 1 billion tokens, distributed as follows: Community Airdrop 10%, Public Sale 15%, Private Investment 20%, Team & Advisors 15%, Ecosystem Fund 20%, Staking Rewards Pool 20%. Team and investor tokens have long-term lock-up periods to ensure aligned interests."
        },
        {
          question: "How to participate in staking?",
          answer: "Users can participate in two ways: 1) Direct staking of AMN to become validators, requiring technical and capital requirements; 2) Delegate staking to trusted validators for revenue sharing. Staking annual yield is expected to be between 8-15%."
        },
        {
          question: "How to obtain AMN tokens?",
          answer: "AMN tokens can be obtained through: 1) Participating in community airdrops and testnet activities; 2) Public sale events; 3) Providing network services (validation, computation, etc.); 4) Secondary market trading; 5) Ecosystem contribution rewards."
        }
      ]
    },
    {
      title: "Technology & Security",
      questions: [
        {
          question: "How secure is FHE technology?",
          answer: "FHE technology is based on well-established mathematical problems (such as Learning With Errors), with security widely recognized by the academic community. Our implementation uses NIST-standard algorithms and has undergone multiple rounds of security audits to ensure the highest level of security."
        },
        {
          question: "How does the privacy consensus mechanism work?",
          answer: "Our privacy consensus mechanism allows validators to vote on encrypted proposals without revealing individual voting intentions. This eliminates vote following and retaliation while maintaining consensus verifiability and fairness."
        },
        {
          question: "What is quantum resistance?",
          answer: "Quantum resistance means our cryptographic algorithms can resist attacks from quantum computers. We use lattice-based cryptography, which is considered one of the most promising post-quantum cryptographic schemes, providing long-term security guarantees."
        },
        {
          question: "How do AI agents ensure privacy?",
          answer: "AI agents run in encrypted environments and can only access encrypted data. All computations are performed using FHE technology, ensuring agents can complete tasks without seeing sensitive information, achieving true privacy-preserving AI collaboration."
        }
      ]
    },
    {
      title: "Development & Participation",
      questions: [
        {
          question: "How to become a developer on AegisMind Network?",
          answer: "Developers can: 1) Download our SDK and development tools; 2) Read technical documentation and tutorials; 3) Join developer community and forums; 4) Participate in hackathons and developer incentive programs; 5) Deploy applications on testnet for testing."
        },
        {
          question: "What development resources are available?",
          answer: "We provide: 1) Comprehensive SDK supporting multiple programming languages; 2) Detailed technical documentation and API references; 3) Code examples and best practices; 4) Developer community support; 5) Technical workshops and training; 6) Developer grants and funding programs."
        },
        {
          question: "How to participate in network governance?",
          answer: "AMN token holders can: 1) Participate in DAO proposal voting; 2) Submit improvement proposals; 3) Join governance forums and discussions; 4) Participate in community governance activities; 5) Influence protocol upgrade decisions through voting."
        },
        {
          question: "What are the validator requirements?",
          answer: "Becoming a validator requires: 1) Minimum staking amount (varies by tier); 2) Stable network connection and high uptime; 3) Appropriate hardware configuration; 4) Basic technical knowledge and operational capabilities; 5) Compliance with network rules and protocols."
        }
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Find answers to common questions about AegisMind Network,
              our technology, tokens, and how to get involved
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center mb-6">
                  <HelpCircle className="w-6 h-6 text-purple-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>
                
                <Card className="bg-black/40 border-gray-800 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`} className="border-gray-700">
                          <AccordionTrigger className="text-left text-white hover:text-purple-300 transition-colors">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Can&rsquo;t find what you&rsquo;re looking for? Our team is here to help you get started
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-black/40 border-gray-800 backdrop-blur-sm hover:bg-black/60 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Community Discord</h3>
                  <p className="text-gray-400 text-sm mb-4">Join our active community for real-time support</p>
                  <Button variant="outline" size="sm" className="border-gray-700 hover:border-blue-500">
                    Join Discord
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 border-gray-800 backdrop-blur-sm hover:bg-black/60 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                  <p className="text-gray-400 text-sm mb-4">Get direct help from our support team</p>
                  <Button variant="outline" size="sm" className="border-gray-700 hover:border-green-500">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-black/40 border-gray-800 backdrop-blur-sm hover:bg-black/60 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <HelpCircle className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
                  <p className="text-gray-400 text-sm mb-4">Comprehensive guides and technical docs</p>
                  <Button variant="outline" size="sm" className="border-gray-700 hover:border-purple-500">
                    View Docs
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 hover:border-purple-500">
                Schedule a Call
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </ShaderBackground>
  )
}