import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Utils/todoSlice";

const CreateToDo = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    dispatch(addTodo(todo));
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Todo App</h2>
        <input
          type="text"
          placeholder="Enter todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateToDo;
