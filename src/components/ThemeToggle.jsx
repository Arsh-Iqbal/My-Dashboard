"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

export const ThemeToggle = ({ className = "" }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={`p-2 rounded-full transition-colors duration-300 hover:bg-secondary shadow ${className}`}
    >
      {isDarkMode ? (
        <FaSun className="h-5 w-5 text-yellow-300" />
      ) : (
        <FaMoon className="h-5 w-5 text-blue-900" />
      )}
    </button>
  );
};
