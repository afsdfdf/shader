"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/components/ui/use-mobile'

// 移动端优化的卡片组件
interface MobileOptimizedCardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function MobileOptimizedCard({ 
  children, 
  className = '',
  onClick 
}: MobileOptimizedCardProps) {
  const isMobile = useIsMobile()
  
  const baseClasses = "bg-black/40 border-gray-800 backdrop-blur-sm hover:bg-black/60 transition-all duration-300"
  const mobileClasses = isMobile 
    ? "touch-manipulation min-h-[120px] p-4" 
    : "p-6"
  
  return (
    <Card 
      className={`${baseClasses} ${mobileClasses} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </Card>
  )
}

// 移动端优化的按钮组件
interface MobileOptimizedButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  disabled?: boolean
  ariaLabel?: string
}

export function MobileOptimizedButton({
  children,
  onClick,
  variant = "default",
  size = "md",
  className = '',
  disabled = false,
  ariaLabel
}: MobileOptimizedButtonProps) {
  const isMobile = useIsMobile()
  
  // 移动端确保最小触摸目标尺寸
  const mobileClasses = isMobile 
    ? "min-h-[44px] min-w-[44px] px-6 py-3 text-base" 
    : ""
  
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${mobileClasses} ${className} touch-manipulation`}
    >
      {children}
    </Button>
  )
}

// 移动端导航菜单组件
interface MobileNavigationProps {
  isOpen: boolean
  onClose: () => void
  items: Array<{
    name: string
    href: string
    icon?: React.ReactNode
  }>
}

export function MobileNavigation({ isOpen, onClose, items }: MobileNavigationProps) {
  const isMobile = useIsMobile()
  
  if (!isMobile || !isOpen) return null
  
  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* 背景遮罩 */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* 菜单内容 */}
      <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-lg border-l border-gray-800">
        <div className="flex flex-col h-full">
          {/* 头部 */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <h2 className="text-lg font-semibold text-white">Navigation</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/10 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close navigation menu"
            >
              <span className="text-white text-xl">×</span>
            </button>
          </div>
          
          {/* 导航项 */}
          <nav className="flex-1 p-6">
            <div className="space-y-2">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 p-4 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors min-h-[44px]"
                  onClick={onClose}
                >
                  {item.icon && (
                    <span className="w-5 h-5 flex-shrink-0">
                      {item.icon}
                    </span>
                  )}
                  <span className="text-base font-medium">{item.name}</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

// 移动端抽屉组件
interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function MobileDrawer({ 
  isOpen, 
  onClose, 
  title, 
  children 
}: MobileDrawerProps) {
  const isMobile = useIsMobile()
  
  if (!isMobile) return null
  
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      {/* 背景遮罩 */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* 抽屉内容 */}
      <div className={`absolute bottom-0 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-gray-800 rounded-t-xl transform transition-transform duration-300 ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}>
        {/* 拖拽指示器 */}
        <div className="flex justify-center py-3">
          <div className="w-12 h-1 bg-gray-600 rounded-full" />
        </div>
        
        {/* 标题 */}
        <div className="px-6 pb-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        
        {/* 内容 */}
        <div className="px-6 pb-6 max-h-[70vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}

// 移动端手势支持Hook
export function useSwipeGestures(
  onSwipeLeft?: () => void,
  onSwipeRight?: () => void,
  threshold: number = 50
) {
  const [touchStart, setTouchStart] = React.useState<number | null>(null)
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null)
  
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }
  
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > threshold
    const isRightSwipe = distance < -threshold
    
    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft()
    }
    if (isRightSwipe && onSwipeRight) {
      onSwipeRight()
    }
  }
  
  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  }
}

// 移动端图片轮播组件
interface MobileImageCarouselProps {
  images: Array<{
    src: string
    alt: string
  }>
  className?: string
}

export function MobileImageCarousel({ 
  images, 
  className = '' 
}: MobileImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const isMobile = useIsMobile()
  
  const swipeHandlers = useSwipeGestures(
    () => setCurrentIndex(prev => Math.min(prev + 1, images.length - 1)),
    () => setCurrentIndex(prev => Math.max(prev - 1, 0))
  )
  
  if (!isMobile) {
    // 桌面端显示第一张图片
    return (
      <div className={`relative overflow-hidden rounded-lg ${className}`}>
        <img
          src={images[0]?.src}
          alt={images[0]?.alt}
          className="w-full h-full object-cover"
        />
      </div>
    )
  }
  
  return (
    <div 
      className={`relative overflow-hidden rounded-lg ${className}`}
      {...swipeHandlers}
    >
      <div 
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
      
      {/* 指示器 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

