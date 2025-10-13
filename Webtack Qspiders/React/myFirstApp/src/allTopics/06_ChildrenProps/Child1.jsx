import React from "react";

const Child1 = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Child 1 Component</h1>

      {props.children}
    </div>
  );
};

export default Child1;
