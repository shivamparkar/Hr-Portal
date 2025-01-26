import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Brightness7, Brightness4 } from "@mui/icons-material";  // Import icons

const ToggleButton = styled.button`
  border: none;
  cursor: pointer;
  background: transparent;
  font-size: 24px; // Adjust size of the icons
  transition: background-color 0.3s;
`;

const DarkMode = () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ToggleButton onClick={toggleTheme}>
      {theme === "dark" ? <Brightness7 /> : <Brightness4 />}  
    </ToggleButton>
  );
};

export default DarkMode;
