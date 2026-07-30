import { motion } from "framer-motion";
import { ExternalLink, Code2, Sparkles } from "lucide-react";

export default function FeaturedProject() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden py-20 md:py-32 flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        {/* Animated orbs */}
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container-custom px-6 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                  layoutId="sectionLine"
                />
                <span className="text-sm uppercase tracking-widest text-green-400 font-bold">
                  Featured Project
                </span>
              </div>

              <h2 className="text-6xl md:text-7xl font-black leading-tight">
                <span className="block text-white">Hope Emayian</span>
                <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-transparent bg-clip-text">
                  Organization
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 text-lg text-slate-400 leading-relaxed">
              <p>
                A full-stack donor and volunteer management platform developed
                for Hope Emayian Organization, serving Maasai communities in
                Kajiado County.
              </p>
              <p>
                <span className="text-green-400 font-semibold">
                  Transforming nonprofits
                </span>{" "}
                with digital solutions that empower communities, streamline
                operations, and create lasting impact.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Donor Management", },
                { label: "Volunteer Coordination",  },
                { label: "Secure Payments", },
                { label: "Community Impact", },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-green-500/50 transition-all group"
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <p className="text-sm font-medium text-slate-300 group-hover:text-green-300 transition-colors">
                    {feature.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2"
              >
                <Code2 className="w-5 h-5" />
                View Code
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-8 py-4 border-2 border-green-500/50 text-green-300 font-bold rounded-lg hover:bg-green-500/10 hover:border-green-400 transition-all inline-flex items-center justify-center"
              >
                Get Demo
              </a>
            </div>

            {/* Tech Stack */}
            <div className="pt-8 border-t border-slate-800">
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">
                Built With
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Node.js",
                  "Express",
                  "MySQL",
                  "TiDB",
                  "Cloudinary",
                  "PayPal",
                  "JWT",
                ].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-slate-800/60 text-slate-300 text-xs rounded-full border border-slate-600/50 hover:border-green-500/50 font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Floating Card */}
          <motion.div
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              {/* Outer glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl opacity-20 blur-3xl" />

              {/* Main card */}
              <motion.div
                className="relative backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-600/30 shadow-2xl"
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-slate-950/60" />

                {/* Animated inner gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500" />

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 flex flex-col items-center justify-center min-h-96">
                  {/* Icon */}
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6 shadow-xl shadow-green-500/50"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Text content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-3xl md:text-4xl font-black text-white">
                      Hope Emayian
                    </h3>

                    <p className="text-lg text-slate-300 font-semibold">
                      Donor & Volunteer Platform
                    </p>

                    <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                      Serving Maasai communities with digital solutions for
                      nonprofits
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-6">
                      <div className="backdrop-blur-sm bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="text-2xl font-black text-green-400">
                          100%
                        </div>
                        <div className="text-xs text-slate-400">Uptime</div>
                      </div>
                      <div className="backdrop-blur-sm bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="text-2xl font-black text-emerald-400">
                          Real-time
                        </div>
                        <div className="text-xs text-slate-400">Updates</div>
                      </div>
                      <div className="backdrop-blur-sm bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="text-2xl font-black text-teal-400">
                          Secure
                        </div>
                        <div className="text-xs text-slate-400">Payments</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA in card */}
                  <div className="flex gap-3 mt-8 w-full">
                    <a
                      href="https://github.com"
                      className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-slate-950 font-bold rounded-lg hover:shadow-lg transition-all text-sm text-center"
                    >
                      Explore
                    </a>
                    <a
                      href="#contact"
                      className="flex-1 py-3 border-2 border-green-500/50 text-green-300 font-bold rounded-lg hover:bg-green-500/10 transition-all text-sm text-center"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Corner decorations */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 bg-green-500 rounded-full opacity-20 blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <motion.div
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-emerald-500 rounded-full opacity-15 blur-2xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
