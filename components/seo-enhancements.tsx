"use client"

import Head from 'next/head'
import { usePathname } from 'next/navigation'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article'
  canonical?: string
}

// 页面SEO配置
const pageConfigs: Record<string, SEOProps> = {
  '/': {
    title: 'AegisMind Network - Next-Generation Privacy AI Network',
    description: 'Experience the future of privacy-preserving AI with AegisMind Network. Built on Fully Homomorphic Encryption (FHE) technology for secure data processing.',
    keywords: ['privacy AI', 'FHE', 'blockchain', 'zero trust', 'quantum resistant'],
    image: '/fhe-encryption-hero.png'
  },
  '/products': {
    title: 'Products - AegisMind Network Privacy AI Solutions',
    description: 'Explore AegisChain, AegisSphere, and FHE Bridge - complete privacy AI infrastructure from blockchain to applications.',
    keywords: ['AegisChain', 'AegisSphere', 'FHE Bridge', 'privacy blockchain'],
    image: '/aegischain-architecture.png'
  },
  '/technology': {
    title: 'Technology - FHE & Zero-Trust Architecture | AegisMind',
    description: 'Learn about Fully Homomorphic Encryption, HTTPZ protocol, and privacy consensus mechanisms powering AegisMind Network.',
    keywords: ['FHE', 'homomorphic encryption', 'HTTPZ', 'zero trust', 'privacy consensus'],
    image: '/fhe-encryption.png'
  },
  '/use-cases': {
    title: 'Use Cases - Privacy AI Applications | AegisMind Network',
    description: 'Discover privacy-preserving AI applications in healthcare, finance, Web3 social, and IoT with AegisMind Network.',
    keywords: ['healthcare AI', 'financial privacy', 'Web3 social', 'IoT privacy'],
    image: '/healthcare-privacy-collaboration.png'
  },
  '/whitepaper': {
    title: 'Whitepaper - Technical Documentation | AegisMind Network',
    description: 'Read the complete AegisMind Network whitepaper covering FHE technology, system architecture, and tokenomics.',
    keywords: ['whitepaper', 'technical documentation', 'FHE architecture', 'tokenomics'],
    image: '/fhe-encryption-hero.png'
  },
  '/launch': {
    title: 'Launch App - Access AegisMind Network | Privacy AI Platform',
    description: 'Connect your wallet and access AegisMind Network ecosystem including AegisChain testnet and AegisSphere platform.',
    keywords: ['launch app', 'wallet connect', 'AegisChain testnet', 'AegisSphere'],
    image: '/ai-collaboration-sphere.png'
  }
}

export default function SEOEnhancements({ 
  title,
  description,
  keywords,
  image,
  type = 'website',
  canonical
}: SEOProps) {
  const pathname = usePathname()
  
  // 获取页面配置或使用传入的props
  const config = pageConfigs[pathname] || {}
  const finalTitle = title || config.title || 'AegisMind Network'
  const finalDescription = description || config.description || 'Next-generation privacy AI network'
  const finalKeywords = keywords || config.keywords || []
  const finalImage = image || config.image || '/logo.png'
  const finalCanonical = canonical || `https://aegismind.network${pathname}`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords.join(', ')} />
      <link rel="canonical" href={finalCanonical} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:site_name" content="AegisMind Network" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:creator" content="@AegisMindNetwork" />
      
      {/* Additional Meta */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="AegisMind Network Team" />
      <meta name="language" content="EN" />
      <meta name="revisit-after" content="7 days" />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AegisMind Network",
            "description": "Next-generation privacy AI network based on FHE technology",
            "url": "https://aegismind.network",
            "logo": "https://aegismind.network/logo.png",
            "sameAs": [
              "https://twitter.com/AegisMindNetwork",
              "https://github.com/aegismind",
              "https://discord.gg/aegismind"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "contact@aegismind.network"
            },
            "foundingDate": "2024",
            "industry": "Blockchain Technology",
            "keywords": finalKeywords.join(', ')
          })
        }}
      />
    </Head>
  )
}

// 文章页面SEO组件
interface ArticleSEOProps extends SEOProps {
  author?: string
  publishedTime?: string
  modifiedTime?: string
  tags?: string[]
}

export function ArticleSEO({
  author = "AegisMind Network Team",
  publishedTime,
  modifiedTime,
  tags = [],
  ...props
}: ArticleSEOProps) {
  const pathname = usePathname()
  const canonical = `https://aegismind.network${pathname}`

  return (
    <Head>
      <SEOEnhancements {...props} type="article" canonical={canonical} />
      
      {/* Article specific meta */}
      <meta property="article:author" content={author} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      
      {/* JSON-LD for Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": props.title,
            "description": props.description,
            "author": {
              "@type": "Organization",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": "AegisMind Network",
              "logo": "https://aegismind.network/logo.png"
            },
            "datePublished": publishedTime,
            "dateModified": modifiedTime || publishedTime,
            "mainEntityOfPage": canonical,
            "keywords": tags.join(', ')
          })
        }}
      />
    </Head>
  )
}

// 产品页面SEO组件
interface ProductSEOProps extends SEOProps {
  price?: string
  availability?: string
  category?: string
}

export function ProductSEO({
  price,
  availability = "InStock",
  category = "Software",
  ...props
}: ProductSEOProps) {
  const pathname = usePathname()
  const canonical = `https://aegismind.network${pathname}`

  return (
    <Head>
      <SEOEnhancements {...props} canonical={canonical} />
      
      {/* Product specific meta */}
      <meta property="product:price:amount" content={price} />
      <meta property="product:availability" content={availability} />
      <meta property="product:category" content={category} />
      
      {/* JSON-LD for Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": props.title,
            "description": props.description,
            "applicationCategory": category,
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": price || "0",
              "priceCurrency": "USD",
              "availability": `https://schema.org/${availability}`
            },
            "publisher": {
              "@type": "Organization",
              "name": "AegisMind Network"
            }
          })
        }}
      />
    </Head>
  )
}


