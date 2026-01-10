import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-4">
          Case Studies
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Real results from real projects we've worked with
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -10 }}
        className="max-w-2xl mx-auto glass-card glass-card-hover rounded-2xl overflow-hidden group"
      >
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/khadiscon/kravenai/main/5963321216305138641.jpg"
              alt="GameFi Platform"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold font-display text-primary mb-3">
            GameFi Platform Marketing
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Provided comprehensive 4-month marketing campaign for an emerging play-to-earn platform, focusing on community building, KOL partnerships, and strategic social media engagement.
          </p>

          <div className="flex flex-wrap gap-4">
            {[
              { label: '4 Months', sublabel: 'Campaign' },
              { label: 'Dedicated', sublabel: 'Support' },
              { label: 'Full', sublabel: 'KOL Network' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20"
              >
                <span className="text-primary font-bold">{stat.label}</span>{' '}
                <span className="text-muted-foreground text-sm">{stat.sublabel}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;