import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function InstallationSection() {
  return (
    <section className="bg-[#0a0a0a]">
      {/* Structural Excellence */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[80vh]">
        {/* Left — Text */}
        <div className="flex flex-col justify-center px-10 md:px-16 py-20 order-2 lg:order-1">
          <div className="mb-6">
            <span className="text-white/40 text-xs tracking-[0.3em] uppercase">
              +100 Pool Awards
            </span>
          </div>
          <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase mb-4">
            Our Expert
          </p>
          <h2 className="font-heading text-5xl md:text-6xl text-white font-semibold leading-tight mb-8">
            STRUCTURAL{' '}
            <em className="not-italic italic text-white/70">EXCELLENCE.</em>
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md">
            Our expert teams handle full installation with speed and precision. Each
            pool includes advanced waterproofing systems, tested for leak-free
            performance from day one — delivering reliable, long-lasting results you
            can trust each and every time.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-white text-xs tracking-wider border border-white/30 px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300 w-fit"
          >
            See Products
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Right — Image */}
        <div className="relative min-h-[50vh] lg:min-h-full overflow-hidden order-1 lg:order-2">
          <Image
            src="https://www.serviceplusaquatics.com/images/Install/install2.webp"
            alt="Luxury pool installation"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      {/* Maintenance / Interior pool */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left — Image */}
        <div className="relative min-h-[50vh] overflow-hidden">
          <Image
            src="https://www.serviceplusaquatics.com/images/Install/install1.webp"
            alt="Interior pool design"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Right — Text */}
        <div className="flex flex-col justify-center px-10 md:px-16 py-20 bg-[#0f0f0f]">
          <p className="text-white/60 text-sm leading-relaxed max-w-md">
            We don&apos;t just prevent issues — we anticipate them. Through regular
            inspections, diagnostics, and performance tuning, our maintenance programs
            are designed to catch minor problems before they become major challenges.
          </p>
        </div>
      </div>
    </section>
  )
}
