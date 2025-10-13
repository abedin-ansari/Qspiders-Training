import React, { useContext } from "react";
import { Store2Context } from "./Context2";

const ChildB1 = () => {
  let val = useContext(Store2Context);
  console.log(val);

  return <div>ChildB1 {val.data1}</div>;
};

export default ChildB1;
