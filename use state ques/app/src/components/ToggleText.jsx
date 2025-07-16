import  { useState } from 'react';

function ToggleText() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Text
      </button>

      {show && <p>This is a paragraph </p>}
    </div>
  );
}

export default ToggleText;
