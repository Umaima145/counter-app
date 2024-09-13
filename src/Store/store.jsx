import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Store/Slice/CounterSlice'; 

export const store = configureStore({
    reducer: {
        counter: counterReducer, 
    },
});
