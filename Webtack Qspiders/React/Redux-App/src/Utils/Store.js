import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./CounterSlice";
import { todoSlice } from "./todoSlice";

// Step 1: Create a store
export const myReduxStore = configureStore({
  reducer: {
    myCounter: CounterSlice.reducer,
    myTodo: todoSlice.reducer,
  },
});
