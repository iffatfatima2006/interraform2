'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'SERVICES', href: '/services' },
  { label: 'CONTACT', href: '/contact' },
]

interface NavbarProps {
  theme?: 'light' | 'dark'
}

export default function Navbar({ theme = 'dark' }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  // Small delay so CSS transitions can initialise before animating in
  const [menuAnimated, setMenuAnimated] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      const t = setTimeout(() => setMenuAnimated(true), 40)
      return () => clearTimeout(t)
    } else {
      setMenuAnimated(false)
    }
  }, [menuOpen])

  // Determine the primary color of the navbar elements based on theme/menu state
  const navColor = menuOpen || theme === 'light' ? '#000' : '#fff'

  return (
    <>
      {/* ── Fixed top navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-10">
        {/* Logo text */}
        <Link href="/" className="z-[60]">
          <span
            className="text-lg font-medium tracking-tight transition-colors duration-300"
            style={{ color: navColor }}
          >
            interra<span className="font-bold">Form</span>
          </span>
        </Link>

        {/* Centre MENU / close toggle — turns black when overlay is open */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] tracking-[0.25em] font-light hover:opacity-70 transition-all duration-300 z-[60]"
          style={{ color: navColor }}
        >
          <span>MENU</span>
          {menuOpen
            ? <X size={13} />
            : (
              <span className="flex flex-col gap-[3px]">
                <span className="block w-4 h-px bg-current" />
                <span className="block w-4 h-px bg-current" />
              </span>
            )
          }
        </button>

        {/* Right links */}
        <div
          className="flex items-center gap-5 text-xs tracking-[0.1em] font-light z-[60] transition-colors duration-300"
          style={{ color: navColor }}
        >
          <Link href="/about" className="hover:opacity-70 transition-opacity">About</Link>
          <span className="opacity-30">|</span>
          <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
        </div>
      </nav>

      {/* ── Full-screen white menu overlay ── */}
      <div
        className="fixed inset-0 z-40 bg-white flex flex-col"
        style={{
          clipPath: menuOpen ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)',
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'clip-path 0.7s cubic-bezier(0.76, 0, 0.24, 1)',
        }}
      >
        {/* Company name — centred, animated slide up using reveal clip */}
        <div className="w-full flex justify-center pt-24 pb-0 px-6 reveal-clip block">
          <h2
            className="text-[clamp(2.2rem,8vw,6.5rem)] font-black text-black uppercase tracking-tight leading-none text-center"
            style={{
              opacity: menuAnimated ? 1 : 0,
              transform: menuAnimated ? 'translateY(0)' : 'translateY(110%)',
              transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s, opacity 0.8s ease 0.1s',
            }}
          >
            interra<span className="font-black">Form</span>
          </h2>
        </div>

        {/* Top divider */}
        <div
          className="w-full h-px bg-black/10 mt-6"
          style={{
            opacity: menuAnimated ? 1 : 0,
            transition: 'opacity 0.4s ease 0.15s',
          }}
        />

        {/* Nav links — staggered slide-up, bottom-to-top black wipe on hover */}
        <nav className="flex-1 flex flex-col justify-center">
          {navLinks.map((link, i) => (
            <div
              key={link.label}
              style={{
                opacity: menuAnimated ? 1 : 0,
                transform: menuAnimated ? 'translateY(0)' : 'translateY(22px)',
                transition: `opacity 0.5s ease ${0.1 + i * 0.07}s, transform 0.5s ease ${0.1 + i * 0.07}s`,
              }}
            >
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="relative w-full flex items-center justify-center py-3.5 overflow-hidden group cursor-pointer"
              >
                {/* Black fill — slides UP from the bottom on hover */}
                <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                {/* Label */}
                <span className="relative z-10 text-lg md:text-xl tracking-[0.3em] font-light text-black group-hover:text-white transition-colors duration-150 delay-100">
                  {link.label}
                </span>
              </Link>
            </div>
          ))}
        </nav>

        {/* Bottom divider */}
        <div
          className="w-full h-px bg-black/10"
          style={{
            opacity: menuAnimated ? 1 : 0,
            transition: 'opacity 0.4s ease 0.45s',
          }}
        />

        {/* Bottom contact info — bigger text, animated */}
        <div
          className="flex items-end justify-between px-8 md:px-14 py-8 md:py-10"
          style={{
            opacity: menuAnimated ? 1 : 0,
            transform: menuAnimated ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s',
          }}
        >
          {/* Left */}
          <div className="flex flex-col gap-1.5">
            <div className="w-16 h-px bg-black/20 mb-3" />
            <a href="mailto:hello@interraform.com"
              className="text-black/60 text-sm md:text-base tracking-wider hover:text-black transition-colors">
              hello@interraform.com
            </a>
            <a href="mailto:projects@interraform.com"
              className="text-black/60 text-sm md:text-base tracking-wider hover:text-black transition-colors">
              projects@interraform.com
            </a>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-1.5 text-right">
            <div className="w-16 h-px bg-black/20 mb-3 ml-auto" />
            <a href="#"
              className="text-black/60 text-sm md:text-base tracking-wider hover:text-black transition-colors">
              instagram@interraform
            </a>
            <a href="#"
              className="text-black/60 text-sm md:text-base tracking-wider hover:text-black transition-colors">
              linkedin@interraform
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
