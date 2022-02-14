import { createSlice } from '@reduxjs/toolkit';
import { StoreType } from '../store';
import { BOOK_MAX_PAGE, BOOK_MIN_PAGE } from '../../constants/Book';
import getLocalStorage from '../localStorage/getLocalStorage';

const initialState = {
    section: 0,
    page: getLocalStorage('page', BOOK_MIN_PAGE),
};

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        changeSection(state, action) {
            state.section = action.payload;
            state.page = BOOK_MIN_PAGE;
        },
        changePage(state, action) {
            if (action.payload === 'next') {
                state.page = state.page >= BOOK_MAX_PAGE ? BOOK_MAX_PAGE : state.page + 1;
            } else {
                state.page = state.page <= BOOK_MIN_PAGE ? BOOK_MIN_PAGE : state.page - 1;
            }

            localStorage.setItem('page', JSON.stringify(state.page));
        },
    },
});

export const { changeSection, changePage } = bookSlice.actions;

export const bookSelectors = {
    section: (store: StoreType): number => store.book.section,
    page: (store: StoreType): number => store.book.page,
};

export default bookSlice.reducer;
