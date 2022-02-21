import {createSlice} from '@reduxjs/toolkit';

const CurrentSprintWordSlice = createSlice({
    name: 'currentSprintWord',
    initialState: {
        currentSprintWord: {
            wordTranslate: 'test',
            word: 'test'
        }
    },
    reducers: {
        addCurrentSprintWord(state, action) {
            return {
                ...state,
                currentSprintWord: action.payload,
            }
        },
        removeCurrentSprintWord(state, action) {
            // @ts-ignore
            state.currentSprintWord = {
                wordTranslate: 'test',
                word: 'test'
            }
        }
    }
})

export const {addCurrentSprintWord, removeCurrentSprintWord} = CurrentSprintWordSlice.actions

export default CurrentSprintWordSlice.reducer
