import React from "react";
import Counter from "./Counter";
import CreateToDo from "./components/CreateToDo";
import DisplayTodo from "./components/DisplayTodo";

const App = () => {
  return (
    <div>
      <Counter />
      <CreateToDo />
      <DisplayTodo />
    </div>
  );
};

export default App;
