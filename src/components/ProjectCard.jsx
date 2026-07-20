import { motion } from 'framer-motion';
import { ExternalLink, Code2, Sparkles } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.15 },
    },
  };

  const imageVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.08, y: -5 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={cardVariants}
      whileHover="hover"
      className="group h-full"
    >
      <div className="relative h-full rounded-2xl overflow-hidden backdrop-blur-xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-green-500/20 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500/0 via-green-500 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Image section */}
        <motion.div
          className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800"
          variants={imageVariants}
          transition={{ duration: 0.3 }}
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 opacity-50" />

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-6">
            <motion.div
              className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/50 mb-4"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            <p className="text-slate-200 text-sm font-bold text-center">
              {project.title}
            </p>
          </div>
        </motion.div>

        {/* Content section */}
        <div className="relative z-10 flex-1 p-6 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-slate-100 to-slate-200 text-transparent bg-clip-text mb-3 group-hover:from-green-300 group-hover:to-emerald-300 transition-all">
            {project.title}
          </h3>

          {/* Problem & Solution */}
          <div className="mb-4 space-y-3 text-sm">
            <div>
              <p className="text-xs uppercase tracking-widest text-green-400 font-bold mb-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                Problem
              </p>
              <p className="text-slate-400 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                Solution
              </p>
              <p className="text-slate-400 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech stack */}
          <div className="mb-4">
            <p className="text-xs uppercase tracking-widest text-teal-400 font-bold mb-2 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1.5 bg-gradient-to-br from-slate-700/50 to-slate-800/50 text-slate-200 text-xs rounded-full border border-slate-600/50 hover:border-green-500/50 hover:from-slate-600 hover:to-slate-700 transition-all font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div className="mb-4 flex-1">
            <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
              Impact
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              {project.impact}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-4 border-t border-slate-700/50 mt-auto">
            {project.demoUrl && (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 3 }}
                className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 font-semibold transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: -3 }}
                className="ml-auto inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              >
                <Code2 className="w-4 h-4" />
                Code
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}