import { motion } from 'framer-motion';
import { Sparkles, Megaphone, Rocket, Palette, Lightbulb, Package } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'First Impression & Community Infrastructure',
    description: 'We build the foundation that makes a project look legit from day one. Onboard 100+ vetted KOLs with 1,500-150,000+ followers, complete Discord setup with ticket systems, and professional moderation.',
  },
  {
    icon: Megaphone,
    title: 'Marketing & Outreach',
    description: "We don't \"post content.\" We engineer growth. Strategic campaigns, managed ambassador programs with written/video content, AMAs, X Spaces coordination, and strategic partnerships.",
  },
  {
    icon: Rocket,
    title: 'Engagement Growth',
    description: 'Drive real engagement, not bot noise. Our organic KOL engagement improves post performance, boosts utility awareness, and enables discovery by new users—creating sustainable momentum.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design (Figma Specialists)',
    description: 'Dedicated UI/UX team specializing in Figma delivers clean, modern interfaces with high-conversion user flows and designs that signal quality and trust to your audience.',
  },
  {
    icon: Lightbulb,
    title: 'Strategy & Business Consultation',
    description: "We don't recycle strategies. With experience across multiple Web3 projects, we identify what actually moves the needle, avoid wasted spend, and build long-term growth systems.",
  },
  {
    icon: Package,
    title: 'Flexible Packages',
    description: '3 core packages designed around common project needs, each delivering different levels of growth. Custom packages available—tailored to your goals with ready-made teams.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-4">
          Our Services
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Comprehensive Web3 marketing solutions tailored for success
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="glass-card glass-card-hover rounded-2xl p-8 group relative overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <motion.div
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              <h3 className="text-xl font-bold font-display text-primary mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;