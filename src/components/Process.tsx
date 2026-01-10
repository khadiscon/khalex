import { motion } from 'framer-motion';
import { Phone, FileText, Rocket, Settings, BarChart3, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    step: '01',
    title: 'Exploratory Call',
    description: 'We start with a call to understand your brand, objectives, and target market to develop a tailored proposal.',
  },
  {
    icon: FileText,
    step: '02',
    title: 'Custom Proposal',
    description: 'Using insights from our call, we create a detailed proposal outlining project scope, timeline, and expected outcomes.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Campaign Launch',
    description: 'We launch your campaign with a personalized Discord, organized branding, and all prerequisites in place.',
  },
  {
    icon: Settings,
    step: '04',
    title: 'Ongoing Management',
    description: 'Continuous support ensures your visibility stays strong and campaigns consistently achieve results.',
  },
  {
    icon: BarChart3,
    step: '05',
    title: 'Analytics & Reports',
    description: 'Detailed analytics and comprehensive reports on performance metrics throughout the campaign.',
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 px-6 max-w-7xl mx-auto">
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
            How We Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-4">
            Our Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven methodology for Web3 marketing success
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connection line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative group"
              >
                {/* Connector dot */}
                <div className="absolute top-[88px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 group-hover:scale-125 transition-transform">
                  <div className="absolute inset-1 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Arrow to next */}
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute top-[84px] -right-3 w-4 h-4 text-primary/40" />
                )}

                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300"
                >
                  {/* Step number */}
                  <div className="text-xs font-bold text-primary/60 mb-4">
                    STEP {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  <h3 className="text-lg font-bold font-display text-foreground mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex gap-4 group"
            >
              {/* Left side - step indicator */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/30 to-transparent mt-2" />
                )}
              </div>

              {/* Right side - content */}
              <div className="flex-1 glass-card rounded-xl p-5 group-hover:border-primary/30 transition-colors">
                <div className="text-xs font-bold text-primary/60 mb-1">
                  STEP {step.step}
                </div>
                <h3 className="text-lg font-bold font-display text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
