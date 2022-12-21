import { useState } from 'react';
import './index.css';

function App() {

  let [count, setCount] = useState(0);
  
  let increment = () => {setCount(count+1);}
  let decrement = () => {setCount(count-1);}

  return ( 
    <div className='container'>
      <h2>Counter:</h2>
      <h1>{count}</h1>
      <div className='buttons'>
        <button className='plus'  onClick={increment}>Increase</button>
        <button className='minus' onClick={decrement}>Decrease</button>
      </div>
    </div>
  );
}

export default App;
