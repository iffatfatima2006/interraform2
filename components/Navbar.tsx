'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Menu } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-10">
        {/* Logo */}
        <Link href="/" className="z-10">
          <Image
            src="/logo.svg"
            alt="Service Plus Aquatics"
            width={80}
            height={48}
            className="h-10 w-auto invert"
          />
        </Link>

        {/* Center MENU toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-white text-xs tracking-[0.2em] font-light hover:opacity-70 transition-opacity"
        >
          <span>MENU</span>
          {menuOpen ? <X size={14} /> : (
            <span className="flex flex-col gap-[3px]">
              <span className="block w-4 h-px bg-white" />
              <span className="block w-4 h-px bg-white" />
            </span>
          )}
        </button>

        {/* Right links */}
        <div className="flex items-center gap-5 text-white text-xs tracking-[0.1em] font-light">
          <Link href="/about" className="hover:opacity-70 transition-opacity">About</Link>
          <span className="opacity-30">|</span>
          <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-8 text-white"
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col items-center gap-8 text-white">
            {['Home', 'About', 'Products', 'Services', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="font-heading text-4xl md:text-6xl italic hover:opacity-60 transition-opacity"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
