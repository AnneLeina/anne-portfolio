import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Hope Emayian Organization Platform',
      problem:
        'Managing donations, volunteers, and community programs manually limited organizational efficiency.',
      solution:
        'Built a scalable digital platform allowing donor management, volunteer coordination, secure authentication, media storage, and online donations.',
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'TiDB', 'Cloudinary', 'PayPal', 'JWT'],
      impact:
        'Supports community programs serving underserved Maasai communities while laying foundation for white-label SaaS adoption.',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Employee Management System (EmployeeMS)',
      problem:
        'Organizations needed a modern system for managing employee data, leave requests, and administrative tasks.',
      solution:
        'Developed a production-ready dashboard with authentication, leave management, and administrative tools.',
      tech: ['React', 'Express', 'MySQL', 'JWT', 'Vite'],
      impact:
        'Delivered an intuitive management system with dark UI, CORS handling, and robust deployment pipeline.',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Healthcare IT Infrastructure',
      problem:
        'Healthcare institutions needed reliable systems for managing EHR/EMR, medical billing, and enterprise networks.',
      solution:
        'Designed and maintained enterprise infrastructure supporting high-stakes medical operations.',
      tech: ['EHR/EMR Systems', 'Medical Billing', 'Network Administration', 'Database Management'],
      impact:
        'Ensured reliable systems that reduced errors, improved operational efficiency, and saved lives.',
      demoUrl: null,
      githubUrl: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container-custom px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div variants={titleVariants} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-lg">
              Building systems that create measurable impact.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}