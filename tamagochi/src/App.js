import React, { useState } from 'react';
import Button from './components/atoms/Button';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Tamagotchi</h1>
      <p>Action count: {count}</p>
      <Button onClick={handleClick} label="Feed Tamagotchi" />
    </div>
  );
}

export default App;
