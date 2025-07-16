import  { useState } from "react";

function LanguageGreeting() {
  const [language, setLanguage] = useState("");

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  let greeting = "";
  if (language === "english") greeting = "Hello";
  else if (language === "tamil") greeting = "Vanakkam";
  else if (language === "hindi") greeting = "Namaste";

  return (
    <div>
      <h2>1. Select Language</h2>
      <select onChange={handleChange}>
        <option value="">Choose</option>
        <option value="english">English</option>
        <option value="tamil">Tamil</option>
        <option value="hindi">Hindi</option>
      </select>

      {greeting && (
        <h3> {greeting}</h3>
      )}
    </div>
  );
}

export default LanguageGreeting;
