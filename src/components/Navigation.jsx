import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navigation({ scrollPosition }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollPosition > 50);
  }, [scrollPosition]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Background', href: '#background' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom px-6 md:px-8 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-col gap-1">
          <a
            href="#home"
            className="text-2xl font-black bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text hover:from-green-300 hover:to-teal-300 transition-all"
          >
            Anne Leina
          </a>
          <div className="flex items-center gap-2">
            <motion.span
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs text-slate-400">
              Open for Collaborations
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-slate-300 hover:text-slate-100 font-medium text-sm transition-colors group"
            >
              {link.name}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all hover:scale-105 active:scale-95"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-slate-300" />
          ) : (
            <Menu className="w-6 h-6 text-slate-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-lg"
        >
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-300 hover:text-green-400 font-medium py-2 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-slate-950 font-bold rounded-lg text-center hover:shadow-lg transition-all"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}