import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingContact from './components/layout/FloatingContact';
import ScrollToTop from './components/layout/ScrollToTop';
import ScrollProgressBar from './components/layout/ScrollProgressBar';
import CustomCursor from './components/layout/CustomCursor';
import ParticleBackground from './components/layout/ParticleBackground';
import HeroNew from './components/sections/HeroNew';
import AboutNew from './components/sections/AboutNew';
import SkillsExperience from './components/sections/SkillsExperience';
import ProjectsInnovative from './components/sections/ProjectsInnovative';
import CertificationsNew from './components/sections/CertificationsNew';
import Contact from './components/sections/Contact';

function App() {
  return (
    <AnimatePresence>
      <motion.div 
        className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Scroll Progress Bar */}
        <ScrollProgressBar />
        
        {/* Interactive Particle Background */}
        <ParticleBackground />
        
        {/* Animated gradient orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-40 left-1/3 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Custom Cursor */}
        <CustomCursor />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          <HeroNew />
          <AboutNew />
          <SkillsExperience />
          <ProjectsInnovative />
          <CertificationsNew />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Elements */}
        <FloatingContact />
        <ScrollToTop />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
