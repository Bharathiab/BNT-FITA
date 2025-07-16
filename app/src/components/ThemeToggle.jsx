import { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const lightStyle = {
    backgroundColor: "#ffffff",
    color: "#000000",
    
    minHeight: "100vh",
  };

  const darkStyle = {
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
   
    minHeight: "100vh",
  };

  return (
    <div style={darkMode ? darkStyle : lightStyle}>
      <h2>5. {darkMode ? "Dark Mode " : "Light Mode "}</h2>
      <button onClick={toggleTheme}>
        Switch
      </button>
    </div>
  );
}

export default ThemeToggle;
