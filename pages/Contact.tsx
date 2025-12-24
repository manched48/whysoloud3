import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-wsl-neon min-h-screen text-black flex flex-col items-center justify-center py-20 px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Side: Info */}
        <div className="space-y-12">
          <div>
            <h1 className="text-7xl md:text-8xl font-black mb-4 tracking-tight">Curious?</h1>
            <p className="text-3xl font-bold">Feel Free To Reach Us</p>
          </div>

          <div className="space-y-10">
            <div className="group">
              <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-2">
                <span className="font-bold text-xl">PHONE</span>
                <div className="bg-wsl-blue p-2 rounded-full text-white group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
              </div>
              <p className="text-xl font-medium">+91 88790 44125</p>
              <p className="text-xl font-medium">+91 91676 39296</p>
            </div>

            <div className="group">
              <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-2">
                <span className="font-bold text-xl">EMAIL</span>
                <div className="bg-wsl-blue p-2 rounded-full text-white group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
              </div>
              <a href="mailto:murtaza@whysoloud.com" className="block text-xl font-medium hover:text-wsl-blue transition-colors">murtaza@whysoloud.com</a>
              <a href="mailto:aliasgar@whysoloud.com" className="block text-xl font-medium hover:text-wsl-blue transition-colors">aliasgar@whysoloud.com</a>
            </div>

            <div className="group">
              <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-2">
                <span className="font-bold text-xl">WEBSITE</span>
                <div className="bg-wsl-blue p-2 rounded-full text-white group-hover:scale-110 transition-transform">
                  <Globe size={20} />
                </div>
              </div>
              <p className="text-xl font-medium">www.whysoloud.com</p>
            </div>

            <div className="group">
              <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-2">
                <span className="font-bold text-xl">ADDRESS</span>
                <div className="bg-wsl-blue p-2 rounded-full text-white group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
              </div>
              <p className="text-xl font-medium">Thackar Estate, Mazgaon, Mumbai.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white p-8 md:p-12 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-3xl font-bold mb-8">Send us a message</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider mb-2">Your Name</label>
              <input type="text" id="name" className="w-full bg-gray-100 border-2 border-gray-200 p-4 focus:outline-none focus:border-black focus:bg-white transition-colors font-medium" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider mb-2">Email Address</label>
              <input type="email" id="email" className="w-full bg-gray-100 border-2 border-gray-200 p-4 focus:outline-none focus:border-black focus:bg-white transition-colors font-medium" placeholder="john@example.com" />
            </div>
            <div>
              <label htmlFor="interest" className="block text-sm font-bold uppercase tracking-wider mb-2">Interested In</label>
              <select id="interest" className="w-full bg-gray-100 border-2 border-gray-200 p-4 focus:outline-none focus:border-black focus:bg-white transition-colors font-medium">
                <option>Social Media Marketing</option>
                <option>Video Production</option>
                <option>Branding Identity</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full bg-gray-100 border-2 border-gray-200 p-4 focus:outline-none focus:border-black focus:bg-white transition-colors font-medium" placeholder="Tell us about your brand..."></textarea>
            </div>
            <button type="button" className="w-full bg-black text-white font-bold text-lg py-5 hover:bg-wsl-blue hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
              Send Enquiry <Send size={20} />
            </button>
          </form>
        </div>

      </div>
    </motion.div>
  );
};

export default Contact;