import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(5)
  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = Math.floor(totalTimeInSeconds % 60);

  useEffect(() =>{
    setTimeout(() => {
      if(totalTimeInSeconds === 0){
        alert('O tempo acabou')
        return
      }
      setTotalTimeInSeconds(totalTimeInSeconds -1)
    }, 1000);
    
  }, [totalTimeInSeconds]);

  return (
    <div className="App">
      <span>{minutes.toString().padStart(2, "0")}</span>
      <span>:</span>
      <span>{seconds.toString().padStart(2, "0")}</span>
    </div>
  );
}

export default App;
