import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-lg py-12">
      <div className="container-custom px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
          className="text-center space-y-4"
        >
          <div>
            <h3 className="text-2xl font-bold text-slate-100 mb-1">
              Anne Leina Lenku
            </h3>
            <p className="text-slate-400 font-medium">
              Software Engineer
            </p>
          </div>

          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Healthcare Technology • Nonprofit Innovation • Community Impact
          </p>

          <div className="pt-4 border-t border-slate-800/50">
            <p className="text-slate-600 text-sm">
              Copyright © {currentYear} Anne Leina Lenku. All rights reserved.
            </p>
          </div>

          <div className="pt-4 space-y-2">
            <p className="text-slate-700 text-xs">
              Based in Kajiado, Kenya
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}