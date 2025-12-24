import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const links = [
    { name: 'Work', path: '/projects' },
    { name: 'Studio', path: '/story' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference text-white"
      >
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tighter uppercase font-display group">
          Why So <span className="text-wsl-neon group-hover:text-white transition-colors">Loud</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="relative text-sm font-medium uppercase tracking-widest hover:text-wsl-neon transition-colors"
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.span 
                  layoutId="underline" 
                  className="absolute left-0 -bottom-1 w-full h-[1px] bg-wsl-neon"
                />
              )}
            </Link>
          ))}
          
          <button 
            onClick={toggleTheme} 
            className="ml-4 p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
           <button onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-[60] bg-wsl-black text-white flex flex-col p-6"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="p-2">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center items-center gap-8">
              {links.map((link, i) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-display font-bold uppercase tracking-tighter hover:text-wsl-neon transition-colors"
                >
                  <motion.div
                     initial={{ y: 50, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ delay: i * 0.1 }}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
            </div>

            <div className="text-center text-wsl-gray text-sm">
              <p>MUMBAI • INDIA</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;