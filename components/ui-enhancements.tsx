"use client"

import { useEffect } from 'react'

export default function UIEnhancements() {
  useEffect(() => {
    // Add smooth scrolling behavior
    const addSmoothScrolling = () => {
      document.documentElement.style.scrollBehavior = 'smooth'
      
      // Enhanced scroll behavior for anchor links
      const anchorLinks = document.querySelectorAll('a[href^="#"]')
      anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault()
          const target = document.querySelector(link.getAttribute('href')!)
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
            })
          }
        })
      })
    }

    // Add enhanced focus indicators for accessibility
    const enhanceFocusIndicators = () => {
      const style = document.createElement('style')
      style.textContent = `
        .focus-visible:focus {
          outline: 2px solid #8b5cf6;
          outline-offset: 2px;
          border-radius: 4px;
        }
        
        .focus-visible:focus:not(:focus-visible) {
          outline: none;
        }
        
        /* Enhanced button focus states */
        button:focus-visible,
        .btn:focus-visible {
          outline: 2px solid #8b5cf6;
          outline-offset: 2px;
          box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1);
        }
        
        /* Enhanced link focus states */
        a:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
          border-radius: 2px;
        }
      `
      document.head.appendChild(style)
    }

    // Add loading states and skeleton animations
    const addLoadingStates = () => {
      const style = document.createElement('style')
      style.textContent = `
        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }
        
        .skeleton {
          background: linear-gradient(90deg, #374151 25%, #4b5563 50%, #374151 75%);
          background-size: 200px 100%;
          animation: shimmer 1.5s infinite;
        }
        
        .loading-spinner {
          border: 2px solid #374151;
          border-top: 2px solid #8b5cf6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `
      document.head.appendChild(style)
    }

    // Add enhanced hover effects
    const addHoverEffects = () => {
      const style = document.createElement('style')
      style.textContent = `
        /* Enhanced card hover effects */
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        /* Enhanced button hover effects */
        .btn-enhanced {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .btn-enhanced::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s;
        }
        
        .btn-enhanced:hover::before {
          left: 100%;
        }
        
        /* Enhanced image hover effects */
        .image-hover {
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .image-hover:hover img {
          transform: scale(1.05);
        }
      `
      document.head.appendChild(style)
    }

    // Add scroll-triggered animations
    const addScrollAnimations = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            observer.unobserve(entry.target)
          }
        })
      }, observerOptions)

      // Observe elements with animation classes
      const animatedElements = document.querySelectorAll('.animate-on-scroll')
      animatedElements.forEach(el => observer.observe(el))

      // Add CSS for scroll animations
      const style = document.createElement('style')
      style.textContent = `
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Staggered animations */
        .animate-on-scroll:nth-child(1) { transition-delay: 0.1s; }
        .animate-on-scroll:nth-child(2) { transition-delay: 0.2s; }
        .animate-on-scroll:nth-child(3) { transition-delay: 0.3s; }
        .animate-on-scroll:nth-child(4) { transition-delay: 0.4s; }
      `
      document.head.appendChild(style)
    }

    // Add enhanced typography
    const enhanceTypography = () => {
      const style = document.createElement('style')
      style.textContent = `
        /* Enhanced text rendering */
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
        
        /* Enhanced heading styles */
        h1, h2, h3, h4, h5, h6 {
          font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
          letter-spacing: -0.025em;
        }
        
        /* Enhanced paragraph styles */
        p {
          font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
          hanging-punctuation: first last;
        }
        
        /* Enhanced code styles */
        code, pre {
          font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1, 'zero' 1;
        }
      `
      document.head.appendChild(style)
    }

    // Add dark mode enhancements
    const enhanceDarkMode = () => {
      const style = document.createElement('style')
      style.textContent = `
        /* Enhanced dark mode colors */
        :root {
          --bg-primary: #000000;
          --bg-secondary: #0a0a0a;
          --bg-tertiary: #1a1a1a;
          --text-primary: #ffffff;
          --text-secondary: #e5e7eb;
          --text-tertiary: #9ca3af;
          --border-primary: #374151;
          --border-secondary: #4b5563;
        }
        
        /* Enhanced glass morphism effects */
        .glass {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .glass-strong {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `
      document.head.appendChild(style)
    }

    // Initialize all enhancements
    addSmoothScrolling()
    enhanceFocusIndicators()
    addLoadingStates()
    addHoverEffects()
    addScrollAnimations()
    enhanceTypography()
    enhanceDarkMode()

    // Cleanup function
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return null // This component doesn't render anything
}

