import {createSlice} from '@reduxjs/toolkit';

const SprintRightAnswerSlice = createSlice({
    name: 'sprintRightAnswers',
    initialState: {
        sprintRightAnswers: []
    },
    reducers: {
        addSprintRightAnswers(state, action) {
            // @ts-ignore
            state.sprintRightAnswers.push(action.payload)
        }
    }
})

export const {addSprintRightAnswers} = SprintRightAnswerSlice.actions

export default SprintRightAnswerSlice.reducer
