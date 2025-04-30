'use client';

import { useThemeStore } from '@/store/useThemeStore';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button onClick={toggleTheme} className="text-xl p-2">
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
};
