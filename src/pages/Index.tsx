import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <About />
      <Pricing />
      <FAQ />
      <Testimonials />
      <Contact />
      <Newsletter />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;