'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const GlobeAltIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 7.5L4.5 12" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 7.5l15 4.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
  </svg>
);
const CodeBracketIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25" />
  </svg>
);

const projects = [
  {
    id: 1,
    title: 'SkillExchange',
    description:
      'A full-stack skill-bartering application with real-time chat using Socket.io and a "SkillScout" GenAI assistant for 24/7 user support.',
    tech: ['Next.js', 'React', 'Node.js', 'Socket.io', 'JWT', 'MongoDB', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Reliable image URL
    liveLink: 'https://skill-exchanger.vercel.app/pages/Home', // Update live link as needed
    githubLink: 'https://github.com/prateekmtri/skill_exchanger_frontend', // Update GitHub link as needed
  },
  {
    id: 2,
    title: 'Barber Shop Platform',
    description:
      'A flagship full-stack application with real-time appointment booking. Integrated NextAuth and JWT for secure authentication, and EmailJS for notifications.',
    tech: ['Next.js', 'NextAuth', 'JWT', 'Node.js', 'Express', 'MongoDB', 'WebSocket', 'EmailJS'],
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    liveLink: 'http://update-barber-shop.vercel.app',
    githubLink: 'https://github.com/prateekmtri/Update_barber_shop',
  },
  {
    id: 3,
    title: 'AI Bot',
    description:
      'An AI-powered bot leveraging FastAPI backend and WebSocket for real-time conversational capabilities, providing natural and dynamic user interactions.',
    tech: ['Python', 'FastAPI', 'WebSocket', 'AI', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    liveLink: 'https://full-voice-agent-pro.onrender.com/',
    githubLink: 'https://github.com/prateekmtri/full_voice_agent_pro',
  },
  {
    id: 4,
    title: 'Crop Management System',
    description:
      'A modern MERN stack application designed for efficient crop management, including real-time data and analysis for better agricultural decisions.',
    tech: ['MongoDB', 'Express', 'React.js', 'Node.js', 'JWT'],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    liveLink: 'https://crop-management-full.vercel.app/',
    githubLink: 'https://github.com/prateekmtri/crop-management-full',
  },
  {
    id: 5,
    title: 'AWS Project - EC2, EBS, Load Balancer, AMI',
    description:
      'An AWS infrastructure project utilizing EC2 instances, EBS storage, load balancing, and AMI automation to deploy scalable cloud applications.',
    tech: ['AWS EC2', 'EBS', 'Load Balancer', 'AMI'],
    image: '',
    liveLink: '',
    githubLink: 'https://github.com/prateekmtri/aws-high-availability-project',
  },
  {
    id: 6,
    title: 'AWS Project - S3, DynamoDB, Lambda, IAM',
    description:
      'A serverless AWS project leveraging S3 for storage, DynamoDB for database, Lambda for compute, and IAM for secure access control.',
    tech: ['AWS S3', 'DynamoDB', 'Lambda', 'IAM'],
    image: '',
    liveLink: '',
    githubLink: 'https://github.com/prateekmtri/aws-project',
  },
];

const ProjectCard = ({ project }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const rotateX = useTransform(springY, [-200, 200], [10, -10]);
  const rotateY = useTransform(springX, [-200, 200], [-10, 10]);

  const handleMouseMove = (event) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      x.set(event.clientX - rect.left - rect.width / 2);
      y.set(event.clientY - rect.top - rect.height / 2);
    }
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="h-full bg-black/70 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/10 flex flex-col group" style={{ transform: 'translateZ(20px)' }}>
        {project.image && project.image.length > 0 && (
          <div className="relative w-full h-48 sm:h-56 mb-6 rounded-xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
        )}
        <div className="flex flex-col flex-grow">
          <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 mb-3">
            {project.title}
          </h3>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span key={tech} className="bg-cyan-900/50 text-cyan-300 text-xs font-mono py-1 px-3 rounded-md border border-cyan-800">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center flex-wrap gap-4 mt-auto">
            {project.liveLink && project.liveLink !== '' && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="relative inline-block px-5 py-2.5 text-sm font-semibold tracking-wider text-white bg-black border-2 border-cyan-400 rounded-lg overflow-hidden group z-10">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 ease-out transform -translate-x-full group-hover:translate-x-0"></span>
                <span className="relative flex items-center">
                  <GlobeAltIcon className="h-4 w-4 mr-2" /> Live Demo
                </span>
              </a>
            )}
            {project.githubLink && project.githubLink !== '' && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold tracking-wider text-cyan-400 bg-transparent border-2 border-neutral-700 rounded-lg overflow-hidden group transition-colors hover:text-white">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-cyan-600/50 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="relative z-10 flex items-center">
                  <CodeBracketIcon className="h-4 w-4 mr-2" /> GitHub
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen py-24 sm:py-32">
      <div className="absolute inset-0 bg-black/70 [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-center space-y-4 mb-16 mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center tracking-tighter" style={{ textShadow: '0 0 20px rgba(0,255,255,0.4)' }}>
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Creations
            </span>
          </h2>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            A selection of my work, showcasing my journey in building intelligent and creative web solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16" style={{ perspective: '2000px' }}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
