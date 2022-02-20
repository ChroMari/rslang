import { URL_API_USERS, URL_API_WORDS } from '../constants/Url';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BOOK_WORDS_PER_PAGE } from '../constants/Book';
import {closeUser} from "../redux/slices/userSlice";

export const fetchWords = createAsyncThunk('words/fetchWords', async (_, { getState, rejectWithValue }) => {
    try {
        const { book } = getState() as any;

        const params = `?group=${book.section}&page=${book.page}`;

        const response = await fetch(URL_API_WORDS + params);

        return response.json();
    } catch (error: any) {
        rejectWithValue(error.message);
    }
});

export const fetchWordsAuthorized = createAsyncThunk(
    'words/fetchWordsAuthorized',
    async (_, { getState, rejectWithValue, dispatch }) => {
        try {
            const { book, user } = getState() as any;

            const url = `${URL_API_USERS}/${user.userId}/aggregatedWords`;

            const params = `?group=${book.section}&page=${book.page}&wordsPerPage=${BOOK_WORDS_PER_PAGE}`;

            const response = await fetch(url + params, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${user.userToken}`,
                    Accept: 'application/json',
                },
            });

            const result = await response.json();

            return result[0].paginatedResults;
        } catch (error: any) {
            dispatch(closeUser());
            return rejectWithValue(error.message);
        }
    },
);

export const fetchHardWords = createAsyncThunk(
    'words/fetchWordsAuthorized',
    async (_, { getState, rejectWithValue, dispatch }) => {
        try {
            const { user } = getState() as any;

            const url = `${URL_API_USERS}/${user.userId}/aggregatedWords`;

            const params = `?filter={"userWord.difficulty":"hard"}&wordsPerPage=3600`;

            const response = await fetch(url + params, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${user.userToken}`,
                    Accept: 'application/json',
                },
            });

            const result = await response.json();

            return result[0].paginatedResults;
        } catch (error: any) {
            dispatch(closeUser());
            return rejectWithValue(error.message);
        }
    },
);
