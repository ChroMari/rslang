import {createSlice} from '@reduxjs/toolkit';

const SprintScoreStreakSlice = createSlice({
    name: 'currentSprintScoreStreak',
    initialState: {
        currentSprintScoreStreak: 0
    },
    reducers: {
        addCurrentSprintScoreStreak(state, action) {
            return {
                ...state,
                currentSprintScoreStreak: action.payload,
            }
        }
    }
})

export const {addCurrentSprintScoreStreak} = SprintScoreStreakSlice.actions

export default SprintScoreStreakSlice.reducer
