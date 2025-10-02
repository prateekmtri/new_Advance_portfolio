'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// --- Custom SVG Icons ---
const ArrowUpIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
  </svg>
);
const FaLinkedin = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 53.79-54.3c29.7 0 53.79 24.2 53.79 54.3a53.79 53.79 0 0 1-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
);
const FaGithub = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.1-6.5 69 27.1 20-5.6 41.6-8.3 62.4-8.3 20.8 0 42.4 2.8 62.4 8.3 47.9-33.6 69-27.1 69-27.1 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.3 104.2-114.6 110.2 9.3 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.9 1.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4.2-3.2-5.9-1z"></path></svg>
);
const FaTwitter = (props) => (
    <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
);


// --- Footer Section Component ("The Command Deck") ---
export default function FooterSection() {
    const sectionRef = useRef(null);
    const currentYear = new Date().getFullYear();

    // Mouse-tracking 3D effect ke liye
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const rotateX = useTransform(springY, [-300, 300], [5, -5]);
    const rotateY = useTransform(springX, [-300, 300], [-5, 5]);

    const handleMouseMove = (event) => {
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            x.set(event.clientX - rect.left - rect.width / 2);
            y.set(event.clientY - rect.top - rect.height / 2);
        }
    };
    const handleMouseLeave = () => {
        x.set(0); y.set(0);
    };

    return (
        <footer 
            ref={sectionRef} 
            id="footer" 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave}
            className="relative py-20 sm:py-24 overflow-hidden"
        >
            <div className="absolute inset-0 bg-black/70 [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_70%)]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ perspective: '2000px' }}>
                <motion.div
                    style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                >
                    <div className="bg-black/70 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-cyan-500/10" style={{transform: 'translateZ(40px)'}}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {/* Column 1: Brand & Quick Links */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                        Prateek M. Tripathi
                                    </span>
                                </h3>
                                <p className="text-neutral-400 text-sm mb-6">
                                    Architect of Intelligent Systems & Full-Stack Developer.
                                </p>
                                <ul className="space-y-2">
                                    {['home', 'about', 'projects', 'experience', 'contact'].map((link) => (
                                        <li key={link}>
                                            <a href={`#${link}`} className="text-neutral-300 hover:text-cyan-300 transition-colors duration-300 capitalize text-sm">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column 2 & 3: Social Links */}
                            <div className="lg:col-span-2">
                                <h4 className="text-xl font-bold text-white mb-4">Connect With Me</h4>
                                <div className="flex space-x-6">
                                     <a href="https://www.linkedin.com/in/prateek-mani-tripathi-9221ab251/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110">
                                        <FaLinkedin size={24} />
                                    </a>
                                    <a href="https://github.com/prateek-271" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110">
                                        <FaGithub size={24} />
                                    </a>
                                    <a href="https://x.com/PrateekTri20851?t=QX9_-2m1eGsQ4h4ITJnqBQ&s=09" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110">
                                        <FaTwitter size={24} />
                                    </a>
                                </div>
                            </div>
                            
                            {/* Column 4: Newsletter */}
                            <div>
                                <h4 className="text-xl font-bold text-white mb-4">Stay Updated</h4>
                                <p className="text-neutral-400 text-sm mb-4">
                                    Get insights on my latest projects and tech explorations.
                                </p>
                                <form className="flex">
                                    <input
                                        type="email"
                                        placeholder="your.email@example.com"
                                        className="w-full p-2 bg-neutral-900/50 text-white text-sm rounded-l-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="py-2 px-4 bg-cyan-600 text-white font-bold text-sm rounded-r-lg hover:bg-cyan-500 transition-colors duration-300"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>

                         <div className="mt-12 pt-8 border-t border-cyan-400/10 text-center text-neutral-500 text-sm">
                            <p>&copy; {currentYear} Prateek Mani Tripathi. All rights reserved.</p>
                         </div>
                    </div>
                </motion.div>

                 {/* "Return to Ship" Button */}
                <motion.a 
                    href="#home"
                    whileHover={{ scale: 1.1, boxShadow: '0 0 25px rgba(0, 255, 255, 0.5)' }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center border-4 border-black shadow-lg"
                    aria-label="Back to Top"
                >
                    <ArrowUpIcon className="w-8 h-8 text-black"/>
                </motion.a>
            </div>
        </footer>
    );
}
