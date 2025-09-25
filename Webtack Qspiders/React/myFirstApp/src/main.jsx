import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <h1>Hello React</h1>
  // <StrictMode>
  //   <App />
  // </StrictMode>,
);
