import Child2 from "./Child2";

const Child1 = (x) => {
  console.log(x); // {prop1:"Hello React"}

  return (
    <div>
      Child1 Component
      <Child2 prop2={x.prop1} />
    </div>
  );
};

export default Child1;
