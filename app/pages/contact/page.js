// components/ContactSection.tsx
'use client';

import { motion } from 'framer-motion';
import { PaperAirplaneIcon, EnvelopeIcon, GlobeAltIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white relative overflow-hidden"
    >
      {/* Background Decorative Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ rotate: -45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        >
          <PaperAirplaneIcon className="h-64 w-64 text-indigo-400" />
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-12 tracking-tight">
            Get in{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-teal-400 text-transparent bg-clip-text">
              Touch
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to say hello, feel free to reach out. I’m always open to new opportunities and collaborations.
          </p>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 rounded-3xl p-8 shadow-2xl border border-indigo-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 rounded-3xl p-8 shadow-2xl border border-indigo-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Connect Directly</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-6 w-6 text-teal-400" />
                  <p className="text-gray-300">prateek1tri2@gmail.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <GlobeAltIcon className="h-6 w-6 text-teal-400" />
                  <p className="text-gray-300">
                    LinkedIn:{' '}
                    <a
                      href="https://www.linkedin.com/in/prateek-mani-tripathi-51935a259"
                      className="text-indigo-400 hover:underline"
                    >
                      Prateek Mani Tripathi
                    </a>
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <CodeBracketIcon className="h-6 w-6 text-teal-400" />
                  <p className="text-gray-300">
                    GitHub:{' '}
                    <a
                      href="https://github.com/prateekmtri"
                      className="text-indigo-400 hover:underline"
                    >
                      prateekmtri
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}