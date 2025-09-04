"use client"

import React, { createContext, useContext, useState, useCallback } from 'react'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'

// Toast类型定义
export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'loading'

export interface Toast {
  id: string
  type: ToastType
  title: string
  description?: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

interface ToastContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => string
  removeToast: (id: string) => void
  clearToasts: () => void
}

// Toast Context
const ToastContext = createContext<ToastContextType | undefined>(undefined)

// Toast Provider
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(2)
    const newToast: Toast = {
      ...toast,
      id,
      duration: toast.duration || 5000
    }

    setToasts(prev => [...prev, newToast])

    // 自动移除
    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, newToast.duration)
    }

    return id
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  const clearToasts = useCallback(() => {
    setToasts([])
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, clearToasts }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}

// Toast Hook
export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

// Toast组件
function ToastComponent({ toast, onRemove }: { toast: Toast; onRemove: () => void }) {
  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-400" />
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />
      case 'info':
        return <Info className="w-5 h-5 text-blue-400" />
      case 'loading':
        return (
          <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
        )
      default:
        return <Info className="w-5 h-5 text-gray-400" />
    }
  }

  const getBackgroundColor = () => {
    switch (toast.type) {
      case 'success':
        return 'bg-green-500/10 border-green-500/30'
      case 'error':
        return 'bg-red-500/10 border-red-500/30'
      case 'warning':
        return 'bg-yellow-500/10 border-yellow-500/30'
      case 'info':
        return 'bg-blue-500/10 border-blue-500/30'
      case 'loading':
        return 'bg-purple-500/10 border-purple-500/30'
      default:
        return 'bg-gray-500/10 border-gray-500/30'
    }
  }

  return (
    <div
      className={`relative flex items-start space-x-3 p-4 rounded-lg border backdrop-blur-sm ${getBackgroundColor()} animate-in slide-in-from-right duration-300`}
      role="alert"
      aria-live={toast.type === 'error' ? 'assertive' : 'polite'}
    >
      <div className="flex-shrink-0 mt-0.5">
        {getIcon()}
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-white">
          {toast.title}
        </h4>
        {toast.description && (
          <p className="text-sm text-gray-300 mt-1 leading-relaxed">
            {toast.description}
          </p>
        )}
        
        {toast.action && (
          <button
            onClick={toast.action.onClick}
            className="text-sm text-purple-400 hover:text-purple-300 font-medium mt-2 focus:outline-none focus:underline"
          >
            {toast.action.label}
          </button>
        )}
      </div>
      
      <button
        onClick={onRemove}
        className="flex-shrink-0 text-gray-400 hover:text-white transition-colors p-1 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}

// Toast容器
function ToastContainer() {
  const { toasts, removeToast } = useToast()

  if (toasts.length === 0) return null

  return (
    <div 
      className="fixed bottom-4 right-4 z-50 space-y-3 max-w-sm w-full"
      aria-label="Notifications"
      role="region"
    >
      {toasts.map(toast => (
        <ToastComponent
          key={toast.id}
          toast={toast}
          onRemove={() => removeToast(toast.id)}
        />
      ))}
    </div>
  )
}

// 便捷的Toast函数
export const toast = {
  success: (title: string, description?: string, options?: Partial<Toast>) => {
    const { addToast } = useToast()
    return addToast({
      type: 'success',
      title,
      description,
      ...options
    })
  },

  error: (title: string, description?: string, options?: Partial<Toast>) => {
    const { addToast } = useToast()
    return addToast({
      type: 'error',
      title,
      description,
      duration: 0, // 错误消息不自动消失
      ...options
    })
  },

  warning: (title: string, description?: string, options?: Partial<Toast>) => {
    const { addToast } = useToast()
    return addToast({
      type: 'warning',
      title,
      description,
      ...options
    })
  },

  info: (title: string, description?: string, options?: Partial<Toast>) => {
    const { addToast } = useToast()
    return addToast({
      type: 'info',
      title,
      description,
      ...options
    })
  },

  loading: (title: string, description?: string) => {
    const { addToast } = useToast()
    return addToast({
      type: 'loading',
      title,
      description,
      duration: 0 // 加载消息不自动消失
    })
  },

  custom: (toast: Omit<Toast, 'id'>) => {
    const { addToast } = useToast()
    return addToast(toast)
  }
}

// Hook版本的toast函数
export function useToastActions() {
  const { addToast } = useToast()

  return {
    success: (title: string, description?: string, options?: Partial<Toast>) =>
      addToast({ type: 'success', title, description, ...options }),
    
    error: (title: string, description?: string, options?: Partial<Toast>) =>
      addToast({ type: 'error', title, description, duration: 0, ...options }),
    
    warning: (title: string, description?: string, options?: Partial<Toast>) =>
      addToast({ type: 'warning', title, description, ...options }),
    
    info: (title: string, description?: string, options?: Partial<Toast>) =>
      addToast({ type: 'info', title, description, ...options }),
    
    loading: (title: string, description?: string) =>
      addToast({ type: 'loading', title, description, duration: 0 }),
    
    custom: (toast: Omit<Toast, 'id'>) =>
      addToast(toast)
  }
}

