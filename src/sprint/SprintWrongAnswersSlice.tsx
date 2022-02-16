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
        }
    }
})

export const {addSprintWrongAnswers} = SprintWrongAnswerSlice.actions

export default SprintWrongAnswerSlice.reducer
