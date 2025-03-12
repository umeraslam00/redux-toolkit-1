import { createSlice } from "@reduxjs/toolkit";

// initial state of counter
const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value = state.value + 1; // Directly modify state (uses Immer internally)
        },

        decrement: (state, action) => {
            state.value = state.value - 1;
        },

        incrementByAmount: (state, action) => {
            state.value = state.value + action.payload; // Payload-based increment
        }
    }
})

// Exporting actions
export const {increment, decrement, incrementByAmount} = counterSlice.actions;

// Exporting reducer to be added to store
export default counterSlice.reducer;