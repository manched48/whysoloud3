import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Story from './pages/Story';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen transition-colors duration-500 bg-wsl-white dark:bg-wsl-black text-black dark:text-white selection:bg-wsl-neon selection:text-black">
          <CustomCursor />
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;