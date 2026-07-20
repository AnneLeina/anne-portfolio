import { motion } from 'framer-motion';
import { Hospital, Zap, Users, Database } from 'lucide-react';

export default function Background() {
  const experiences = [
    {
      icon: Hospital,
      title: 'Healthcare IT Administration',
      description: 'Managed EHR/EMR systems in high-stakes environments',
    },
    {
      icon: Database,
      title: 'Medical Billing Systems',
      description: 'Optimized billing workflows and infrastructure',
    },
    {
      icon: Users,
      title: 'Enterprise Networks',
      description: 'Designed and maintained hospital-scale infrastructure',
    },
    {
      icon: Zap,
      title: 'Technical Infrastructure',
      description: 'Built reliable systems that reduce errors and save lives',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="background" className="py-20 md:py-28 bg-slate-900/30">
      <div className="container-custom px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
              Healthcare IT Foundation
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            variants={containerVariants}
          >
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass rounded-xl p-6 md:p-8 hover:border-green-500/40 transition-all hover:bg-slate-800/40"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-500/20 rounded-lg">
                      <Icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100 mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-slate-400">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass rounded-xl p-8 md:p-10 border-l-4 border-green-500 bg-slate-800/30"
          >
            <p className="text-slate-100 text-lg leading-relaxed mb-4">
              Before becoming a software developer, I worked in healthcare IT administration where I managed:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-slate-300 flex items-center gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Electronic Health Record (EHR/EMR) systems
              </li>
              <li className="text-slate-300 flex items-center gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Medical billing workflows
              </li>
              <li className="text-slate-300 flex items-center gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Hospital networks and infrastructure
              </li>
              <li className="text-slate-300 flex items-center gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Technical systems supporting patient care
              </li>
            </ul>
            <p className="text-slate-200 font-semibold text-lg">
              This experience shaped how I approach software:
            </p>
            <p className="text-green-400 text-xl font-bold mt-3">
              Reliable systems save time, reduce errors, and improve lives.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}