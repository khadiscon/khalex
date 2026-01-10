import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What services do you provide?',
    answer: 'We offer comprehensive marketing and community management services including KOL outreach, social media campaigns, community building on Discord and Telegram, Twitter Spaces hosting, and ongoing brand management for Web3 and crypto projects.',
  },
  {
    question: 'How long does a typical campaign take?',
    answer: "Campaign timelines vary based on project needs, but most campaigns run for 4-12 weeks with ongoing support available. We'll discuss specific timelines during our exploratory call to ensure we meet your launch deadlines and growth objectives.",
  },
  {
    question: 'What results can I expect?',
    answer: "Results vary by project goals and we're committed to delivering dedicated, high-quality service. Our track record includes generating 813M+ impressions across 11+ projects and building engaged communities of 800K+ members. We focus on consistent hard work, genuine engagement, and sustainable community growth.",
  },
  {
    question: 'How do you measure campaign success?',
    answer: 'We provide detailed analytics throughout and at the end of each campaign, tracking metrics like engagement rates, follower growth, impression volume, community activity, conversion rates, and ROI to ensure transparency and measurable results.',
  },
  {
    question: 'What makes Kraven AI different?',
    answer: 'We combine a vast network of 500+ verified KOLs, a 530K+ follower base, and deep Web3 expertise. Unlike generic agencies, we specialize exclusively in crypto and Web3 marketing, understanding the unique dynamics, culture, and community expectations of this space.',
  },
  {
    question: 'Do you offer custom packages?',
    answer: 'Absolutely! While we have 3 core packages designed around common project needs, we understand every project is unique. Contact us to discuss a custom solution tailored to your specific goals, budget, and timeline.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
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
            FAQ
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-4">
            Common Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about working with us
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-primary/40 bg-primary/5' : 'hover:border-primary/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 text-left flex justify-between items-center gap-4"
              >
                <h3 className={`text-lg font-semibold transition-colors ${
                  openIndex === index ? 'text-primary' : 'text-foreground'
                }`}>
                  {faq.question}
                </h3>
                <motion.div
                  initial={false}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === index
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground'
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed border-t border-primary/10 pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <motion.a
            href="https://t.me/marketmercenary"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
            whileHover={{ x: 5 }}
          >
            Chat with us on Telegram →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
