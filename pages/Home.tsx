import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Scene from '../components/Scene';
import Marquee from '../components/Marquee';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="relative w-full">
      {/* 3D Background Layer */}
      <div className="fixed inset-0 z-0">
        <Scene />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col justify-between px-6 pb-12 pt-32 md:px-12">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-current opacity-50"></div>
            <span className="text-sm font-medium tracking-[0.2em] uppercase opacity-70">Digital Experience Studio</span>
          </motion.div>
        </div>

        <div className="max-w-[90vw]">
          <h1 className="font-display font-medium text-[13vw] leading-[0.8] tracking-tighter mix-blend-exclusion">
            <motion.span 
              initial={{ y: 100, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="block"
            >
              CRAFTING
            </motion.span>
            <motion.span 
              initial={{ y: 100, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="block text-transparent stroke-text hover:text-wsl-neon transition-colors duration-500 cursor-none"
            >
              DIGITAL
            </motion.span>
            <motion.span 
              initial={{ y: 100, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="block"
            >
              CHAOS
            </motion.span>
          </h1>
        </div>

        <div className="flex justify-between items-end mt-12">
           <div className="hidden md:block max-w-sm text-sm leading-relaxed opacity-70">
             We are an award-winning agency defining the future of digital interaction. 
             We blend code, design, and motion to create brands that cannot be ignored.
           </div>
           <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="p-4 border border-current rounded-full"
           >
             <ArrowDown size={24} />
           </motion.div>
        </div>
      </section>

      {/* Marquee Separator */}
      <div className="relative z-20 bg-wsl-neon text-black py-8 rotate-[-2deg] scale-110 origin-left border-y-2 border-black">
        <Marquee text="VISUAL • AUDIO • INTERACTIVE • STRATEGY" />
      </div>

      {/* Aesthetics Section */}
      <section className="relative z-10 py-32 px-6 md:px-12 bg-wsl-white dark:bg-wsl-black transition-colors duration-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8">
              NOTHING<br/>GENERIC.
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-2 text-lg font-bold border-b border-current pb-1 hover:text-wsl-neon hover:border-wsl-neon transition-colors">
              Start a project <ArrowUpRight />
            </Link>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-2xl md:text-4xl font-light leading-tight text-balance">
              We reject the template. In an ocean of sameness, we build islands of <span className="text-wsl-neon font-bold">unique identity</span>. Our philosophy is rooted in Ethereal Brutalism—raw, honest, yet beautifully functional.
            </p>
            
            <div className="mt-16 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-50">Approach</h3>
                <ul className="space-y-2 text-lg">
                  <li>Strategy First</li>
                  <li>Visual Storytelling</li>
                  <li>Immersive Motion</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-50">Outcome</h3>
                <ul className="space-y-2 text-lg">
                  <li>Brand Recall</li>
                  <li>Market Dominance</li>
                  <li>Viral Reach</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works (Asymmetric Grid) */}
      <section className="relative z-10 py-32 px-6 md:px-12">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-[10vw] leading-none font-display font-medium tracking-tighter">WORKS</h2>
          <span className="text-xl font-mono hidden md:block">(2023 — 2024)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {/* Project 1 - Offset Down */}
          <div className="md:mt-24 group cursor-pointer">
            <div className="overflow-hidden mb-6 rounded-sm">
              <img src="https://picsum.photos/800/1000?random=1" alt="Work" className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-expo group-hover:scale-105" />
            </div>
            <div className="flex justify-between border-t border-current pt-4">
              <h3 className="text-2xl font-bold">Hatimi Retreats</h3>
              <span className="font-mono text-sm">HOSPITALITY</span>
            </div>
          </div>

          {/* Project 2 - Standard */}
          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-6 rounded-sm">
              <img src="https://picsum.photos/800/800?random=2" alt="Work" className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-expo group-hover:scale-105" />
            </div>
            <div className="flex justify-between border-t border-current pt-4">
              <h3 className="text-2xl font-bold">Neon Gym</h3>
              <span className="font-mono text-sm">FITNESS</span>
            </div>
          </div>

           {/* Project 3 - Wide */}
           <div className="md:col-span-2 group cursor-pointer">
            <div className="overflow-hidden mb-6 rounded-sm">
              <img src="https://picsum.photos/1600/900?random=3" alt="Work" className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-expo group-hover:scale-105" />
            </div>
            <div className="flex justify-between border-t border-current pt-4">
              <h3 className="text-2xl font-bold">TechFlow</h3>
              <span className="font-mono text-sm">SAAS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="relative z-10 min-h-[80vh] flex flex-col justify-center items-center text-center bg-wsl-black text-white px-6">
         <h2 className="font-display text-[12vw] leading-none mb-8">
           LET'S TALK
         </h2>
         <Link to="/contact" className="group relative inline-block">
            <span className="text-2xl md:text-4xl font-light z-10 relative px-8 py-4 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm group-hover:bg-wsl-neon group-hover:text-black transition-all duration-300">
               Start your journey
            </span>
         </Link>
         
         <div className="absolute bottom-12 w-full flex justify-between px-12 text-sm text-gray-500 font-mono uppercase">
            <span>© 2024 WSL</span>
            <span>Mumbai, IN</span>
         </div>
      </section>
    </div>
  );
};

export default Home;