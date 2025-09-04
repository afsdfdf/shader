"use client"

import React from 'react'
import { LoadingAnimation } from './advanced-animations'

// 页面骨架屏
export function PageSkeleton() {
  return (
    <div className="animate-pulse space-y-8" role="status" aria-label="Loading page content">
      {/* Header skeleton */}
      <div className="space-y-4">
        <div className="h-8 bg-gray-800 rounded w-3/4 mx-auto"></div>
        <div className="h-4 bg-gray-800 rounded w-full mx-auto"></div>
        <div className="h-4 bg-gray-800 rounded w-5/6 mx-auto"></div>
      </div>
      
      {/* Content skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-3">
            <div className="bg-gray-800 rounded-lg h-48"></div>
            <div className="h-4 bg-gray-800 rounded w-3/4"></div>
            <div className="h-3 bg-gray-800 rounded w-1/2"></div>
          </div>
        ))}
      </div>
      
      <span className="sr-only">Loading content...</span>
    </div>
  )
}

// 卡片骨架屏
export function CardSkeleton({ count = 1 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(count)].map((_, i) => (
        <div 
          key={i} 
          className="animate-pulse bg-black/40 border border-gray-800 rounded-lg p-6"
          role="status"
          aria-label={`Loading card ${i + 1}`}
        >
          <div className="w-12 h-12 bg-gray-700 rounded-lg mb-4"></div>
          <div className="space-y-2">
            <div className="h-6 bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-2/3"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

// 列表骨架屏
export function ListSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="space-y-4" role="status" aria-label="Loading list content">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="animate-pulse flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex-shrink-0"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            <div className="h-3 bg-gray-700 rounded w-1/2"></div>
          </div>
          <div className="w-6 h-6 bg-gray-700 rounded"></div>
        </div>
      ))}
    </div>
  )
}

// 表格骨架屏
export function TableSkeleton({ 
  rows = 5, 
  columns = 4 
}: { 
  rows?: number
  columns?: number 
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-800" role="status" aria-label="Loading table content">
      {/* Table header */}
      <div className="animate-pulse bg-gray-800/50 p-4">
        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
          {[...Array(columns)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-700 rounded"></div>
          ))}
        </div>
      </div>
      
      {/* Table rows */}
      <div className="divide-y divide-gray-800">
        {[...Array(rows)].map((_, rowIndex) => (
          <div key={rowIndex} className="animate-pulse p-4">
            <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
              {[...Array(columns)].map((_, colIndex) => (
                <div key={colIndex} className="h-3 bg-gray-800 rounded"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// 图片加载骨架屏
interface ImageSkeletonProps {
  aspectRatio?: string
  className?: string
}

export function ImageSkeleton({ 
  aspectRatio = '16/9',
  className = '' 
}: ImageSkeletonProps) {
  return (
    <div 
      className={`animate-pulse bg-gray-800 rounded-lg ${className}`}
      style={{ aspectRatio }}
      role="status"
      aria-label="Loading image"
    >
      <div className="flex items-center justify-center h-full">
        <div className="text-gray-600">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

// 文本骨架屏
interface TextSkeletonProps {
  lines?: number
  className?: string
}

export function TextSkeleton({ lines = 3, className = '' }: TextSkeletonProps) {
  return (
    <div className={`animate-pulse space-y-2 ${className}`} role="status" aria-label="Loading text content">
      {[...Array(lines)].map((_, i) => (
        <div 
          key={i} 
          className={`h-4 bg-gray-800 rounded ${
            i === lines - 1 ? 'w-2/3' : 'w-full'
          }`}
        />
      ))}
    </div>
  )
}

// 按钮加载状态
interface LoadingButtonProps {
  isLoading?: boolean
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  loadingText?: string
}

export function LoadingButton({ 
  isLoading = false,
  children,
  onClick,
  className = '',
  disabled = false,
  loadingText = 'Loading...'
}: LoadingButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`relative flex items-center justify-center transition-all duration-200 ${
        isLoading ? 'opacity-80 cursor-wait' : ''
      } ${className}`}
      aria-busy={isLoading}
      aria-label={isLoading ? loadingText : undefined}
    >
      {isLoading && (
        <LoadingAnimation 
          size="sm" 
          className="absolute left-4"
        />
      )}
      
      <span className={`transition-opacity duration-200 ${
        isLoading ? 'opacity-0 ml-6' : 'opacity-100'
      }`}>
        {children}
      </span>
      
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center text-sm">
          {loadingText}
        </span>
      )}
    </button>
  )
}

// 全屏加载遮罩
interface LoadingOverlayProps {
  isVisible: boolean
  message?: string
  className?: string
}

export function LoadingOverlay({ 
  isVisible, 
  message = 'Loading...',
  className = '' 
}: LoadingOverlayProps) {
  if (!isVisible) return null

  return (
    <div 
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 ${className}`}
      role="status"
      aria-live="polite"
      aria-label={message}
    >
      <div className="bg-black/80 border border-gray-700 rounded-lg p-8 text-center backdrop-blur-lg">
        <LoadingAnimation size="lg" className="mx-auto mb-4" />
        <p className="text-white font-medium">{message}</p>
        <p className="text-gray-400 text-sm mt-2">Please wait...</p>
      </div>
    </div>
  )
}

// 进度条组件
interface ProgressBarProps {
  value: number
  max?: number
  className?: string
  showLabel?: boolean
  color?: string
}

export function ProgressBar({ 
  value, 
  max = 100, 
  className = '',
  showLabel = false,
  color = 'purple'
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100)

  return (
    <div className={className} role="progressbar" aria-valuenow={value} aria-valuemax={max}>
      <div className="flex justify-between items-center mb-2">
        {showLabel && (
          <span className="text-sm text-gray-300">
            {percentage.toFixed(0)}%
          </span>
        )}
      </div>
      
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r from-${color}-500 to-${color}-600 rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

