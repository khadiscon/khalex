import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    id: 'builder',
    name: 'Builder',
    monthlyPrice: 1500,
    quarterlyPrice: 3000,
    features: [
      'Basic Engagement on X Account',
      'Setting up Discord',
      'Keeping Discord chat alive organically',
      'Presence of Moderators for Support',
    ],
    popular: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    monthlyPrice: 3000,
    quarterlyPrice: 6000,
    features: [
      'Basic Engagement on X Account',
      'Setting up Discord',
      'Keeping Discord chat alive',
      'Presence of Moderators',
      'Ongoing Marketing Plan with Ambassadors',
    ],
    popular: true,
  },
  {
    id: 'premium-plus',
    name: 'Premium Plus',
    monthlyPrice: 10000,
    quarterlyPrice: 20000,
    features: [
      'Basic Engagement on X Account',
      'Setting up Discord',
      'Keeping Discord chat alive',
      'Presence of Moderators',
      'Top-Tier KOLs with Real Communities',
      'Ongoing Twitter Spaces & Ambassador Program',
    ],
    popular: false,
  },
];

const Pricing = () => {
  const [isQuarterly, setIsQuarterly] = useState(false);

  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-4">
            Pricing Plans
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Choose the plan that fits your project's needs
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`font-medium transition-colors ${!isQuarterly ? 'text-primary' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            
            <button
              onClick={() => setIsQuarterly(!isQuarterly)}
              className="relative w-16 h-8 rounded-full bg-secondary border border-primary/20 transition-colors"
            >
              <motion.div
                className="absolute top-1 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg"
                animate={{ left: isQuarterly ? '34px' : '4px' }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            
            <span className={`font-medium transition-colors ${isQuarterly ? 'text-primary' : 'text-muted-foreground'}`}>
              3 Months
              <span className="ml-2 px-2 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full animate-bounce">
                Save 33%
              </span>
            </span>
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
              whileHover={{ y: -10 }}
              className={`glass-card rounded-2xl p-8 relative overflow-hidden transition-all duration-500 ${
                plan.popular
                  ? 'border-primary bg-primary/10 scale-105 shadow-[0_20px_60px_hsl(var(--primary)/0.3)]'
                  : 'glass-card-hover'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-6 -right-8 bg-gradient-to-r from-primary to-accent text-primary-foreground px-10 py-1 text-xs font-bold uppercase tracking-wider rotate-45">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold font-display text-primary mb-6">
                {plan.name}
              </h3>

              <div className="mb-8">
                <motion.div
                  key={isQuarterly ? 'quarterly' : 'monthly'}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-baseline gap-2"
                >
                  {isQuarterly && (
                    <span className="text-xl text-muted-foreground line-through">
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
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={`https://t.me/marketmercenary?text=Hi Kraven AI, I'm interested in the ${plan.name} plan ($${isQuarterly ? plan.quarterlyPrice : plan.monthlyPrice}/${isQuarterly ? '3M' : 'month'}). Let's talk.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 text-center bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-full hover:shadow-[0_10px_30px_hsl(var(--primary)/0.4)] transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;