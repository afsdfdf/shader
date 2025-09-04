"use client"

import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ReactNode
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[]
  className?: string
}

// 路径映射配置
const pathMapping: Record<string, string> = {
  '': 'Home',
  'products': 'Products',
  'technology': 'Technology', 
  'use-cases': 'Use Cases',
  'tokenomics': 'Tokenomics',
  'roadmap': 'Roadmap',
  'team': 'Team',
  'whitepaper': 'Whitepaper',
  'faq': 'FAQ',
  'launch': 'Launch App'
}

// 自动生成面包屑
function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean)
  
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/', icon: <Home className="w-4 h-4" /> }
  ]

  let currentPath = ''
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const isLast = index === segments.length - 1
    
    breadcrumbs.push({
      label: pathMapping[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
      href: isLast ? undefined : currentPath
    })
  })

  return breadcrumbs
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  const pathname = usePathname()
  
  // 如果没有提供自定义items，自动生成
  const breadcrumbItems = items || generateBreadcrumbs(pathname)
  
  // 首页不显示面包屑
  if (pathname === '/' || breadcrumbItems.length <= 1) {
    return null
  }

  return (
    <nav 
      aria-label="Breadcrumb navigation" 
      className={`flex items-center space-x-2 text-sm mb-8 ${className}`}
      role="navigation"
    >
      <ol className="flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight 
                className="w-4 h-4 text-gray-500 mx-2" 
                aria-hidden="true"
              />
            )}
            
            {item.href ? (
              <Link
                href={item.href}
                className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors focus:text-purple-400 focus:outline-none focus:underline"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ) : (
              <span 
                className="flex items-center space-x-1 text-white font-medium"
                aria-current="page"
              >
                {item.icon}
                <span>{item.label}</span>
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// 带标题的面包屑组件
interface BreadcrumbWithTitleProps {
  title: string
  description?: string
  items?: BreadcrumbItem[]
  className?: string
}

export function BreadcrumbWithTitle({
  title,
  description,
  items,
  className = ''
}: BreadcrumbWithTitleProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <Breadcrumb items={items} />
      <div className="mt-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-gray-300 max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

// 结构化面包屑（用于复杂页面）
interface StructuredBreadcrumbProps {
  category: string
  subcategory?: string
  current: string
  className?: string
}

export function StructuredBreadcrumb({
  category,
  subcategory,
  current,
  className = ''
}: StructuredBreadcrumbProps) {
  const items: BreadcrumbItem[] = [
    { label: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
    { label: category, href: `/${category.toLowerCase().replace(' ', '-')}` }
  ]

  if (subcategory) {
    items.push({
      label: subcategory,
      href: `/${category.toLowerCase().replace(' ', '-')}#${subcategory.toLowerCase().replace(' ', '-')}`
    })
  }

  items.push({ label: current })

  return <Breadcrumb items={items} className={className} />
}

