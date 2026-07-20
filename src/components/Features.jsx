import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      title: 'Outcome Driven',
      description: 'I focus on solving business problems—not simply building features.'
    },
    {
      title: 'Healthcare Mindset',
      description: 'Experience in healthcare IT taught me to prioritize reliability, scalability, and real-world usability.'
    },
    {
      title: 'End-to-End Ownership',
      description: 'From planning and architecture to deployment and production debugging, I take ownership of the complete software lifecycle.'
    },
    {
      title: 'Global Collaboration',
      description: 'Based in Nairobi, Kenya, I work comfortably across multilingual and multicultural environments.'
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container-custom px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
            <span className="text-sm uppercase tracking-widest text-green-400 font-bold">My Approach</span>
            <motion.div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            What Drives My Work
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Four core principles that guide everything I build
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-green-500/50 backdrop-blur-sm transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-black text-white mb-3 group-hover:text-green-400 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-base leading-relaxed group-hover:text-slate-300 transition-colors">
                {feature.description}
              </p>

              {/* Hover accent line */}
              <motion.div
                className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-4 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}