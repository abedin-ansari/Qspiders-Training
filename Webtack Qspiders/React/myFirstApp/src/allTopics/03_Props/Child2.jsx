import React from "react";

const Child2 = (y) => {
  console.log(y);

  return (
    <div>
      <div>child2 Component {y.props2}</div>
    </div>
  );
};

export default Child2;
