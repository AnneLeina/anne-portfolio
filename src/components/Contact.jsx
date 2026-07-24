import React, { useState } from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:annelenku@gmail.com?subject=${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-gray-300 text-lg">
            Have a project in mind? Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-green-400 mb-6">Get in Touch</h3>

            {/* Email */}
            <a 
              href="mailto:annelenku@gmail.com"
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-800/50 transition group"
            >
              <Mail className="text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 transition" size={24} />
              <div>
                <p className="text-gray-400 text-sm font-semibold">Email</p>
                <p className="text-white font-medium group-hover:text-green-400 transition">annelenku@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a 
              href="tel:+254711410982"
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-800/50 transition group"
            >
              <Phone className="text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 transition" size={24} />
              <div>
                <p className="text-gray-400 text-sm font-semibold">Phone</p>
                <p className="text-white font-medium group-hover:text-green-400 transition">+254 711 410 982</p>
              </div>
            </a>

            {/* Socials */}
            <div>
              <p className="text-gray-400 text-sm font-semibold mb-4">Connect</p>
              <div className="flex gap-4">
                {/* GitHub */}
                <a
                  href="https://github.com/AnneLeina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 hover:bg-green-500/20 border border-gray-700 hover:border-green-400/50 rounded-lg transition flex items-center justify-center group"
                  title="GitHub"
                >
                  <span className="text-gray-300 group-hover:text-green-400 transition font-bold">GH</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/anne-l-375ab9282/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 hover:bg-blue-500/20 border border-gray-700 hover:border-blue-400/50 rounded-lg transition flex items-center justify-center group"
                  title="LinkedIn"
                >
                  <span className="text-gray-300 group-hover:text-blue-400 transition font-bold text-sm">in</span>
                </a>

                {/* Email Direct */}
                <a
                  href="mailto:annelenku@gmail.com"
                  className="p-3 bg-gray-800/50 hover:bg-green-500/20 border border-gray-700 hover:border-green-400/50 rounded-lg transition flex items-center justify-center group"
                  title="Email"
                >
                  <Mail className="text-gray-300 group-hover:text-green-400 transition" size={24} />
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-4">
              <p className="text-green-400 font-semibold text-sm">💚 Quick Response</p>
              <p className="text-gray-300 text-sm mt-1">I typically respond within 24 hours</p>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-green-400 focus:outline-none transition resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition flex items-center justify-center gap-2 group"
              >
                Send Message
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </button>

              {submitted && (
                <p className="text-green-400 text-center font-semibold">✓ Email opened! Send your message</p>
              )}
            </form>

            {/* Alternative */}
            <div className="mt-6 p-4 bg-gray-800/30 border border-gray-700 rounded-lg text-center">
              <p className="text-gray-400 text-sm">Or reach out directly:</p>
              <a href="mailto:annelenku@gmail.com" className="text-green-400 font-semibold hover:underline">
                annelenku@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;