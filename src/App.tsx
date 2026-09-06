import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ProjectSection from './components/Project/ProjectSection';
import Contact from './components/Contact/Contact';
import ThemeToggle from './components/theme-toggle/ThemeToggle';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Skills from './components/Skills/Skills';

export default function App() {
    const { scrollYProgress } = useScroll(); const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
    return <><motion.div className="progress" style={{ scaleX }} />
    <Header />
    <main>
        <Hero />
        <About />
        <Skills />
        <ProjectSection />
        <Contact />
        </main> 
        <ThemeToggle /> 
        <ScrollTop />
        </>
}
