import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

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
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center gap-4"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <Plus className="w-5 h-5 text-primary" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;