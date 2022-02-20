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
        },
        removeSprintRightAnswers(state, action) {
            // @ts-ignore
            state.sprintRightAnswers = new Array()
        }
    }
})

export const {addSprintRightAnswers, removeSprintRightAnswers} = SprintRightAnswerSlice.actions

export default SprintRightAnswerSlice.reducer
