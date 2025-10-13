import { createContext } from "react";

export const Store2Context = createContext();

const Context2 = (props) => {
  console.log(props); // { children : {} }

  let data1 = "Hello";

  return (
    <>
      <Store2Context.Provider value={{ data1 }}>
        {props.children}
      </Store2Context.Provider>
    </>
  );
};

export default Context2;
