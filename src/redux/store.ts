import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './slices/bookSlice';
import wordsReducer from './slices/wordsSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
    reducer: {
        book: bookReducer,
        words: wordsReducer,
        user: userReducer,
    },
});

export type StoreType = ReturnType<typeof store.getState>;
