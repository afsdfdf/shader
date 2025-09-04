"use client"

import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Twitter, Github, Mail, Users, Award, Globe, BookOpen } from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  const coreTeam = [
    {
      name: "Alice Zhang",
      role: "CEO & Chief Cryptographer",
      bio: "MIT Computer Science Master's degree with 10 years of R&D experience in cryptography and network security. Previously worked at renowned cryptographic library development companies, led FHE algorithm optimization projects, and has deep research in lattice cryptography and zero-knowledge proofs.",
      expertise: ["Fully Homomorphic Encryption", "Lattice Cryptography", "Zero-Knowledge Proofs", "Network Security"],
      education: "MIT Computer Science Master's",
      experience: "10 years cryptography R&D experience",
      image: "/placeholder-user.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alice@aegismind.network"
      }
    },
    {
      name: "Bob Li", 
      role: "CTO",
      bio: "Former senior architect at BAT companies, early blockchain developer. Rich experience in distributed systems and high-concurrency servers, led the development of several consortium blockchains. Responsible for blockchain architecture design, consensus mechanisms, and system engineering implementation.",
      expertise: ["Blockchain Architecture", "Distributed Systems", "Consensus Mechanisms", "System Engineering"],
      education: "Tsinghua University Computer Science Bachelor's",
      experience: "15 years system architecture experience",
      image: "/placeholder-user.jpg",
      social: {
        linkedin: "#",
        github: "#",
        email: "bob@aegismind.network"
      }
    },
    {
      name: "Carol Wang",
      role: "Chief AI Scientist", 
      bio: "UC Berkeley Computer Science PhD, artificial intelligence expert with research covering multi-agent systems and federated learning. Years of machine learning team management experience in Silicon Valley tech companies, with unique insights on deploying AI models in encrypted environments.",
      expertise: ["Multi-Agent Systems", "Federated Learning", "Machine Learning", "AI Architecture"],
      education: "UC Berkeley Computer Science PhD",
      experience: "12 years AI R&D experience",
      image: "/placeholder-user.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "carol@aegismind.network"
      }
    },
    {
      name: "David Chen",
      role: "Head of Product",
      bio: "Former product manager at leading Web3 companies with deep understanding of blockchain user experience and product design. Led multiple successful DeFi and NFT projects, expert in privacy technology productization and user experience optimization.",
      expertise: ["Product Strategy", "Web3 UX", "Privacy Technology", "User Research"],
      education: "Stanford MBA",
      experience: "8 years product management experience",
      image: "/placeholder-user.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@aegismind.network"
      }
    }
  ]

  const advisors = [
    {
      name: "Prof. Emily Rodriguez",
      role: "Technical Advisor",
      bio: "Professor of Cryptography at Stanford University, world-renowned expert in homomorphic encryption research with over 50 published papers in top-tier conferences.",
      expertise: ["Homomorphic Encryption", "Cryptographic Protocols", "Academic Research"],
      image: "/placeholder-user.jpg"
    },
    {
      name: "Michael Thompson",
      role: "Business Advisor", 
      bio: "Former VP at leading venture capital firm, invested in over 20 successful blockchain projects, expert in crypto market strategy and business development.",
      expertise: ["Investment Strategy", "Business Development", "Market Analysis"],
      image: "/placeholder-user.jpg"
    },
    {
      name: "Dr. Sarah Kim",
      role: "Regulatory Advisor",
      bio: "Former regulatory affairs director at major financial institution, expert in cryptocurrency compliance and privacy regulation, advisor to multiple blockchain projects.",
      expertise: ["Regulatory Compliance", "Privacy Law", "Financial Regulation"],
      image: "/placeholder-user.jpg"
    }
  ]

  const companyStats = [
    { label: "Team Members", value: "25+", icon: <Users className="w-6 h-6" /> },
    { label: "Countries", value: "8", icon: <Globe className="w-6 h-6" /> },
    { label: "Patents Filed", value: "12", icon: <Award className="w-6 h-6" /> },
    { label: "Research Papers", value: "15+", icon: <BookOpen className="w-6 h-6" /> }
  ]

  return (
    <ShaderBackground>
      <Header />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              World-class experts in cryptography, blockchain, and AI working together
              to build the future of privacy computing
            </p>
            
            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {companyStats.map((stat, index) => (
                <Card key={index} className="bg-black/40 border-gray-800 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 bg-opacity-20 mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Team */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Core Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry veterans with decades of combined experience in cutting-edge technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreTeam.map((member, index) => (
              <Card key={index} className="bg-black/40 border-gray-800 backdrop-blur-sm hover:bg-black/60 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-purple-300 font-semibold">{member.role}</p>
                      </div>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary" className="bg-gray-800 text-gray-300 text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-400">
                          <div>
                            <span className="font-semibold">Education:</span> {member.education}
                          </div>
                          <div>
                            <span className="font-semibold">Experience:</span> {member.experience}
                          </div>
                        </div>
                        
                        <div className="flex space-x-3 pt-2">
                          {member.social.linkedin && (
                            <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                              <Linkedin className="w-4 h-4" />
                            </a>
                          )}
                          {member.social.twitter && (
                            <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                              <Twitter className="w-4 h-4" />
                            </a>
                          )}
                          {member.social.github && (
                            <a href={member.social.github} className="text-gray-400 hover:text-purple-400 transition-colors">
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {member.social.email && (
                            <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-green-400 transition-colors">
                              <Mail className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Advisors */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Advisory Board</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Distinguished advisors providing strategic guidance and industry expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <Card key={index} className="bg-black/40 border-gray-800 backdrop-blur-sm hover:bg-black/60 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1 mx-auto mb-4">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      width={80}
                      height={80}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-1">{advisor.name}</h3>
                  <p className="text-purple-300 font-semibold mb-3">{advisor.role}</p>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {advisor.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 justify-center">
                    {advisor.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-gray-800 text-gray-300 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We&rsquo;re always looking for talented individuals who share our vision
              of building a privacy-first future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 hover:border-purple-500">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </ShaderBackground>
  )
}