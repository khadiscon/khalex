import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isNavVisible, setIsNavVisible] = useState(false);

  const ticking = useRef(false);
  const lastIsScrolled = useRef(false);

  const sectionIds = useMemo(() => navLinks.map((l) => l.href.slice(1)), []);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setIsNavVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Keep scroll work minimal: only update "isScrolled" and only when it actually changes.
  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const scrolledNow = window.scrollY > 50;
      if (lastIsScrolled.current !== scrolledNow) {
        lastIsScrolled.current = scrolledNow;
        setIsScrolled(scrolledNow);
      }
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Active section tracking via IntersectionObserver (no per-scroll getBoundingClientRect loops)
  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];

        if (visible?.target && (visible.target as HTMLElement).id) {
          setActiveSection((visible.target as HTMLElement).id);
        }
      },
      {
        // Consider a section "active" slightly before it hits the top
        root: null,
        rootMargin: '-120px 0px -60% 0px',
        threshold: [0.12, 0.25, 0.5],
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isNavVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${
        isScrolled
          ? 'bg-background/80 md:backdrop-blur-2xl border-b border-primary/10 shadow-[0_4px_30px_rgba(0,255,194,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 cursor-pointer group transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:shadow-[0_8px_30px_hsl(var(--primary)/0.4)] transition-shadow duration-200">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold font-display text-gradient">Kraven AI</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                activeSection === link.href.slice(1)
                  ? 'text-primary-foreground bg-gradient-to-r from-primary to-accent'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://t.me/marketmercenary?text=Hi Kraven AI, I'd like to schedule an exploratory call to discuss my project."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm rounded-full shadow-lg hover:shadow-[0_8px_30px_hsl(var(--primary)/0.4)] transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 active:scale-[0.98]"
        >
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-10 h-10 rounded-xl glass-card flex items-center justify-center text-primary transition-transform duration-200 active:scale-90"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-background/98 md:backdrop-blur-2xl border-b border-primary/10 overflow-hidden transition-all duration-200 ease-out ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`text-left text-lg font-medium py-3 px-4 rounded-xl transition-all duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 40}ms` : '0ms',
                transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-14px)',
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
            >
              {link.label}
            </button>
          ))}

          <a
            href="https://t.me/marketmercenary?text=Hi Kraven AI, I'd like to schedule an exploratory call to discuss my project."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-center rounded-xl transition-all duration-200"
            style={{
              transitionDelay: isMobileMenuOpen ? `${navLinks.length * 40}ms` : '0ms',
              transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-14px)',
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
