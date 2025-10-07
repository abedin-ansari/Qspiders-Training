import Child1 from "./Child1";

const Parent = () => {
  let str = "Hello from Parent";

  return (
    <div>
      <h1>Parent</h1>
      <Child1 data1={str} />
    </div>
  );
};

export default Parent;
