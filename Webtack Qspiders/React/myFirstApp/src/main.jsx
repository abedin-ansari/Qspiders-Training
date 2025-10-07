// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";

// createRoot(document.getElementById("root")).render(
//   <h1>Hello React</h1>
//   // <StrictMode>
//   //   <App />
//   // </StrictMode>,
// );

//! REACT way
import { createRoot } from "react-dom/client";
import App from "./App";
createRoot(document.getElementById("root")).render(<App />);

//! JS way
// const div = document.getElementById("root")
// const h1Tag = document.createElement("h1")
// h1Tag.innerText = "Hello JS"
// div.append(h1Tag)
