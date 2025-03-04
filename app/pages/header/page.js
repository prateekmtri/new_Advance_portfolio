// components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Social icons for extra flair
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/pages/about' },
  { name: 'Projects', path: '/pages/project' },
  { name: 'Experience', path: '/pages/experince' },
  { name: 'Contact', path: '/pages/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-gray-900/90 via-indigo-950/90 to-black/90 backdrop-blur-lg shadow-lg">
      {/* Glowing Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-teal-400 rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
            }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity }}
          />
        ))}
      </div>

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-extrabold text-white bg-gradient-to-r from-indigo-400 to-teal-400 text-transparent bg-clip-text"
            >
              Portfolio
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.path}
                  className="text-gray-300 text-lg font-medium hover:text-white hover:bg-indigo-500/20 px-3 py-2 rounded-lg transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </motion.div>
            ))}
            {/* Hire Me Button */}
           
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-teal-400 focus:outline-none transition-colors duration-300"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            className="md:hidden absolute top-20 left-0 w-full bg-gray-900/95 backdrop-blur-lg py-6"
          >
            <div className="flex flex-col items-center space-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 text-xl font-medium hover:text-teal-400 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-teal-600 transition-all duration-300"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}