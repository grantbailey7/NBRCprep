'use client'

import { useEffect, useRef, useCallback } from 'react'

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
    }
    onTurnstileLoad?: () => void
  }
}

interface TurnstileProps {
  onToken: (token: string) => void
}

export function Turnstile({ onToken }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const scriptLoadedRef = useRef(false)

  const renderWidget = useCallback(() => {
    if (!containerRef.current || !window.turnstile) return
    if (widgetIdRef.current) return

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
    if (!siteKey) return

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      callback: (token: string) => onToken(token),
      theme: 'light',
      size: 'flexible',
    })
  }, [onToken])

  useEffect(() => {
    if (scriptLoadedRef.current) {
      renderWidget()
      return
    }

    if (document.querySelector('script[src*="turnstile"]')) {
      scriptLoadedRef.current = true
      if (window.turnstile) renderWidget()
      else window.onTurnstileLoad = renderWidget
      return
    }

    window.onTurnstileLoad = () => {
      scriptLoadedRef.current = true
      renderWidget()
    }

    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad'
    script.async = true
    document.head.appendChild(script)

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [renderWidget])

  return <div ref={containerRef} className="mt-2" />
}
