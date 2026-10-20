import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(5);

  const atTarget = count >= target;
  let status = 'In progress';
  if (count === 0) status = 'Not started';
  if (atTarget) status = 'Target reached';

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => Math.max(0, c - 1));
  const reset = () => setCount(0);
  const addTwo = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  return (
    <div>
      <h1>Smart Task Counter</h1>
      <p>Completed: {count}</p>

      <p>
        Target:{' '}
        <input type='number' min={1} value={target} onChange={(e) => setTarget(Number(e.target.value))} />
      </p>

      <p>Status: {status}</p>

      <button onClick={increment} disabled={atTarget}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addTwo} disabled={atTarget}>Plus Two</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App
