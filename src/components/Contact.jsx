import { motion } from 'framer-motion';
import { Mail, Code2, ArrowRight } from 'lucide-react';

export default function Contact() {
  const contactLinks = [
    {
      label: 'Email',
      value: 'annelenku@gmail.com',
      href: 'mailto:annelenku@gmail.com',
      color: 'text-red-400 hover:text-red-300',
      
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/annelenku',
      href: 'https://linkedin.com/in/annelenku',
      color: 'text-blue-400 hover:text-blue-300',
      
    },
    {
      label: 'GitHub',
      value: 'github.com/annelenku',
      href: 'https://github.com/anneleina',
      color: 'text-slate-300 hover:text-slate-100',
      
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
              Interested in Tech for Impact?
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 mb-8 leading-relaxed"
          >
            Let's collaborate on healthcare, nonprofit, or community-focused technology that creates lasting impact.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="mailto:annelenku@gmail.com"
              className="btn-primary inline-flex items-center justify-center gap-2 group"
            >
              <Mail className="w-4 h-4" />
              Email Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 md:p-10 mb-12 bg-slate-800/30"
          >
            <p className="text-slate-400 text-sm uppercase tracking-wider mb-6 font-semibold">
              Get in Touch
            </p>
            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel={link.href.startsWith('mailto') ? '' : 'noopener noreferrer'}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-800/50 transition-colors group"
                >
                  <div className={`text-2xl ${link.color}`}>
                    {link.icon}
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                      {link.label}
                    </p>
                    <p className="text-slate-200 font-medium group-hover:text-green-400 transition-colors">
                      {link.value}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-all" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-6">
            <motion.a
              href="https://github.com/annelenku"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-300 hover:text-green-400 hover:border-green-500/40 transition-all text-xl"
              title="GitHub"
            >
              💻
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/annelenku"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-all text-xl"
              title="LinkedIn"
            >
              💼
            </motion.a>
            <motion.a
              href="mailto:annelenku@gmail.com"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-300 hover:text-red-400 hover:border-red-500/40 transition-all text-xl"
              title="Email"
            >
              📧
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}