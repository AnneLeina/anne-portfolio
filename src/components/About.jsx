import { motion } from 'framer-motion';
import { Award, Zap, Target } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950" />
      <motion.div
        className="absolute -right-40 top-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container-custom px-6 md:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-4xl"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                layoutId="sectionLine"
              />
              <span className="text-sm uppercase tracking-widest text-green-400 font-bold">About Me</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white to-slate-300 text-transparent bg-clip-text">
              Who I Am
            </h2>
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            {/* Main intro */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed"
            >
              I solve real problems for real organizations.
            </motion.p>

            {/* Story paragraph */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-slate-400 leading-relaxed">
                My journey began in healthcare IT administration, where I managed{' '}
                <span className="text-emerald-300 font-semibold">EHR/EMR systems</span>,{' '}
                <span className="text-emerald-300 font-semibold">medical billing infrastructure</span>, and{' '}
                <span className="text-emerald-300 font-semibold">enterprise networks</span> in high-stakes
                environments.
              </p>
            </motion.div>

            {/* Key insight box */}
            <motion.div
              variants={itemVariants}
              className="relative my-8 p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-slate-700/50 group"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50" />

              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-200 font-semibold text-lg mb-2">
                      Working inside healthcare taught me an important lesson:
                    </p>
                    <div className="space-y-2">
                      <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-green-300 to-emerald-300 text-transparent bg-clip-text">
                        Technology isn't about features.
                      </p>
                      <p className="text-3xl md:text-4xl font-black text-white">
                        It's about outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Current work */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-slate-400 leading-relaxed">
                Today, I design and build end-to-end digital platforms that nonprofits, healthcare
                institutions, and community-based organizations can confidently use, maintain, and scale.
              </p>
            </motion.div>

            {/* Key statement */}
            <motion.div
              variants={itemVariants}
              className="relative p-6 rounded-xl bg-gradient-to-r from-slate-800/30 to-slate-900/30 border border-slate-700/50 group hover:border-green-500/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-lg font-bold text-slate-100 mb-1">
                    I don't just build software.
                  </p>
                  <p className="text-xl font-black bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">
                    I build systems that people depend on.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Three pillars */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-800"
            >
              {[
                { icon: Award, label: 'Experienced', desc: 'Healthcare IT background' },
                { icon: Zap, label: 'Technical', desc: 'Full-stack development' },
                { icon: Target, label: 'Impact-Driven', desc: 'Real-world solutions' },
              ].map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="p-4 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-green-500/50 transition-all group"
                  >
                    <Icon className="w-8 h-8 text-green-400 mb-3 group-hover:scale-110 transition-transform" />
                    <p className="font-bold text-slate-100 mb-1">{pillar.label}</p>
                    <p className="text-sm text-slate-400">{pillar.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}