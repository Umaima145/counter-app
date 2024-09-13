import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
};

const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addCounter: (state) => {
            state.counter++;
        },
        minusCounter: (state) => {
            if (state.counter > 0) { 
                state.counter--;
            }
        },
    },
});

const { actions, reducer } = CounterSlice;
export const { addCounter, minusCounter } = actions;

export default reducer;
