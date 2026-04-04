import Image from 'next/image'
import { PencilRuler, PackageCheck } from 'lucide-react'

export default function ManufacturingSection() {
  return (
    <section className="bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Left — Image */}
        <div className="relative min-h-[50vh] lg:min-h-full overflow-hidden">
          <Image
            src="https://www.serviceplusaquatics.com/images/Engineering/autocad4.webp"
            alt="SPA Custom Manufacturing"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Right — Text */}
        <div className="flex flex-col justify-center px-10 md:px-16 py-20 bg-[#0f0f0f]">
          <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-8">
            Precision In-House Production
          </p>
          <h2 className="font-heading text-5xl md:text-6xl text-white font-semibold leading-tight mb-2">
            SPA<span className="text-white/40">CUSTOM</span>
          </h2>
          <h2 className="font-heading text-5xl md:text-6xl text-white font-semibold leading-tight mb-2">
            MANUFACTURING.
          </h2>
          <h2 className="font-heading text-4xl md:text-5xl italic text-white/60 leading-tight mb-10">
            BUILT-IN-HOUSE.
          </h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <PencilRuler size={20} className="text-white/50 mt-1 shrink-0" />
              <p className="text-white/60 text-sm leading-relaxed">
                From concept to completion, we meticulously self-perform every detail—crafting
                automated, quality-assured components designed to elevate the most refined and
                luxurious aquatic environments worldwide.
              </p>
            </div>
            <div className="flex gap-4">
              <PackageCheck size={20} className="text-white/50 mt-1 shrink-0" />
              <p className="text-white/60 text-sm leading-relaxed">
                From vision to reality, we self-perform every phase—ensuring seamless
                collaboration, accelerated timelines, and exceptional results in crafting custom
                aquatic destinations of unmatched quality and precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
