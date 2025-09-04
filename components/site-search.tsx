"use client"

import { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import { Search, X, ArrowRight, FileText, Zap, Users, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

// 搜索内容索引
const searchIndex = [
  // 技术相关
  { 
    title: 'Fully Homomorphic Encryption (FHE)', 
    url: '/technology#fhe', 
    type: 'technology',
    description: 'Fully Homomorphic Encryption technology, the holy grail of cryptography',
    keywords: ['FHE', 'encryption', 'homomorphic', 'cryptography', 'privacy computing']
  },
  { 
    title: 'HTTPZ Zero-Trust Protocol', 
    url: '/technology#httpz', 
    type: 'technology',
    description: 'Zero-trust network protocol',
    keywords: ['HTTPZ', 'zero trust', 'protocol', 'end-to-end encryption']
  },
  { 
    title: 'Privacy Consensus Mechanism', 
    url: '/technology#consensus', 
    type: 'technology',
    description: 'Privacy consensus mechanism',
    keywords: ['consensus', 'privacy voting', 'PoS', 'blockchain']
  },
  
  // 产品相关
  { 
    title: 'AegisChain Mainnet', 
    url: '/products#aegischain', 
    type: 'product',
    description: 'FHE privacy blockchain mainnet',
    keywords: ['mainnet', 'blockchain', 'AegisChain', 'privacy']
  },
  { 
    title: 'AegisSphere Platform', 
    url: '/products#aegissphere', 
    type: 'product',
    description: 'AI agent collaboration platform',
    keywords: ['agent', 'AI', 'Agent', 'collaboration platform']
  },
  { 
    title: 'FHE Bridge', 
    url: '/products#bridge', 
    type: 'product',
    description: 'Privacy cross-chain bridge',
    keywords: ['cross-chain', 'Bridge', 'bridging', 'interoperability']
  },
  
  // 应用场景
  { 
    title: 'Healthcare Privacy Computing', 
    url: '/use-cases#healthcare', 
    type: 'use-case',
    description: 'Healthcare privacy computing',
    keywords: ['healthcare', 'medical', 'privacy protection', 'data analysis']
  },
  { 
    title: 'Financial Risk Control', 
    url: '/use-cases#finance', 
    type: 'use-case',
    description: 'Financial risk control collaboration',
    keywords: ['finance', 'risk control', 'banking', 'insurance']
  },
  { 
    title: 'Web3 Social Networks', 
    url: '/use-cases#web3-social', 
    type: 'use-case',
    description: 'Web3 social networks',
    keywords: ['social', 'Web3', 'decentralized', 'privacy social']
  },
  { 
    title: 'IoT Privacy Computing', 
    url: '/use-cases#iot', 
    type: 'use-case',
    description: 'IoT privacy computing',
    keywords: ['IoT', 'Internet of Things', 'smart city', 'sensors']
  },
  
  // 其他页面
  { 
    title: 'AMN Token Economics', 
    url: '/tokenomics', 
    type: 'tokenomics',
    description: 'AMN代币经济模型',
    keywords: ['代币', 'Token', '经济模型', '质押', '治理']
  },
  { 
    title: 'Development Roadmap', 
    url: '/roadmap', 
    type: 'roadmap',
    description: '项目发展路线图',
    keywords: ['路线图', '发展', '里程碑', '规划']
  },
  { 
    title: 'Team Members', 
    url: '/team', 
    type: 'team',
    description: '团队成员介绍',
    keywords: ['团队', '成员', '创始人', '顾问']
  },
  { 
    title: 'Technical Whitepaper', 
    url: '/whitepaper', 
    type: 'documentation',
    description: '技术白皮书',
    keywords: ['白皮书', '技术文档', '架构', '原理']
  },
  { 
    title: 'Frequently Asked Questions', 
    url: '/faq', 
    type: 'support',
    description: '常见问题解答',
    keywords: ['FAQ', '问题', '帮助', '支持']
  }
]

// 防抖函数
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// 获取类型图标
function getTypeIcon(type: string) {
  switch (type) {
    case 'technology':
      return <Zap className="w-4 h-4 text-purple-400" />
    case 'product':
      return <Building2 className="w-4 h-4 text-blue-400" />
    case 'use-case':
      return <Users className="w-4 h-4 text-green-400" />
    case 'documentation':
      return <FileText className="w-4 h-4 text-orange-400" />
    default:
      return <Search className="w-4 h-4 text-gray-400" />
  }
}

// 获取类型标签
function getTypeLabel(type: string) {
  const labels = {
    'technology': 'Technology',
    'product': 'Product',
    'use-case': 'Use Case',
    'tokenomics': 'Tokenomics',
    'roadmap': 'Roadmap',
    'team': 'Team',
    'documentation': 'Documentation',
    'support': 'Support'
  }
  return labels[type as keyof typeof labels] || type
}

interface SiteSearchProps {
  className?: string
}

export default function SiteSearch({ className = '' }: SiteSearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<typeof searchIndex>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  // 搜索函数
  const search = useCallback(
    debounce((searchQuery: string) => {
      if (searchQuery.length < 2) {
        setResults([])
        setSelectedIndex(-1)
        return
      }

      const filtered = searchIndex.filter(item => {
        const searchLower = searchQuery.toLowerCase()
        return (
          item.title.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower) ||
          item.keywords.some(keyword => keyword.toLowerCase().includes(searchLower))
        )
      })

      // 按相关性排序
      const sorted = filtered.sort((a, b) => {
        const aScore = calculateRelevance(a, searchQuery)
        const bScore = calculateRelevance(b, searchQuery)
        return bScore - aScore
      })

      setResults(sorted.slice(0, 8)) // 限制结果数量
      setSelectedIndex(-1)
    }, 300),
    []
  )

  // 计算相关性分数
  const calculateRelevance = (item: typeof searchIndex[0], query: string): number => {
    const queryLower = query.toLowerCase()
    let score = 0

    // 标题匹配权重最高
    if (item.title.toLowerCase().includes(queryLower)) {
      score += 10
    }

    // 关键词匹配
    item.keywords.forEach(keyword => {
      if (keyword.toLowerCase().includes(queryLower)) {
        score += 5
      }
    })

    // 描述匹配
    if (item.description.toLowerCase().includes(queryLower)) {
      score += 3
    }

    return score
  }

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || results.length === 0) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex(prev => 
            prev < results.length - 1 ? prev + 1 : 0
          )
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex(prev => 
            prev > 0 ? prev - 1 : results.length - 1
          )
          break
        case 'Enter':
          e.preventDefault()
          if (selectedIndex >= 0) {
            window.location.href = results[selectedIndex].url
          }
          break
        case 'Escape':
          e.preventDefault()
          setIsOpen(false)
          setQuery('')
          setResults([])
          inputRef.current?.blur()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex])

  // 点击外部关闭
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    search(value)
    setIsOpen(true)
  }

  const handleClear = () => {
    setQuery('')
    setResults([])
    setIsOpen(false)
    inputRef.current?.focus()
  }

  const handleResultClick = (url: string) => {
    setIsOpen(false)
    setQuery('')
    setResults([])
  }

  return (
    <div className={`relative ${className}`} ref={resultsRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search technology, products, use cases..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          className="w-full pl-10 pr-10 py-2 bg-black/40 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
          aria-label="Search website content"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          role="combobox"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 搜索结果 */}
      {isOpen && results.length > 0 && (
        <div 
          className="absolute top-full left-0 right-0 mt-2 bg-black/95 border border-gray-700 rounded-lg backdrop-blur-sm z-50 max-h-96 overflow-y-auto"
          role="listbox"
          aria-label="Search results"
        >
          {results.map((result, index) => (
            <Link
              key={index}
              href={result.url}
              className={`block px-4 py-3 hover:bg-white/10 border-b border-gray-700 last:border-b-0 transition-colors ${
                index === selectedIndex ? 'bg-white/10' : ''
              }`}
              onClick={() => handleResultClick(result.url)}
              role="option"
              aria-selected={index === selectedIndex}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  {getTypeIcon(result.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-white truncate">{result.title}</h4>
                    <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-sm text-gray-400 line-clamp-2 mt-1">
                    {result.description}
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                      {getTypeLabel(result.type)}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* 无结果提示 */}
      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 border border-gray-700 rounded-lg backdrop-blur-sm z-50 p-4">
          <div className="text-center text-gray-400">
            <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No relevant content found</p>
            <p className="text-xs mt-1">Try searching with different keywords</p>
          </div>
        </div>
      )}

      {/* 搜索提示 */}
      {isOpen && query.length < 2 && query.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 border border-gray-700 rounded-lg backdrop-blur-sm z-50 p-4">
          <div className="text-center text-gray-400">
            <p className="text-sm">Please enter at least 2 characters to start searching</p>
          </div>
        </div>
      )}
    </div>
  )
}
