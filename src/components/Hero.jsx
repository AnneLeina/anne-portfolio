import { motion } from 'framer-motion';
import { ArrowRight, Code2, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden pt-24 pb-8 md:pt-32 md:pb-4">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        
        {/* Animated orbs */}
        <motion.div
          className="absolute top-20 -left-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute -bottom-40 right-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container-custom px-6 md:px-8 relative z-10">
        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Content - Takes up more space */}
          <motion.div
            className="space-y-6 max-w-xl lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 w-fit">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-green-300">Available Now</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="block text-white">Full-Stack</span>
                <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-transparent bg-clip-text">
                  Developer
                </span>
                <span className="block text-white">Impact Tech</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                Building scalable systems for healthcare and nonprofit organizations
              </p>
            </div>

            {/* Quote */}
            <div className="pl-6 border-l-4 border-green-500">
              <p className="text-base text-slate-300 italic">
                "Technology should solve real problems—not create new ones."
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-base leading-relaxed max-w-lg">
              I build scalable, user-centered software for healthcare institutions, nonprofit organizations, and community-driven initiatives across Africa.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <a
                href="#projects"
                className="group px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 text-sm md:text-base"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border-2 border-green-500/50 text-green-300 font-bold rounded-lg hover:bg-green-500/10 hover:border-green-400 transition-all inline-flex items-center justify-center text-sm md:text-base"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>

          {/* Right Side - Cards Stacked Vertically (PUSHED RIGHT & SMALLER) */}
          <motion.div
            className="hidden lg:flex flex-col gap-6 justify-start w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Hope Emayian Card - Top */}
            <div className="relative w-full">
              {/* Glow background */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-md opacity-15 blur-lg" />

              {/* Laptop frame */}
              <motion.div
                className="relative bg-slate-900 rounded-md overflow-hidden border border-slate-700/50 shadow-md"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {/* Browser bar */}
                <div className="bg-slate-800 px-3 py-1.5 flex items-center gap-1.5 border-b border-slate-700/50">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  </div>
                  <p className="text-xs text-slate-400 ml-2">Hope Emayian</p>
                </div>

                {/* Screen */}
                <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-3">
                  <div className="text-center">
                    <motion.div
                      className="w-8 h-8 mx-auto mb-1.5 rounded bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-md shadow-green-500/50"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-4 h-4 bg-white/20 rounded-full" />
                    </motion.div>
                    <p className="text-slate-200 text-xs font-semibold">
                      Donor & Volunteer
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5">
                      React, Node.js & MySQL
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Employee Management Card - Bottom */}
            <div className="relative w-full">
              {/* Glow effect */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md opacity-10 blur-lg" />

              {/* Browser mockup */}
              <motion.div
                className="relative backdrop-blur-xl rounded-md overflow-hidden border border-slate-600/30 shadow-md"
                animate={{ y: [0, -5, 0] }}
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
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500" />

                {/* Browser header */}
                <div className="relative z-10 bg-slate-900/60 px-3 py-1.5 flex items-center gap-1.5 border-b border-slate-700/50">
                  <div className="flex gap-1">
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-red-500" whileHover={{ scale: 1.2 }} />
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-yellow-500" whileHover={{ scale: 1.2 }} />
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-green-500" whileHover={{ scale: 1.2 }} />
                  </div>
                  <p className="text-xs text-slate-400 font-medium">Employee Management</p>
                </div>

                {/* Content */}
                <div className="relative z-10 p-3 flex flex-col items-center justify-center min-h-40">
                  {/* Icon */}
                  <motion.div
                    className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-1.5 shadow-md shadow-blue-500/50"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-4 h-4 bg-white/30 rounded" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xs md:text-sm font-black text-white mb-0.5">
                    Employee Management
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-xs mb-0.5">
                    Dashboard & Leave
                  </p>

                  {/* Tech */}
                  <p className="text-slate-400 text-xs mb-2">
                    React, Express & MySQL
                  </p>

                  {/* CTA Button */}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-slate-950 font-bold rounded hover:shadow-md hover:shadow-blue-500/50 transition-all hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-1 text-xs"
                  >
                    <Code2 className="w-2.5 h-2.5" />
                    View Code
                    <ExternalLink className="w-2 h-2 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}