import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite', 'Tailwind CSS'],
      color: 'from-blue-500/20 to-cyan-500/20',
      accentColor: 'text-blue-400',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs', 'JWT Authentication', 'Database Design'],
      color: 'from-green-500/20 to-emerald-500/20',
      accentColor: 'text-green-400',
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'TiDB Serverless', 'Query Optimization', 'Database Recovery'],
      color: 'from-purple-500/20 to-pink-500/20',
      accentColor: 'text-purple-400',
    },
    {
      title: 'Deployment & DevOps',
      skills: ['Vercel', 'Environment Configuration', 'Git', 'GitHub', 'Production Debugging','Railway'],
      color: 'from-orange-500/20 to-red-500/20',
      accentColor: 'text-orange-400',
    },
    {
      title: 'Integrations',
      skills: ['Cloudinary', 'PayPal APIs', 'Third-party APIs', 'Webhooks'],
      color: 'from-indigo-500/20 to-blue-500/20',
      accentColor: 'text-indigo-400',
    },
    {
      title: 'Engineering',
      skills: ['Production Debugging', 'System Architecture', 'API Design', 'Performance Optimization'],
      color: 'from-teal-500/20 to-green-500/20',
      accentColor: 'text-teal-400',
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
    <section id="skills" className="py-20 md:py-28">
      <div className="container-custom px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-slate-400 text-lg">
              A comprehensive toolkit for building scalable solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`glass rounded-xl p-6 md:p-8 bg-gradient-to-br ${category.color} hover:border-green-500/40 transition-all group`}
              >
                <h3 className={`text-xl font-bold ${category.accentColor} mb-4`}>
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-slate-800/60 text-slate-200 text-sm rounded-full border border-slate-600/40 hover:border-green-500/60 hover:text-green-300 transition-all cursor-pointer hover:bg-slate-700/60"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <div className="glass rounded-xl p-8 md:p-10 border-t border-green-500/20">
              <p className="text-slate-300 text-lg leading-relaxed">
                <span className="text-green-400 font-semibold">Beyond technologies:</span> I bring
                expertise in database architecture, deployment strategies, third-party integrations, and
                production-level debugging. Every tool I use is chosen to solve specific problems and
                create measurable impact.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}