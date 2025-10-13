import { useContext } from "react";
import ChildY from "./ChildY";
import { StoreRoomContext } from "./Context1";

const ParentX = () => {
  let { state } = useContext(StoreRoomContext);

  return (
    <div>
      ParentX Component {state}
      <ChildY />
    </div>
  );
};

export default ParentX;
