import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    avatar: 'https://raw.githubusercontent.com/khadiscon/kravenai/main/Screenshot 2025-12-28 042050.png',
    text: "Kraven AI transformed our token launch. Their KOL network and community building expertise helped us build a thriving engaged community. Absolutely phenomenal dedication and results!",
    author: 'Satya',
    role: 'CEO, CryptoVentures',
  },
  {
    avatar: 'https://raw.githubusercontent.com/khadiscon/kravenai/main/Screenshot 2025-12-28 053000.png',
    text: "Working with Kraven AI was a game-changer for our project. Their strategic approach and attention to detail resulted in massive engagement growth and community expansion. Highly recommend their dedication!",
    author: 'PRUDENT 📊🔺(♟️,♟️)',
    role: 'Founder, DeFi Innovations',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-4">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="glass-card rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].author}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-6 border-3 border-primary shadow-[0_5px_20px_hsl(var(--primary)/0.3)]"
              />

              <p className="text-lg sm:text-xl text-muted-foreground italic leading-relaxed mb-8 max-w-2xl mx-auto">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="text-lg font-semibold text-primary">
                {testimonials[currentIndex].author}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {testimonials[currentIndex].role}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary scale-125'
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;