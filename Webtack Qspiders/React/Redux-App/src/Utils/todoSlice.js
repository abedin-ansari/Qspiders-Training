import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  // { id: 1, text: "Hello Redux" } we can put this initialState todo for testing
  reducers: {
    addTodo: (state, action) => {
      let newTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.push(newTodo);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
  },
});

export let { addTodo, removeTodo } = todoSlice.actions;
