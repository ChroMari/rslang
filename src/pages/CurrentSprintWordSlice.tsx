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
        }
    }
})

export const {addCurrentSprintWord} = CurrentSprintWordSlice.actions

export default CurrentSprintWordSlice.reducer
