// components/AboutSection.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BriefcaseIcon, CodeBracketIcon, CloudIcon, CpuChipIcon } from '@heroicons/react/24/outline';

export default function AboutSection() {
  return (
    <section
      id="about"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 tracking-tight">
            About{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-teal-400 text-transparent bg-clip-text">
              Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Cartoon Image */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative w-full h-[450px] group"
            >
              <div className="absolute inset-0 bg-indigo-500/20 rounded-3xl transform rotate-6 transition-transform duration-300 group-hover:rotate-3"></div>
              <Image
                src="https://t3.ftcdn.net/jpg/06/00/86/26/360_F_600862676_U1qq7vSQKjghCXxz8WfNFA3VqXegARDk.jpg" // Placeholder: Replace with your cartoon
                alt="Prateek - Full Stack Developer"
                fill
                className="object-cover rounded-3xl relative z-10 shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-teal-500 text-white text-sm font-semibold px-3 py-1 rounded-full z-20">
                Full-Stack Enthusiast
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="space-y-8"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Full-Stack Developer & Cloud Explorer
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I’m Prateek, a fresher with a strong foundation in full-stack development and cloud technologies. I’m passionate about building scalable web applications using the MERN stack, integrating real-time features with WebSockets, and deploying solutions on AWS. With hands-on experience in modern tools and DevOps basics, I’m eager to turn innovative ideas into reality.
              </p>

              {/* Experience Timeline */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-indigo-600 p-3 rounded-full shadow-lg">
                    <BriefcaseIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-white">My Journey</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2 text-base">
                      <li>Developed multiple projects using MERN, Next.js, and Firebase</li>
                      <li>Explored AWS services like EC2, S3, and Lambda for cloud deployment</li>
                      <li>Mastered GitHub, Netlify, and Vercel for version control and hosting</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-indigo-600 p-3 rounded-full shadow-lg">
                    <CpuChipIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-white">Skill Set</h4>
                    <div className="grid grid-cols-2 gap-3 mt-3">
                      {[
                        'React.js',
                        'Next.js',
                        'Node.js',
                        'MongoDB',
                        'WebSocket',
                        'AWS',
                        'Docker',
                        'Firebase',
                        'JWT',
                        'NextAuth',
                      ].map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05, y: -3 }}
                          className="bg-gray-800 px-4 py-2 rounded-lg shadow-md text-teal-300 font-medium text-center border border-teal-500/30 hover:bg-teal-500/20 transition-all duration-300"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Specializations */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-indigo-500/20 hover:shadow-teal-500/30 transition-all duration-300"
                >
                  <CloudIcon className="h-10 w-10 text-indigo-400 mb-3" />
                  <h4 className="font-semibold text-lg text-white mb-2">Cloud & DevOps</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Skilled in AWS (EC2, S3, Lambda, DynamoDB) and Docker, with basics in networking and Linux.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-indigo-500/20 hover:shadow-teal-500/30 transition-all duration-300"
                >
                  <CodeBracketIcon className="h-10 w-10 text-indigo-400 mb-3" />
                  <h4 className="font-semibold text-lg text-white mb-2">Full-Stack Development</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Proficient in MERN, real-time apps with WebSocket, and authentication with JWT/NextAuth.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}