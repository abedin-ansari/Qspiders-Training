import { useState } from "react";

function CounterInFbc() {
  let [count, setCount] = useState(0);

  const incre = () => setCount(count + 1);
  const decre = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => setCount(0);

  return (
    <>
      <h1>Counter In Function Based</h1>
      <h2>Count : {count}</h2>
      <button onClick={incre}>Incre</button>
      <button onClick={decre}>Decre</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default CounterInFbc;
