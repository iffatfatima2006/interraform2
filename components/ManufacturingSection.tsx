'use client'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { BrainCircuit, Sofa, Layers, Briefcase, Clock, Gem, Activity } from 'lucide-react'

const bullets = [
  {
    icon: BrainCircuit,
    text: 'Productivity-driven design approach',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200'
  },
  {
    icon: Sofa,
    text: 'Modern and functional interiors',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200'
  },
  {
    icon: Layers,
    text: 'Complete design and execution solution',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    icon: Briefcase,
    text: 'Professional project management',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200'
  },
  {
    icon: Clock,
    text: 'On-time project completion',
    image: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    icon: Gem,
    text: 'High-quality materials and finishing',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200'
  },
  {
    icon: Activity,
    text: 'Designed for efficiency and performance',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200'
  }
]

export default function ManufacturingSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [titleAnimated, setTitleAnimated] = useState(false)
  const bulletRefs = useRef<(HTMLDivElement | null)[]>([])
  const titleRef = useRef<HTMLDivElement>(null)
  const parallaxContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 1. Observe Bullet Intersections for crossfades
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'))
          setActiveIndex(index)
        }
      })
    }, { 
      rootMargin: "-40% 0px -40% 0px" 
    })
    
    bulletRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    // 2. Observe Title for slide-in animation
    const titleObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTitleAnimated(true)
        titleObserver.disconnect()
      }
    }, { threshold: 0.1 })

    if (titleRef.current) {
      titleObserver.observe(titleRef.current)
    }

    // 3. Very gentle parallax movement inside the sticky bounds
    let currentY = 0
    let targetY = 0
    let reqId: number

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const updateParallax = () => {
      // Use sin wave to float the background up and down gently based on scroll
      // This strictly constrains it to +/- 40px so it never blows out of the mask frame.
      targetY = Math.sin(window.scrollY * 0.002) * 40 
      currentY = lerp(currentY, targetY, 0.05)
      
      if (parallaxContainerRef.current) {
        parallaxContainerRef.current.style.transform = `translate3d(0, ${-currentY}px, 0)`
      }
      
      reqId = requestAnimationFrame(updateParallax)
    }
    
    reqId = requestAnimationFrame(updateParallax)
    
    // Cleanup
    return () => {
      observer.disconnect()
      titleObserver.disconnect()
      cancelAnimationFrame(reqId)
    }
  }, [])

  return (
    <section className="bg-[#0a0a0a] relative">
      <div className="flex flex-col md:flex-row w-full">
        
        {/* LEFT COLUMN - Sticky Image Container */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 left-0 overflow-hidden z-10 border-b md:border-b-0 md:border-r border-white/10">
          
          {/* Parallax Inner Container which is 120% height so it never runs out of bounds */}
          <div ref={parallaxContainerRef} className="absolute w-full h-[140%] -top-[20%] left-0 will-change-transform">
            {bullets.map((bullet, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <Image
                  src={bullet.image}
                  alt={bullet.text}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - Scrolling Content */}
        <div className="w-full md:w-1/2 bg-[#0a0a0a] z-20">
          <div className="py-16 md:py-24 px-8 md:px-16 lg:px-24">
            
            <div className={`mb-24 ${titleAnimated ? 'hero-animated' : ''}`} ref={titleRef}>
              <h2 className="font-heading text-5xl md:text-7xl italic text-white font-semibold leading-tight tracking-tight mb-2">
                <span className="reveal-clip block">
                  <span className="reveal-inner block line-1">WHY</span>
                </span>
                <span className="reveal-clip block">
                  <span className="reveal-inner block line-2">INTERRAFORM.</span>
                </span>
              </h2>
            </div>

            <div className="flex flex-col">
              {bullets.map((bullet, idx) => {
                const Icon = bullet.icon
                return (
                  <div 
                    key={idx}
                    ref={el => { bulletRefs.current[idx] = el }}
                    data-index={idx}
                    className={`flex items-center gap-8 py-16 border-b border-white/5 transition-opacity duration-500
                      ${activeIndex === idx ? 'opacity-100' : 'opacity-30'}
                    `}
                  >
                    {/* The large white circular icon badge */}
                    <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full bg-white flex items-center justify-center transition-transform duration-500 hover:scale-105">
                      <Icon className="w-10 h-10 md:w-12 md:h-12 text-black" strokeWidth={2} />
                    </div>
                    {/* Text block */}
                    <p className="text-white/80 text-xl md:text-2xl font-light leading-snug">
                      {bullet.text}
                    </p>
                  </div>
                )
              })}
            </div>
            
            {/* Added bottom padding so the last item can comfortably scroll into the trigger zone */}
            <div className="h-[30vh]" />
          </div>
        </div>
      </div>
    </section>
  )
}
