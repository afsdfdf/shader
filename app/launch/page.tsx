"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  ArrowRight, 
  Rocket, 
  Wallet, 
  Shield, 
  Network, 
  Zap, 
  Users, 
  Settings, 
  Activity,
  TrendingUp,
  Lock,
  Eye,
  Globe,
  Smartphone,
  Monitor,
  Tablet
} from "lucide-react"
import Image from "next/image"

export default function LaunchPage() {
  const [isConnected, setIsConnected] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  const platforms = [
    {
      id: "testnet",
      title: "AegisChain Testnet",
      description: "Experience our privacy blockchain",
      status: "Live",
      statusColor: "bg-green-500",
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600",
      features: ["FHE Transactions", "Privacy Consensus", "Test AMN Tokens"],
      action: "Launch Testnet"
    },
    {
      id: "sphere",
      title: "AegisSphere Platform",
      description: "AI Agent collaboration hub",
      status: "Beta",
      statusColor: "bg-orange-500",
      icon: <Network className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      features: ["Create AI Agents", "Hub Tasks", "Privacy Computing"],
      action: "Enter AegisSphere"
    },
    {
      id: "bridge",
      title: "FHE Bridge",
      description: "Cross-chain privacy bridge",
      status: "Coming Soon",
      statusColor: "bg-gray-500",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-500 to-blue-600",
      features: ["Cross-chain Assets", "Privacy Transfer", "Multi-chain Support"],
      action: "Join Waitlist"
    },
    {
      id: "explorer",
      title: "Block Explorer",
      description: "Explore the privacy blockchain",
      status: "Live",
      statusColor: "bg-green-500",
      icon: <Eye className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600",
      features: ["Block Search", "Transaction History", "Network Stats"],
      action: "Open Explorer"
    }
  ]

  const stats = [
    { label: "Total Transactions", value: "1,234,567", icon: <Activity className="w-5 h-5" />, color: "text-blue-400" },
    { label: "Active Agents", value: "8,901", icon: <Users className="w-5 h-5" />, color: "text-purple-400" },
    { label: "Network TVL", value: "$12.3M", icon: <TrendingUp className="w-5 h-5" />, color: "text-green-400" },
    { label: "Privacy Score", value: "100%", icon: <Lock className="w-5 h-5" />, color: "text-orange-400" }
  ]

  const connectWallet = () => {
    setIsConnected(true)
    setCurrentStep(2)
  }

  return (
    <ShaderBackground>
      <Header />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 mb-4">
                <Rocket className="w-4 h-4 mr-2" />
                Launch Application
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Start Your Privacy Journey
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-4xl mx-auto">
              Access the AegisMind Network ecosystem and experience the future of privacy-preserving AI. 
              Connect your wallet to get started with our cutting-edge FHE technology.
            </p>

            {/* Device Compatibility */}
            <div className="flex justify-center items-center gap-8 mb-12">
              <div className="flex items-center gap-2 text-gray-300">
                <Monitor className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Desktop</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Tablet className="w-5 h-5 text-purple-400" />
                <span className="text-sm">Tablet</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Smartphone className="w-5 h-5 text-green-400" />
                <span className="text-sm">Mobile</span>
              </div>
            </div>

            {/* Connection Status */}
            <div className="max-w-2xl mx-auto mb-12">
              <Card className="bg-black/40 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-gray-500'} animate-pulse`}></div>
                      <span className="text-white font-semibold">
                        {isConnected ? 'Wallet Connected' : 'Wallet Not Connected'}
                      </span>
                    </div>
                    <Badge variant={isConnected ? "default" : "secondary"} className={isConnected ? "bg-green-500/20 text-green-300" : ""}>
                      Step {currentStep}/3
                    </Badge>
                  </div>
                  
                  <Progress value={progress} className="mb-4" />
                  
                  <div className="text-sm text-gray-400 mb-4">
                    {!isConnected ? "Connect your wallet to access the AegisMind Network" : "Choose a platform to get started"}
                  </div>
                  
                  {!isConnected ? (
                    <Button 
                      onClick={connectWallet}
                      size="lg" 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      <Wallet className="mr-2 w-5 h-5" />
                      Connect Wallet
                    </Button>
                  ) : (
                    <div className="flex items-center justify-center gap-2 text-green-400">
                      <Shield className="w-5 h-5" />
                      <span className="text-sm">Secure connection established</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Hero Image */}
            <div className="w-full aspect-[21/9] relative overflow-hidden rounded-xl border border-gray-700 bg-gray-900/50 mb-16">
              <Image
                src="/ai-collaboration-sphere.png"
                alt="AegisMind Network Launch"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        </section>

        {/* Network Stats */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-black/40 border-gray-800 backdrop-blur-sm hover:bg-black/60 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-3 rounded-lg bg-gray-800/50 mb-3 ${stat.color}`}>
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

        {/* Platform Selection */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Choose Your Platform
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access different components of the AegisMind Network ecosystem
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platforms.map((platform) => (
                <Card key={platform.id} className="bg-black/40 border-gray-800 backdrop-blur-sm hover:bg-black/60 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${platform.color} bg-opacity-20`}>
                        {platform.icon}
                      </div>
                      <Badge variant="secondary" className={`${platform.statusColor} text-white`}>
                        {platform.status}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">
                      {platform.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-base leading-relaxed">
                      {platform.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {platform.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full ${platform.status === 'Coming Soon' ? 'opacity-50 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'}`}
                      disabled={platform.status === 'Coming Soon' || !isConnected}
                    >
                      {platform.action}
                      {platform.status !== 'Coming Soon' && <ArrowRight className="ml-2 w-4 h-4" />}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Quick Actions
              </h2>
              <p className="text-xl text-gray-300">
                Common tasks and tools for AegisMind Network users
              </p>
            </div>

            <Tabs defaultValue="agents" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-black/40 border border-gray-800">
                <TabsTrigger value="agents">AI Agents</TabsTrigger>
                <TabsTrigger value="tasks">Tasks</TabsTrigger>
                <TabsTrigger value="assets">Assets</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="agents" className="mt-8">
                <Card className="bg-black/40 border-gray-800 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Manage AI Agents</h3>
                      <p className="text-gray-400">Create, deploy, and manage your AI agents</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button variant="outline" className="border-gray-700 hover:border-purple-500 p-6 h-auto flex-col">
                        <div className="text-purple-400 mb-2">+</div>
                        <div className="text-sm">Create Agent</div>
                      </Button>
                      <Button variant="outline" className="border-gray-700 hover:border-blue-500 p-6 h-auto flex-col">
                        <Activity className="w-6 h-6 text-blue-400 mb-2" />
                        <div className="text-sm">View Active</div>
                      </Button>
                      <Button variant="outline" className="border-gray-700 hover:border-green-500 p-6 h-auto flex-col">
                        <Settings className="w-6 h-6 text-green-400 mb-2" />
                        <div className="text-sm">Configure</div>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="tasks" className="mt-8">
                <Card className="bg-black/40 border-gray-800 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Task Management</h3>
                      <p className="text-gray-400">Monitor and manage Hub tasks</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                        <div>
                          <div className="text-white font-semibold">Data Analysis Task #1234</div>
                          <div className="text-gray-400 text-sm">Processing encrypted healthcare data</div>
                        </div>
                        <Badge className="bg-green-500/20 text-green-300">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                        <div>
                          <div className="text-white font-semibold">ML Training Task #1235</div>
                          <div className="text-gray-400 text-sm">Training privacy-preserving model</div>
                        </div>
                        <Badge className="bg-orange-500/20 text-orange-300">Pending</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="assets" className="mt-8">
                <Card className="bg-black/40 border-gray-800 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Asset Portfolio</h3>
                      <p className="text-gray-400">View and manage your digital assets</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                            <span className="text-purple-400 text-sm font-bold">AMN</span>
                          </div>
                          <div>
                            <div className="text-white font-semibold">AegisMind Token</div>
                            <div className="text-gray-400 text-sm">Native network token</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-semibold">1,234.56 AMN</div>
                          <div className="text-green-400 text-sm">$2,469.12</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings" className="mt-8">
                <Card className="bg-black/40 border-gray-800 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <Settings className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Account Settings</h3>
                      <p className="text-gray-400">Configure your privacy and security preferences</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                        <div>
                          <div className="text-white font-semibold">Privacy Level</div>
                          <div className="text-gray-400 text-sm">Maximum encryption enabled</div>
                        </div>
                        <Badge className="bg-green-500/20 text-green-300">High</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                        <div>
                          <div className="text-white font-semibold">Network</div>
                          <div className="text-gray-400 text-sm">Connected to AegisChain Testnet</div>
                        </div>
                        <Badge className="bg-blue-500/20 text-blue-300">Testnet</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Experience Privacy AI?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join thousands of users already exploring the future of privacy-preserving artificial intelligence.
              Start your journey with AegisMind Network today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4">
                <Rocket className="mr-2 w-5 h-5" />
                Launch Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 hover:border-purple-500 text-lg px-8 py-4">
                <Globe className="mr-2 w-5 h-5" />
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
