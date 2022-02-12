import { createSlice } from '@reduxjs/toolkit';
import { StoreType } from '../store';

const initialState = {
    section: 0,
    page: 0,
};

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        changeSection(state, action) {
            state.section = action.payload;
        },
    },
    extraReducers: {},
});

export const { changeSection } = bookSlice.actions;

export const bookSelectors = {
    section: (store: StoreType): number => store.book.section,
    page: (store: StoreType): number => store.book.page,
};

export default bookSlice.reducer;
