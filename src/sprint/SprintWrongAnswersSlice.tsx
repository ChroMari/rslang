import {createSlice} from '@reduxjs/toolkit';

const SprintWrongAnswerSlice = createSlice({
    name: 'sprintWrongAnswers',
    initialState: {
        sprintWrongAnswers: []
    },
    reducers: {
        addSprintWrongAnswers(state, action) {
            // @ts-ignore
            state.sprintWrongAnswers.push(action.payload)
        },
        removeSprintWrongAnswers(state, action) {
            // @ts-ignore
            state.sprintWrongAnswers = action
        }
    }
})

export const {addSprintWrongAnswers, removeSprintWrongAnswers} = SprintWrongAnswerSlice.actions

export default SprintWrongAnswerSlice.reducer
