import { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

// Lazy load below-fold components to reduce initial main-thread work
const Services = lazy(() => import('@/components/Services'));
const Portfolio = lazy(() => import('@/components/Portfolio'));
const Process = lazy(() => import('@/components/Process'));
const About = lazy(() => import('@/components/About'));
const Pricing = lazy(() => import('@/components/Pricing'));
const FAQ = lazy(() => import('@/components/FAQ'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const Contact = lazy(() => import('@/components/Contact'));
const KOLApplication = lazy(() => import('@/components/KOLApplication'));
const Newsletter = lazy(() => import('@/components/Newsletter'));
const Footer = lazy(() => import('@/components/Footer'));
const ScrollToTop = lazy(() => import('@/components/ScrollToTop'));

// Minimal loading fallback that doesn't cause layout shift
const SectionFallback = () => (
  <div className="min-h-[200px]" aria-hidden="true" />
);

const Index = () => {
  // On mobile, mounting all sections immediately can block scrolling while JS parses/executes.
  // We defer below-fold mounting until the browser is idle or the user interacts.
  const [mountBelowFold, setMountBelowFold] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const enable = () => {
      if (!cancelled) setMountBelowFold(true);
    };

    // Prefer idle time; fallback to a short timer (Safari/iOS doesn't support requestIdleCallback).
    const idleId = (window as any).requestIdleCallback
      ? (window as any).requestIdleCallback(enable, { timeout: 1500 })
      : null;

    const timer = window.setTimeout(enable, 900);

    // Also enable as soon as the user tries to interact.
    window.addEventListener('touchstart', enable, { passive: true, once: true });
    window.addEventListener('wheel', enable, { passive: true, once: true } as AddEventListenerOptions);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      if (idleId && (window as any).cancelIdleCallback) {
        (window as any).cancelIdleCallback(idleId);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />

      {mountBelowFold ? (
        <>
          <Suspense fallback={<SectionFallback />}>
            <Services />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Portfolio />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Process />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Pricing />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <FAQ />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Testimonials />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <KOLApplication />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Newsletter />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Footer />
          </Suspense>
          <Suspense fallback={null}>
            <ScrollToTop />
          </Suspense>
        </>
      ) : (
        // Keep the page scrollable immediately; content mounts right after idle/interaction.
        <div className="min-h-[120vh]" aria-hidden="true" />
      )}
    </main>
  );
};

export default Index;
