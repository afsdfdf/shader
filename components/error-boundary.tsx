"use client"

import React from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: Error; reset: () => void }>
}

class ErrorBoundaryClass extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error, errorInfo })
    
    // 记录错误到控制台
    console.error('Error caught by boundary:', error, errorInfo)
    
    // 这里可以发送错误报告到监控服务
    if (typeof window !== 'undefined') {
      // 只在客户端执行
      try {
        // 示例：发送错误报告
        // analytics.track('error', {
        //   error: error.message,
        //   stack: error.stack,
        //   componentStack: errorInfo.componentStack
        // })
      } catch (reportingError) {
        console.error('Failed to report error:', reportingError)
      }
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }

  render() {
    if (this.state.hasError) {
      // 如果提供了自定义fallback组件，使用它
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return <FallbackComponent error={this.state.error!} reset={this.handleReset} />
      }

      // 默认错误UI
      return <DefaultErrorFallback error={this.state.error!} reset={this.handleReset} />
    }

    return this.props.children
  }
}

// 默认错误回退组件
function DefaultErrorFallback({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4" role="alert">
      <div className="text-center max-w-md mx-auto">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-400" aria-hidden="true" />
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-3">
          Oops! Something went wrong
        </h1>
        
        <p className="text-gray-400 mb-6 leading-relaxed">
          We're sorry for the inconvenience. An unexpected error occurred while loading this page.
        </p>
        
        {/* 错误详情 (仅在开发环境显示) */}
        {process.env.NODE_ENV === 'development' && error && (
          <details className="mb-6 text-left">
            <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-400 mb-2">
              Error Details (Development)
            </summary>
            <div className="bg-gray-900 p-3 rounded text-xs text-red-400 font-mono overflow-auto max-h-32">
              <div className="font-semibold mb-1">{error.name}: {error.message}</div>
              {error.stack && (
                <pre className="whitespace-pre-wrap text-gray-500">
                  {error.stack.split('\n').slice(0, 5).join('\n')}
                </pre>
              )}
            </div>
          </details>
        )}
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            onClick={reset}
            className="bg-purple-600 hover:bg-purple-700 min-h-[44px]"
            aria-label="Try again to reload the page"
          >
            <RefreshCw className="w-4 h-4 mr-2" aria-hidden="true" />
            Try Again
          </Button>
          
          <Link href="/">
            <Button 
              variant="outline" 
              className="border-gray-700 hover:border-purple-500 min-h-[44px] w-full"
              aria-label="Go back to homepage"
            >
              <Home className="w-4 h-4 mr-2" aria-hidden="true" />
              Go Home
            </Button>
          </Link>
        </div>
        
        <p className="text-xs text-gray-500 mt-6">
          If this problem persists, please contact our support team.
        </p>
      </div>
    </div>
  )
}

// 页面级错误边界
export function PageErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundaryClass fallback={DefaultErrorFallback}>
      {children}
    </ErrorBoundaryClass>
  )
}

// 组件级错误边界
export function ComponentErrorBoundary({ 
  children, 
  fallback 
}: { 
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: Error; reset: () => void }>
}) {
  return (
    <ErrorBoundaryClass fallback={fallback}>
      {children}
    </ErrorBoundaryClass>
  )
}

// 简单的错误回退组件
export function SimpleErrorFallback({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 my-4" role="alert">
      <div className="flex items-center mb-2">
        <AlertTriangle className="w-5 h-5 text-red-400 mr-2" aria-hidden="true" />
        <h3 className="text-red-400 font-semibold">Something went wrong</h3>
      </div>
      <p className="text-gray-400 text-sm mb-3">
        This component failed to load properly.
      </p>
      <Button 
        size="sm" 
        onClick={reset}
        className="bg-red-600 hover:bg-red-700 text-white"
        aria-label="Retry loading this component"
      >
        <RefreshCw className="w-3 h-3 mr-1" aria-hidden="true" />
        Retry
      </Button>
    </div>
  )
}

// 默认导出
export default ErrorBoundaryClass

