'use client'
import { useEffect, useRef, useState } from 'react'

import { usePathname } from 'next/navigation'

export default function PageLoader() {
  const pathname = usePathname()
  const [exiting, setExiting] = useState(false)
  const [hidden, setHidden] = useState(false)

  const isFirstLoad = useRef(true)

  useEffect(() => {
    const pc = document.getElementById('page-content')

    // Check if this is a hard reload/direct visit (no flag yet in session)
    const isHardLoad = !sessionStorage.getItem('siteLoaded')

    if (isFirstLoad.current && isHardLoad) {
      // First hard load — show the full loader
      isFirstLoad.current = false
      sessionStorage.setItem('siteLoaded', '1')

      setExiting(false)
      setHidden(false)

      if (pc) pc.style.opacity = '0'
      setTimeout(() => { if (pc) pc.style.opacity = '1' }, 100)

      const exitTimer = setTimeout(() => setExiting(true), 1200)
      const hideTimer = setTimeout(() => setHidden(true), 2000)
      return () => { clearTimeout(exitTimer); clearTimeout(hideTimer) }
    } else {
      // Client-side navigation — skip loader entirely, just show content immediately
      setHidden(true)
      if (pc) pc.style.opacity = '1'
    }
  }, [pathname])

  if (hidden) return null

  return (
    <div
      className={exiting ? 'loader-exit' : ''}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: 'calc(100vh + 120px)',
        zIndex: 9999,
        willChange: 'transform',
      }}
    >
      {/* Solid black main panel */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '100vh',
        backgroundColor: '#000',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem',
      }}>
        <h1 style={{
          color: 'white',
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 500,
          letterSpacing: '-0.03em',
          fontFamily: 'Inter, sans-serif',
        }}>
          interra<span style={{ fontWeight: 700 }}>Form</span>
        </h1>
        <div style={{ width: '160px', height: '1px', backgroundColor: 'rgba(255,255,255,0.15)', overflow: 'hidden' }}>
          <div className="loader-bar" style={{ height: '100%', backgroundColor: 'rgba(255,255,255,0.8)' }} />
        </div>
      </div>

      {/* Concave wave tail — black, sits below viewport, creates curved exit */}
      <div style={{ position: 'absolute', top: '100vh', left: 0, right: 0, height: '120px', overflow: 'visible' }}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '120px', display: 'block', overflow: 'visible' }}
        >
          {/* Top = full width straight. Bottom = concave curve (center arches up). All solid black. */}
          <path d="M0,0 L1440,0 L1440,120 Q720,-60 0,120 Z" fill="#000000" />
        </svg>
      </div>
    </div>
  )
}
