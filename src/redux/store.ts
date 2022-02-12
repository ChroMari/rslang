import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './slices/bookSlice';
import wordsReducer from './slices/wordsSlice';

export const store = configureStore({
    reducer: {
        book: bookReducer,
        words: wordsReducer,
    },
});

export type StoreType = ReturnType<typeof store.getState>;
