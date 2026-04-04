'use client'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

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
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://www.serviceplusaquatics.com/images/Products/product2.webp')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-12 pb-2 md:pb-4">
        <div className="max-w-[1440px] mx-auto w-full">
          {/* 1. Content Row: Headline/Subtext (Left) and Service Lists (Right) */}
          <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-10">
            {/* Left side: Heading and Subtext */}
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-7xl text-white leading-[1.1] mb-8 font-heading">
                <span className="font-body font-medium tracking-tight not-italic">Productivity Relies on</span>
                <br />
                <span className="italic">Environment.</span>
              </h1>
              <p className="text-white/80 text-sm md:text-lg leading-relaxed max-w-2xl font-light">
                Interraform designs and builds modern workspaces, offices, and commercial 
                interiors that improve productivity, efficiency, and business environment through 
                strategic design and complete project execution.
              </p>
            </div>

            {/* Right side: The Two Service Lists */}
            <div className="hidden md:flex items-start gap-12 text-right">
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

          {/* 3. Buttons & Scroll Row (Now Above the line) */}
          <div className="flex flex-col items-center gap-12 mb-8 text-center">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center border border-white/70 rounded-full text-white text-[10px] tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-white hover:text-black transition-all duration-300"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center border border-white/30 rounded-full text-white/70 text-[10px] tracking-[0.2em] uppercase px-8 py-3.5 hover:border-white hover:text-white transition-all duration-300"
              >
                View Our Projects
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="flex flex-col items-center gap-1 text-white/60">
              <span className="text-[9px] tracking-[0.25em] uppercase">Scroll</span>
              <ChevronDown size={14} className="animate-bounce" />
            </div>
          </div>

          {/* 4. Horizontal Line (Positioned just above the dot) */}
          <div className="w-full h-[1.5px] bg-white/50 mb-6" />

          {/* 5. Bottom White Dot (Indicator) */}
          <div className="flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white block" />
          </div>
        </div>
      </div>
    </section>
  )
}
