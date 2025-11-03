import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./CounterSlice";

// Step 1: Create a store
export const myReduxStore = configureStore({
  reducer: {
    myCounter: CounterSlice.reducer,
  },
});
