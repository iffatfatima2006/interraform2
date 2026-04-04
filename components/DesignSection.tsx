import Image from 'next/image'

export default function DesignSection() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="https://www.serviceplusaquatics.com/images/Design/design.webp"
            alt="Luxury Pool Design"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-6">
            Transforming ideas into timeless aquatic masterpieces
          </p>
          <h2 className="font-heading text-5xl md:text-6xl text-white font-semibold leading-tight mb-2">
            ENVISIONED,
            <br />
            DESIGNED,
            <br />
            REFINED
          </h2>
          <h3 className="font-heading text-4xl md:text-5xl italic text-white/70 mb-8">
            delivered.
          </h3>
          <p className="text-white/60 text-sm leading-relaxed max-w-md">
            Built for beauty, strength, and enduring luxury.
          </p>
        </div>
      </div>
    </section>
  )
}
