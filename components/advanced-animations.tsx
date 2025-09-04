"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react'

// 动画配置
const animationConfig = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500
  },
  easing: {
    easeOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
}

// 页面过渡动画Hook
export function usePageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false)

  const startTransition = useCallback(() => {
    setIsTransitioning(true)
    setTimeout(() => setIsTransitioning(false), animationConfig.duration.normal)
  }, [])

  return { isTransitioning, startTransition }
}

// 滚动触发动画Hook
export function useScrollAnimation(threshold = 0.1, rootMargin = '0px') {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, isVisible }
}

// 页面过渡包装器
interface PageTransitionProps {
  children: React.ReactNode
  className?: string
}

export function PageTransition({ children, className = '' }: PageTransitionProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        isMounted 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  )
}

// 滚动动画组件
interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation()

  const getTransform = () => {
    if (isVisible) return 'translate-x-0 translate-y-0'
    
    switch (direction) {
      case 'up': return 'translate-y-8'
      case 'down': return '-translate-y-8'
      case 'left': return 'translate-x-8'
      case 'right': return '-translate-x-8'
      default: return 'translate-y-8'
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-x-0 translate-y-0' 
          : `opacity-0 ${getTransform()}`
      } ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: animationConfig.easing.easeOut
      }}
    >
      {children}
    </div>
  )
}

// 交错动画组件
interface StaggeredAnimationProps {
  children: React.ReactNode[]
  staggerDelay?: number
  className?: string
}

export function StaggeredAnimation({ 
  children, 
  staggerDelay = 100,
  className = '' 
}: StaggeredAnimationProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-600 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ 
            transitionDelay: `${index * staggerDelay}ms`,
            transitionTimingFunction: animationConfig.easing.easeOut
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

// 悬停动画组件
interface HoverAnimationProps {
  children: React.ReactNode
  scale?: number
  className?: string
}

export function HoverAnimation({ 
  children, 
  scale = 1.05,
  className = '' 
}: HoverAnimationProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`transition-transform duration-300 ease-out cursor-pointer ${className}`}
      style={{
        transform: isHovered ? `scale(${scale})` : 'scale(1)',
        transitionTimingFunction: animationConfig.easing.easeOut
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}

// 脉冲动画组件
interface PulseAnimationProps {
  children: React.ReactNode
  color?: string
  className?: string
}

export function PulseAnimation({ 
  children, 
  color = 'purple',
  className = '' 
}: PulseAnimationProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
      <div 
        className={`absolute inset-0 rounded-full bg-${color}-500 opacity-20 animate-ping`}
        aria-hidden="true"
      />
    </div>
  )
}

// 加载动画组件
interface LoadingAnimationProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}

export function LoadingAnimation({ 
  size = 'md', 
  color = 'purple',
  className = '' 
}: LoadingAnimationProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  return (
    <div 
      className={`${sizeClasses[size]} border-2 border-gray-600 border-t-${color}-500 rounded-full animate-spin ${className}`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

// 打字机效果组件
interface TypewriterProps {
  text: string
  speed?: number
  className?: string
  onComplete?: () => void
}

export function TypewriterEffect({ 
  text, 
  speed = 50, 
  className = '',
  onComplete 
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

// 数字计数动画
interface CountUpProps {
  end: number
  start?: number
  duration?: number
  className?: string
  suffix?: string
}

export function CountUp({ 
  end, 
  start = 0, 
  duration = 2000,
  className = '',
  suffix = ''
}: CountUpProps) {
  const [count, setCount] = useState(start)
  const { ref, isVisible } = useScrollAnimation()

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (end - start) + start)
      
      setCount(currentCount)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isVisible, end, start, duration])

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

// 视差滚动效果
interface ParallaxProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxScroll({ 
  children, 
  speed = 0.5,
  className = '' 
}: ParallaxProps) {
  const [offset, setOffset] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const parallax = scrolled * speed
      
      setOffset(parallax)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div
      ref={ref}
      className={`transform ${className}`}
      style={{
        transform: `translateY(${offset}px)`,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  )
}

// 弹性动画组件
interface BounceAnimationProps {
  children: React.ReactNode
  trigger?: boolean
  className?: string
}

export function BounceAnimation({ 
  children, 
  trigger = false,
  className = '' 
}: BounceAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (trigger) {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 600)
    }
  }, [trigger])

  return (
    <div
      className={`transition-transform duration-600 ${
        isAnimating ? 'animate-bounce' : ''
      } ${className}`}
      style={{
        transitionTimingFunction: animationConfig.easing.bounce
      }}
    >
      {children}
    </div>
  )
}

