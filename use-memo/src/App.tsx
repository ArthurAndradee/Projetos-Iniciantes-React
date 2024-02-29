import './App.css';
import { useMemo, useState } from 'react';
import { initialItems } from './utils';

export default function App() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items],
  //() => items.find((item) => item.id === count),
  //[items, count],
  );
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}