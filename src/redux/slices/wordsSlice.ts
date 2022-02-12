import { createSlice } from '@reduxjs/toolkit';
import { fetchWords } from '../../api/getWords';
import { StoreType } from '../store';
import WordType from '../../utils/types/WordType';

type WordsType = {
    wordsList: WordType[];
    status: null | string;
    error: null | string;
};

const initialState: WordsType = {
    wordsList: [],
    status: null,
    error: null,
};

const wordsSlice = createSlice({
    name: 'words',
    initialState,
    reducers: {},
    extraReducers: {
        // @ts-ignore
        [fetchWords.pending]: (state) => {
            state.status = 'pending';
        },
        // @ts-ignore
        [fetchWords.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.wordsList = action.payload;
            console.log(state.wordsList);
        },
        // @ts-ignore
        [fetchWords.rejected]: (state, action) => {
            state.status = 'rejected';
            console.log(action.payload);
        },
    },
});

export const wordsSelectors = {
    wordsList: (store: StoreType): WordType[] => store.words.wordsList,
    status: (store: StoreType): null | string => store.words.status,
    error: (store: StoreType): null | string => store.words.error,
};

export default wordsSlice.reducer;
