import { motion } from 'framer-motion';

const stats = [
  { number: '530K+', label: 'Followers' },
  { number: '813M+', label: 'Impressions' },
  { number: '800K+', label: 'Community Reach' },
  { number: '11+', label: 'Projects' },
  { number: '500+', label: 'KOL Network' },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16 px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-float" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Premier Web3 Marketing Agency
          </motion.span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6 text-gradient-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Elevate Your Web3 Project to New Heights
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Premier marketing solutions driven by dedication and hard work. From community building to KOL partnerships, we're committed to helping your project succeed.
        </motion.p>

        <motion.a
          href="https://t.me/marketmercenary?text=Hi Kraven AI, I'd like to schedule an exploratory call to discuss my project."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg rounded-full shadow-[0_10px_40px_hsl(var(--primary)/0.4)] hover:shadow-[0_15px_50px_hsl(var(--primary)/0.6)] hover:-translate-y-1 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Schedule Consultation
        </motion.a>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary font-display group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;