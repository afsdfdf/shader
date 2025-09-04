"use client"

import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, FileText, Shield, Lock, Network } from "lucide-react"

export default function WhitepaperPage() {
  return (
    <ShaderBackground>
      <Header />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              AegisMind Network Whitepaper
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Next-Generation Privacy AI Network Based on Fully Homomorphic Encryption
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Download className="mr-2 w-5 h-5" />
                Download PDF
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 hover:border-purple-500">
                <FileText className="mr-2 w-5 h-5" />
                View Online
              </Button>
            </div>
          </div>
        </section>

        {/* Whitepaper Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Abstract */}
            <Card className="bg-black/40 border-gray-800 backdrop-blur-sm mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Shield className="mr-3 w-8 h-8 text-purple-400" />
                  Abstract
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  AegisMind Network is an innovative decentralized data security and intelligent agent collaboration platform that adopts cutting-edge Fully Homomorphic Encryption (FHE) technology to build zero-trust network infrastructure. It aims to lead Web3 into a new era of quantum-resistant, end-to-end encrypted computing. Through this architecture, AegisMind Network provides comprehensive solutions for data sovereignty protection, fair consensus, privacy computing, secure cross-chain interaction, and trusted AI agents.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mt-4">
                  The core vision of AegisMind Network is to realize &ldquo;data never appears in plaintext&rdquo; - ensuring data remains encrypted throughout its entire lifecycle of transmission, storage, and computation, achieving comprehensive privacy protection. Leveraging FHE and other technologies, the platform enables users to securely share and utilize data without trusting intermediaries, while safeguarding personal privacy and data sovereignty.
                </p>
              </CardContent>
            </Card>

            {/* Table of Contents */}
            <Card className="bg-black/40 border-gray-800 backdrop-blur-sm mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Table of Contents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300 hover:text-purple-300 cursor-pointer transition-colors">
                      <span className="w-8 text-purple-400">1.</span>
                      <span>Project Background</span>
                    </div>
                    <div className="flex items-center text-gray-300 hover:text-purple-300 cursor-pointer transition-colors">
                      <span className="w-8 text-purple-400">2.</span>
                      <span>Industry Pain Points & Needs</span>
                    </div>
                    <div className="flex items-center text-gray-300 hover:text-purple-300 cursor-pointer transition-colors">
                      <span className="w-8 text-purple-400">3.</span>
                      <span>Technical Principles</span>
                    </div>
                    <div className="flex items-center text-gray-300 hover:text-purple-300 cursor-pointer transition-colors">
                      <span className="w-8 text-purple-400">4.</span>
                      <span>System Architecture</span>
                    </div>
                    <div className="flex items-center text-gray-300 hover:text-purple-300 cursor-pointer transition-colors">
                      <span className="w-8 text-purple-400">5.</span>
                      <span>Module Specifications</span>
                    </div>
                    <div className="flex items-center text-gray-300 hover:text-purple-300 cursor-pointer transition-colors">
                      <span className="w-8 text-purple-400">6.</span>
                      <span>Token Economics</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300 hover:text-purple-300 cursor-pointer transition-colors">
                      <span className="w-8 text-purple-400">7.</span>
                      <span>Governance Mechanism</span>
                    </div>
                    <div className="flex items-center text-gray-300 hover:text-purple-300 cursor-pointer transition-colors">
                      <span className="w-8 text-purple-400">8.</span>
                      <span>Development Roadmap</span>
                    </div>
                    <div className="flex items-center text-gray-300 hover:text-purple-300 cursor-pointer transition-colors">
                      <span className="w-8 text-purple-400">9.</span>
                      <span>Team & Partnerships</span>
                    </div>
                    <div className="flex items-center text-gray-300 hover:text-purple-300 cursor-pointer transition-colors">
                      <span className="w-8 text-purple-400">10.</span>
                      <span>Risk Control & Legal Compliance</span>
                    </div>
                    <div className="flex items-center text-gray-300 hover:text-purple-300 cursor-pointer transition-colors">
                      <span className="w-8 text-purple-400">11.</span>
                      <span>Application Scenarios</span>
                    </div>
                    <div className="flex items-center text-gray-300 hover:text-purple-300 cursor-pointer transition-colors">
                      <span className="w-8 text-purple-400">12.</span>
                      <span>Website Structure & Content</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 1: Project Background */}
            <Card className="bg-black/40 border-gray-800 backdrop-blur-sm mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <FileText className="mr-3 w-8 h-8 text-blue-400" />
                  1. Project Background
                </h2>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  With the rapid development of artificial intelligence (AI) and blockchain technology, data has become a key production factor in the new era. However, the current network environment faces severe challenges in data privacy and security. On one hand, AI model training and inference require large amounts of real data, but users are often concerned about privacy leaks and reluctant to provide sensitive information. On the other hand, once data is processed or uploaded to the blockchain in plaintext form in traditional internet and blockchain systems, it may be misused.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Meanwhile, the potential rise of quantum computing poses a threat to existing encryption systems, and future networks must have quantum-resistant capabilities. In the blockchain consensus field, especially AI-related networks and most PoS networks, the industry has identified three major pain points that urgently need to be addressed:
                </p>

                <div className="bg-gray-800/50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-purple-300 mb-4">Key Industry Challenges</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-red-300">Consensus Security Challenge:</strong> Traditional on-chain voting consensus requires validators to publicly broadcast their voting results. In networks with fewer nodes, this mechanism is vulnerable to vote imitation, collusion, and other attacks.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-orange-300">Data Security Challenge:</strong> AI networks are inherently data-intensive, with miners or validators frequently processing high-value personal data, sensor data, transaction records, etc. Processing this data in plaintext in decentralized environments can easily lead to privacy leaks and data abuse.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-yellow-300">Crypto-Economic Security Challenge:</strong> Many networks rely on native tokens to incentivize and penalize nodes to maintain consensus security. However, token price volatility may weaken the effectiveness of staking mechanisms and even endanger the security and stability of the entire network.
                      </div>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  These pain points become even more prominent in the context of AI and blockchain convergence. As Ethereum founder Vitalik Buterin pointed out: the AI era raises deeper privacy concerns, and the computational characteristics of large models are highly compatible with FHE mathematical properties. The combination of AI and FHE will become the core solution for future privacy issues, especially in scenarios requiring analysis of private data.
                </p>
              </CardContent>
            </Card>

            {/* Section 2: Technical Principles */}
            <Card className="bg-black/40 border-gray-800 backdrop-blur-sm mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Lock className="mr-3 w-8 h-8 text-purple-400" />
                  2. Technical Principles
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  AegisMind Network&rsquo;s technical system is built on multiple cutting-edge cryptographic and blockchain technologies, with Fully Homomorphic Encryption (FHE) - known as the &ldquo;holy grail of cryptography&rdquo; - at its core. The project also integrates zero-trust architecture, layered consensus, and on-chain access control principles.
                </p>

                {/* FHE Section */}
                <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 rounded-lg mb-8 border border-purple-500/30">
                  <h3 className="text-2xl font-semibold text-purple-300 mb-4">2.1 Fully Homomorphic Encryption (FHE)</h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Fully Homomorphic Encryption is a revolutionary encryption technology that allows direct computation on ciphertext without decryption. The computed results remain encrypted and, when decrypted, are identical to performing the same computation on plaintext. Simply put, FHE enables &ldquo;addition, multiplication, and arbitrary operations on encrypted data&rdquo; while keeping data encrypted throughout the process.
                  </p>

                  {/* FHE Visualization */}
                  <div className="bg-black/40 p-6 rounded-lg mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4 text-center">FHE Computation Process</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                      <div className="text-center">
                        <div className="bg-green-500/20 p-4 rounded-lg border border-green-500/30 mb-3">
                          <div className="text-green-400 font-mono text-sm">Plaintext Data</div>
                          <div className="text-white mt-2">A = 123</div>
                          <div className="text-white">B = 456</div>
                        </div>
                        <div className="text-xs text-gray-400">User&rsquo;s Local Data</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-purple-500/20 p-4 rounded-lg border border-purple-500/30 mb-3">
                          <div className="text-purple-400 font-mono text-sm">Encrypted Computation</div>
                          <div className="text-white mt-2 font-mono">Enc(A) + Enc(B)</div>
                          <div className="text-white font-mono">= Enc(A + B)</div>
                        </div>
                        <div className="text-xs text-gray-400">Cloud Processing</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-500/30 mb-3">
                          <div className="text-blue-400 font-mono text-sm">Decrypted Result</div>
                          <div className="text-white mt-2">Result = 579</div>
                          <div className="text-green-400">✓ Correct</div>
                        </div>
                        <div className="text-xs text-gray-400">User Gets Result</div>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <div className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full inline-block text-sm">
                        Throughout the entire process, the cloud server never sees plaintext data
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-purple-300">Full Lifecycle Encryption</h5>
                      <p className="text-gray-400 text-sm">Data remains encrypted throughout transmission, storage, and computation, eliminating privacy leakage risks during processing.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-blue-300">Computational Usability with Privacy</h5>
                      <p className="text-gray-400 text-sm">AI models can complete training and inference without knowing data content, making &ldquo;data usable but invisible&rdquo; a reality.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-green-300">Quantum-Resistant Security</h5>
                      <p className="text-gray-400 text-sm">FHE is typically built on lattice cryptography (such as LWE, RLWE problems), providing inherent quantum-resistant capabilities.</p>
                    </div>
                  </div>
                </div>

                {/* HTTPZ Protocol Section */}
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-lg mb-8 border border-blue-500/30">
                  <h3 className="text-2xl font-semibold text-blue-300 mb-4">2.2 HTTPZ Zero-Trust Protocol</h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    AegisMind Network actively practices the &ldquo;zero-trust&rdquo; security model, defaulting to not trusting any network nodes or services, with all interactions requiring encryption and verification. This philosophy is specifically implemented in our data transmission protocol, which we call HTTPZ (Zero-Trust Hypertext Transfer Protocol).
                  </p>

                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-blue-300">End-to-End Encryption</h5>
                      <p className="text-gray-400 text-sm">All data transmitted through AegisMind network uses strong encryption by default, with only senders and receivers able to decrypt and view content.</p>
                    </div>
                    <div className="border-l-4 border-cyan-500 pl-4">
                      <h5 className="font-semibold text-cyan-300">FHE-Driven Computation</h5>
                      <p className="text-gray-400 text-sm">HTTPZ supports combining FHE to process data during transmission, enabling &ldquo;computation as communication&rdquo; security model.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-green-300">Blockchain Integration</h5>
                      <p className="text-gray-400 text-sm">Protocol design fully considers integration with blockchain infrastructure, ensuring message content remains encrypted even when published on public chains.</p>
                    </div>
                  </div>
                </div>

                {/* Privacy Consensus Section */}
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-lg border border-green-500/30">
                  <h3 className="text-2xl font-semibold text-green-300 mb-4">2.3 Privacy Consensus Mechanism</h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    To address the consensus fairness issues mentioned earlier, we designed an FHE-integrated voting consensus process. Specifically, block validators encrypt their block content summaries during the proposal phase, and other validators vote on the proposal, but the voting process is completed in the ciphertext domain.
                  </p>

                  <div className="bg-black/40 p-4 rounded-lg mb-4">
                    <h5 className="font-semibold text-white mb-2">Privacy Voting Process:</h5>
                    <ol className="list-decimal list-inside space-y-2 text-gray-300 text-sm">
                      <li>Validators submit encrypted approve/reject votes</li>
                      <li>Security layer performs homomorphic vote counting</li>
                      <li>Consensus layer decrypts and publishes final results</li>
                      <li>Individual validator positions remain encrypted throughout</li>
                    </ol>
                  </div>

                  <p className="text-gray-300 text-sm">
                    This process eliminates vote following and retaliation, ensuring independent and fair voting while maintaining the verifiability of consensus results.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: System Architecture */}
            <Card className="bg-black/40 border-gray-800 backdrop-blur-sm mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Network className="mr-3 w-8 h-8 text-green-400" />
                  3. System Architecture
                </h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  AegisMind Network adopts a layered modular system architecture design, dividing different functions into different layers and modules for collaborative work. The overall architecture consists of security layer, consensus layer, agent collaboration layer, and application layer, supplemented by cross-chain bridging and peripheral services.
                </p>

                {/* Architecture Diagram */}
                <div className="bg-black/60 p-8 rounded-lg mb-8 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-6 text-center">AegisMind Network Layered Architecture</h3>
                  
                  {/* SVG Architecture Diagram */}
                  <div className="flex justify-center mb-6">
                    <svg width="600" height="400" viewBox="0 0 600 400" className="border border-gray-600 rounded-lg bg-gray-900">
                      {/* Background Grid */}
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" strokeWidth="0.5"/>
                        </pattern>
                        <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{stopColor:"#8b5cf6", stopOpacity:0.3}} />
                          <stop offset="100%" style={{stopColor:"#ec4899", stopOpacity:0.3}} />
                        </linearGradient>
                        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{stopColor:"#3b82f6", stopOpacity:0.3}} />
                          <stop offset="100%" style={{stopColor:"#8b5cf6", stopOpacity:0.3}} />
                        </linearGradient>
                        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{stopColor:"#10b981", stopOpacity:0.3}} />
                          <stop offset="100%" style={{stopColor:"#3b82f6", stopOpacity:0.3}} />
                        </linearGradient>
                        <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{stopColor:"#f97316", stopOpacity:0.3}} />
                          <stop offset="100%" style={{stopColor:"#ef4444", stopOpacity:0.3}} />
                        </linearGradient>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                      
                      {/* Application Layer */}
                      <rect x="50" y="50" width="500" height="60" rx="8" fill="url(#purpleGrad)" stroke="#8b5cf6" strokeWidth="2"/>
                      <text x="300" y="75" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">Application Layer</text>
                      <text x="300" y="95" textAnchor="middle" fill="#c084fc" fontSize="11">DApps • User Interfaces • SDK/API</text>
                      
                      {/* Agent Collaboration Layer */}
                      <rect x="50" y="130" width="500" height="60" rx="8" fill="url(#blueGrad)" stroke="#3b82f6" strokeWidth="2"/>
                      <text x="300" y="155" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">Agent Collaboration Layer (AegisSphere)</text>
                      <text x="300" y="175" textAnchor="middle" fill="#60a5fa" fontSize="11">Hub Contracts • Agent Management • Orchestration</text>
                      
                      {/* Consensus Layer */}
                      <rect x="50" y="210" width="500" height="60" rx="8" fill="url(#greenGrad)" stroke="#10b981" strokeWidth="2"/>
                      <text x="300" y="235" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">Consensus Layer (AegisChain)</text>
                      <text x="300" y="255" textAnchor="middle" fill="#34d399" fontSize="11">FHE Consensus • Privacy Voting • Block Production</text>
                      
                      {/* Security Layer */}
                      <rect x="50" y="290" width="500" height="60" rx="8" fill="url(#orangeGrad)" stroke="#f97316" strokeWidth="2"/>
                      <text x="300" y="315" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">Security Layer (FHE Validators)</text>
                      <text x="300" y="335" textAnchor="middle" fill="#fb923c" fontSize="11">FHE Verification • Key Management • Zero-Trust Protocol</text>
                      
                      {/* Data Flow Arrows */}
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
                        </marker>
                      </defs>
                      
                      {/* Vertical arrows */}
                      <line x1="580" y1="110" x2="580" y2="130" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                      <line x1="580" y1="190" x2="580" y2="210" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                      <line x1="580" y1="270" x2="580" y2="290" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                      
                      {/* Reverse arrows */}
                      <line x1="20" y1="130" x2="20" y2="110" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                      <line x1="20" y1="210" x2="20" y2="190" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                      <line x1="20" y1="290" x2="20" y2="270" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                      
                      {/* Side labels */}
                      <text x="585" y="120" fill="#9ca3af" fontSize="10">Data</text>
                      <text x="585" y="132" fill="#9ca3af" fontSize="10">Flow</text>
                      <text x="5" y="120" fill="#9ca3af" fontSize="10">Response</text>
                      <text x="5" y="132" fill="#9ca3af" fontSize="10">Flow</text>
                    </svg>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-gray-400">
                      🔒 End-to-end encrypted data flow with zero-trust architecture
                    </div>
                  </div>
                </div>

                {/* FHE Process Diagram */}
                <div className="bg-black/60 p-8 rounded-lg mb-8 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-6 text-center">FHE Computation Process Flow</h3>
                  
                  <div className="flex justify-center">
                    <svg width="700" height="300" viewBox="0 0 700 300" className="border border-gray-600 rounded-lg bg-gray-900">
                      {/* Background */}
                      <rect width="100%" height="100%" fill="url(#grid)" />
                      
                      {/* User Side */}
                      <rect x="50" y="50" width="150" height="200" rx="10" fill="#1f2937" stroke="#10b981" strokeWidth="2"/>
                      <text x="125" y="75" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold">User Side</text>
                      
                      {/* Plaintext Data */}
                      <rect x="70" y="90" width="110" height="40" rx="5" fill="#065f46" stroke="#10b981" strokeWidth="1"/>
                      <text x="125" y="108" textAnchor="middle" fill="#ffffff" fontSize="12">Plaintext Data</text>
                      <text x="125" y="122" textAnchor="middle" fill="#6ee7b7" fontSize="10">A=123, B=456</text>
                      
                      {/* Encryption */}
                      <rect x="70" y="140" width="110" height="30" rx="5" fill="#7c2d12" stroke="#f97316" strokeWidth="1"/>
                      <text x="125" y="158" textAnchor="middle" fill="#ffffff" fontSize="11">Encrypt</text>
                      
                      {/* Decryption */}
                      <rect x="70" y="180" width="110" height="30" rx="5" fill="#7c2d12" stroke="#f97316" strokeWidth="1"/>
                      <text x="125" y="198" textAnchor="middle" fill="#ffffff" fontSize="11">Decrypt</text>
                      
                      {/* Result */}
                      <rect x="70" y="220" width="110" height="25" rx="5" fill="#065f46" stroke="#10b981" strokeWidth="1"/>
                      <text x="125" y="237" textAnchor="middle" fill="#6ee7b7" fontSize="11">Result = 579</text>
                      
                      {/* Cloud Side */}
                      <rect x="500" y="50" width="150" height="200" rx="10" fill="#1f2937" stroke="#8b5cf6" strokeWidth="2"/>
                      <text x="575" y="75" textAnchor="middle" fill="#8b5cf6" fontSize="14" fontWeight="bold">Cloud Side</text>
                      
                      {/* Encrypted Data */}
                      <rect x="520" y="90" width="110" height="40" rx="5" fill="#581c87" stroke="#8b5cf6" strokeWidth="1"/>
                      <text x="575" y="108" textAnchor="middle" fill="#ffffff" fontSize="12">Encrypted Data</text>
                      <text x="575" y="122" textAnchor="middle" fill="#c4b5fd" fontSize="10">Enc(A), Enc(B)</text>
                      
                      {/* FHE Computation */}
                      <rect x="520" y="140" width="110" height="50" rx="5" fill="#7c2d12" stroke="#f97316" strokeWidth="1"/>
                      <text x="575" y="158" textAnchor="middle" fill="#ffffff" fontSize="11">FHE Compute</text>
                      <text x="575" y="172" textAnchor="middle" fill="#fdba74" fontSize="10">Enc(A) + Enc(B)</text>
                      <text x="575" y="184" textAnchor="middle" fill="#fdba74" fontSize="10">= Enc(A + B)</text>
                      
                      {/* Encrypted Result */}
                      <rect x="520" y="200" width="110" height="40" rx="5" fill="#581c87" stroke="#8b5cf6" strokeWidth="1"/>
                      <text x="575" y="218" textAnchor="middle" fill="#ffffff" fontSize="12">Encrypted Result</text>
                      <text x="575" y="232" textAnchor="middle" fill="#c4b5fd" fontSize="10">Enc(579)</text>
                      
                      {/* Network/Internet */}
                      <rect x="275" y="125" width="150" height="50" rx="25" fill="#374151" stroke="#6b7280" strokeWidth="2"/>
                      <text x="350" y="145" textAnchor="middle" fill="#ffffff" fontSize="12">Secure Network</text>
                      <text x="350" y="160" textAnchor="middle" fill="#9ca3af" fontSize="10">(HTTPZ Protocol)</text>
                      
                      {/* Arrows */}
                      <defs>
                        <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                        </marker>
                      </defs>
                      
                      {/* User to Network */}
                      <line x1="200" y1="140" x2="275" y2="140" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)"/>
                      <text x="237" y="135" textAnchor="middle" fill="#3b82f6" fontSize="9">Encrypted</text>
                      
                      {/* Network to Cloud */}
                      <line x1="425" y1="140" x2="500" y2="140" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)"/>
                      <text x="462" y="135" textAnchor="middle" fill="#3b82f6" fontSize="9">Data</text>
                      
                      {/* Cloud to Network */}
                      <line x1="500" y1="160" x2="425" y2="160" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrow)"/>
                      <text x="462" y="175" textAnchor="middle" fill="#8b5cf6" fontSize="9">Result</text>
                      
                      {/* Network to User */}
                      <line x1="275" y1="160" x2="200" y2="160" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrow)"/>
                      <text x="237" y="175" textAnchor="middle" fill="#8b5cf6" fontSize="9">Encrypted</text>
                      
                      {/* Privacy Shield */}
                      <circle cx="350" cy="220" r="30" fill="#dc2626" fillOpacity="0.2" stroke="#dc2626" strokeWidth="2"/>
                      <text x="350" y="215" textAnchor="middle" fill="#ffffff" fontSize="10">🛡️</text>
                      <text x="350" y="230" textAnchor="middle" fill="#fca5a5" fontSize="9">Privacy Shield</text>
                    </svg>
                  </div>
                  
                  <div className="text-center mt-4">
                    <div className="text-sm text-gray-400">
                      🔐 Data remains encrypted throughout the entire computation process
                    </div>
                  </div>
                </div>

                {/* Layer Descriptions */}
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h4 className="text-xl font-semibold text-orange-300 mb-2">Security Layer (FHE Validation Network)</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      The foundation of AegisMind Network, consisting of independent FHE validator nodes that provide fully homomorphic encryption support and basic security services. Validators execute encrypted computation and verification tasks, participate in consensus voting and tallying, and run randomness protocols.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-xl font-semibold text-green-300 mb-2">Consensus Layer (AegisChain)</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      The blockchain core of AegisMind Network, responsible for transaction ordering, consensus achievement, and ledger recording. Adopts self-developed AegisChain blockchain with consensus algorithm combining classic Proof of Stake (PoS) and innovative FHE consensus mechanisms.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-xl font-semibold text-blue-300 mb-2">Agent Collaboration Layer (AegisSphere)</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      The characteristic layer of AegisMind Network, designed specifically for multi-agent (Agentic AI) creation, training, and collaboration. Users can create and deploy autonomous agents that receive tasks, access required data or tools under privacy protection, and collaborate with other agents.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="text-xl font-semibold text-purple-300 mb-2">Application Layer</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      The top layer providing user interfaces, DApps, SDKs, and APIs. Developers can build privacy-preserving applications on this layer, while users interact with the network through various interfaces to enjoy secure and private AI services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Continue with more sections... */}
            <div className="text-center py-12">
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-8 rounded-lg border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">Complete Whitepaper</h3>
                <p className="text-gray-300 mb-6">
                  This is a preview of the AegisMind Network whitepaper. The complete document includes detailed technical specifications, economic models, governance mechanisms, and implementation roadmap.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    <Download className="mr-2 w-5 h-5" />
                    Download Full PDF
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-700 hover:border-purple-500">
                    Contact Team
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </ShaderBackground>
  )
}
