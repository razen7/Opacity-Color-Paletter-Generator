import React, { useState } from 'react'
import ColorBox from './ColorBox';

export default function App() {
  let [color, setColor] = useState('#' + Math.floor(Math.random() * 16777215).toString(16));
  let opacity = [0.1, 0.2, 0.4, 0.6, 0.8, 1];
  return (
    <div className="container" style={{ backgroundColor: '#F2F7FA' }}>
      <h1>Opacity Color Paletter Generator</h1>

      <label>
        Hex Code:
        <input type="text" onChange={(e) => setColor('#' + e.currentTarget.value)} />
      </label>

      <div className="boxes">
        {opacity.map((o, idx) => <ColorBox key={idx} bgColor={color} opacity={o} />)}
      </div>

    </div>
  );
}
