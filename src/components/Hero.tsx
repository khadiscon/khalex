import { ArrowRight, Zap } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const stats = [
  { number: '530K+', label: 'Followers', icon: '👥' },
  { number: '813M+', label: 'Impressions', icon: '📊' },
  { number: '800K+', label: 'Community', icon: '🌐' },
  { number: '11+', label: 'Projects', icon: '🚀' },
  { number: '500+', label: 'KOL Network', icon: '⭐' },
];

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-20 px-6"
    >
      {/* Background - optimized for mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-primary/10 rounded-full ${isMobile ? '' : 'blur-[100px]'}`}
        />
        
        {!isMobile && (
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[80px]" />
        )}

        {!isMobile && (
          <>
            <div className="absolute w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ left: '20%', top: '30%' }} />
            <div className="absolute w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ left: '50%', top: '40%', animationDelay: '1s' }} />
            <div className="absolute w-2 h-2 rounded-full bg-primary/30 animate-pulse" style={{ left: '80%', top: '25%', animationDelay: '2s' }} />
          </>
        )}

        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: isMobile ? '60px 60px' : '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8 group hover:border-primary/40 transition-colors cursor-default animate-fade-in"
        >
          <Zap className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">
            Premier Web3 Marketing Agency
          </span>
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>

        {/* Main Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] mb-8 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="text-foreground">Elevate Your </span>
          <span className="text-gradient relative">
            Web3 Project
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 8"
            >
              <path
                d="M0 4 Q50 8 100 4 T200 4"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-draw-line"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <br />
          <span className="text-foreground">to New Heights</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Premier marketing solutions driven by dedication and expertise. From community building 
          to KOL partnerships, we're committed to your success.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          <a
            href="https://t.me/marketmercenary?text=Hi Kraven AI, I'd like to schedule an exploratory call to discuss my project."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg rounded-full overflow-hidden shadow-[0_10px_40px_hsl(var(--primary)/0.4)] transition-all duration-200 hover:scale-105 hover:-translate-y-1 active:scale-[0.98]"
          >
            <span className="relative z-10">Schedule Consultation</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-foreground border-2 border-primary/30 rounded-full hover:border-primary hover:bg-primary/5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            View Our Work
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-4 sm:p-5 text-center group hover:border-primary/30 transition-all duration-200 cursor-default hover:-translate-y-1 hover:scale-[1.02]"
              style={{ animationDelay: `${0.5 + index * 0.05}s` }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-primary font-display group-hover:scale-110 transition-transform duration-200">
                {stat.number}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
