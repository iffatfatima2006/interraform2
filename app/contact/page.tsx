'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight, Mail, Phone } from 'lucide-react'

const interests = [
  'Commercial',
  'Residential',
  'Consultation',
  'Manufacturing',
  'Install/Reno',
  'Operations',
  'Service',
  'Distribution',
  'Jobs/HR',
  'Other',
]

export default function ContactPage() {
  const [selected, setSelected] = useState<string[]>([])
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const toggle = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-8 md:px-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>
          <h1 className="font-heading text-6xl md:text-8xl text-white font-semibold leading-none">
            Make a<br />
            <em className="italic text-white/60">Connection.</em>
          </h1>
        </div>
      </section>

      {/* Main form section */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left — Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full py-20">
                <div className="w-12 h-px bg-white/30 mb-8" />
                <h2 className="font-heading text-4xl text-white mb-4">
                  Thank you.
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                  We&apos;ve received your message and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">

                {/* Interest selector */}
                <div>
                  <h2 className="font-heading text-2xl text-white mb-6">
                    I&apos;m Interested In...
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {interests.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggle(item)}
                        className={`px-4 py-2 text-xs tracking-wider border transition-all duration-200 ${
                          selected.includes(item)
                            ? 'bg-white text-black border-white'
                            : 'border-white/20 text-white/60 hover:border-white/50 hover:text-white'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div className="border-b border-white/20 pb-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent text-white placeholder-white/30 text-sm outline-none"
                  />
                </div>

                {/* Email */}
                <div className="border-b border-white/20 pb-3">
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent text-white placeholder-white/30 text-sm outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="border-b border-white/20 pb-3">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-transparent text-white placeholder-white/30 text-sm outline-none"
                  />
                </div>

                {/* Message */}
                <div className="border-b border-white/20 pb-3">
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent text-white placeholder-white/30 text-sm outline-none resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 text-white text-xs tracking-[0.2em] uppercase border border-white/30 px-8 py-4 hover:bg-white hover:text-black transition-colors duration-300 group"
                >
                  Submit
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Right — Contact info */}
          <div className="flex flex-col justify-start pt-2 lg:pt-14">
            <div className="w-8 h-px bg-white/20 mb-10" />
            <h3 className="font-heading text-lg text-white/50 tracking-widest uppercase mb-8">
              Contact Info
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail size={14} className="text-white/40 mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <a
                    href="mailto:reception@serviceplusaquatics.com"
                    className="block text-white/70 text-sm hover:text-white transition-colors"
                  >
                    reception@serviceplusaquatics.com
                  </a>
                  <a
                    href="mailto:makeaconnection@serviceplusaquatics.com"
                    className="block text-white/70 text-sm hover:text-white transition-colors"
                  >
                    makeaconnection@serviceplusaquatics.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone size={14} className="text-white/40 shrink-0" />
                <a
                  href="tel:+19055697899"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  +1 (905) 569-7899
                </a>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-white/10">
              <p className="text-white/30 text-xs leading-relaxed">
                4179 Palladium Way<br />
                Burlington, Ontario, L7M-0V9<br />
                Canada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom image banner */}
      <section className="relative h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.serviceplusaquatics.com/images/Home/bottom3.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-8">
          <p className="font-heading text-white/80 text-xl italic">
            Designing, Building, &amp; Operating Aquatic Destinations since 1989.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
