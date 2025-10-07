import { useState } from "react";

function StatesInFbc() {
  let [state, setState] = useState("Hello Everyone"); // ["Hello Everyone",f]
  let [cartBtn, setCartBtn] = useState("Add to cart");

  function handleBtn() {
    setState("Byee Everyone");
  }
  return (
    <>
      <h1>Learn States In Function Based</h1>
      <h2>{state}</h2>
      <button onClick={handleBtn}>update</button>

      <hr />
      <h1>My Cart</h1>
      <button onClick={() => setCartBtn("Go to cart")}>{cartBtn}</button>
    </>
  );
}

export default StatesInFbc;
