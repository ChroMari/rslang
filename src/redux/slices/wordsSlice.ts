import { createSlice } from '@reduxjs/toolkit';
import { fetchHardWords, fetchWords, fetchWordsAuthorized } from '../../api/getWords';
import { StoreType } from '../store';
import WordType from '../../utils/types/WordType';
import createUserWord from '../../api/createUserWord';
import deleteUserWord from '../../api/deleteUserWord';
import updateUserWord from '../../api/updateUserWord';

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
    reducers: {
        toggleWord(state, action) {
            const params = {
                userToken: action.payload.userToken,
                userId: action.payload.userId,
                wordId: action.payload.wordId,
                word: {
                    difficulty: action.payload.difficult,
                    optional: {},
                },
            };

            const wordIdx = state.wordsList.findIndex((el) => el._id === params.wordId);
            const difficulty = state.wordsList[wordIdx].userWord?.difficulty;
            const userWord = {
                difficulty: params.word.difficulty,
            };

            switch (difficulty) {
                case undefined:
                    createUserWord(params);
                    state.wordsList[wordIdx].userWord = userWord;
                    break;

                case params.word.difficulty:
                    deleteUserWord(params);
                    delete state.wordsList[wordIdx].userWord;
                    break;

                default:
                    updateUserWord(params);
                    state.wordsList[wordIdx].userWord = userWord;
            }
        },
    },
    extraReducers: {
        // @ts-ignore
        [fetchWords.pending]: (state) => {
            state.status = 'pending';
        },
        // @ts-ignore
        [fetchWords.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.wordsList = action.payload;
        },
        // @ts-ignore
        [fetchWords.rejected]: (state, action) => {
            state.status = 'rejected';
        },
        // @ts-ignore
        [fetchWordsAuthorized.pending]: (state) => {
            state.status = 'pending';
        },
        // @ts-ignore
        [fetchWordsAuthorized.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.wordsList = action.payload;
        },
        // @ts-ignore
        [fetchWordsAuthorized.rejected]: (state, action) => {
            state.status = 'rejected';
        },
        // @ts-ignore
        [fetchHardWords.pending]: (state) => {
            state.status = 'pending';
        },
        // @ts-ignore
        [fetchHardWords.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.wordsList = action.payload;
        },
        // @ts-ignore
        [fetchHardWords.rejected]: (state, action) => {
            state.status = 'rejected';
        },
    },
});

export const { toggleWord } = wordsSlice.actions;

export const wordsSelectors = {
    wordsList: (store: StoreType): WordType[] => store.words.wordsList,
    status: (store: StoreType): null | string => store.words.status,
    error: (store: StoreType): null | string => store.words.error,
};

export default wordsSlice.reducer;
