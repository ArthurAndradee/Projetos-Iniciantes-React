import './App.css';
import { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  
  useEffect (() => {
    //the code that we want to run
    console.log('The count is ', count);

    //optional return function
    return () => {
      console.log("I'm being cleand up!");
    }
  },[count]); //the dependency array
  
  return (
    <div>
      <h1>useState Simply Explained!</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}