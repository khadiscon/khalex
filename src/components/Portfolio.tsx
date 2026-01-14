import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, Eye } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const projects = [
  {
    title: 'GameFi Platform Launch',
    category: 'Play-to-Earn',
    image: 'https://raw.githubusercontent.com/khadiscon/kravenai/main/5963321216305138641.jpg',
    description: 'Comprehensive 4-month marketing campaign for an emerging P2E platform with community building and KOL partnerships.',
    stats: [
      { label: 'Duration', value: '4 Months' },
      { label: 'KOLs Engaged', value: '50+' },
      { label: 'Discord Growth', value: '15K+' },
    ],
    gradient: 'from-primary/20 to-accent/20',
  },
  {
    title: 'DeFi Protocol Growth',
    category: 'Decentralized Finance',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60',
    description: 'Strategic ambassador program and Twitter Spaces campaign driving protocol awareness and user acquisition.',
    stats: [
      { label: 'Duration', value: '6 Months' },
      { label: 'Impressions', value: '50M+' },
      { label: 'TVL Increase', value: '300%' },
    ],
    gradient: 'from-accent/20 to-purple-500/20',
  },
  {
    title: 'NFT Collection Launch',
    category: 'Digital Collectibles',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&auto=format&fit=crop&q=60',
    description: 'Full-service marketing for a 10K PFP collection including influencer outreach and community events.',
    stats: [
      { label: 'Duration', value: '3 Months' },
      { label: 'Sold Out', value: '24 Hours' },
      { label: 'Floor Price', value: '5x Mint' },
    ],
    gradient: 'from-purple-500/20 to-primary/20',
  },
];

const Portfolio = () => {
  const isMobile = useIsMobile();

  return (
    <section id="portfolio" className="py-24 px-6 relative">
      {/* Background elements - hidden on mobile for performance */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-primary/3 rounded-full blur-[60px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-[60px]" />
        </div>
      )}

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
            Our Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-4">
            Case Studies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from real projects we've partnered with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} z-10`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent z-20" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 z-30">
                  <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-primary text-xs font-medium border border-primary/20">
                    {project.category}
                  </span>
                </div>

                {/* External link icon */}
                <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/20">
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  {project.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-3 rounded-xl bg-primary/5 border border-primary/10 group-hover:border-primary/20 transition-colors"
                    >
                      <div className="text-sm font-bold text-primary mb-0.5">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-primary font-medium hover:underline underline-offset-4"
            whileHover={{ x: 5 }}
          >
            Want results like these? Let's talk
            <TrendingUp className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
