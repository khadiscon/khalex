import { motion } from 'framer-motion';
import { Phone, FileText, Rocket, Settings, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Exploratory Call',
    description: 'We start with an exploratory call to understand your brand, objectives, and target market. This helps us develop a tailored proposal that meets your unique requirements.',
  },
  {
    icon: FileText,
    title: 'Customized Proposal',
    description: 'Using the insights from the discovery call, we develop a custom proposal that outlines the project details, schedules, and expected outcomes.',
  },
  {
    icon: Rocket,
    title: 'Campaign Initiatives',
    description: 'Once the proposal is accepted, we commence your campaign by launching a personalized Discord server, organizing your brand, and ensuring all prerequisites are in place.',
  },
  {
    icon: Settings,
    title: 'Continuous Management',
    description: "Our services don't end with the launch. We offer ongoing assistance to guarantee that your brand's visibility stays robust and your campaigns consistently achieve results.",
  },
  {
    icon: BarChart3,
    title: 'Analysis and Reporting',
    description: 'Throughout the campaign, we provide detailed analytics and stats both during and at the end, delivering comprehensive reports on performance and outcomes.',
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute w-72 h-72 rounded-full bg-primary/10 blur-[100px] top-1/4 right-1/4 animate-float" />
      </div>

      <div className="relative z-10 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-4">
            Our Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven methodology for Web3 marketing success
          </p>
        </motion.div>
      </div>

      {/* Scrolling cards container */}
      <div className="overflow-hidden group">
        <div className="flex gap-6 animate-scroll-cards hover:[animation-play-state:paused] py-8">
          {/* Duplicate the cards for seamless loop */}
          {[...steps, ...steps].map((step, index) => (
            <motion.div
              key={`${step.title}-${index}`}
              className="min-w-[380px] max-w-[380px] glass-card rounded-2xl p-8 relative overflow-hidden group/card hover:border-primary/40 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_25px_70px_hsl(var(--primary)/0.3)] flex-shrink-0"
              whileHover={{ scale: 1.03 }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="relative z-10 text-center">
                <motion.div
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-[0_15px_40px_hsl(var(--primary)/0.4)] group-hover/card:scale-110 transition-transform duration-500"
                >
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </motion.div>

                <h3 className="text-xl font-bold font-display text-gradient mb-4">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
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