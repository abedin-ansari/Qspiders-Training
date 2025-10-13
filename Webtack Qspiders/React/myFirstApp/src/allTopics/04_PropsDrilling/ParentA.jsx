import Child1 from "./Child1";

const ParentA = () => {
  let data1 = "Hello React";

  return (
    <div>
      ParentA Component
      <Child1 prop1={data1} />
    </div>
  );
};

export default ParentA;
