'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const processSteps = [
  {
    title: 'Consultation',
    desc: 'Understanding your space, workflow, and requirements.',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Design & Planning',
    desc: 'Layouts, concept development, and material selection.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Execution',
    desc: 'Complete project execution and management.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Delivery',
    desc: 'On-time completion and project handover.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200'
  }
]

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [prevStep, setPrevStep] = useState(0)
  const [splashAnimated, setSplashAnimated] = useState(false)
  const splashRef = useRef<HTMLDivElement>(null)

  const handleStepChange = (index: number) => {
    if (index !== activeStep) {
      setPrevStep(activeStep)
      setActiveStep(index)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSplashAnimated(true)
        observer.disconnect()
      }
    }, { threshold: 0.3 })

    if (splashRef.current) {
      observer.observe(splashRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#0a0a0a] w-full text-white overflow-hidden pt-32 pb-32 mt-16">
      
      {/* PART 1: The Massive "OUR PROCESS" Text Splash with central images */}
      <div 
        ref={splashRef}
        className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden mb-24"
      >
        {/* The Massive Text */}
        <div className={`relative z-20 w-full flex justify-center ${splashAnimated ? 'hero-animated' : ''}`}>
          <h2 className="font-heading text-[12vw] md:text-[14vw] font-medium leading-none tracking-tight flex gap-[3vw]">
            <span className="reveal-clip block">
              <span className="reveal-inner block line-1">OUR</span>
            </span>
            <span className="reveal-clip block">
              <span className="reveal-inner block line-2">PROCESS</span>
            </span>
          </h2>
        </div>

        {/* The Staggered Central Images (Hidden initially, slide up when splashAnimated is true) */}
        {/* We use a custom local keyframe logic combined with the state trigger */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[400px] h-[500px] pointer-events-none hidden md:block">
          {/* Image 1: Left */}
          <div className={`absolute top-[10%] left-0 w-[160px] h-[240px] shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${splashAnimated ? 'translate-y-0 opacity-100' : 'translate-y-[80%] opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
            <Image src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800" alt="Process 1" fill className="object-cover" unoptimized />
          </div>
          {/* Image 2: Middle (Taller, overlaps others) */}
          <div className={`absolute top-[5%] left-[25%] w-[200px] h-[320px] shadow-2xl z-10 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${splashAnimated ? 'translate-y-0 opacity-100' : 'translate-y-[80%] opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
            <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Process 2" fill className="object-cover" unoptimized />
          </div>
          {/* Image 3: Right */}
          <div className={`absolute top-[25%] right-0 w-[180px] h-[260px] shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${splashAnimated ? 'translate-y-0 opacity-100' : 'translate-y-[80%] opacity-0'}`} style={{ transitionDelay: '1.0s' }}>
            <Image src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800" alt="Process 3" fill className="object-cover" unoptimized />
          </div>
        </div>
      </div>

      {/* PART 2: The Steps Clickable List */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start min-h-[600px]">
          
          {/* Left Side: The Steps Options */}
          <div className="flex flex-col border-t border-white/20">
            {processSteps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div 
                  key={index}
                  onMouseEnter={() => handleStepChange(index)}
                  onClick={() => handleStepChange(index)}
                  className={`group cursor-pointer border-b border-white/20 py-10 transition-all duration-500 ease-out hover:translate-x-4
                    ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-80'}
                  `}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-light mb-4 text-white tracking-tight">
                        {step.title}
                      </h3>
                      {isActive && (
                        /* Only show description if active to save vertical space, or show always based on ref. The ref showed desc always. Let's keep it toggled or always visible based on preference. Reference pic shows text permanently under title. We will keep it always visible. */
                        null
                      )}
                      <p className="text-white/60 text-sm leading-relaxed max-w-sm pr-8">
                        {step.desc}
                      </p>
                    </div>
                    {/* The Arrow Icon */}
                    <div className="mt-2 shrink-0">
                      <ArrowUpRight 
                        size={24} 
                        className={`transition-transform duration-300 ${isActive ? 'rotate-45 text-white' : 'text-white/40 group-hover:text-white group-hover:rotate-45'}`} 
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Side: The Active Image Showcase */}
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[600px] overflow-hidden rounded-2xl bg-[#111]">
            {processSteps.map((step, index) => {
              const isActive = activeStep === index;
              const isPrev = prevStep === index;
              
              // 1. If Active: It's Z-20 and Translate Y 0 (sliding up from bottom)
              // 2. If Prev: It's Z-0 and Translate Y 0 (staying perfectly still underneath)
              // 3. Otherwise: It's Z-0 and Translate Y Full (waiting below)
              let placementClass = 'translate-y-full opacity-0 z-0'
              if (isActive) placementClass = 'translate-y-0 opacity-100 z-20'
              else if (isPrev) placementClass = 'translate-y-0 opacity-100 z-0'

              return (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${placementClass}`}
                >
                  <Image 
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
