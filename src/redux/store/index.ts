import {configureStore} from "@reduxjs/toolkit";
import userReducer from '../slices/userSlice';
import bookReducer from "../slices/bookSlice";
import wordsReducer from "../slices/wordsSlice";

const store = configureStore({
  reducer: {
    book: bookReducer,
    words: wordsReducer,
    user: userReducer,
  }
});

export default store;

export type StoreType = ReturnType<typeof store.getState>;
