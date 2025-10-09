import React, { createContext, useState } from "react";
import ParentX from "./ParentX";

export const StoreRoomContext = createContext(); //  Returen 2 things : Provider , Consumer (Return context object)

const Context1 = () => {
  const [state, setState] = useState("");

  let str = "Hello from Context API";
  let arr = [10, 20, 30, 40];
  let obj = { name: "John", age: 30 };
  let display = (x) => setState(x);

  return (
    <div>
      <StoreRoomContext.Provider value={{ str, arr, obj, display, state }}>
        <ParentX />
        {/* All the child component can access the value (Step: 2 -> Provide a Context)*/}
      </StoreRoomContext.Provider>
    </div>
  );
};

export default Context1;
