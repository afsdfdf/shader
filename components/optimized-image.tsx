"use client"

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { ComponentErrorBoundary, SimpleErrorFallback } from './error-boundary'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  type?: 'hero' | 'card' | 'thumbnail' | 'product'
  fallbackSrc?: string
  loading?: 'lazy' | 'eager'
  quality?: number
}

// 图片配置
const imageConfig = {
  sizes: {
    hero: { width: 1920, height: 1080 },
    card: { width: 500, height: 375 },
    thumbnail: { width: 200, height: 150 },
    product: { width: 800, height: 600 }
  },
  quality: {
    hero: 85,
    card: 80,
    thumbnail: 75,
    product: 85
  }
}

function OptimizedImageComponent({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  type = 'card',
  fallbackSrc,
  loading = 'lazy',
  quality
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)
  const imgRef = useRef<HTMLImageElement>(null)

  // 使用配置的尺寸和质量
  const config = imageConfig.sizes[type]
  const imgWidth = width || config.width
  const imgHeight = height || config.height
  const imgQuality = quality || imageConfig.quality[type]

  // 响应式图片尺寸
  const sizes = type === 'hero' 
    ? '100vw'
    : type === 'card'
    ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    : type === 'thumbnail'
    ? '(max-width: 768px) 50vw, 25vw'
    : '(max-width: 768px) 100vw, 80vw'

  // 错误处理
  const handleError = () => {
    setHasError(true)
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
      setHasError(false)
    }
  }

  // 加载完成处理
  const handleLoad = () => {
    setIsLoaded(true)
  }

  // 懒加载交叉观察器
  useEffect(() => {
    if (loading === 'lazy' && !priority) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            observer.disconnect()
          }
        },
        { 
          threshold: 0.1,
          rootMargin: '50px' // 提前50px开始加载
        }
      )

      if (imgRef.current) {
        observer.observe(imgRef.current)
      }

      return () => observer.disconnect()
    }
  }, [loading, priority])

  // 错误状态
  if (hasError && !fallbackSrc) {
    return (
      <div 
        className={`bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center ${className}`}
        style={{ width: imgWidth, height: imgHeight }}
        role="img"
        aria-label={`Failed to load image: ${alt}`}
      >
        <div className="text-center p-4">
          <div className="w-8 h-8 bg-gray-600 rounded-full mx-auto mb-2 flex items-center justify-center">
            <span className="text-gray-400 text-sm">📷</span>
          </div>
          <p className="text-gray-500 text-xs">Image unavailable</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      {/* 加载占位符 */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg"
          aria-hidden="true"
        />
      )}
      
      {/* 实际图片 */}
      <Image
        src={currentSrc}
        alt={alt}
        width={imgWidth}
        height={imgHeight}
        quality={imgQuality}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } object-contain`}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Kic6LbqUBqyARrT78aS1ksYYmEbKGBDKRyD2I9iDqBdR7+8eXvWOvjWNmkuZZA7O7HLMx5JPcnvQB//Z"
      />
      
      {/* 加载指示器 */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}

// 导出包装了错误边界的组件
export default function OptimizedImage(props: OptimizedImageProps) {
  return (
    <ComponentErrorBoundary fallback={SimpleErrorFallback}>
      <OptimizedImageComponent {...props} />
    </ComponentErrorBoundary>
  )
}

// 预设组件
export function HeroImage(props: Omit<OptimizedImageProps, 'type'>) {
  return <OptimizedImage {...props} type="hero" priority />
}

export function CardImage(props: Omit<OptimizedImageProps, 'type'>) {
  return <OptimizedImage {...props} type="card" />
}

export function ThumbnailImage(props: Omit<OptimizedImageProps, 'type'>) {
  return <OptimizedImage {...props} type="thumbnail" />
}

export function ProductImage(props: Omit<OptimizedImageProps, 'type'>) {
  return <OptimizedImage {...props} type="product" />
}

