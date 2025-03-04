// app/page.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '../header/page'; // Adjusted path assuming components folder
import { ArrowDownIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-gray-900 via-indigo-950 to-black text-white">
        {/* Hero Section */}
        <section id="home" className="pt-28 pb-20 px-4 relative overflow-hidden min-h-screen">
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

          <div className="max-w-7xl mx-auto relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="order-2 md:order-1"
              >
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                  Hi, I’m{' '}
                  <span className="bg-gradient-to-r from-indigo-400 to-teal-400 text-transparent bg-clip-text">
                    Prateek
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  A budding Full Stack Developer passionate about crafting innovative web solutions.
                </p>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r from-indigo-600 to-teal-500 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:from-indigo-700 hover:to-teal-600 transition-all duration-300"
                >
                  View Projects
                </motion.a>
              </motion.div>

              {/* Cartoon Image */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="order-1 md:order-2 relative"
              >
                <div className="relative w-full h-72 md:h-[500px]">
                  <Image
                    src="https://t3.ftcdn.net/jpg/06/00/86/26/360_F_600862676_U1qq7vSQKjghCXxz8WfNFA3VqXegARDk.jpg" // Placeholder: Replace with your cartoon image
                    alt="Prateek - Full Stack Developer"
                    fill
                    className="object-cover rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-3xl"></div>
                </div>
              </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
            >
              {[
                { number: '10+', label: 'Projects Built' },
                { number: '15+', label: 'Tech Skills' },
                { number: '5+', label: 'AWS Services Used' },
                { number: '∞', label: 'Learning Passion' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 text-center"
                >
                  <h3 className="text-4xl font-bold text-teal-400 mb-2">{item.number}</h3>
                  <p className="text-gray-300">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center"
        >
          <span className="text-gray-300 text-sm mb-2">Scroll</span>
          <div className="w-10 h-10 border-2 border-teal-400 rounded-full flex items-center justify-center">
            <ArrowDownIcon className="h-5 w-5 text-teal-400 animate-pulse" />
          </div>
        </motion.div>
      </main>
    </>
  );
}