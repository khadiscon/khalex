import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';

const plans = [
  {
    id: 'builder',
    name: 'Builder',
    icon: Zap,
    monthlyPrice: 1500,
    quarterlyPrice: 3000,
    description: 'Perfect for new projects getting started',
    features: [
      'Basic Engagement on X Account',
      'Complete Discord Setup',
      'Organic Discord Chat Activity',
      '24/7 Moderator Support',
    ],
    popular: false,
    gradient: 'from-cyan-500 to-primary',
  },
  {
    id: 'premium',
    name: 'Premium',
    icon: Star,
    monthlyPrice: 3000,
    quarterlyPrice: 6000,
    description: 'Ideal for growing projects',
    features: [
      'Everything in Builder, plus:',
      'Enhanced Engagement Strategy',
      'Ambassador Program Management',
      'KOL Outreach & Coordination',
      'Weekly Strategy Calls',
    ],
    popular: true,
    gradient: 'from-primary to-accent',
  },
  {
    id: 'premium-plus',
    name: 'Premium Plus',
    icon: Crown,
    monthlyPrice: 10000,
    quarterlyPrice: 20000,
    description: 'For established projects ready to scale',
    features: [
      'Everything in Premium, plus:',
      'Top-Tier KOL Network Access',
      'Twitter Spaces Management',
      'Custom Ambassador Program',
      'Priority 24/7 Support',
      'Dedicated Account Manager',
    ],
    popular: false,
    gradient: 'from-accent to-purple-500',
  },
];

const Pricing = () => {
  const [isQuarterly, setIsQuarterly] = useState(false);

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Pricing
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-4">
            Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Choose the plan that fits your project's needs
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-2 rounded-full glass-card">
            <button
              onClick={() => setIsQuarterly(false)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                !isQuarterly
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            
            <button
              onClick={() => setIsQuarterly(true)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                isQuarterly
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              3 Months
              <span className="px-2 py-0.5 text-xs font-bold bg-primary-foreground/20 rounded-full">
                Save 33%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl p-8 overflow-hidden transition-all duration-500 ${
                plan.popular
                  ? 'glass-card border-primary bg-primary/5 shadow-[0_20px_60px_hsl(var(--primary)/0.2)]'
                  : 'glass-card hover:border-primary/30'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-bl-xl">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center shadow-lg`}>
                  <plan.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-primary/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isQuarterly ? 'quarterly' : 'monthly'}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-baseline gap-2"
                  >
                    {isQuarterly && (
                      <span className="text-lg text-muted-foreground line-through">
                        ${(plan.monthlyPrice * 3).toLocaleString()}
                      </span>
                    )}
                    <span className="text-4xl font-bold font-display text-foreground">
                      ${(isQuarterly ? plan.quarterlyPrice : plan.monthlyPrice).toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">
                      /{isQuarterly ? '3 months' : 'month'}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href={`https://t.me/marketmercenary?text=Hi Kraven AI, I'm interested in the ${plan.name} plan ($${isQuarterly ? plan.quarterlyPrice : plan.monthlyPrice}/${isQuarterly ? '3M' : 'month'}). Let's talk.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-4 text-center font-bold rounded-xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg hover:shadow-[0_10px_30px_hsl(var(--primary)/0.4)]'
                    : 'bg-secondary border border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary/40'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Custom plan note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-8"
        >
          Need a custom solution?{' '}
          <a href="#contact" className="text-primary hover:underline">
            Contact us
          </a>{' '}
          for tailored packages.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
