'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Custom SVG Icons ---
const AcademicCapIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l15.482 0m-15.482 0a50.57 50.57 0 01-2.658-.813m2.658.814a60.436 60.436 0 00.491 6.347" />
  </svg>
);

const CertificateIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const LinkIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
);

const CodeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
);

// --- Experience Data ---
const experiences = [
  {
    type: 'experience',
    title: 'Open Source & DSA Journey',
    milestone: 'Late 2025 - Early 2026',
    description: 'Embarked on a transformative journey into open source contributions and Data Structures & Algorithms. Started contributing to beginner-friendly projects and simultaneously launched my freelancing career to build real-world client projects.',
    skills: ['Open Source', 'Git & GitHub', 'DSA', 'Algorithms', 'Problem Solving', 'Freelancing', 'Client Communication'],
  },
  {
    type: 'experience',
    title: 'Generative AI Mastery',
    milestone: 'Mid 2025 - Present',
    description: 'Dived deep into the world of Generative AI, focusing on building autonomous agents and complex reasoning systems using LangChain and LangGraph.',
    skills: ['LangChain', 'LangGraph', 'Vector Stores', 'LCEL', 'Prompt Engineering', 'Agentic AI'],
  },
  {
    type: 'experience',
    title: 'Cloud & Advanced AWS',
    milestone: 'Early 2025 - Present',
    description: 'Expanded cloud expertise with advanced AWS services, focusing on scalable architecture, serverless computing, and infrastructure as code.',
    skills: ['AWS EC2', 'S3', 'Lambda', 'DynamoDB', 'VPC', 'Route 53', 'CloudFormation', 'Docker'],
  },
  {
    type: 'certifications',
    title: 'Professional Certifications',
    milestone: 'Continuous Learning',
    description: 'Formalized my skills with industry-recognized certifications from leading platforms.',
    items: [
        { name: 'React Native by Meta', link: 'https://www.coursera.org/' },
        { name: 'Back-End Apps by IBM', link: 'https://www.coursera.org/' },
        { name: 'Front-End Apps by IBM', link: 'https://www.coursera.org/' },
        { name: 'Advanced React by Meta', link: 'https://www.coursera.org/' },
    ],
  },
  {
    type: 'experience',
    title: 'Full-Stack Development',
    milestone: 'Early 2024 - Mid 2025',
    description: 'Built 8+ personal projects with the MERN stack & Next.js. Implemented real-time features using WebSockets and deployed apps on Netlify and Vercel.',
    skills: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'WebSocket', 'Firebase'],
  },
  {
    type: 'experience',
    title: 'Frontend Foundations',
    milestone: '2023 - 2024',
    description: 'Began my web development journey with HTML, CSS, and JavaScript. Transitioned to React and Next.js to craft dynamic, modern user interfaces.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'],
  },
];

