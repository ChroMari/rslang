import {createSlice} from '@reduxjs/toolkit';

const SprintScoreSlice = createSlice({
    name: 'currentSprintScore',
    initialState: {
        currentSprintScore: 0
    },
    reducers: {
        addCurrentSprintScore(state, action) {
            return {
                ...state,
                currentSprintScore: action.payload,
            }
        }
    }
})

export const {addCurrentSprintScore} = SprintScoreSlice.actions

export default SprintScoreSlice.reducer
