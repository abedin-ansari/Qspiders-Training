import Child1 from "./Child1";

const Parent1 = () => {
  return (
    <div>
      <h1>Parent 1 Component</h1>

      <Child1 data="hello">
        <h4>Hello Child</h4>
        <p>Lorem, ipsum.</p>
      </Child1>
    </div>
  );
};

export default Parent1;
