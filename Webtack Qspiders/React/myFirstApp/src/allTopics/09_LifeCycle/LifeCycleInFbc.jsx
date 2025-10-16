import React, { useEffect, useRef, useState } from "react";

const LifeCycleInFbc = () => {
  const [count, setCount] = useState(0);
  let initialRenderRef = useRef(true);
  console.log(initialRenderRef);

  useEffect(() => {
    console.log("Render method");
  }, []);

  useEffect(() => {
    console.log("ComponentDidMount");

    return () => {
      // CleanUp Function
      console.log("ComponentWillUnmount");
    };
  }, []);

  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false; //
      return;
    }
    console.log("ComponentDidUpdate");
  });

  //   useEffect(() => {
  //     console.log("Render method"); // Without dependency array.
  //   });

  return (
    <div>
      <h1>Learn Life cycle in Function Based</h1>
      <h2>Counter - {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default LifeCycleInFbc;
