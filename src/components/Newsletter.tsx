import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

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
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <div className="glass-card rounded-2xl p-8 sm:p-12 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Mail className="w-7 h-7 text-primary-foreground" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground text-center mb-3">
              Stay in the Loop
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-md mx-auto">
              Get weekly insights, case studies, and Web3 marketing strategies delivered to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="relative flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full px-5 py-4 bg-secondary/50 border border-primary/20 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:bg-secondary focus:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={`px-6 py-4 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 min-w-[140px] ${
                    status === 'success'
                      ? 'bg-emerald-500 text-white'
                      : status === 'error'
                      ? 'bg-destructive text-destructive-foreground'
                      : 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[0_10px_30px_hsl(var(--primary)/0.4)]'
                  }`}
                  whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                  whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                >
                  <AnimatePresence mode="wait">
                    {status === 'loading' && (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Loader2 className="w-5 h-5 animate-spin" />
                      </motion.div>
                    )}
                    {status === 'success' && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-5 h-5" />
                        Subscribed!
                      </motion.div>
                    )}
                    {status === 'error' && (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <AlertCircle className="w-5 h-5" />
                        Try Again
                      </motion.div>
                    )}
                    {status === 'idle' && (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        Subscribe
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>

              {/* Status messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-emerald-400 text-sm text-center mt-4"
                  >
                    🎉 Welcome aboard! Check your inbox for weekly Web3 insights.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-destructive text-sm text-center mt-4"
                  >
                    Something went wrong. Please try again or contact us directly.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>

            {/* Privacy note */}
            <p className="text-xs text-muted-foreground text-center mt-6">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Newsletter;
