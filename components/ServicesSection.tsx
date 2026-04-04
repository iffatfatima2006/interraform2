import { Drill, Pencil, Building2, Wrench } from 'lucide-react'

const services = [
  {
    icon: <Drill size={24} />,
    title: 'Manufacturing',
    description:
      'From raw material to refined retreat, we manage every step — delivering precision-engineered results that embody excellence, efficiency, utilizing cutting-edge manufacturing expertise.',
  },
  {
    icon: <Pencil size={24} />,
    title: 'Design',
    description:
      'A licensed engineering firm — Where your vision is sculpted with precision and artistry, transforming ideas into signature, enduring design.',
  },
  {
    icon: <Building2 size={24} />,
    title: 'Building',
    description:
      'A trusted partner to visionaries—transforming architectural aquatic concepts into timeless destinations through artisan precision, luxurious finishes, and flawless execution.',
  },
  {
    icon: <Wrench size={24} />,
    title: 'Servicing',
    description:
      'Elegant pools deserve elegant care — we combine cutting-edge automation, elevated service, and exclusive supply to protect the beauty and function of your aquatic retreat.',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-[#111] py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-white/10 p-8 hover:border-white/30 transition-colors duration-300 group"
            >
              <div className="text-white/60 mb-6 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl text-white mb-4">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
