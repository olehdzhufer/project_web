import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducer/reducers'; // Correct import path

export const store = configureStore({
    reducer: {
        chair: counterReducer,
    },
});