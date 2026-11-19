import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';
import Jobs from '@/components/home/Jobs';
import Courses from '@/components/home/Courses';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import Careers from '@/components/home/Careers';
import WhyUs from '@/components/home/WhyUs';
import { CTA, Footer } from '@/components/home/CtaFooter';
import ScrollReveal from '@/components/home/ScrollReveal';

export default function Home() {
  return (
    <main className="font-body">
      <ScrollReveal />
      <Navbar />
      <Hero />
      <Jobs />
      <Courses />
      <Services />
      <Testimonials />
      <Careers />
      <WhyUs />
      <CTA />
      <Footer />
    </main>
  );
}
