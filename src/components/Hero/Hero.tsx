import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';

import './Hero.scss';

export default function Hero() {
  const { scrollY } = useScroll();

  const visualY = useTransform(
    scrollY,
    [0, 700],
    [0, 120]
  );

  const textY = useTransform(
    scrollY,
    [0, 700],
    [0, 50]
  );

  const backgroundY = useTransform(
    scrollY,
    [0, 700],
    [0, 30]
  );

  return (
    <section
      id="home"
      className="hero"
    >
      {/* =========================
          BACKGROUND
      ========================= */}

      <motion.div
        className="hero-bg"
        style={{ y: backgroundY }}
      >
        <div className="hero-glow" />

        <div className="mountain mountain-left" />
        <div className="mountain mountain-right" />

        <div className="water" />
      </motion.div>


      {/* =========================
          GRID / FRAME
      ========================= */}

      <div className="hero-grid" />

      <div className="hero-frame">
        <span className="corner corner-tl" />
        <span className="corner corner-tr" />
        <span className="corner corner-bl" />
        <span className="corner corner-br" />
      </div>


      


      {/* =========================
          LEFT MENU
      ========================= */}

      {/* <motion.aside
        className="hero-side"
        initial={{
          opacity: 0,
          x: -25,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.7,
          duration: 0.8,
        }}
      >
        <div className="side-active">
          <span className="side-dot" />

          <span>
            PUBLISHING
          </span>
        </div>

        <span>
          FRONTEND
        </span>

        <span>
          RESPONSIVE
        </span>

        <span>
          INTERACTION
        </span>

        <span>
          UI / UX
        </span>
      </motion.aside> */}


      {/* =========================
          CENTER VISUAL
      ========================= */}

      <motion.div
        className="visual-wrap"
        style={{ y: visualY }}
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="visual-light" />

        <motion.div
          className="cube"
          animate={{
            y: [0, -12, 0],
            rotateY: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="cube-face cube-front">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="cube-face cube-top" />

          <div className="cube-face cube-right" />
        </motion.div>

        <div className="cube-reflection" />
      </motion.div>


      {/* =========================
          MAIN CONTENT
      ========================= */}

      <motion.div
        className="hero-content"
        style={{ y: textY }}
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          delay: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="hero-eyebrow">
          WEB PUBLISHER · FRONTEND
        </p>

        {/* <h1>
          I BUILD WEB
          <br />

          <span>
            EXPERIENCES
          </span>
        </h1> */}

        <p className="hero-description">
          안녕하세요! 웹 퍼블리셔 김나영입니다.
          
          <br className="desktop-break" />
          사용자 흐름과 디자인 의도를 이해하고
          정확하고 안정적인 웹 인터페이스를 구현하도록 만듭니다.
          
        </p>

        {/* <motion.a
          href="#project"
          className="project-button"
          whileHover={{
            y: -3,
          }}
          whileTap={{
            scale: 0.98,
          }}
        >
          <span className="button-symbol">
            ✦
          </span>

          EXPLORE PROJECTS

          <span className="button-arrow">
            ↗
          </span>
        </motion.a> */}
      </motion.div>


      {/* =========================
          BOTTOM UI
      ========================= */}

      <div className="hero-bottom">
        <div className="status">
          <span className="status-dot" />

          AVAILABLE FOR WORK
        </div>

        <motion.a
          href="#about"
          className="scroll-button"
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
        >
          SCROLL
          <span>
            ↓
          </span>
        </motion.a>

        {/* <a
          href="#contact"
          className="contact-link"
        >
          CONTACT ME

          <span>
            ↗
          </span>
        </a> */}
      </div>
    </section>
  );
}