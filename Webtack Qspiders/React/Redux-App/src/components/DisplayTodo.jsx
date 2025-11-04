import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../Utils/todoSlice";

const DisplayTodo = () => {
  let todos = useSelector((store) => store.myTodo);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.length === 0 ? (
        <p>No todos Available</p>
      ) : (
        todos.map((todo, index) => {
          return (
            <div>
              <h3>{todo.text}</h3>
              <button key={index} onClick={() => dispatch(removeTodo(todo.id))}>
                remove
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default DisplayTodo;
