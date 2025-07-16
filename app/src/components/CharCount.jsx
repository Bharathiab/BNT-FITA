import { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>4. Type Something</h2>
      <textarea
        rows="5"
        cols="40"
        placeholder="Start"
        value={text}
        onChange={handleChange}
      />
      <p>Character Count: {text.length}</p>
    </div>
  );
}

export default CharacterCounter;
