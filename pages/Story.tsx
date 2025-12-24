import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Story: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="bg-wsl-white dark:bg-wsl-black min-h-screen text-black dark:text-white pt-32 pb-20">
      
      {/* Editorial Header */}
      <section className="px-6 md:px-12 mb-32">
        <motion.div 
          initial="hidden" 
          animate="show" 
          variants={container}
          className="max-w-[90vw] mx-auto"
        >
          <motion.p variants={item} className="font-mono text-xs md:text-sm uppercase tracking-widest mb-4 opacity-60">
            Est. 2022 • Mumbai
          </motion.p>
          <motion.h1 variants={item} className="font-display text-6xl md:text-[10vw] leading-[0.9] font-medium tracking-tighter mb-12">
            WE ARE THE<br/>
            <span className="ml-[10vw] italic font-serif text-wsl-neon">LOUD</span> ONES.
          </motion.h1>
          
          <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-black/10 dark:border-white/10 pt-12">
             <div className="text-xl md:text-2xl font-light leading-relaxed">
               We’re a love child of branding and social media, built on the belief that <span className="font-bold border-b border-wsl-neon">identity is everything</span>.
             </div>
             <div className="text-lg opacity-70 leading-relaxed">
               It’s not just about showcasing your product—it’s about crafting a purpose that resonates. We help you find that purpose and build a powerful identity that drives a strategy connecting you with your audience.
             </div>
             <div className="flex flex-col justify-between">
                <div className="font-mono text-sm opacity-50 uppercase mb-4">Core Philosophy</div>
                <div className="text-3xl font-display font-bold">
                  "Refuse to Whisper."
                </div>
             </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Team Section - Editorial Style */}
      <section className="px-6 md:px-12">
         <div className="max-w-[90vw] mx-auto">
            <h2 className="text-4xl font-display font-bold mb-16 flex items-center gap-4">
              <span className="w-4 h-4 bg-wsl-neon rounded-full"></span> 
              THE MINDS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
               {/* Founder 1 */}
               <motion.div 
                 whileHover={{ y: -10 }}
                 className="group relative"
               >
                  <div className="aspect-[3/4] overflow-hidden mb-6 bg-gray-900 relative">
                     <img 
                       src="https://picsum.photos/600/800?random=1" 
                       alt="Murtaza Shakir" 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                     />
                     <div className="absolute top-4 right-4 bg-white text-black w-12 h-12 flex items-center justify-center rounded-full font-bold">01</div>
                  </div>
                  <div className="flex justify-between items-end border-b border-current pb-4 mb-4">
                     <div>
                       <h3 className="text-3xl font-display font-bold uppercase">Murtaza Shakir</h3>
                       <p className="font-mono text-sm opacity-60">FOUNDER</p>
                     </div>
                     <ArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-wsl-neon" />
                  </div>
                  <div className="flex gap-4 opacity-50 hover:opacity-100 transition-opacity">
                     <a href="#" className="hover:text-wsl-neon"><Linkedin size={20}/></a>
                     <a href="#" className="hover:text-wsl-neon"><Instagram size={20}/></a>
                  </div>
               </motion.div>

               {/* Founder 2 */}
               <motion.div 
                 whileHover={{ y: -10 }}
                 className="group relative md:mt-32"
               >
                  <div className="aspect-[3/4] overflow-hidden mb-6 bg-gray-900 relative">
                     <img 
                       src="https://picsum.photos/600/800?random=2" 
                       alt="Aliasgar Bharmal" 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                     />
                     <div className="absolute top-4 right-4 bg-white text-black w-12 h-12 flex items-center justify-center rounded-full font-bold">02</div>
                  </div>
                  <div className="flex justify-between items-end border-b border-current pb-4 mb-4">
                     <div>
                       <h3 className="text-3xl font-display font-bold uppercase">Aliasgar Bharmal</h3>
                       <p className="font-mono text-sm opacity-60">CO-FOUNDER</p>
                     </div>
                     <ArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-wsl-neon" />
                  </div>
                  <div className="flex gap-4 opacity-50 hover:opacity-100 transition-opacity">
                     <a href="#" className="hover:text-wsl-neon"><Linkedin size={20}/></a>
                     <a href="#" className="hover:text-wsl-neon"><Instagram size={20}/></a>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Manifesto */}
      <section className="py-32 px-6 mt-20 bg-wsl-neon text-black text-center overflow-hidden relative">
         <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-tight">
              "WE DON'T JUST MAKE NOISE.<br/>WE COMPOSE A SYMPHONY."
            </h2>
            <p className="font-mono uppercase tracking-widest text-sm">Join the movement</p>
         </div>
         <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
            <div className="w-[800px] h-[800px] border-[100px] border-black rounded-full animate-spin-slow"></div>
         </div>
      </section>

    </div>
  );
};

export default Story;