// contexts/ThemeContext.js
import {  useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  console.log(`Current theme: ${theme}`); // Log the current theme to the console
  

    useEffect(() => {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
