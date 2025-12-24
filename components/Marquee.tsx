import React from 'react';

interface MarqueeProps {
  text: string;
  reverse?: boolean;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text, reverse = false, className = "" }) => {
  return (
    <div className={`relative flex overflow-hidden w-full ${className}`}>
      <div className={`flex whitespace-nowrap ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {[...Array(8)].map((_, i) => (
          <span key={i} className="mx-4 text-6xl md:text-8xl font-black uppercase tracking-tighter opacity-90">
            {text} <span className="text-wsl-neon mx-4">•</span>
          </span>
        ))}
      </div>
      <div className={`flex whitespace-nowrap absolute top-0 left-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`} aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="mx-4 text-6xl md:text-8xl font-black uppercase tracking-tighter opacity-90">
            {text} <span className="text-wsl-neon mx-4">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;