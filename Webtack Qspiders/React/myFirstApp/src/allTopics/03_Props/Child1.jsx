import React from "react";

const Child1 = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Child {props.data1}</h1>
    </div>
  );
};

export default Child1;
