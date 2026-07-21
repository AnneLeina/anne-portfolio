import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const downloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = '/Leina_Anne_CV_.pdf';
    link.download = 'Leina_Anne_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition"
            >
              AL
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {['about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              
              {/* CV Download Button */}
              <button
                onClick={downloadCV}
                className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition flex items-center gap-2 font-semibold"
              >
                <Download size={18} />
                CV
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={downloadCV}
              className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
              title="Download CV"
            >
              <Download size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {['about', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <button
              onClick={() => {
                downloadCV();
                setIsOpen(false);
              }}
              className="w-full mt-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition flex items-center gap-2 font-semibold justify-center"
            >
              <Download size={18} />
              Download CV
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;