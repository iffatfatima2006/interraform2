import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'

const stats = [
  { number: '35+', label: 'Years in Business' },
  { number: '150+', label: 'Dedicated Experts' },
  { number: '100+', label: 'Awards Won' },
  { number: '25K', label: 'Sq. Ft. Facility' },
]

const awardImages = [
  { src: 'https://www.serviceplusaquatics.com/images/Products/product1.webp', alt: 'Award winning pool design' },
  { src: 'https://www.serviceplusaquatics.com/images/About/award2.webp', alt: 'Modern pool installation' },
  { src: 'https://www.serviceplusaquatics.com/images/About/award3.webp', alt: 'Luxury spa design' },
  { src: 'https://www.serviceplusaquatics.com/images/About/award4.webp', alt: 'Commercial pool project' },
  { src: 'https://www.serviceplusaquatics.com/images/About/award5.webp', alt: 'Indoor pool excellence' },
  { src: 'https://www.serviceplusaquatics.com/images/About/award6.webp', alt: 'Water feature design' },
]

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-8 md:px-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-4">
            Est. 1989
          </p>
          <h1 className="font-heading text-8xl md:text-[12rem] text-white font-semibold leading-none tracking-tighter">
            SPA
          </h1>
          <p className="font-heading text-white/50 text-xl italic mt-4">
            Designing, Building, &amp; Operating<br />
            Aquatic Destinations since 1989.
          </p>
        </div>
      </section>

      {/* Intro — founder section */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-white leading-tight mb-8">
              Canada&apos;s leading aquatic service provider, delivering innovation and luxury
              craftsmanship for over 35 years.
            </h2>
            <div className="space-y-5 text-white/60 text-sm leading-relaxed">
              <p>
                Born from craftsmanship, built on prestige — SPA Inc. delivers full-service
                custom aquatic environments for those who demand elegance, precision, and
                performance.
              </p>
              <p>
                Roland Guy, a Wilfrid Laurier University post-graduate and licensed tradesman,
                founded SPA Inc. at the young age of 18.
              </p>
              <p>
                Today, from a 25,000 sq. ft. facility, his team delivers award-winning,
                full-service aquatic solutions — engineered, manufactured, installed, and
                serviced in-house.
              </p>
              <p className="text-white/80 font-medium">
                Nationally trusted. Technically elite. Built with precision, passion, and purpose.
              </p>
            </div>
          </div>

          {/* Right — headshot */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://www.serviceplusaquatics.com/images/About/headshot.webp"
              alt="Roland Guy, Founder"
              fill
              className="object-cover object-top"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white text-sm font-medium">Roland Guy</p>
              <p className="text-white/50 text-xs">Founder &amp; President</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bold statement */}
      <section className="py-20 px-8 md:px-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl md:text-6xl text-white font-semibold leading-tight max-w-4xl">
            WE ARE CREATORS OF EXCEPTIONAL AQUATIC ENVIRONMENTS, WHERE{' '}
            <em className="italic text-white/60">PRECISION</em> MEETS{' '}
            <em className="italic text-white/60">ARTISTRY.</em>
          </h2>
        </div>
      </section>

      {/* Location + team section */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — girl by pool image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://www.serviceplusaquatics.com/images/About/girl.webp"
              alt="Luxury aquatic environment"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Right — text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <MapPin size={16} className="text-white/40" />
              <div>
                <p className="text-white text-sm">Burlington, Ontario-based.</p>
                <p className="text-white/50 text-xs mt-0.5">
                  Providing expert services throughout Canada.
                </p>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Our full-time team of elite professionals deliver full-service aquatic excellence,
              blending artistry and precision.
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Vertically integrated with licensed engineers, industry leading collaborators, and
              advanced manufacturing in a 25,000 sq. ft. facility, we craft flawless mechanical,
              controls, waterproofing, and finishing installations.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Our year-round repairs and operations ensure seamless performance. Supported by
              strong purchasing power and ample inventory, our distribution network offers
              unrivaled reliability and sophistication — ensuring every project and aquatic
              facility remains a masterpiece of luxury and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-8 md:px-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full aspect-[16/5] overflow-hidden">
            <Image
              src="https://www.serviceplusaquatics.com/images/About/map.webp"
              alt="Service area map"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-8 md:px-16 bg-[#0f0f0f] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase text-center mb-16">
            Projects Completed — From vision to completion, SPA Inc. delivers turnkey aquatic
            custom solutions with precision, scale, and the power of 150+ dedicated on-staff experts.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center border border-white/10 p-8">
                <p className="font-heading text-5xl md:text-6xl text-white font-semibold mb-3">
                  {stat.number}
                </p>
                <p className="text-white/40 text-xs tracking-widest uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards section */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-heading text-4xl md:text-5xl text-white font-semibold">
              Winners of<br />
              <em className="italic text-white/60">100+ Awards</em>
            </h2>
          </div>

          {/* Award image grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {awardImages.map((img) => (
              <div key={img.alt} className="relative aspect-[4/3] overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HQ / Office section */}
      <section className="pb-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[60vh]">
          {/* Left — office image */}
          <div className="relative min-h-[50vh] overflow-hidden">
            <Image
              src="https://www.serviceplusaquatics.com/images/About/office.webp"
              alt="SPA Headquarters"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute top-6 left-6">
              <p className="text-white/50 text-[10px] tracking-[0.25em] uppercase">SPA HQ</p>
            </div>
          </div>

          {/* Right — text */}
          <div className="flex flex-col justify-center px-10 md:px-16 py-20 bg-[#0f0f0f]">
            <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-6">
              Where The Magic Happens
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-white font-semibold leading-tight mb-8">
              WHERE THE<br />
              <em className="italic text-white/60">MAGIC HAPPENS</em>
            </h2>
            <p className="text-white/50 text-sm mb-2">Welcome to Our New Space</p>

            <div className="mt-8 space-y-1 text-white/50 text-sm">
              <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase mb-3">Location</p>
              <p>4179 Palladium Way</p>
              <p>Burlington, Ontario, L7M-0V9</p>
              <p>CA</p>
            </div>

            <div className="mt-8 flex gap-4">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 bg-white text-black text-xs tracking-wider px-6 py-3 hover:bg-white/80 transition-colors"
              >
                Join Us
                <ArrowRight size={14} />
              </Link>
              <a
                href="https://maps.app.goo.gl/TE3etbApTawrJgPu7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 text-white/60 text-xs tracking-wider px-6 py-3 hover:border-white/50 hover:text-white transition-colors"
              >
                Directions
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
