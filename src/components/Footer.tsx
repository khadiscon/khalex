import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-primary/10 bg-background/50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-center sm:text-left">
          <div className="text-2xl font-bold font-display text-gradient mb-1">
            KRAVEN
          </div>
          <p className="text-sm text-muted-foreground">
            @2024 kraven all rights reserved
          </p>
        </div>

        <div className="flex gap-4">
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
            whileHover={{ y: -3 }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </motion.a>

          <motion.a
            href="https://t.me/marketmercenary"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
            whileHover={{ y: -3 }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;