import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-primary/10 via-accent/10 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-6">
            Ready to Elevate Your Project?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10">
            Let's discuss how we can help you achieve your Web3 marketing goals.
          </p>

          <motion.a
            href="https://t.me/marketmercenary?text=Hi Kraven AI, I'd like to schedule an exploratory call to discuss my project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg rounded-full shadow-[0_10px_40px_hsl(var(--primary)/0.4)] hover:shadow-[0_15px_50px_hsl(var(--primary)/0.6)] hover:-translate-y-1 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;