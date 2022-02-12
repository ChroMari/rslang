import { URL_API_WORDS } from '../constants/Url';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWords = createAsyncThunk('book/fetchWords', async (_, { getState }) => {
    const { book } = getState() as any;

    const params = `?group=${book.section}page=${book.page}`;

    const response = await fetch(URL_API_WORDS + params);

    return response.json();
});
