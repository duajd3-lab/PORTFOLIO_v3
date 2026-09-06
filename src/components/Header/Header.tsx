import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Header.scss';

const jump = (id: string) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: 'smooth' });
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`hero-header ${scrolled ? 'scrolled' : ''}`}
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <button
        type="button"
        className="hero-logo"
        onClick={() => jump('home')}
        aria-label="홈으로 이동"
      >
        NY<span>.</span>
      </button>

      <nav className="hero-nav" aria-label="메인 메뉴">
        <button
          type="button"
          onClick={() => jump('about')}
        >
          ABOUT
        </button>

        <button
          type="button"
          onClick={() => jump('skills')}
        >
          SKILLS
        </button>

        <button
          type="button"
          onClick={() => jump('projects')}
        >
          PROJECT
        </button>


        <button
          type="button"
          onClick={() => jump('contact')}
        >
          CONTACT
        </button>
      </nav>
    </motion.header>
  );
}