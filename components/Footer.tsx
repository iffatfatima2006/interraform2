import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <>
      {/* Bottom quote section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://www.serviceplusaquatics.com/images/Home/bottom2.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-8">
          <p className="text-white/70 font-heading text-xl md:text-2xl italic mb-2">
            Designing, Building, &amp; Operating
          </p>
          <p className="text-white/70 font-heading text-xl md:text-2xl italic">
            Aquatic Destinations since 1989.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 border border-white/50 text-white text-xs tracking-wider px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            Make a Connection
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="bg-black border-t border-white/10 py-10 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src="/logo.svg"
            alt="Service Plus Aquatics"
            width={80}
            height={48}
            className="h-8 w-auto invert opacity-70"
          />

          <nav className="flex flex-wrap gap-6 text-white/40 text-xs tracking-widest">
            {['Home', 'About', 'Products', 'Services', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="hover:text-white transition-colors uppercase"
              >
                {item}
              </Link>
            ))}
          </nav>

          <p className="text-white/30 text-xs tracking-wider">
            © {new Date().getFullYear()} Service Plus Aquatics. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
