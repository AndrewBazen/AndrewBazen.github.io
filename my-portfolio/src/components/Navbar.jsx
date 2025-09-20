import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => {
    if (href.startsWith('/#')) {
      return location.hash === href.substring(1);
    }
    return location.pathname === href;
  };

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/#projects' },
    { label: 'DevLog', href: '/devlog' },
    { label: 'Contact', href: '/#contact' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-8xl mx-auto px-4 py-4 flex justify-between items-center h-16">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05, transition: { duration: 0.15, ease: "easeOut" } }}
          whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
        >
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent font-mono"
          >
            &lt;AB&gt;
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -2, transition: { duration: 0.1, ease: "easeOut" } }}
            >
              {link.href.startsWith('/#') ? (
                <a
                  href={link.href}
                  className={`relative text-gray-300 hover:text-blue-400 transition-colors duration-150 ease-out font-medium ${
                    isActive(link.href) ? 'text-blue-400' : ''
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1, transition: { duration: 0.2, ease: "easeOut" } }}
                  />
                </a>
              ) : (
                <Link
                  to={link.href}
                  className={`relative text-gray-300 hover:text-blue-400 transition-colors duration-150 ease-out font-medium ${
                    isActive(link.href) ? 'text-blue-400' : ''
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1, transition: { duration: 0.2, ease: "easeOut" } }}
                  />
                </Link>
              )}
            </motion.div>
          ))}
          
          {/* CTA Button */}
          {/* <motion.a
            href="/#contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-150 ease-out hover:from-blue-500 hover:to-purple-500 text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.15, ease: "easeOut" } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
          >
            Hire Me
          </motion.a> */}
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
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="px-4 py-6 space-y-4">
              {links.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, transition: { duration: 0.15, ease: "easeOut" } }}
                >
                  {link.href.startsWith('/#') ? (
                    <a
                      href={link.href}
                      className={`block text-gray-300 hover:text-blue-400 transition-colors duration-150 ease-out font-medium text-lg ${
                        isActive(link.href) ? 'text-blue-400' : ''
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className={`block text-gray-300 hover:text-blue-400 transition-colors duration-150 ease-out font-medium text-lg ${
                        isActive(link.href) ? 'text-blue-400' : ''
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              
              {/* Mobile CTA Button */}
              {/* <motion.a
                href="/#contact"
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium text-center transition-all duration-150 ease-out hover:from-blue-500 hover:to-purple-500 mt-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.15, ease: "easeOut" } }}
                whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                onClick={() => setOpen(false)}
              >
                Hire Me
              </motion.a> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}