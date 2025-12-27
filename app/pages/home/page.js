'use client';


import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useScroll } from 'framer-motion';


// --- Enhanced SVG Icons ---
const FaLinkedin = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 53.79-54.3c29.7 0 53.79 24.2 53.79 54.3a53.79 53.79 0 0 1-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
  </svg>
);


const FaGithub = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.1-6.5 69 27.1 20-5.6 41.6-8.3 62.4-8.3 20.8 0 42.4 2.8 62.4 8.3 47.9-33.6 69-27.1 69-27.1 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.3 104.2-114.6 110.2 9.3 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.9 1.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4.2-3.2-5.9-1z"></path>
  </svg>
);


const FaEnvelope = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
  </svg>
);


const DownloadIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
  </svg>
);


// --- Advanced Particle System ---
const QuantumParticleField = () => {
  const canvasRef = useRef(null);
  const { scrollY } = useScroll();


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;


    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 150;
    let mouse = { x: width / 2, y: height / 2 };


    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.hue = Math.random() * 60 + 180; // Blue-cyan range
        this.size = Math.random() * 2 + 0.5;
      }


      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;


        // Mouse attraction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 200) {
          const force = (200 - dist) / 200;
          this.vx += dx * force * 0.0001;
          this.vy += dy * force * 0.0001;
        }


        // Boundaries
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;


        // Respawn
        if (this.life <= 0) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.life = this.maxLife;
        }
      }


      draw() {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha * 0.8;
        ctx.fillStyle = `hsla(${this.hue}, 100%, 60%, ${alpha})`;
        ctx.shadowBlur = 20;
        ctx.shadowColor = `hsla(${this.hue}, 100%, 60%, 1)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }


    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }


    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);


      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });


      // Draw connections
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.globalAlpha = (100 - distance) / 100 * 0.5;
            ctx.stroke();
          }
        }
      }


      animationId = requestAnimationFrame(animate);
    }


    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };


    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    animate();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);


    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-20 opacity-60" />;
};


// --- Enhanced 3D Hologram Effect ---
const HolographicDisplay = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-400, 400], [30, -30]);
  const rotateY = useTransform(x, [-400, 400], [-30, 30]);


  const [time, setTime] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => setTime(prev => prev + 1), 100);
    return () => clearInterval(interval);
  }, []);


  // ✅ FIXED: Combined handler for both mouse and touch events
  const handlePointerMove = (event) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      
      // Check for touch event
      const isTouchEvent = 'touches' in event;
      const clientX = isTouchEvent ? event.touches[0].clientX : event.clientX;
      const clientY = isTouchEvent ? event.touches[0].clientY : event.clientY;


      const pointerX = clientX - rect.left;
      const pointerY = clientY - rect.top;
      
      x.set(pointerX - rect.width / 2);
      y.set(pointerY - rect.height / 2);
    }
  };


  // ✅ FIXED: Handler to reset position on leave/end
  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };


  return (
    <motion.div 
      className="relative w-full h-full flex items-center justify-center"
      ref={ref}
      onMouseMove={handlePointerMove} // For mouse
      onMouseLeave={handlePointerLeave} // For mouse
      onTouchMove={handlePointerMove}  // For touch
      onTouchEnd={handlePointerLeave}   // For touch
      style={{ perspective: "2000px" }}
    >
      {/* Quantum Energy Field */}
      <motion.div 
        className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px]"
        style={{
          background: "conic-gradient(from 0deg, rgba(0,255,255,0.1), rgba(138,43,226,0.1), rgba(0,255,255,0.1))",
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }}
      />


      {/* Holographic Rings */}
      {[1, 2, 3].map((ring, i) => (
        <motion.div
          key={ring}
          className="absolute border border-cyan-400/20 rounded-full"
          style={{
            width: `${300 + i * 50}px`,
            height: `${300 + i * 50}px`,
          }}
          animate={{
            rotate: i % 2 === 0 ? [0, 360] : [360, 0],
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            rotate: { duration: 15 + i * 3, repeat: Infinity, ease: 'linear' },
            scale: { duration: 4 + i, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }
          }}
        />
      ))}


      {/* Main 3D Container */}
      <motion.div
        className="relative w-[280px] h-[280px]"
        style={{ 
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
        }}
        animate={{
          rotateY: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{
          rotateY: 180,
          transition: { duration: 0.8, ease: 'easeOut' }
        }}
      >
        {/* Enhanced Cube */}
        <div className="absolute w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          {/* Front Face - Profile Photo */}
          <motion.div 
            className="absolute w-[280px] h-[280px] bg-black border-2 border-cyan-400/60 rounded-lg overflow-hidden"
            style={{ transform: 'rotateY(0deg) translateZ(140px)' }}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/IMG-20250704-WA0002.jpg" 
              alt="Prateek" 
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 mix-blend-screen"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            {/* Scan Lines Effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.03) 2px, rgba(0,255,255,0.03) 4px)',
              }}
              animate={{ y: [-280, 280] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Corner Brackets */}
            {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(position => (
              <div key={position} className={`absolute w-6 h-6 border-2 border-cyan-400 ${
                position === 'top-left' ? 'top-2 left-2 border-b-0 border-r-0' :
                position === 'top-right' ? 'top-2 right-2 border-b-0 border-l-0' :
                position === 'bottom-left' ? 'bottom-2 left-2 border-t-0 border-r-0' :
                'bottom-2 right-2 border-t-0 border-l-0'
              }`} />
            ))}
          </motion.div>


          {/* Other faces with enhanced patterns */}
          {[
            { rotate: 'rotateY(180deg)', pattern: 'matrix' },
            { rotate: 'rotateY(90deg)', pattern: 'circuit' },
            { rotate: 'rotateY(-90deg)', pattern: 'neural' },
            { rotate: 'rotateX(90deg)', pattern: 'waves' },
            { rotate: 'rotateX(-90deg)', pattern: 'grid' }
          ].map((face, index) => (
            <div
              key={index}
              className="absolute w-[280px] h-[280px] bg-gradient-to-br from-black to-gray-900 border-2 border-cyan-400/40 rounded-lg overflow-hidden"
              style={{ transform: `${face.rotate} translateZ(140px)` }}
            >
              <div className={`w-full h-full opacity-30 ${getPatternClass(face.pattern)}`} />
            </div>
          ))}
        </div>


        {/* Floating Data Points */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.cos((i / 8) * Math.PI * 2 + time * 0.1) * 200 + 140}px`,
              top: `${Math.sin((i / 8) * Math.PI * 2 + time * 0.1) * 200 + 140}px`,
              transform: `translateZ(${Math.sin(time * 0.05 + i) * 50 + 100}px)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};


// Helper function for patterns
const getPatternClass = (pattern) => {
  const patterns = {
    matrix: 'bg-[radial-gradient(circle_at_center,_rgba(0,255,0,0.3)_1px,_transparent_1px)] bg-[length:20px_20px]',
    circuit: 'bg-[linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px]',
    neural: 'bg-[radial-gradient(circle_at_25%_25%,rgba(138,43,226,0.3)_2px,transparent_3px)] bg-[length:40px_40px]',
    waves: 'bg-[linear-gradient(45deg,rgba(0,255,255,0.1)_25%,transparent_25%,transparent_75%,rgba(0,255,255,0.1)_75%)] bg-[length:20px_20px]',
    grid: 'bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[length:15px_15px]'
  };
  return patterns[pattern] || '';
};


// --- Navigation with Cyber Enhancements ---
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


function Header() {
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


  const GlitchyNavLink = ({ name, path, isActive, onClick }) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    const [text, setText] = useState(name);


    const handleHover = () => {
      let iterations = 0;
      const interval = setInterval(() => {
        setText(prev => prev.split("").map((letter, index) => {
            if (index < iterations) {
              return name[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          }).join(""));


        if (iterations >= name.length) clearInterval(interval);
        iterations += 1 / 2;
      }, 25);
    };


    return (
      <motion.a
        href={path}
        onClick={onClick}
        onMouseEnter={handleHover}
        onMouseLeave={() => setText(name)}
        className={`relative text-lg font-mono px-4 py-2 transition-all duration-300 ${
          isActive ? 'text-cyan-300' : 'text-neutral-300 hover:text-cyan-300'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">{text}</span>
        {isActive && (
          <motion.div
            layoutId="active-bg"
            className="absolute inset-0 bg-cyan-400/10 border border-cyan-400/30 rounded-lg backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.a>
    );
  };


  return (
    <motion.header
      animate={showNavbar ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed w-full top-0 z-50 bg-black/30 backdrop-blur-xl border-b border-cyan-400/20"
    >
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <a href="#home" className="text-2xl font-bold font-mono text-white tracking-wider relative">
              <span className="relative z-10">
                Prateek <span className="text-cyan-400">M.</span> Tripathi
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-lg blur-lg"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </a>
          </motion.div>


          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <GlitchyNavLink 
                  name={item.name} 
                  path={item.path} 
                  isActive={activeSection === item.name} 
                />
              </motion.div>
            ))}
          </div>


          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.8 }} 
            className="hidden md:flex items-center space-x-6"
          >
            {[
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/prateek-mani-tripathi-51935a259/" },
              { icon: FaGithub, href: "https://github.com/prateekmtri" },
              { icon: FaEnvelope, href: "mailto:prateek1tri2@gmail.com" }
            ].map(({ icon: Icon, href }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2 text-neutral-400 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={22} />
                <motion.div
                  className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>


          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 text-cyan-300 focus:outline-none"
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute h-0.5 w-7 bg-current rounded-full"
                style={{ top: '14px', left: '6px' }}
              />
              <motion.div
                animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? 20 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute h-0.5 w-7 bg-current rounded-full"
                style={{ top: '20px', left: '6px' }}
              />
              <motion.div
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute h-0.5 w-7 bg-current rounded-full"
                style={{ top: '26px', left: '6px' }}
              />
            </motion.button>
          </div>
        </div>
      </nav>


      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-400/20"
          >
            <div className="flex flex-col items-center space-y-6 py-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-mono ${
                    activeSection === item.name ? 'text-cyan-400' : 'text-neutral-300'
                  } transition-colors duration-300`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.div 
                className="flex space-x-8 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                {[
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/prateek-mani-tripathi-51935a259/" },
                  { icon: FaGithub, href: "https://github.com/prateekmtri" },
                  { icon: FaEnvelope, href: "mailto:prateek1tri2@gmail.com" }
                ].map(({ icon: Icon, href }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-cyan-400 transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={28} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}


// --- Typing Effect Component ---
const TypingEffect = ({ words, className = "" }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);


    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);


  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-cyan-400"
      >
        |
      </motion.span>
    </span>
  );
};


// --- Main Component ---
export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);


  const stats = [
    { number: '5+', label: 'Agentic AI Systems', icon: '🤖' },
    { number: '15+', label: 'Modern Tech Skills', icon: '⚡' },
    { number: '10+', label: 'AWS Services Leveraged', icon: '☁️' },
    { number: '1', label: 'Goal: Building the Future', icon: '🚀' },
  ];


  const skills = [
    'React Native', 'Full Stack Developer', 'LangGraph Expert', 
    'React Specialist', 'Python Developer', 'AWS Cloud Architect'
  ];


  return (
    <>
      <Header />
      <main className="bg-black text-white overflow-x-hidden">
        {/* Advanced Background Effects */}
        <QuantumParticleField />
        
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-24 sm:pt-28 pb-16 sm:pb-20">
          {/* Animated Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
          
          {/* Main Content Container */}
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            
            {/* Enhanced Text Content */}
            <motion.div 
              className="order-2 lg:order-1 space-y-8"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ y: y1 }}
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-mono backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Available for opportunities
              </motion.div>


              {/* Main Heading with Enhanced Typography */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="space-y-4"
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                  <span className="block text-white font-mono">
                    Hi, I'm{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
                      Prateek
                    </span>
                  </span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cyan-300 font-light mt-4">
                    <TypingEffect words={skills} />
                  </span>
                </h1>
              </motion.div>


              {/* Enhanced Description */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl lg:text-2xl text-neutral-300 leading-relaxed max-w-2xl"
              >
                I craft{' '}
                <span className="text-cyan-400 font-semibold">intelligent</span>,{' '}
                <span className="text-cyan-400 font-semibold">scalable</span> web applications, 
                specializing in creating{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold">
                  autonomous agents
                </span>{' '}
                with LangGraph and fusing creative frontend experiences with cutting-edge AI.
              </motion.p>
              
              {/* Enhanced CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center flex-wrap gap-6"
              >
                <motion.a
                  href="#projects"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold tracking-wider text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl overflow-hidden transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center">
                    <span>View My Work</span>
                    <motion.span 
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-full"></div>
                </motion.a>
                
                <motion.a
                  href="/Prateek_Resume.pdf"
                  download
                  className="group relative inline-flex items-center justify-center px-6 py-4 text-lg font-bold tracking-wider text-cyan-400 bg-transparent border-2 border-cyan-400/50 rounded-xl overflow-hidden transition-all duration-300 hover:text-white backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></span>
                  <span className="relative z-10 flex items-center">
                    <DownloadIcon className="w-5 h-5 mr-2" />
                    Download CV
                  </span>
                </motion.a>
              </motion.div>


              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex items-center space-x-6 pt-4"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-2 border-black"></div>
                  ))}
                </div>
                <span className="text-neutral-400 text-sm">
                  Trusted by <span className="text-cyan-400 font-semibold">50+</span> developers worldwide
                </span>
              </motion.div>
            </motion.div>


            {/* Enhanced Interactive Hero Visual */}
            <motion.div 
              className="w-full h-80 sm:h-96 lg:h-[600px] order-1 lg:order-2"
              style={{ y: y2 }}
            >
              <HolographicDisplay />
            </motion.div>
          </div>


          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center space-y-2 hidden sm:flex"
          >
            <span className="font-mono text-sm text-neutral-400">scroll to explore</span>
            <motion.div 
              className="w-6 h-10 border-2 border-cyan-400/50 rounded-full p-1"
              animate={{
                borderColor: ['rgba(0,255,255,0.5)', 'rgba(138,43,226,0.5)', 'rgba(0,255,255,0.5)'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div 
                className="w-1 h-3 bg-cyan-400 rounded-full mx-auto"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        </section>


        {/* Enhanced Stats Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl text-center border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-500 backdrop-blur-sm overflow-hidden"
                  style={{ perspective: '1000px' }}
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300">
                    {item.icon}
                  </div>
                  
                  {/* Number with Counter Animation */}
                  <motion.h3 
                    className="text-4xl lg:text-6xl font-bold text-cyan-400 mb-4 font-mono"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.number}
                  </motion.h3>
                  
                  <p className="text-neutral-400 text-sm lg:text-base group-hover:text-neutral-300 transition-colors duration-300">
                    {item.label}
                  </p>


                  {/* Hover Effect Lines */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-cyan-400/0 group-hover:border-cyan-400/50 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-cyan-400/0 group-hover:border-cyan-400/50 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


        {/* Floating Action Button */}
        <motion.div
          className="fixed bottom-8 right-8 z-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <motion.a
            href="#contact"
            className="group flex items-center justify-center w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(0,255,255,0.3)',
                '0 0 30px rgba(138,43,226,0.3)',
                '0 0 20px rgba(0,255,255,0.3)'
              ]
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity }
            }}
          >
            <FaEnvelope className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </main>
    </>
  );
}