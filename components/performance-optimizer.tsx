"use client"

import { useEffect } from 'react'

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/fhe-encryption-hero.png',
        '/ai-collaboration-sphere.png',
        '/zero-trust-concept.png',
        '/quantum-resistance-battle.png'
      ]

      criticalImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })
    }

    // Optimize images with intersection observer
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]')
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement
              img.src = img.dataset.src!
              img.classList.remove('lazy')
              observer.unobserve(img)
            }
          })
        })

        images.forEach(img => imageObserver.observe(img))
      }
    }

    // Reduce layout shifts
    const reduceLayoutShifts = () => {
      // Add aspect ratio containers for images
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        if (!img.style.aspectRatio && img.width && img.height) {
          img.style.aspectRatio = `${img.width} / ${img.height}`
        }
      })
    }

    // Optimize animations
    const optimizeAnimations = () => {
      // Respect user's motion preferences
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
      
      if (prefersReducedMotion.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms')
        document.documentElement.style.setProperty('--transition-duration', '0.01ms')
      }
    }

    // Defer non-critical JavaScript
    const deferNonCriticalJS = () => {
      // Defer analytics and other non-critical scripts
      const scripts = document.querySelectorAll('script[data-defer]')
      scripts.forEach(script => {
        const newScript = document.createElement('script')
        newScript.src = script.getAttribute('src') || ''
        newScript.defer = true
        document.head.appendChild(newScript)
      })
    }

    // Initialize optimizations
    preloadCriticalResources()
    optimizeImages()
    reduceLayoutShifts()
    optimizeAnimations()
    deferNonCriticalJS()

    // Cleanup function
    return () => {
      // Remove preload links after they're no longer needed
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="image"]')
      setTimeout(() => {
        preloadLinks.forEach(link => link.remove())
      }, 5000)
    }
  }, [])

  return null // This component doesn't render anything
}

