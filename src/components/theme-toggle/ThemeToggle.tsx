import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import './ThemeToggle.scss';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem('portfolio-theme');

    const light =
      savedTheme === 'light';

    setIsLight(light);

    document.body.classList.toggle(
      'light-mode',
      light
    );
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isLight;

    setIsLight(nextTheme);

    document.body.classList.toggle(
      'light-mode',
      nextTheme
    );

    localStorage.setItem(
      'portfolio-theme',
      nextTheme ? 'light' : 'dark'
    );
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={
        isLight
          ? '다크 모드로 변경'
          : '라이트 모드로 변경'
      }
      title={
        isLight
          ? 'Dark mode'
          : 'Light mode'
      }
    >
      {isLight ? (
        <FiMoon />
      ) : (
        <FiSun />
      )}
    </button>
  );
}