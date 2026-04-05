'use client'

import React, { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Lenis for luxurious, slow smooth scrolling
    const lenis = new Lenis({
      lerp: 0.05, // Lower lerp means much slower, heavier, smoother scroll momentum
      wheelMultiplier: 0.8, // Slows down the wheel step speed slightly
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
