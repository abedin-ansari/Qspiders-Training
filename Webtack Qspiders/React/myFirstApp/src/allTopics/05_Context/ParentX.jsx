import React, { useContext } from "react";
import ChildZ from "./ChildZ";
import { StoreRoomContext } from "./Context1";
import ChildY from "./ChildY";

const ParentX = () => {
  let { state } = useContext(StoreRoomContext);

  return (
    <div>
      ParentX component {state}
      <ChildY />
      <ChildZ />
    </div>
  );
};

export default ParentX;
