import { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const ticking = useRef(false);
  const last = useRef({ visible: false, progress: 0 });

  const compute = useCallback(() => {
    const scrollTop = window.scrollY || 0;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const rawProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    const progress = Math.max(0, Math.min(100, Math.round(rawProgress)));
    const visible = scrollTop > 400;

    if (last.current.visible !== visible) {
      last.current.visible = visible;
      setIsVisible(visible);
    }

    if (last.current.progress !== progress) {
      last.current.progress = progress;
      setScrollProgress(progress);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        compute();
        ticking.current = false;
      });
    };

    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [compute]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const circumference = 2 * Math.PI * 22;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-background border border-primary/30 flex items-center justify-center shadow-lg hover:shadow-[0_10px_30px_hsl(var(--primary)/0.3)] hover:border-primary/50 transition-all duration-200 group ${
        isVisible
          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      {/* Progress ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke="hsl(var(--primary) / 0.2)"
          strokeWidth="2"
        />
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={`${circumference}`}
          strokeDashoffset={`${circumference * (1 - scrollProgress / 100)}`}
          className="transition-[stroke-dashoffset] duration-150"
        />
      </svg>

      <ChevronUp className="w-5 h-5 text-primary group-hover:text-primary transition-colors relative z-10" />
    </button>
  );
};

export default ScrollToTop;
