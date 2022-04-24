import React, { useState } from 'react';

const StateTutorial = () => {
  const [increment, setIncrement] = useState(1);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>useState</h1>
      <label htmlFor="increments">Incement by:</label>
      <select
        name="increments"
        id="increments"
        onChange={(e) => setIncrement(parseInt(e.target.value, 10))}
      >
        {Array.from(Array(10).keys()).map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <p style={{ fontSize: '24px' }}>{counter}</p>
      <button onClick={() => setCounter(counter + increment)}>++</button>
      <button onClick={() => setCounter(0)}>Reset Count</button>
    </div>
  );
};

export default StateTutorial;
