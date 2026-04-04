import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import QuoteSection from '@/components/QuoteSection'
import DesignSection from '@/components/DesignSection'
import ServicesSection from '@/components/ServicesSection'
import ManufacturingSection from '@/components/ManufacturingSection'
import InstallationSection from '@/components/InstallationSection'
import BrandsSection from '@/components/BrandsSection'
import OperationsSection from '@/components/OperationsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <HeroSection />
      <QuoteSection />
      <DesignSection />
      <ServicesSection />
      <ManufacturingSection />
      <InstallationSection />
      <BrandsSection />
      <OperationsSection />
      <Footer />
    </main>
  )
}
