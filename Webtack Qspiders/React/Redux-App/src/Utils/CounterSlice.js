import { createSlice } from "@reduxjs/toolkit";

// Step 2: Create a Slice
export const CounterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return state + 1;
    },
    decrement: (state, action) => {
      return state - 1;
    },
    reset: (state, action) => {
      return 0;
    },
  },
});

export let { increment, decrement, reset } = CounterSlice.actions;