// --- Clean & Elegant 3D Timeline Card ---
const ElegantTimelineCard = ({ data, index, isVisible }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        // Gentle 3D tilt effect
        const tiltX = (y - 0.5) * 10;
        const tiltY = (x - 0.5) * -10;
        
        cardRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (cardRef.current) {
            cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isVisible ? { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
            } : {}}
            className={`relative w-full max-w-4xl mx-auto mb-12 lg:mb-16
                        ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}
        >
            {/* Clean 3D Card */}
            <motion.div 
                ref={cardRef}
                className="relative bg-black/40 backdrop-blur-xl border border-cyan-400/30 
                          rounded-2xl overflow-hidden group cursor-pointer
                          shadow-lg hover:shadow-cyan-500/20 transition-all duration-500"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                    {/* Header */}
                    <div className="flex items-start space-x-4 sm:space-x-6 mb-6">
                        <motion.div 
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 sm:p-4 
                                      rounded-xl shadow-lg flex-shrink-0"
                            whileHover={{ 
                                scale: 1.1,
                                boxShadow: '0 0 25px rgba(0,255,255,0.4)',
                                transition: { duration: 0.3 }
                            }}
                        >
                            {data.type === 'experience' ? (
                                <AcademicCapIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                            ) : (
                                <CertificateIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                            )}
                        </motion.div>
                        
                        <div className="flex-1 min-w-0">
                            <motion.h3 
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2"
                                style={{ textShadow: '0 0 10px rgba(0,255,255,0.3)' }}
                            >
                                {data.title}
                            </motion.h3>
                            <p className="text-cyan-300 font-medium text-sm sm:text-base">
                                {data.milestone}
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <motion.p 
                        className="text-neutral-200 text-base sm:text-lg leading-relaxed mb-6"
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: 1, transition: { delay: 0.2 } } : {}}
                    >
                        {data.description}
                    </motion.p>
                    
                    {/* Skills */}
                    {data.type === 'experience' && (
                        <motion.div 
                            className="flex flex-wrap gap-2 sm:gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { 
                                opacity: 1, 
                                y: 0, 
                                transition: { delay: 0.3, staggerChildren: 0.05 }
                            } : {}}
                        >
                            {data.skills.map((skill, idx) => (
                                <motion.span 
                                    key={skill}
                                    className="bg-black/60 border border-cyan-400/50 text-cyan-300 
                                             text-xs sm:text-sm font-mono py-2 px-3 rounded-lg
                                             hover:bg-cyan-400/10 hover:border-cyan-400/70 
                                             transition-all duration-300"
                                    whileHover={{ 
                                        y: -2, 
                                        scale: 1.05,
                                        transition: { duration: 0.2 }
                                    }}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isVisible ? { 
                                        opacity: 1, 
                                        scale: 1,
                                        transition: { delay: 0.4 + idx * 0.05 }
                                    } : {}}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    )}

                    {/* Certifications */}
                    {data.type === 'certifications' && (
                        <motion.div 
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { 
                                opacity: 1, 
                                y: 0, 
                                transition: { delay: 0.3, staggerChildren: 0.1 }
                            } : {}}
                        >
                            {data.items.map((cert, idx) => (
                                <motion.a
                                    key={cert.name}
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 text-neutral-200 hover:text-cyan-300 
                                             font-medium text-sm sm:text-base transition-all duration-300
                                             p-3 sm:p-4 rounded-xl hover:bg-cyan-400/10 
                                             border border-transparent hover:border-cyan-400/30 group"
                                    whileHover={{ 
                                        x: 5,
                                        transition: { duration: 0.2 }
                                    }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isVisible ? { 
                                        opacity: 1, 
                                        x: 0,
                                        transition: { delay: 0.4 + idx * 0.1 }
                                    } : {}}
                                >
                                    <LinkIcon className="h-4 w-4 text-cyan-400 flex-shrink-0 
                                                       group-hover:scale-110 transition-transform duration-200" />
                                    <span className="flex-1">{cert.name}</span>
                                </motion.a>
                            ))}
                        </motion.div>
                    )}
                </div>

                {/* Subtle Depth Shadow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 
                               rounded-2xl -z-10 blur-lg opacity-50 group-hover:opacity-75 
                               transition-opacity duration-500"></div>
            </motion.div>
        </motion.div>
    );
};

// --- Clean & Professional Experience Section ---
export default function CleanExperienceSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center']
    });

    return (
        <section id="experience" className="relative py-16 sm:py-24 overflow-hidden bg-black">
            {/* Clean Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black"></div>
                
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]"
                     style={{
                         backgroundImage: `
                             linear-gradient(rgba(0,255,255,1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0,255,255,1) 1px, transparent 1px)
                         `,
                         backgroundSize: '60px 60px',
                     }}
                />
            </div>

            <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Clean Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center mb-16 lg:mb-24"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white"
                        style={{ textShadow: '0 0 20px rgba(0,255,255,0.3)' }}>
                        My Professional{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                            Journey
                        </span>
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                        A story of growth, learning, and building amazing things
                    </p>
                </motion.div>

                {/* Clean Timeline */}
                <div className="relative">
                    {/* Simple Central Line - Desktop Only */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px">
                        <motion.div
                            className="w-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500"
                            style={{
                                height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 opacity-30 blur-sm"></div>
                    </div>

                    {/* Timeline Cards */}
                    <div className="space-y-0">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className={`relative ${
                                    index % 2 === 0 
                                        ? 'lg:text-right lg:pr-12' 
                                        : 'lg:text-left lg:pl-12'
                                }`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {/* Clean Timeline Dot - Desktop Only */}
                                <motion.div
                                    className="hidden lg:block absolute top-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-600 
                                             rounded-full border-4 border-black shadow-lg z-20"
                                    style={{
                                        left: index % 2 === 0 ? 'calc(50% + 0.25rem)' : 'calc(50% - 1rem)',
                                        boxShadow: '0 0 15px rgba(0,255,255,0.6)',
                                    }}
                                    whileInView={{
                                        scale: [0.8, 1.1, 1],
                                    }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                />

                                <ElegantTimelineCard 
                                    data={exp} 
                                    index={index}
                                    isVisible={true}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Simple Bottom Message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-16 lg:mt-24"
                >
                    <p className="text-lg text-cyan-300 font-medium">
                        ✨ Ready to create something amazing together
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
