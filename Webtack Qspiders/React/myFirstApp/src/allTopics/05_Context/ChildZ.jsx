import React, { useContext } from "react";
import { StoreRoomContext } from "./Context1";

const ChildZ = () => {
  let { str, obj, arr, display } = useContext(StoreRoomContext);

  return (
    <div>
      ChildZ
      {str} {obj.name} {arr}
      <button onClick={() => display("😊")}>Click</button>
    </div>
  );
};

export default ChildZ;
