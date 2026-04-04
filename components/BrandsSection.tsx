import Image from 'next/image'

const brands = [
  { name: 'Marriott', src: 'https://www.serviceplusaquatics.com/images/Brands/marriott.svg' },
  { name: 'Westbank', src: 'https://www.serviceplusaquatics.com/images/Brands/westbank.svg' },
  { name: 'Tridel', src: 'https://www.serviceplusaquatics.com/images/Brands/tridel.svg' },
  { name: 'Ritz Carlton', src: 'https://www.serviceplusaquatics.com/images/Brands/ritz.svg' },
  { name: 'Four Seasons', src: 'https://www.serviceplusaquatics.com/images/Brands/fourseasons.svg' },
  { name: 'Hariri', src: 'https://www.serviceplusaquatics.com/images/Brands/hariri.svg' },
  { name: 'BIG', src: 'https://www.serviceplusaquatics.com/images/Brands/big.svg' },
  { name: 'Gulf', src: 'https://www.serviceplusaquatics.com/images/Brands/gulf.svg' },
  { name: 'CF', src: 'https://www.serviceplusaquatics.com/images/Brands/cf.svg' },
  { name: 'IBI', src: 'https://www.serviceplusaquatics.com/images/Brands/ibi.svg' },
  { name: 'Fitz', src: 'https://www.serviceplusaquatics.com/images/Brands/fitz.svg' },
  { name: 'Kingsett', src: 'https://www.serviceplusaquatics.com/images/Brands/kingsett.svg' },
  { name: 'Mattamy', src: 'https://www.serviceplusaquatics.com/images/Brands/mattamy.svg' },
  { name: 'Minto', src: 'https://www.serviceplusaquatics.com/images/Brands/minto.svg' },
  { name: 'ED', src: 'https://www.serviceplusaquatics.com/images/Brands/ed.svg' },
  { name: 'Dialog', src: 'https://www.serviceplusaquatics.com/images/Brands/dialog.svg' },
  { name: 'BPD', src: 'https://www.serviceplusaquatics.com/images/Brands/bpd.svg' },
  { name: 'Granite', src: 'https://www.serviceplusaquatics.com/images/Brands/granite.svg' },
  { name: 'Boulevard', src: 'https://www.serviceplusaquatics.com/images/Brands/boulevard.svg' },
  { name: 'Amica', src: 'https://www.serviceplusaquatics.com/images/Brands/amica.svg' },
  { name: 'First', src: 'https://www.serviceplusaquatics.com/images/Brands/first.svg' },
]

export default function BrandsSection() {
  const doubled = [...brands, ...brands]

  return (
    <section className="bg-[#0a0a0a] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 mb-12">
        <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase text-center">
          Chosen by Visionaries
        </p>
      </div>

      {/* Scrolling logo marquee */}
      <div className="relative overflow-hidden">
        <div className="marquee-track">
          {doubled.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center h-10 w-28"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={100}
                height={40}
                className="object-contain max-h-8 opacity-40 hover:opacity-80 transition-opacity filter invert"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
