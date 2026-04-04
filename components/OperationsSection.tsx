import Image from 'next/image'

const services = [
  {
    title: 'Preventive Maintenance',
    description:
      'Tailored annual or seasonal preventive care programs ensuring peak operation, longevity, and uninterrupted enjoyment of your aquatic investment.',
    image: 'https://www.serviceplusaquatics.com/images/Services/maint.webp',
  },
  {
    title: 'Water Quality Management',
    description:
      'Advanced monitoring, testing, and balancing create immaculate water quality for unparalleled clarity, safety, resulting in a pristine aquatic experience.',
    image: 'https://www.serviceplusaquatics.com/images/Services/water.webp',
  },
  {
    title: 'Mechanical System Servicing',
    description:
      'Luxury-level mechanical care—where pumps, filters, and automation operate in perfect harmony for uninterrupted aquatic experiences.',
    image: 'https://www.serviceplusaquatics.com/images/Services/oper.webp',
  },
  {
    title: 'Training & Documentation',
    description:
      'Specialized training and precision-crafted manuals empower your team to operate and maintain aquatic systems with absolute confidence.',
    image: 'https://www.serviceplusaquatics.com/images/Services/training.webp',
  },
]

export default function OperationsSection() {
  return (
    <section className="bg-[#0f0f0f] py-0">
      {/* Header with hero images */}
      <div className="relative">
        <div className="grid grid-cols-2 h-[50vh]">
          <div className="relative overflow-hidden">
            <Image
              src="https://www.serviceplusaquatics.com/images/Services/opp2.webp"
              alt="Pool operations"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="https://www.serviceplusaquatics.com/images/Services/opp1.webp"
              alt="Pool detail"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
        {/* OPERATIONS overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="font-heading text-6xl md:text-9xl text-white font-semibold tracking-wider">
            OPERATIONS
          </h2>
        </div>
      </div>

      {/* Service cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {services.map((service) => (
          <div key={service.title} className="group relative overflow-hidden">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
            {/* Text */}
            <div className="bg-[#111] p-6 border-t border-white/10">
              <h3 className="font-heading text-base text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
