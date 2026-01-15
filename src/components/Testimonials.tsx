import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import satyaAvatar from '@/assets/testimonial-satya.png';
import prudentAvatar from '@/assets/testimonial-prudent.png';

const testimonials = [
  {
    avatar: satyaAvatar,
    text: "Kraven AI transformed our token launch. Their KOL network and community building expertise helped us build a thriving engaged community. Absolutely phenomenal dedication and results!",
    author: 'Satya',
    role: 'CEO, CryptoVentures',
    rating: 5,
  },
  {
    avatar: prudentAvatar,
    text: "Working with Kraven AI was a game-changer for our project. Their strategic approach and attention to detail resulted in massive engagement growth and community expansion. Highly recommend!",
    author: 'PRUDENT 📊🔺(♟️,♟️)',
    role: 'Founder, DeFi Innovations',
    rating: 5,
  },
  {
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    text: "The team's understanding of Web3 culture and community dynamics is unmatched. They delivered consistent results month after month, helping us reach our growth targets ahead of schedule.",
    author: 'Alex Chen',
    role: 'CMO, BlockTech Labs',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrentIndex((prev) => {
      if (dir === 1) return (prev + 1) % testimonials.length;
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden">
      {/* Background - hidden on mobile */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        </div>
      )}

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-4">
            Client Success Stories
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from projects we've helped grow
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="glass-card rounded-2xl p-8 sm:p-12 relative overflow-hidden min-h-[320px]">
            {/* Quote icon */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-8 text-center max-w-2xl mx-auto">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/30 shadow-lg"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-foreground">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className="p-2 flex items-center justify-center"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <span
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-primary/30 hover:bg-primary/50'
                    }`}
                  />
                </button>
              ))}
            </div>

            <motion.button
              onClick={() => navigate(1)}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
