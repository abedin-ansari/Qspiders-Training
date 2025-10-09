import Child1 from "./Child1";

const Parent = () => {
  let str = "Hello React";

  return (
    <div>
      <h1>ParentA Component</h1>
      <Child1 prop1={str} />
    </div>
  );
};

export default Parent;
