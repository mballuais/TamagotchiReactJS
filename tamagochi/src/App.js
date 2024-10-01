import React, { useState } from 'react';
import Button from './components/atoms/Button';
import ProgressBar from './components/atoms/ProgessBar';

// function App() {
//   const [count, setCount] = useState(0);

const App = () => {
  const [progress, setProgress] = useState(0);


  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  const increaseProgress = () => {
    setProgress(prevProgress => Math.min(prevProgress + 10, 100)); // Incrémente de 10% sans dépasser 100%
  };



  
  return (
    <div className="App">
      <h1>Tamagotchi</h1>
      {/* <p>Action count: {count}</p>
      <Button onClick={handleClick} label="Feed Tamagotchi" /> */}
      <h1>Tamagotchi Progress</h1>
      <ProgressBar progress={progress} />
      <button onClick={increaseProgress} style={{ marginTop: '10px' }}>
        Increase Progress
      </button>
    </div>
    
  );
}

export default App;
