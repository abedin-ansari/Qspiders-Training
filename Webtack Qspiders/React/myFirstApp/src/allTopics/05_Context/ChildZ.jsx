import { useContext } from "react";
import { StoreRoomContext } from "./Context1";

const ChildZ = () => {
  // STEP 3 :- consume a context
  let { str, obj, arr, display } = useContext(StoreRoomContext);

  return (
    <div>
      ChildZ Component
      {str} {obj.ename} {arr}
      <button onClick={() => display("😵‍💫")}>click</button>
    </div>
  );
};

export default ChildZ;
