'use client'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

const services = [
  { left: 'Inspiration', right: 'Visionary Concepts' },
  { left: 'Design', right: 'Custom | Professional' },
  { left: 'Engineering', right: 'Precision Excellence' },
  { left: 'Fabrication', right: 'In-house Crafted' },
  { left: 'Construction', right: 'Seamless Mastery' },
  { left: 'Finishing', right: 'Luxury Detailing' },
  { left: 'Experience', right: 'Elevated | Tailored' },
  { left: 'Legacy', right: 'Enduring | Trusted' },
]

export default function HeroSection() {
  // Trigger hero animations after the loader has exited (~2.7s)
  const [animated, setAnimated] = useState(false)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let currentY = 0;
    let targetY = 0;
    let ticking = false;
    let reqId: number;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateParallax = () => {
      // 0.04 creates an ultra-smooth, slow 'liquid' settling effect
      currentY = lerp(currentY, targetY, 0.04); 
      
      if (bgRef.current) {
        // 0.12 gives an extremely slow, premium parallax drift
        bgRef.current.style.transform = `translate3d(0, ${currentY * 0.12}px, 0)`;
      }

      if (Math.abs(targetY - currentY) > 0.5) {
        reqId = window.requestAnimationFrame(updateParallax);
      } else {
        ticking = false;
      }
    };

    const handleScroll = () => {
      targetY = window.scrollY;
      if (!ticking) {
        ticking = true;
        reqId = window.requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.cancelAnimationFrame(reqId);
    };
  }, [])

  return (
    <section className={`sticky top-0 h-screen w-full overflow-hidden z-0 ${animated ? 'hero-animated' : ''}`}>
      {/* Background image - padded to allow reverse parallax translate down */}
      <div
        ref={bgRef}
        className="absolute inset-x-0 bg-cover bg-center bg-no-repeat"
        style={{
          top: '-15%',
          height: '130%', 
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2400')",
          willChange: 'transform',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-12 pb-2 md:pb-4">
        <div className="max-w-[1440px] mx-auto w-full">

          {/* 1. Content Row: Headline/Subtext (Left) and Service Lists (Right) */}
          <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-28">

            {/* Left side: Heading and Subtext */}
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-7xl text-white leading-[1.1] mb-8 font-heading">
                {/* Line 1 — clip-reveal slide-up */}
                <span className="reveal-clip block">
                  <span className="reveal-inner font-body font-medium tracking-tight not-italic line-1">
                    Productivity Relies on
                  </span>
                </span>
                {/* Line 2 */}
                <span className="reveal-clip block">
                  <span className="reveal-inner italic line-2">
                    Environment
                  </span>
                </span>
              </h1>

              {/* Subtext — line 3 */}
              <div className="reveal-clip">
                <p className="reveal-inner text-white/80 text-sm md:text-lg leading-relaxed max-w-2xl font-light line-3">
                  Interraform designs and builds modern workspaces, offices, and commercial
                  interiors that improve productivity, efficiency, and business environment through
                  strategic design and complete project execution.
                </p>
              </div>
            </div>

            {/* Right side: The Two Service Lists — slides in from right */}
            <div className="hidden md:flex items-start gap-12 text-right slide-right">
              <div className="flex flex-col items-end gap-1.5">
                {services.map((s) => (
                  <p key={s.left} className="text-white/90 text-[11px] tracking-widest uppercase font-light leading-snug">
                    {s.left}
                  </p>
                ))}
              </div>
              <div className="flex flex-col items-end gap-1.5">
                {services.map((s) => (
                  <p key={s.right} className="text-white/40 text-[11px] tracking-widest uppercase font-light leading-snug">
                    {s.right}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Buttons & Scroll Row */}
          <div className="hero-buttons flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-8 text-center w-full">
            <Link
              href="/contact"
              className="inline-flex items-center border border-white/70 rounded-full text-white text-[10px] tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-white hover:text-black transition-all duration-300"
            >
              Book Free Consultation
            </Link>

            {/* Scroll indicator */}
            <div className="flex flex-col items-center gap-1 text-white/60 order-first md:order-none mb-4 md:mb-0">
              <span className="text-[9px] tracking-[0.25em] uppercase">Scroll</span>
              <ChevronDown size={14} className="animate-bounce" />
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center border border-white/30 rounded-full text-white/70 text-[10px] tracking-[0.2em] uppercase px-8 py-3.5 hover:border-white hover:text-white transition-all duration-300"
            >
              View Our Projects
            </Link>
          </div>

          {/* 4. Horizontal Line — grows from left to right */}
          <div className="overflow-hidden mb-6">
            <div className="grow-line h-[1.5px] bg-white/50" style={{ width: '100%' }} />
          </div>

          {/* 5. Bottom White Dot */}
          <div className="flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white block" />
          </div>

        </div>
      </div>
    </section>
  )
}
