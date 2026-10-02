import Hero from '@/components/Hero';
import PartnersStrip from '@/components/PartnersStrip';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';
import CatalogueSection from '@/components/CatalogueSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <PartnersStrip />
      <PortfolioSection />
      <ServicesSection />
      <CatalogueSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
