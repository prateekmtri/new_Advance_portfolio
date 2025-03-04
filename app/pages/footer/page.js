// components/FooterSection.tsx
'use client';

import { motion } from 'framer-motion';
import { EnvelopeIcon, ArrowUpIcon, CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Additional icons from react-icons

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 bg-gradient-to-br from-gray-900 via-indigo-950 to-black text-white overflow-hidden">
      {/* Glowing Stars Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-indigo-400 rounded-full opacity-20"
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

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Column 1: Brand & Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-extrabold text-white mb-4">
                <span className="bg-gradient-to-r from-indigo-400 to-teal-400 text-transparent bg-clip-text">
                  Prateek Mani Tripathi
                </span>
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Crafting innovative web solutions with passion and precision.
              </p>
              <ul className="space-y-3">
                {['About', 'Projects', 'Experience', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 2: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-xl font-bold text-white mb-4">Contact Me</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-teal-400" />
                  <p className="text-gray-300">prateek1tri2@gmail.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <GlobeAltIcon className="h-5 w-5 text-teal-400" />
                  <a
                    href="https://www.linkedin.com/in/prateek-mani-tripathi-51935a259"
                    className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                  >
                    Prateek Mani Tripathi
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <CodeBracketIcon className="h-5 w-5 text-teal-400" />
                  <a
                    href="https://github.com/prateekmtri"
                    className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                  >
                    prateekmtri
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Column 3: Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="text-xl font-bold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-6">
                <motion.a
                  href="https://www.linkedin.com/in/prateek-mani-tripathi-51935a259"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                >
                  <FaLinkedin className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://github.com/prateekmtri"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                >
                  <FaGithub className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://x.com/PrateekTri20851?t=QX9_-2m1eGsQ4h4ITJnqBQ&s=09"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                >
                  <FaTwitter className="h-6 w-6" />
                </motion.a>
              </div>
            </motion.div>

            {/* Column 4: Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4 className="text-xl font-bold text-white mb-4">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to get the latest updates on my projects and insights.
              </p>
              <form className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
                <button
                  type="submit"
                  className="py-2 bg-gradient-to-r from-indigo-600 to-teal-500 text-white font-bold rounded-lg hover:from-indigo-700 hover:to-teal-600 transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

          {/* Copyright & Back to Top */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Your Name. All rights reserved.
            </p>
            <motion.a
              href="#top"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-4 md:mt-0 flex items-center space-x-2 text-indigo-400 hover:text-teal-400 transition-colors duration-300"
            >
              <ArrowUpIcon className="h-5 w-5" />
              <span>Back to Top</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}