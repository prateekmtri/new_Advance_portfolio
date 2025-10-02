'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- SVG Icons (No external libraries needed) ---
const FaLinkedin = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 53.79-54.3c29.7 0 53.79 24.2 53.79 54.3a53.79 53.79 0 0 1-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
);

const FaGithub = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.1-6.5 69 27.1 20-5.6 41.6-8.3 62.4-8.3 20.8 0 42.4 2.8 62.4 8.3 47.9-33.6 69-27.1 69-27.1 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.3 104.2-114.6 110.2 9.3 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.9 1.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4.2-3.2-5.9-1z"></path></svg>
);

const FaEnvelope = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
);


// --- React Component ---

const navItems = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Projects', path: '#projects' },
  { name: 'Experience', path: '#experience' },
  { name: 'Contact', path: '#contact' },
];

const useScrollDirection = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return show;
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const showNavbar = useScrollDirection();

  useEffect(() => {
    const sections = navItems.map(item => document.querySelector(item.path)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const visibleSection = navItems.find(item => item.path === `#${entry.target.id}`);
            if(visibleSection) {
              setActiveSection(visibleSection.name);
            }
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach(section => section && observer.observe(section));
    return () => sections.forEach(section => section && observer.unobserve(section));
  }, []);

  const headerVariants = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    hidden: { y: -100, opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } },
  };

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const GlitchyNavLink = ({ name, path, isActive, onClick }) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const [text, setText] = useState(name);

    const handleHover = () => {
      let iterations = 0;
      const interval = setInterval(() => {
        setText(prev => prev.split("").map((_, index) => {
            if (index < iterations) {
              return name[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          }).join(""));

        if (iterations >= name.length) clearInterval(interval);
        iterations += 1 / 3;
      }, 30);
    };

    return (
        <a
            href={path}
            onClick={onClick}
            onMouseEnter={handleHover}
            onMouseLeave={() => setText(name)}
            className="relative text-lg font-mono px-4 py-2 text-neutral-300 hover:text-cyan-300 transition-colors duration-300"
        >
            {text}
            {isActive && (
                <motion.div
                    layoutId="active-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
            )}
        </a>
    );
  };

  return (
    <motion.header
      variants={headerVariants}
      animate={showNavbar ? "visible" : "hidden"}
      className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-xl border-b border-neutral-800"
    >
      <div className="absolute inset-0 h-full w-full bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <a href="#home" className="text-2xl font-bold font-mono text-white tracking-wider">
              Prateek <span className="text-cyan-400">M.</span> Tripathi
            </a>
          </motion.div>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
                <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                    <GlitchyNavLink name={item.name} path={item.path} isActive={activeSection === item.name} />
                </motion.div>
            ))}
          </div>

           <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="hidden md:flex items-center space-x-6">
                <a href="https://www.linkedin.com/in/prateek-mani-tripathi-51935a259/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-cyan-400 transition-colors duration-300">
                    <FaLinkedin size={22} />
                </a>
                <a href="https://github.com/prateekmtri" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-cyan-400 transition-colors duration-300">
                    <FaGithub size={22} />
                </a>
                 <a href="prateek1tri2@gmail.com" className="text-neutral-400 hover:text-cyan-400 transition-colors duration-300">
                    <FaEnvelope size={22} />
                </a>
            </motion.div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8 text-neutral-300 focus:outline-none"
            >
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute h-0.5 w-6 bg-current" style={{ top: '10px' }}/>
              <motion.div
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.1 }}
                className="absolute h-0.5 w-6 bg-current" style={{ top: '16px' }}/>
              <motion.div
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
                 transition={{ duration: 0.3 }}
                className="absolute h-0.5 w-6 bg-current" style={{ top: '22px' }}/>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden absolute top-20 left-0 w-full bg-black/90 backdrop-blur-lg pb-10"
          >
            <div className="flex flex-col items-center space-y-8 pt-4">
              {navItems.map(item => (
                <motion.div key={item.path} variants={menuItemVariants}>
                  <a
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-mono ${activeSection === item.name ? 'text-cyan-400' : 'text-neutral-300'} transition-colors duration-300`}
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
              <motion.div variants={menuItemVariants} className="flex space-x-8 pt-4">
                 <a href="https://www.linkedin.com/in/prateek-mani-tripathi-9221ab251/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-cyan-400 transition-colors duration-300">
                    <FaLinkedin size={28} />
                </a>
                <a href="https://github.com/prateek-271" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-cyan-400 transition-colors duration-300">
                    <FaGithub size={28} />
                </a>
                 <a href="mailto:prateek1tri2@gmail.com" className="text-neutral-400 hover:text-cyan-400 transition-colors duration-300">
                    <FaEnvelope size={28} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

