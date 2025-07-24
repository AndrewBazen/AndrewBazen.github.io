import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
    
  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: 'resume.pdf', label: 'Resume' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full h-16 z-50 transition-all duration-200 ease-out ${
        scrolled 
          ? 'backdrop-blur-xl bg-gray-900/80 border-b border-blue-500/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-8xl mx-auto px-4 py-4 flex justify-between items-center h-16">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent font-mono"
          whileHover={{ scale: 1.05, transition: { duration: 0.15, ease: "easeOut" } }}
          whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
        >
          &lt;AB&gt;
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="relative text-gray-300 hover:text-blue-400 transition-colors duration-150 ease-out font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -2, transition: { duration: 0.1, ease: "easeOut" } }}
            >
              <span className="relative z-10">{link.label}</span>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1, transition: { duration: 0.2, ease: "easeOut" } }}
              />
            </motion.a>
          ))}
          
          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-150 ease-out hover:from-blue-500 hover:to-purple-500 text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.15, ease: "easeOut" } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
          whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
        >
          <motion.span
            className="w-6 h-0.5 bg-blue-400 absolute"
            animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
          <motion.span
            className="w-6 h-0.5 bg-blue-400 absolute"
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
          <motion.span
            className="w-6 h-0.5 bg-blue-400 absolute"
            animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden bg-white/10 backdrop-blur-md border-t border-blue-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-150 ease-out font-medium py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setOpen(false)}
                  whileHover={{ x: 10, transition: { duration: 0.15, ease: "easeOut" } }}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    {link.label}
                  </span>
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-150 ease-out hover:from-blue-500 hover:to-purple-500 w-full text-center mt-4 block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setOpen(false)}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}