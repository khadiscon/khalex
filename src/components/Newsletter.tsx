import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/xlgeoddp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto glass-card rounded-2xl p-10 sm:p-14 text-center hover:border-primary/30 transition-all duration-300"
      >
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
          Stay Updated on Web3 Marketing
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Get weekly insights, case studies, and strategies delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-6 py-4 bg-white/5 border-2 border-primary/20 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all duration-300"
          />

          <motion.button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className={`w-full py-4 font-bold text-lg rounded-xl transition-all duration-300 ${
              status === 'success'
                ? 'bg-emerald-500 text-white'
                : 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[0_10px_30px_hsl(var(--primary)/0.4)]'
            }`}
            whileHover={status !== 'success' ? { scale: 1.02 } : {}}
            whileTap={status !== 'success' ? { scale: 0.98 } : {}}
          >
            {status === 'loading' && 'Subscribing...'}
            {status === 'success' && '✓ Subscribed!'}
            {status === 'error' && 'Try Again'}
            {status === 'idle' && 'Subscribe'}
          </motion.button>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-emerald-400"
            >
              ✅ Thank you for subscribing! You'll receive weekly Web3 marketing insights.
            </motion.p>
          )}

          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400"
            >
              ❌ Something went wrong. Please try again or contact @marketmercenary
            </motion.p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Newsletter;