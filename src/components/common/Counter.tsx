import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h3>Counter</h3>
      <button onClick={() => setCounter(counter + 1)}>Increase</button> <br />
      <br />
      <span>Result: </span>
      <span>{counter}</span>
    </div>
  );
};
