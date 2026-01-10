import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Target, Shield, Zap, Heart } from 'lucide-react';

const metrics = [
  { number: 530000, suffix: '+', label: 'Total Followers' },
  { number: 813, suffix: 'M+', label: 'Campaign Impressions' },
  { number: 800000, suffix: '+', label: 'Community Reach' },
  { number: 11, suffix: '+', label: 'Projects Served' },
  { number: 500, suffix: '+', label: 'KOL Network' },
  { number: 24, suffix: '/7', label: 'Community Support' },
];

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every strategy is designed with measurable outcomes in mind.',
  },
  {
    icon: Shield,
    title: 'Transparency',
    description: 'Clear reporting and honest communication at every step.',
  },
  {
    icon: Zap,
    title: 'Agility',
    description: 'Quick adaptation to market changes and opportunities.',
  },
  {
    icon: Heart,
    title: 'Dedication',
    description: 'Your success is our priority—we go the extra mile.',
  },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toString();
  };

  return (
    <span ref={ref}>
      {value >= 1000 ? formatNumber(count) : count}
      {suffix}
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Who We Are
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-4">
            About Kraven AI
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Your premier Web3 marketing partner with a proven track record of success
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-20"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card rounded-2xl p-5 text-center group hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold font-display text-primary mb-1">
                <AnimatedNumber value={metric.number} suffix={metric.suffix} />
              </div>
              <div className="text-xs text-muted-foreground">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold font-display">
              <span className="text-foreground">Building </span>
              <span className="text-gradient">Sustainable Success</span>
              <span className="text-foreground"> in Web3</span>
            </h3>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              We're a dedicated marketing agency specializing in the Web3 ecosystem. Working with 11+ projects, we've helped our clients generate over 813 million impressions and reach 800K+ engaged community members.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our extensive network of 500+ verified KOLs and influencers, combined with our 530,000+ follower base, positions us uniquely to amplify your project's message and reach the right audience at the right time.
            </p>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-[0_10px_30px_hsl(var(--primary)/0.4)] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Work With Us
            </motion.a>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-xl p-5 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <value.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h4 className="font-bold font-display text-foreground mb-1">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
