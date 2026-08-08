'use client'

import { useEffect, useCallback, useRef } from 'react'

export function ContentProtection({ children }: { children: React.ReactNode }) {
  const toastRef = useRef<HTMLDivElement | null>(null)
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const showToast = useCallback(() => {
    if (!toastRef.current) return
    toastRef.current.style.opacity = '1'
    toastRef.current.style.transform = 'translateX(-50%) translateY(0)'

    if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    toastTimerRef.current = setTimeout(() => {
      if (toastRef.current) {
        toastRef.current.style.opacity = '0'
        toastRef.current.style.transform = 'translateX(-50%) translateY(12px)'
      }
    }, 2000)
  }, [])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'PrintScreen') { e.preventDefault(); showToast(); return }
      if (e.key === 'F12') { e.preventDefault(); showToast(); return }
      if (e.ctrlKey || e.metaKey) {
        const key = e.key.toLowerCase()
        if (e.shiftKey && ['i', 'j', 'c'].includes(key)) { e.preventDefault(); showToast(); return }
        if (['c', 'u', 's', 'p', 'a'].includes(key)) { e.preventDefault(); showToast(); return }
      }
    }
    function handleContextMenu(e: MouseEvent) { e.preventDefault(); showToast() }
    function handleCopy(e: ClipboardEvent) { e.preventDefault(); showToast() }
    function handleDragStart(e: DragEvent) { e.preventDefault() }
    function handleSelectStart(e: Event) {
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) return
      e.preventDefault()
    }

    document.addEventListener('keydown', handleKeyDown, { capture: true })
    document.addEventListener('contextmenu', handleContextMenu, { capture: true })
    document.addEventListener('copy', handleCopy, { capture: true })
    document.addEventListener('dragstart', handleDragStart, { capture: true })
    document.addEventListener('selectstart', handleSelectStart)

    return () => {
      document.removeEventListener('keydown', handleKeyDown, { capture: true })
      document.removeEventListener('contextmenu', handleContextMenu, { capture: true })
      document.removeEventListener('copy', handleCopy, { capture: true })
      document.removeEventListener('dragstart', handleDragStart, { capture: true })
      document.removeEventListener('selectstart', handleSelectStart)
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    }
  }, [showToast])

  return (
    <div className="exam-protected-content">
      {children}
      <div
        ref={toastRef}
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%) translateY(12px)',
          background: '#0A0A0A',
          color: '#fff',
          padding: '12px 24px',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 600,
          opacity: 0,
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          zIndex: 9999,
          pointerEvents: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}
      >
        Content is protected
      </div>
    </div>
  )
}
