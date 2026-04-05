'use client'
import { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const services = [
  {
    index: '01',
    type: 'Strategy',
    title: 'Workspace Design',
    description:
      'We design office and commercial interiors based on workflow, movement, productivity, and space efficiency.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1400',
  },
  {
    index: '02',
    type: 'Renovation',
    title: 'Office Remodeling & Renovation',
    description:
      'We upgrade and transform outdated offices into modern, efficient workspaces through complete remodeling solutions.',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1400',
  },
  {
    index: '03',
    type: 'Commercial',
    title: 'Commercial Interior Design',
    description:
      'Interior design and build solutions for commercial spaces including showrooms, clinics, restaurants, and offices.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1400',
  },
  {
    index: '04',
    type: 'Planning',
    title: 'Space Planning & Layout Optimization',
    description:
      'Smart layout planning that improves movement, space usage, and workflow efficiency.',
    image:
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=1400',
  },
  {
    index: '05',
    type: 'Execution',
    title: 'Turnkey Interior Projects',
    description:
      'Complete project management including design, materials, construction, and finishing — from concept to handover.',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1400',
  },
]

function ServiceCard({ service, forceShow }: { service: (typeof services)[0], forceShow?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)
  const imageWrapRef = useRef<HTMLDivElement>(null)

  // Reveal card when forced (on page load)
  useEffect(() => {
    if (forceShow && cardRef.current) {
      cardRef.current.classList.add('service-visible')
    }
  }, [forceShow])

  // Reveal card on scroll
  useEffect(() => {
    const card = cardRef.current
    if (!card || forceShow) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          card.classList.add('service-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(card)
    return () => observer.disconnect()
  }, [forceShow])

  // Subtle parallax on image within its container
  useEffect(() => {
    const wrap = imageWrapRef.current
    const img = imgRef.current
    if (!wrap || !img) return

    const handleScroll = () => {
      const rect = wrap.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const viewCenter = window.innerHeight / 2
      const offset = (center - viewCenter) * 0.08
      img.style.transform = `translateY(${offset}px) scale(1.08)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={cardRef}
      className="service-card grid grid-cols-1 lg:grid-cols-12 border-t border-black/10 py-20 gap-8 lg:gap-0"
    >
      {/* Left Column */}
      <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-20 min-h-[320px]">
        <div>
          <div className="flex items-center gap-4 mb-6">
            {/* Stronger index number */}
            <span className="text-[#1a1a1a] text-[12px] tracking-[0.4em] font-semibold uppercase">
              {service.index}
            </span>
            <div className="w-8 h-px bg-black/25" />
            <span className="text-black/60 text-[10px] tracking-[0.3em] font-medium uppercase">
              {service.type}
            </span>
          </div>

          <h2 className="service-title font-heading text-3xl md:text-4xl text-[#1a1a1a] font-medium leading-tight">
            {service.title}
          </h2>
        </div>

        <p className="service-desc text-[#1a1a1a]/55 text-base md:text-lg font-light leading-relaxed mt-10">
          {service.description}
        </p>
      </div>

      {/* Right Column — image */}
      <div className="lg:col-span-7">
        <div
          ref={imageWrapRef}
          className="service-image-wrap relative w-full aspect-[16/9] lg:aspect-[16/10] overflow-hidden"
        >
          <div
            ref={imgRef}
            className="absolute inset-0 scale-[1.08]"
            style={{ willChange: 'transform', transition: 'transform 0.1s linear' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="service-mask absolute inset-0 bg-[#f5f2ed] origin-bottom" />
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const delay = 1200
    const timer = setTimeout(() => setAnimated(true), delay)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className={`bg-[#f5f2ed] min-h-screen ${animated ? 'hero-animated' : ''}`}>
      <Navbar theme="light" />

      {/* Page Header — animated like the home hero */}
      <section className="pt-40 pb-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-black/35 text-[10px] tracking-[0.5em] uppercase mb-8">
            What We Do
          </p>
          {/* Heading: 2-line hero-style — body font for line 1, italic Playfair for Business */}
          <h1 className="font-heading text-5xl md:text-7xl text-[#1a1a1a] font-medium leading-[1.08] max-w-3xl">
            <span className="reveal-clip block">
              <span className="reveal-inner font-body font-medium tracking-tight not-italic block line-1">Services Built Around</span>
            </span>
            <span className="reveal-clip block">
              <span className="reveal-inner block line-2">
                <span className="font-body font-medium tracking-tight not-italic">Your </span><span className="italic">Business</span>
              </span>
            </span>
          </h1>
        </div>
      </section>

      {/* Service Cards */}
      <section className="px-8 md:px-16 pb-24">
        <div className="max-w-7xl mx-auto">
          {services.map((service, i) => (
            <ServiceCard key={service.index} service={service} forceShow={i === 0 && animated} />
          ))}
        </div>
      </section>

      <Footer
        ctaHeadline={['The space you work in', 'shapes the work you produce.']}
        ctaImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=2400"
      />
    </main>
  )
}
