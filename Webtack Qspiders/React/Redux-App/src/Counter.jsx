import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./Utils/CounterSlice";

const Counter = () => {
  let count = useSelector((store) => store.myCounter);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment(10))}>Increament</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
