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
      <div className="relative z-10 h-full flex flex-col justify-between px-8 md:px-12 py-28 md:py-32">
        {/* Main hero text - bottom left */}
        <div className="flex flex-col justify-end flex-1">
          <div className="max-w-xl">
            <h1 className="font-heading text-4xl md:text-6xl text-white leading-tight mb-4">
              Luxury in <em className="not-italic italic">Motion.</em>
              <br />
              Where Water <em className="not-italic italic">Inspires.</em>
            </h1>
            <p className="text-white/70 text-xs tracking-[0.15em] uppercase mt-4">
              EST. 1989
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex items-end justify-between mt-8">
          {/* Left dot indicator */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white block" />
          </div>

          {/* Center services list */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-24 md:bottom-28 text-center">
            <div className="flex flex-col items-center gap-0.5">
              {services.map((s) => (
                <p key={s.left} className="text-white/90 text-[11px] tracking-wide">
                  {s.left}
                </p>
              ))}
            </div>

            {/* Make a Connection button */}
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 border border-white/70 rounded-full text-white text-xs tracking-wider px-5 py-2.5 hover:bg-white hover:text-black transition-colors duration-300"
            >
              Make a Connection
              <ArrowRight size={14} />
            </Link>

            {/* Scroll indicator */}
            <div className="mt-8 flex flex-col items-center gap-1 text-white/60">
              <span className="text-[9px] tracking-[0.25em] uppercase">Scroll</span>
              <ChevronDown size={16} className="animate-bounce" />
            </div>
          </div>

          {/* Right keywords */}
          <div className="hidden md:flex flex-col items-end gap-0.5">
            {services.map((s) => (
              <p key={s.right} className="text-white/50 text-[10px] tracking-widest uppercase">
                {s.right}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
