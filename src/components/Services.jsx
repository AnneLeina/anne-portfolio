import React from 'react';
import {
  Mail,
  CalendarCheck,
  FileText,
  Search,
  Database,
  LifeBuoy,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

const services = [
  {
    icon: Mail,
    title: 'Inbox & Calendar Management',
    description:
      'Sorting and replying to email, scheduling meetings, managing reminders and keeping your week organised.',
  },
  {
    icon: CalendarCheck,
    title: 'Travel & Appointment Booking',
    description:
      'Researching and booking travel, accommodation, appointments and reservations, with itineraries in one place.',
  },
  {
    icon: FileText,
    title: 'Document & Admin Support',
    description:
      'Drafting, formatting and proofreading documents, letters, CVs and presentations, plus filing and record keeping.',
  },
  {
    icon: Database,
    title: 'Data Entry & Spreadsheets',
    description:
      'Accurate data entry, cleaning and organising information, and building simple trackers and reports.',
  },
  {
    icon: Search,
    title: 'Online Research',
    description:
      'Finding and summarising information, comparing options and preparing clear briefs so you can decide quickly.',
  },
  {
    icon: LifeBuoy,
    title: 'Tech & Website Help',
    description:
      'Setting up tools and accounts, helping with your website or online shop, and fixing everyday tech problems.',
  },
];

const steps = [
  { title: 'Tell me what you need', text: 'Send a short message about the tasks you want off your plate.' },
  { title: 'We agree the scope', text: 'We settle the tasks, hours and how we will communicate.' },
  { title: 'I take it from there', text: 'I handle the work and keep you updated on progress.' },
];

const Services = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm uppercase tracking-widest text-white font-bold">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Virtual Assistance for Private Clients
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Reliable, discreet remote support for busy professionals, founders and individuals who
            want their time back.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-white/50 transition-colors"
            >
              <Icon className="text-white mb-4" size={28} />
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-slate-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="mt-10 flex items-start gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 max-w-3xl mx-auto">
          <ShieldCheck className="text-white flex-shrink-0 mt-1" size={26} />
          <p className="text-slate-300 leading-relaxed">
            <span className="font-bold text-white">Confidential by default.</span> With a background
            in healthcare IT, I am used to handling sensitive information carefully. Your emails,
            documents and personal details stay private.
          </p>
        </div>

        {/* How it works */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">How it works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                <div className="w-9 h-9 rounded-full bg-white text-slate-950 font-bold flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{s.title}</h4>
                <p className="text-slate-400">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="mailto:annelenku@gmail.com?subject=Virtual%20Assistance%20Enquiry"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-200 text-slate-950 rounded-lg font-semibold transition"
          >
            Enquire about virtual assistance
            <ArrowRight size={18} />
          </a>
          <button
            onClick={scrollToContact}
            className="ml-4 text-slate-300 hover:text-white underline underline-offset-4 transition"
          >
            Or use the contact form
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;