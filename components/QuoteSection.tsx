export default function QuoteSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://www.serviceplusaquatics.com/images/Products/product4.webp')",
        }}
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-12 text-center py-24">
        <p className="text-white/80 font-heading text-xl md:text-2xl italic leading-relaxed mb-16">
          Canada&apos;s premier aquatic experts, reshaping luxury, one custom-built
          project at a time. Where passion meets precision, and every ripple begins
          with a vision.
        </p>

        <div className="text-center">
          <p className="text-white/50 text-[10px] tracking-[0.3em] uppercase mb-2">
            Envisioned, Designed, Refined
          </p>
          <h2 className="font-heading text-5xl md:text-7xl text-white font-semibold tracking-tight">
            ENVISIONED,
          </h2>
          <h2 className="font-heading text-5xl md:text-7xl text-white font-semibold tracking-tight">
            DESIGNED,
          </h2>
          <h2 className="font-heading text-5xl md:text-7xl text-white font-semibold tracking-tight">
            REFINED
          </h2>
          <p className="text-white/60 font-heading text-3xl md:text-5xl italic mt-2">
            delivered.
          </p>
        </div>
      </div>
    </section>
  )
}
