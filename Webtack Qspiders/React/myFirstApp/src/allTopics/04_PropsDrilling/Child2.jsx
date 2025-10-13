import React from "react";

const Child2 = (y) => {
  console.log(y); //{prop2:"Hello React"}

  return <div>Child2 Component {y.prop2}</div>;
};

export default Child2;
