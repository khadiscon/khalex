import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, ArrowRight, CheckCircle, AlertCircle, Loader2, Twitter, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const KOLApplication = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    twitter: '',
    followers: '',
    niche: '',
    experience: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { data, error } = await supabase.functions.invoke('send-kol-application', {
        body: formData,
      });

      if (error) throw error;

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        telegram: '',
        twitter: '',
        followers: '',
        niche: '',
        experience: '',
        message: '',
      });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error('KOL application error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClasses = "w-full px-4 py-3 bg-secondary/50 border border-primary/20 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:bg-secondary focus:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300 disabled:opacity-50";

  return (
    <section id="kol-application" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-primary/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 150, delay: 0.2, damping: 15 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-[0_10px_40px_hsl(var(--primary)/0.4)]"
            >
              <Users className="w-8 h-8 text-primary-foreground" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Join Our <span className="text-gradient">KOL Network</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Are you a Key Opinion Leader in the Web3 space? Partner with Kraven AI and amplify your influence.
            </p>
          </div>

          {/* Form Card */}
          <div className="glass-card rounded-2xl p-8 sm:p-10 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    disabled={status === 'loading' || status === 'success'}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    disabled={status === 'loading' || status === 'success'}
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Row 2: Telegram & Twitter */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Send className="w-4 h-4 inline mr-1" /> Telegram Handle *
                  </label>
                  <input
                    type="text"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    placeholder="@yourtelegram"
                    required
                    disabled={status === 'loading' || status === 'success'}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Twitter className="w-4 h-4 inline mr-1" /> Twitter/X Handle *
                  </label>
                  <input
                    type="text"
                    name="twitter"
                    value={formData.twitter}
                    onChange={handleChange}
                    placeholder="@yourtwitter"
                    required
                    disabled={status === 'loading' || status === 'success'}
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Row 3: Followers & Niche */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Total Followers *</label>
                  <select
                    name="followers"
                    value={formData.followers}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading' || status === 'success'}
                    className={inputClasses}
                  >
                    <option value="">Select range</option>
                    <option value="1K-10K">1K - 10K</option>
                    <option value="10K-50K">10K - 50K</option>
                    <option value="50K-100K">50K - 100K</option>
                    <option value="100K-500K">100K - 500K</option>
                    <option value="500K+">500K+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Primary Niche *</label>
                  <select
                    name="niche"
                    value={formData.niche}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading' || status === 'success'}
                    className={inputClasses}
                  >
                    <option value="">Select niche</option>
                    <option value="DeFi">DeFi</option>
                    <option value="NFTs">NFTs</option>
                    <option value="GameFi">GameFi</option>
                    <option value="Layer 1/2">Layer 1/2</option>
                    <option value="Trading">Trading</option>
                    <option value="General Crypto">General Crypto</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Experience */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">KOL Experience *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading' || status === 'success'}
                  className={inputClasses}
                >
                  <option value="">Select experience level</option>
                  <option value="Less than 1 year">Less than 1 year</option>
                  <option value="1-2 years">1-2 years</option>
                  <option value="2-3 years">2-3 years</option>
                  <option value="3+ years">3+ years</option>
                </select>
              </div>

              {/* Row 5: Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Why do you want to join Kraven AI?</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about yourself and why you'd be a great fit..."
                  rows={4}
                  disabled={status === 'loading' || status === 'success'}
                  className={inputClasses + " resize-none"}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full px-6 py-4 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
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
                      className="flex items-center gap-2"
                    >
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
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
                      Application Submitted!
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
                      Failed - Try Again
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
                      Submit Application
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Status messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-emerald-400 text-sm text-center"
                  >
                    🎉 Thank you! We'll review your application and get back to you within 48 hours.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-destructive text-sm text-center"
                  >
                    Something went wrong. Please try again or contact us on Telegram.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KOLApplication;
