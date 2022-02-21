import {createSlice} from '@reduxjs/toolkit';

const SprintSlice = createSlice({
    name: 'sprintWords',
    initialState: {
        sprintWords: []
    },
    reducers: {
        addSprintWords(state, action) {
            // @ts-ignore
            state.sprintWords.push(action.payload)
        },
        removeSprintWords(state, action) {
            // @ts-ignore
            state.sprintWords = new Array()
        }
    }
})

export const {addSprintWords, removeSprintWords} = SprintSlice.actions

export default SprintSlice.reducer
