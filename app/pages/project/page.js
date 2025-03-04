// components/ProjectsSection.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

// Updated project data based on your three main projects
const projects = [
  {
    title: 'Barber Shop Platform',
    description:
      'A flagship full-stack application built with Next.js, featuring real-time appointment booking and slot availability using WebSockets. Integrated NextAuth and JWT for secure authentication, Node.js + Express for the backend, and EmailJS for notifications. All data is stored in MongoDB.',
    tech: ['Next.js', 'NextAuth', 'JWT', 'Node.js', 'Express', 'MongoDB', 'WebSocket', 'EmailJS'],
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Placeholder: Barber-related image
    liveLink: 'https://full-stack-barber.vercel.app', // Replace with your live link
    githubLink: 'https://github.com/prateekmtri/full-stack-barber', // Replace with your GitHub link
  },
  {
    title: 'JWT Authentication System',
    description:
      'A secure authentication system built with the MERN stack, utilizing JWT for user authentication. Stores user data in MongoDB with a focus on backend security and seamless frontend integration.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Placeholder: Tech-related image
    liveLink: 'https://stellular-tulumba-c97ed4.netlify.app', // Replace with your live link
    githubLink: 'https://github.com/prateekmtri/mern', // Replace with your GitHub link
  },
  {
    title: 'Duo Studio Website',
    description:
      'A visually stunning website crafted with HTML, CSS, and JavaScript, featuring a plethora of animations to enhance user experience. Designed with creativity and responsiveness in mind.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Placeholder: Creative design image
    liveLink: 'https://stunning-sable-672cec.netlify.app', // Replace with your live link
    githubLink: 'https://github.com/prateekmtri/duo-project', // Replace with your GitHub link
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-950 to-black text-white py-32 relative overflow-hidden"
    >
      {/* Glowing Stars Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-teal-400 rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-20 tracking-tight">
            My{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-teal-400 text-transparent bg-clip-text">
              Creations
            </span>
          </h2>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.3, ease: 'easeOut' }}
                whileHover={{ scale: 1.05, y: -15 }}
                className="relative group bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-indigo-500/20 hover:shadow-teal-500/30 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-teal-600/20 text-teal-300 text-xs font-medium px-3 py-1 rounded-full border border-teal-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-6 pt-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-400 hover:text-indigo-200 font-semibold text-sm transition-colors duration-300"
                    >
                      <GlobeAltIcon className="h-5 w-5 mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white font-semibold text-sm transition-colors duration-300"
                    >
                      <CodeBracketIcon className="h-5 w-5 mr-2" />
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}