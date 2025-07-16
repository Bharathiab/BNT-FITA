import { useState } from 'react';

function Changebg() {
  const [color, setColor] = useState('black');

  return (
    <div style={{ backgroundColor: color,padding:"20px" }}>
      <button onClick={() => setColor('lightblue')}>Light Blue</button>
      <button onClick={() => setColor('lightgreen')}>Light Green</button>
      <button onClick={() => setColor('pink')}>Pink</button>
      <button onClick={() => setColor('white')}>Reset</button>
    </div>
  );
}

export default Changebg;
