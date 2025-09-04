"use client"

import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, CheckCircle, Circle, Clock, Rocket, Target, Globe } from "lucide-react"

export default function RoadmapPage() {
  const roadmapPhases = [
    {
      id: "2024-q4",
      period: "2024 Q4",
      title: "Proof of Concept & Testnet",
      status: "completed",
      progress: 100,
      description: "Complete core architecture design and launch testnet phase one",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      milestones: [
        { task: "Complete core architecture design and whitepaper", completed: true },
        { task: "Develop internal prototype with basic FHE transactions", completed: true },
        { task: "Launch testnet phase one", completed: true },
        { task: "Release initial documentation and tutorials", completed: true }
      ],
      deliverables: [
        "AegisMind Network Whitepaper",
        "Testnet v1.0",
        "Basic FHE transaction functionality",
        "Developer documentation"
      ]
    },
    {
      id: "2025-q1", 
      period: "2025 Q1",
      title: "Testnet Upgrade & Security Audit",
      status: "in-progress",
      progress: 75,
      description: "Integrate optimized FHE library, improve privacy features, conduct security audits",
      icon: <Clock className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600",
      milestones: [
        { task: "Integrate optimized FHE library version", completed: true },
        { task: "Testnet phase two: open more nodes", completed: true },
        { task: "Conduct multiple rounds of security audits", completed: false },
        { task: "Validate cross-chain bridge functionality", completed: false }
      ],
      deliverables: [
        "Testnet v2.0",
        "Security audit reports",
        "FHE Bridge prototype",
        "Performance optimization"
      ]
    },
    {
      id: "2025-q2",
      period: "2025 Q2", 
      title: "Mainnet Launch Preparation",
      status: "pending",
      progress: 0,
      description: "Complete mainnet preparation, token generation event, ecosystem partnerships",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      milestones: [
        { task: "Complete mainnet code freeze and final testing", completed: false },
        { task: "Conduct Token Generation Event (TGE)", completed: false },
        { task: "Establish strategic partnerships", completed: false },
        { task: "Launch validator recruitment program", completed: false }
      ],
      deliverables: [
        "Mainnet v1.0",
        "AMN token launch",
        "Validator network",
        "Strategic partnerships"
      ]
    },
    {
      id: "2025-q3",
      period: "2025 Q3",
      title: "AegisSphere Platform Launch", 
      status: "pending",
      progress: 0,
      description: "Launch AI agent collaboration platform, developer tools and SDK",
      icon: <Target className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
      milestones: [
        { task: "Launch AegisSphere agent platform", completed: false },
        { task: "Release comprehensive developer SDK", completed: false },
        { task: "Open agent marketplace", completed: false },
        { task: "Onboard first batch of AI agents", completed: false }
      ],
      deliverables: [
        "AegisSphere platform",
        "Developer SDK v1.0",
        "Agent marketplace",
        "First AI agents"
      ]
    },
    {
      id: "2025-q4",
      period: "2025 Q4",
      title: "Ecosystem Expansion",
      status: "pending", 
      progress: 0,
      description: "Cross-chain integration, enterprise partnerships, global expansion",
      icon: <Globe className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600",
      milestones: [
        { task: "Launch FHE Bridge for major blockchains", completed: false },
        { task: "Establish enterprise partnerships", completed: false },
        { task: "Global community expansion", completed: false },
        { task: "Advanced privacy features rollout", completed: false }
      ],
      deliverables: [
        "Multi-chain FHE Bridge",
        "Enterprise solutions",
        "Global community",
        "Advanced features"
      ]
    }
  ]

  const keyMetrics = [
    {
      label: "Network Uptime",
      current: "99.9%",
      target: "99.99%",
      color: "text-green-400"
    },
    {
      label: "Transaction Speed",
      current: "< 5s",
      target: "< 2s", 
      color: "text-blue-400"
    },
    {
      label: "Active Validators",
      current: "150+",
      target: "1000+",
      color: "text-purple-400"
    },
    {
      label: "FHE Operations/sec",
      current: "1000+",
      target: "10000+",
      color: "text-orange-400"
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
              Development Roadmap
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Our journey to build the world&rsquo;s first privacy-first AI network,
              progressing project construction phase by phase to ensure stable technical implementation and ecosystem development
            </p>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Current Network Metrics</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real-time performance indicators showing our progress toward production readiness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className="bg-black/40 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className={`text-2xl font-bold ${metric.color} mb-2`}>
                    {metric.current}
                  </div>
                  <div className="text-sm text-gray-300 mb-3">{metric.label}</div>
                  <div className="text-xs text-gray-500">
                    Target: {metric.target}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Roadmap Timeline */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Development Timeline</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Phased project advancement ensuring stable technical implementation and ecosystem development
            </p>
          </div>
          
          <div className="space-y-8">
            {roadmapPhases.map((phase) => (
              <Card key={phase.id} className="bg-black/40 border-gray-800 backdrop-blur-sm hover:bg-black/60 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Phase Header */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${phase.color} bg-opacity-20`}>
                          {phase.icon}
                        </div>
                        <div>
                          <Badge 
                            variant={phase.status === 'completed' ? 'default' : phase.status === 'in-progress' ? 'secondary' : 'outline'}
                            className={
                              phase.status === 'completed' ? 'bg-green-600' : 
                              phase.status === 'in-progress' ? 'bg-blue-600' : 
                              'border-gray-600'
                            }
                          >
                            {phase.status === 'completed' ? 'Completed' : 
                             phase.status === 'in-progress' ? 'In Progress' : 
                             'Planned'}
                          </Badge>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{phase.period}</h3>
                      <h4 className="text-lg font-semibold text-purple-300 mb-3">{phase.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {phase.description}
                      </p>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-300">Progress</span>
                          <span className="text-gray-300">{phase.progress}%</span>
                        </div>
                        <Progress value={phase.progress} className="h-2" />
                      </div>
                    </div>
                    
                    {/* Milestones */}
                    <div className="lg:col-span-1">
                      <h5 className="font-semibold text-white mb-4">Key Milestones</h5>
                      <div className="space-y-3">
                        {phase.milestones.map((milestone, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="mt-1">
                              {milestone.completed ? (
                                <CheckCircle className="w-4 h-4 text-green-500" />
                              ) : (
                                <Circle className="w-4 h-4 text-gray-500" />
                              )}
                            </div>
                            <span className={`text-sm ${milestone.completed ? 'text-gray-300' : 'text-gray-500'}`}>
                              {milestone.task}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Deliverables */}
                    <div className="lg:col-span-1">
                      <h5 className="font-semibold text-white mb-4">Key Deliverables</h5>
                      <div className="space-y-2">
                        {phase.deliverables.map((deliverable, index) => (
                          <div key={index} className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                            <span className="text-sm text-gray-300">{deliverable}</span>
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
              Join Our Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Be part of building the future of privacy AI and help us achieve these ambitious milestones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Get Involved
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 hover:border-purple-500">
                Follow Progress
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </ShaderBackground>
  )
}