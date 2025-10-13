import { createContext, useState } from "react";
import ParentX from "./ParentX";

// STEP 1 :- create a context
export const StoreRoomContext = createContext(); // returns Context Object

const Context1 = () => {
  const [state, setState] = useState("");

  let str = "React Js";
  let arr = [10, 20, 30];
  let obj = { ename: "John" };
  let display = (x) => setState(x);

  return (
    <div>
      <StoreRoomContext.Provider value={{ str, arr, obj, display, state }}>
        <ParentX /> {/* STEP 2 :- provide a context */}
      </StoreRoomContext.Provider>
    </div>
  );
};
export default Context1;
