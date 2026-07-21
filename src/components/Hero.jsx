import React, { useState } from 'react';
import { ArrowRight, Menu, X, Download } from 'lucide-react';

const ProjectCard = ({ title, description, tech }) => {
  return (
    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-4 text-white shadow-lg hover:shadow-xl transition">
      <h3 className="text-base font-bold mb-1">{title}</h3>
      <p className="text-white/85 text-xs mb-2 leading-tight">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tech.map((t, i) => (
          <span key={i} className="text-xs bg-white/25 px-2 py-0.5 rounded-full font-medium">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Leina_Anne_CV_.pdf';
    link.download = 'Leina_Anne_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* INLINE NAVIGATION */}
      <nav className="fixed w-full top-0 z-50 bg-gradient-to-b from-slate-950/95 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo/Name */}
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-green-400 hover:text-green-300 transition"
            >
              Anne Leina
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 gap-8">
              {['about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-green-400 transition font-medium capitalize text-sm"
                >
                  {item}
                </button>
              ))}
              
              {/* CV Download Button */}
              <button
                onClick={downloadCV}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition flex items-center gap-2 font-semibold text-sm"
              >
                <Download size={16} />
                CV
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-300 hover:text-green-400"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {['about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-green-400 hover:bg-gray-800/50 rounded-lg transition capitalize text-sm"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => {
                  downloadCV();
                  setIsOpen(false);
                }}
                className="w-full px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition flex items-center gap-2 font-semibold justify-center text-sm"
              >
                <Download size={16} />
                Download CV
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex items-center bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT: Hero Text */}
            <div className="space-y-6">
              
              {/* Status Indicators */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <p className="text-gray-300 font-medium text-sm">Open for Collaborations</p>
                </div>
                
                {/* Available Now Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-green-400/50 rounded-full bg-green-400/10">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 font-semibold text-xs">Available Now</span>
                </div>
              </div>

              {/* Main Headline */}
              <div>
                <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-4">
                  <span className="text-white">Full-Stack</span>
                  <br />
                  <span className="text-green-400">Developer</span>
                  <br />
                  <span className="text-white">Impact Tech</span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-base text-gray-300 max-w-lg leading-relaxed mb-6">
                  Building scalable systems for healthcare and nonprofit organizations
                </p>

                {/* Quote */}
                <div className="border-l-4 border-green-400 pl-4">
                  <p className="text-sm text-gray-300 italic">
                    "Technology should solve real problems—not create new ones."
                  </p>
                </div>
              </div>

              {/* CTA Buttons - Side by Side */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 border-2 border-green-400 text-green-400 hover:bg-green-400/10 font-bold rounded-lg transition flex items-center gap-2 group"
                >
                  View My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border-2 border-green-400 text-green-400 hover:bg-green-400/10 font-bold rounded-lg transition"
                >
                  Get in Touch
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-700/50">
                <div>
                  <p className="text-2xl font-bold text-green-400 mb-1">4+</p>
                  <p className="text-gray-400 text-xs">Years in Tech</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-400 mb-1">7+</p>
                  <p className="text-gray-400 text-xs">Projects Built</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-400 mb-1">100%</p>
                  <p className="text-gray-400 text-xs">Commitment</p>
                </div>
              </div>
            </div>

            {/* RIGHT: Cards + Tech Stack */}
            <div className="space-y-6">
              {/* Project Cards - Smaller, Both Green */}
              <div className="space-y-2">
                <ProjectCard
                  title="Hope Emayian Platform"
                  description="Donor & volunteer management system for Maasai CBO"
                  tech={['React', 'Node.js', 'MySQL', 'PayPal']}
                />
                
                <ProjectCard
                  title="Employee Management System"
                  description="Full-stack HR dashboard with leave & attendance tracking"
                  tech={['React', 'Express', 'JWT', 'UI/UX']}
                />
              </div>

              {/* Tech Stack - 2 Column Grid with Portfolio Colors */}
              <div className="bg-gray-900/30 border border-gray-700/50 rounded-2xl p-4">
                <p className="text-gray-300 text-sm font-semibold mb-4">TECH STACK</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: 'React', color: 'blue' },
                    { name: 'Node.js', color: 'blue' },
                    { name: 'MySQL', color: 'blue' },
                    { name: 'Git', color: 'blue' },
                    { name: 'Docker', color: 'blue' },
                    { name: 'AWS', color: 'blue' }
                  ].map((tech, i) => (
                    <div key={i} className={`px-3.5 py-2.5 rounded-lg font-semibold text-sm text-center hover:scale-105 transition ${
                      tech.color === 'blue' 
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                        : 'bg-green-500/20 text-green-400 border border-green-500/30'
                    }`}>
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;