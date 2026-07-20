import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

export default function CompactProjectEMS() {
  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container-custom px-6 md:px-8">
        {/* Centered card */}
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-15 blur-2xl" />

          {/* Browser mockup */}
          <motion.div
            className="relative backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-600/30 shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-slate-950/60" />

            {/* Animated gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500" />

            {/* Browser header */}
            <div className="relative z-10 bg-slate-900/60 px-6 py-3 flex items-center gap-3 border-b border-slate-700/50">
              <div className="flex gap-2">
                <motion.div className="w-3 h-3 rounded-full bg-red-500" whileHover={{ scale: 1.2 }} />
                <motion.div className="w-3 h-3 rounded-full bg-yellow-500" whileHover={{ scale: 1.2 }} />
                <motion.div className="w-3 h-3 rounded-full bg-green-500" whileHover={{ scale: 1.2 }} />
              </div>
              <p className="text-sm text-slate-400 font-medium">Employee Management System</p>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 md:p-8 flex flex-col items-center justify-center min-h-64">
              {/* Icon */}
              <motion.div
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/50"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-7 h-7 bg-white/30 rounded-lg" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-black text-white mb-1">
                Employee Management
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-xs md:text-sm mb-2">
                Dashboard & Leave Management
              </p>

              {/* Tech */}
              <p className="text-slate-400 text-xs mb-4">
                React, Express & MySQL
              </p>

              {/* CTA Button */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 text-xs md:text-sm"
              >
                <Code2 className="w-4 h-4" />
                View Code
                <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}