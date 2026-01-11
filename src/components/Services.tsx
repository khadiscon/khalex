import { motion } from 'framer-motion';
import { Sparkles, Megaphone, Rocket, Palette, Lightbulb, Package, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'First Impression & Community',
    description: 'Build legitimacy from day one with 100+ vetted KOLs, complete Discord setup with ticket systems, and professional moderation.',
    color: 'from-primary to-cyan-400',
  },
  {
    icon: Megaphone,
    title: 'Marketing & Outreach',
    description: 'Strategic campaigns, managed ambassador programs, AMAs, X Spaces coordination, and strategic partnerships.',
    color: 'from-accent to-blue-400',
  },
  {
    icon: Rocket,
    title: 'Engagement Growth',
    description: 'Drive real engagement with organic KOL partnerships that boost visibility and create sustainable momentum.',
    color: 'from-emerald-400 to-primary',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Dedicated Figma specialists delivering clean interfaces with high-conversion flows that signal quality.',
    color: 'from-purple-400 to-accent',
  },
  {
    icon: Lightbulb,
    title: 'Strategy Consultation',
    description: 'Custom strategies based on experience across multiple Web3 projects to identify what moves the needle.',
    color: 'from-orange-400 to-primary',
  },
  {
    icon: Package,
    title: 'Flexible Packages',
    description: '3 core packages designed around common needs, plus custom solutions tailored to your specific goals.',
    color: 'from-pink-400 to-accent',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive Web3 marketing solutions tailored for success
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-2xl p-8 group relative overflow-hidden cursor-pointer"
            >
              {/* Subtle glow effect on hover - reduced opacity */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-2xl`} />
              
              {/* Dark overlay to maintain text contrast on hover */}
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

              <div className="relative z-10">
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold font-display text-foreground transition-colors">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all opacity-0 group-hover:opacity-100" />
                </div>

                <p className="text-muted-foreground group-hover:text-foreground/80 leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
