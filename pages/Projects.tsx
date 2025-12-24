import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Hatimi Retreats",
      category: "Hospitality • Rebranding",
      year: "2024",
      image: "https://picsum.photos/1200/800?random=10"
    },
    {
      title: "Urban Bites",
      category: "Food & Beverage • Social",
      year: "2023",
      image: "https://picsum.photos/1200/800?random=11"
    },
    {
      title: "TechFlow Systems",
      category: "B2B • Strategy",
      year: "2023",
      image: "https://picsum.photos/1200/800?random=12"
    },
    {
      title: "Neon Gym",
      category: "Fitness • Production",
      year: "2023",
      image: "https://picsum.photos/1200/800?random=13"
    },
    {
      title: "Luxe Interiors",
      category: "Real Estate • Design",
      year: "2022",
      image: "https://picsum.photos/1200/800?random=14"
    },
    {
      title: "Green Earth",
      category: "Non-Profit • Campaign",
      year: "2022",
      image: "https://picsum.photos/1200/800?random=15"
    }
  ];

  return (
    <div className="bg-wsl-white dark:bg-wsl-black min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row items-end justify-between border-b border-black/10 dark:border-white/10 pb-8">
           <motion.h1 
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             className="text-7xl md:text-9xl font-display font-medium tracking-tighter"
           >
             SELECTED<br/>WORKS
           </motion.h1>
           <div className="text-right pb-2 hidden md:block">
             <p className="font-mono text-sm opacity-60">CASE STUDIES</p>
             <p className="font-mono text-sm opacity-60">(2022 — 2024)</p>
           </div>
        </div>

        {/* Project List */}
        <div className="relative z-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-12 border-b border-black/10 dark:border-white/10 cursor-pointer relative transition-all duration-300 hover:px-4"
            >
              <div className="flex items-center gap-6">
                 <span className="font-mono text-sm opacity-40 hidden md:block">{`0${index + 1}`}</span>
                 <h2 className="text-3xl md:text-6xl font-display font-bold uppercase tracking-tight group-hover:text-wsl-neon transition-colors duration-300">
                   {project.title}
                 </h2>
              </div>
              
              <div className="flex items-center gap-8 mt-4 md:mt-0">
                <span className="text-sm md:text-base font-light opacity-60 group-hover:opacity-100 transition-opacity">{project.category}</span>
                <span className="hidden md:block px-3 py-1 rounded-full border border-current text-xs font-mono">{project.year}</span>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-wsl-neon" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Image Reveal */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] z-0 hidden lg:block overflow-hidden rounded-lg"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(-5deg)',
              }}
            >
              <img 
                src={projects[hoveredIndex].image} 
                alt="Preview" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-wsl-blue/20 mix-blend-overlay"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;