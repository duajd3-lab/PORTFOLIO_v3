import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

import './ScrollTop.scss';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          className="scroll-top"
          onClick={scrollToTop}
          aria-label="페이지 맨 위로 이동"
          title="Back to top"

          initial={{
            opacity: 0,
            y: 10,
            scale: 0.9,
          }}

          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}

          exit={{
            opacity: 0,
            y: 10,
            scale: 0.9,
          }}

          transition={{
            duration: 0.25,
          }}
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}