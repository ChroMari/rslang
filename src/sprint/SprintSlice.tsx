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
        }
    }
})

export const {addSprintWords} = SprintSlice.actions

export default SprintSlice.reducer
