import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingContact from './components/layout/FloatingContact';
import ScrollToTop from './components/layout/ScrollToTop';
import HeroNew from './components/sections/HeroNew';
import AboutNew from './components/sections/AboutNew';
import SkillsExperience from './components/sections/SkillsExperience';
import ProjectsNew from './components/sections/ProjectsNew';
import CertificationsNew from './components/sections/CertificationsNew';
import Contact from './components/sections/Contact';

function App() {
  return (
    <AnimatePresence>
      <motion.div 
        className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          <HeroNew />
          <AboutNew />
          <SkillsExperience />
          <ProjectsNew />
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
