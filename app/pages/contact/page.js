'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// --- Custom SVG Icons ---
const PaperAirplaneIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

const EnvelopeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const PhoneIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const FaLinkedin = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 53.79-54.3c29.7 0 53.79 24.2 53.79 54.3a53.79 53.79 0 0 1-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
  </svg>
);

const FaGithub = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.3-6.2-10.1-27.8 2.3-57.4 0 0 21.1-6.5 69 27.1 20-5.6 41.6-8.3 62.4-8.3 20.8 0 42.4 2.8 62.4 8.3 47.9-33.6 69-27.1 69-27.1 12.4 29.6 4.6 51.2 2.3 57.4 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.3 104.2-114.6 110.2 9.3 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.9 1.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4.2-3.2-5.9-1z"></path>
  </svg>
);

const TwitterXIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
  </svg>
);

// --- 3D Card Wrapper Component ---
const Card3D = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const rotateX = useTransform(springY, [-250, 250], [10, -10]);
  const rotateY = useTransform(springX, [-250, 250], [-10, 10]);

  const handleMouseMove = (event) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      x.set(event.clientX - rect.left - rect.width / 2);
      y.set(event.clientY - rect.top - rect.height / 2);
    }
  };
  const handleMouseLeave = () => {
    x.set(0); y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={className}
    >
      <div style={{ transform: 'translateZ(40px)' }}>
        {children}
      </div>
    </motion.div>
  );
};

// --- Contact Section Component ("The Command Center") ---
export default function ContactSection() {
  // Form submission state
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <section 
      id="contact" 
      className="relative min-h-screen py-24 sm:py-32 overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/70 [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_70%)]"></div>
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl text-center space-y-4 relative z-10 p-8"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-center tracking-tighter" style={{textShadow: '0 0 20px rgba(0,255,255,0.4)'}}>
          Get In{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Touch
          </span>
        </h2>
        <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
          Have a project in mind or just want to connect? Let's build the future together.
        </p>
      </motion.div>
      
      <div className="w-full max-w-6xl mx-auto mt-16 px-4" style={{ perspective: '2000px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Card: Contact Form */}
          <Card3D className="w-full">
            <div className="h-full bg-black/70 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/10 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center min-h-[300px]">
                  <motion.div initial={{scale:0.5, opacity: 0}} animate={{scale:1, opacity: 1}}>
                    <h4 className="text-2xl font-bold text-cyan-400">Thank You!</h4>
                    <p className="text-neutral-300 mt-2">Your message has been sent. I'll get back to you soon.</p>
                  </motion.div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 flex flex-col flex-grow">
                  <input type="text" placeholder="Your Name" required className="w-full p-3 bg-neutral-900/50 text-white rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"/>
                  <input type="email" placeholder="Your Email" required className="w-full p-3 bg-neutral-900/50 text-white rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"/>
                  <textarea placeholder="Your Message" rows={4} required className="w-full p-3 bg-neutral-900/50 text-white rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all flex-grow"></textarea>
                  <button type="submit" className="relative w-full inline-block px-8 py-3 text-lg font-semibold tracking-wider text-white bg-black border-2 border-cyan-400 rounded-lg overflow-hidden group z-10">
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 ease-out transform -translate-x-full group-hover:translate-x-0"></span>
                    <span className="relative flex items-center justify-center">
                      <PaperAirplaneIcon className="h-5 w-5 mr-2" /> Send
                    </span>
                  </button>
                </form>
              )}
            </div>
          </Card3D>
          
          {/* Right Card: Direct Links */}
          <Card3D className="w-full">
            <div className="h-full bg-black/70 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-8">Connect Directly</h3>
              <div className="space-y-6">
                <a href="mailto:prateek1tri2@gmail.com" className="flex items-center space-x-4 group">
                  <EnvelopeIcon className="w-10 h-10 text-cyan-400 transition-transform duration-300 group-hover:scale-110"/>
                  <div>
                    <p className="text-neutral-400 text-sm">Email</p>
                    <p className="text-neutral-100 group-hover:text-white transition-colors">prateek1tri2@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+919336170698" className="flex items-center space-x-4 group">
                  <PhoneIcon className="w-10 h-10 text-cyan-400 transition-transform duration-300 group-hover:scale-110"/>
                  <div>
                    <p className="text-neutral-400 text-sm">Phone</p>
                    <p className="text-neutral-100 group-hover:text-white transition-colors">+91 9336170698</p>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/prateek-mani-tripathi-51935a259/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                  <FaLinkedin className="w-10 h-10 text-cyan-400 transition-transform duration-300 group-hover:scale-110"/>
                  <div>
                    <p className="text-neutral-400 text-sm">LinkedIn</p>
                    <p className="text-neutral-100 group-hover:text-white transition-colors">Prateek Mani Tripathi</p>
                  </div>
                </a>
                
                <a href="https://github.com/prateekmtri" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                  <FaGithub className="w-10 h-10 text-cyan-400 transition-transform duration-300 group-hover:scale-110"/>
                  <div>
                    <p className="text-neutral-400 text-sm">GitHub</p>
                    <p className="text-neutral-100 group-hover:text-white transition-colors">prateekmtri</p>
                  </div>
                </a>
                
                <a href="https://twitter.com/PrateekTri20851" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                  <TwitterXIcon className="w-10 h-10 text-cyan-400 transition-transform duration-300 group-hover:scale-110"/>
                  <div>
                    <p className="text-neutral-400 text-sm">Twitter</p>
                    <p className="text-neutral-100 group-hover:text-white transition-colors">@PrateekTri20851</p>
                  </div>
                </a>
                
                <a href="https://www.instagram.com/prateek_tripathi__23/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                  <InstagramIcon className="w-10 h-10 text-cyan-400 transition-transform duration-300 group-hover:scale-110"/>
                  <div>
                    <p className="text-neutral-400 text-sm">Instagram</p>
                    <p className="text-neutral-100 group-hover:text-white transition-colors">@prateek_tripathi__23</p>
                  </div>
                </a>
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
}
