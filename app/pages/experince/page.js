// components/ExperienceSection.tsx
'use client';

import { motion } from 'framer-motion';
import { BriefcaseIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function ExperienceSection() {
  // Updated experience data based on your learning timeline
  const experiences = [
    {
      role: 'Cloud & AWS Exploration',
      milestone: 'Early 2025 - Present',
      description:
        'Started exploring cloud technologies with AWS services like EC2, S3, Lambda, and DynamoDB. Began learning Docker for containerization and applying basic networking and Linux commands to build DevOps skills.',
      skills: ['AWS EC2', 'S3', 'Lambda', 'DynamoDB', 'Docker', 'Linux'],
    },
    {
      role: 'Full-Stack Development',
      milestone: 'Early 2024 - Present',
      description:
        'Expanded into full-stack development, building 8+ personal projects with the MERN stack, Next.js, and Firebase. Implemented real-time features using WebSockets and deployed apps on Netlify and Vercel.',
      skills: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'WebSocket', 'Firebase'],
    },
    {
      role: 'Frontend Foundations',
      milestone: '2023 - Present',
      description:
        'Began my web development journey with HTML, CSS, and JavaScript, creating 5+ responsive projects. Transitioned to React and Next.js to craft dynamic, modern user interfaces.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-950 to-black text-white py-32 relative overflow-hidden"
    >
      {/* Glowing Stars Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-20 tracking-tight">
            My{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-teal-400 text-transparent bg-clip-text">
              Journey
            </span>
          </h2>

          <div className="relative space-y-12">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-500 to-teal-500 h-full rounded-full opacity-50"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.3, ease: 'easeOut' }}
                whileHover={{ scale: 1.03 }}
                className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full`}
              >
                {/* Card */}
                <div
                  className={`w-full md:w-5/12 bg-gray-800 rounded-3xl p-6 shadow-2xl hover:shadow-indigo-500/30 transition-all duration-500 border border-indigo-500/20 ${
                    index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-indigo-600 p-3 rounded-full shadow-lg">
                      <BriefcaseIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-indigo-400 font-semibold">{exp.milestone}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-teal-600/20 text-teal-300 text-xs font-medium px-3 py-1 rounded-full border border-teal-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 ${
                    index % 2 === 0 ? 'right-[calc(50%-1rem)]' : 'left-[calc(50%-1rem)]'
                  } w-6 h-6 bg-indigo-500 rounded-full border-4 border-gray-900 shadow-lg z-10`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    className="w-full h-full bg-teal-400 rounded-full"
                  />
                </div>

                {/* Connecting Arrow */}
                <ChevronRightIcon
                  className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-8 text-indigo-500 opacity-70 ${
                    index % 2 === 0 ? 'right-[calc(50%-2rem)]' : 'left-[calc(50%-2rem)]'
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}