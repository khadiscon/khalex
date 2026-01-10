import { motion } from 'framer-motion';

const metrics = [
  { number: '530K+', label: 'Total Followers' },
  { number: '813M+', label: 'Campaign Impressions' },
  { number: '800K+', label: 'Community Reach' },
  { number: '11+', label: 'Projects Served' },
  { number: '500+', label: 'KOL Network' },
  { number: '24/7', label: 'Community Support' },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-4">
            About Kraven AI
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold font-display text-primary">
              Your Premier Web3 Marketing Partner
            </h3>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              We're a dedicated marketing agency specializing in the Web3 ecosystem. Working with 11+ projects, we've helped our clients generate over 813 million impressions and reach 800K+ engaged community members.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our extensive network of 500+ verified KOLs and influencers, combined with our 530,000+ follower base, positions us uniquely to amplify your project's message and reach the right audience at the right time.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              We don't just run campaigns—we build sustainable communities and create lasting brand value in the competitive Web3 landscape through consistent hard work and dedication.
            </p>
          </motion.div>

          {/* Metrics grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-xl p-6 text-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold font-display text-primary mb-2">
                  {metric.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;