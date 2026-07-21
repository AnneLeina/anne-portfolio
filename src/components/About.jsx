import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
        
        <div className="space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">
            I'm a Full-Stack Developer with 4+ years of experience building scalable systems for healthcare and nonprofit organizations. My journey in tech started with a passion for solving real-world problems through code.
          </p>

          <p className="text-lg leading-relaxed">
            With a Diploma in Information Technology and specialized knowledge in healthcare IT systems, I combine technical expertise with deep understanding of organizational needs. I've worked on everything from EHR/EMR systems to community-focused platforms.
          </p>

          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 my-8">
            <h3 className="text-green-400 font-bold mb-4">Key Expertise</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Full-stack development (React, Node.js, Express)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Database design & management (MySQL, TiDB)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Healthcare IT systems & EMR/EHR platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Cloud deployment & DevOps (AWS, Docker, Vercel)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Community-focused tech solutions</span>
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed">
            I believe technology should solve real problems—not create new ones. Whether building platforms for nonprofits serving marginalized communities or enterprise systems for healthcare providers, I'm committed to creating solutions that make a measurable impact.
          </p>

          <p className="text-lg leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring other developers in tech communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;